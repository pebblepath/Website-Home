/**
 * PebblePath website analytics.
 *
 * One file owns the Measurement ID and all event tracking. Each page loads
 * this with a single tag in <head>:
 *
 *   <script src="/assets/analytics.js?v=3" defer></script>
 *
 * ⚠️ BUMP THE ?v= NUMBER ON EVERY CHANGE TO THIS FILE, in all 10 pages.
 * Cloudflare caches assets under /assets/ for 4 hours (max-age=14400) but
 * caches HTML for only 10 minutes (max-age=600). Without a version bump,
 * visitors keep the OLD script for up to 4 hours after a deploy while the
 * HTML looks updated. Verified the hard way on 2026-07-19: curl with a
 * cache-buster showed the new file, real visitors were still being served
 * the old one. Never verify an asset change without checking the
 * un-busted URL.
 *
 * Deliberately NOT loaded on /portal/ - that is the authenticated product,
 * not the marketing funnel. Putting Google tracking on signed-in family
 * sessions would sit badly against the privacy position the site sells on.
 *
 * Note (2026-07-19): there is currently NO analytics inside the iOS app.
 * FirebaseAnalytics is not linked in the Xcode target and no events are
 * logged anywhere. So this file is the ONLY measurement PebblePath has.
 * Adding app-side analytics is a 1.0.1 job: it needs a new build, and it
 * changes the data-collection profile already declared in the App Store
 * privacy nutrition labels.
 */
(function () {
  'use strict';

  var GA_ID = 'G-9JQBCG8SVM';

  // Fail closed rather than firing junk into a live property.
  if (!GA_ID || GA_ID.indexOf('PLACEHOLDER') !== -1) return;

  /* ---------------------------------------------------------------------
   * 1. Load gtag
   * ------------------------------------------------------------------ */
  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
  document.head.appendChild(s);

  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = gtag;

  /* ---------------------------------------------------------------------
   * 1b. Consent Mode v2
   *
   * Defaults are region-scoped. GDPR and UK GDPR require prior consent for
   * analytics cookies in the EEA, UK and Switzerland, so those regions start
   * DENIED and stay that way until the visitor accepts. Everywhere else
   * starts granted, which is lawful for first-party, non-advertising
   * analytics and is what makes the data usable at launch.
   *
   * The banner is shown to everyone regardless, and Decline is honoured
   * everywhere. A decline that does nothing outside the EU would be a dark
   * pattern, and this site sells partly on privacy.
   *
   * These calls must run BEFORE gtag('config'), or the first pageview fires
   * without a consent state attached.
   * ------------------------------------------------------------------ */
  var CONSENT_REQUIRED_REGIONS = [
    'AT','BE','BG','HR','CY','CZ','DK','EE','FI','FR','DE','GR','HU','IS',
    'IE','IT','LV','LI','LT','LU','MT','NL','NO','PL','PT','RO','SK','SI',
    'ES','SE','GB','CH'
  ];

  gtag('consent', 'default', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'denied',
    region: CONSENT_REQUIRED_REGIONS,
    wait_for_update: 500
  });

  gtag('consent', 'default', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'granted'
  });

  var STORED = (function () {
    try { return localStorage.getItem('pp-consent'); } catch (e) { return null; }
  })();

  if (STORED === 'granted') {
    gtag('consent', 'update', { analytics_storage: 'granted' });
  } else if (STORED === 'denied') {
    gtag('consent', 'update', { analytics_storage: 'denied' });
  }

  gtag('js', new Date());
  gtag('config', GA_ID, { anonymize_ip: true });

  /* ---------------------------------------------------------------------
   * 2. Which CTA did they tap?
   *
   * Placement matters more than the raw count. Knowing the pricing CTA
   * outperforms the nav by 5x tells us where to put weight; a single
   * undifferentiated "download" total tells us nothing.
   * ------------------------------------------------------------------ */
  var PLACEMENTS = [
    ['nav-cta',              'nav'],
    ['mobile-menu-cta',      'mobile_menu'],
    ['hero-mobile-download', 'hero'],
    ['app-store-badge',      'final_cta'],
    ['pricing-cta primary',  'pricing_trial'],
    ['pricing-cta secondary','pricing_free']
  ];

  function placementOf(el) {
    var cls = el.className || '';
    if (typeof cls !== 'string') cls = '';           // SVG elements give SVGAnimatedString
    for (var i = 0; i < PLACEMENTS.length; i++) {
      if (cls.indexOf(PLACEMENTS[i][0]) !== -1) return PLACEMENTS[i][1];
    }
    return 'other';
  }

  /* ---------------------------------------------------------------------
   * 3. Delegated click tracking
   *
   * One listener on document beats per-link handlers: it survives new CTAs
   * being added anywhere on any page without anyone remembering to wire
   * them up, which is exactly how the App Store links rotted last time.
   * ------------------------------------------------------------------ */
  document.addEventListener('click', function (e) {
    var a = e.target && e.target.closest ? e.target.closest('a[href]') : null;
    if (!a) return;

    var href = a.getAttribute('href') || '';

    // The conversion that matters: a tap through to the App Store.
    if (href.indexOf('apps.apple.com') !== -1) {
      gtag('event', 'app_store_click', {
        link_placement: placementOf(a),
        page_path: window.location.pathname
      });
      return;
    }

    // Secondary conversion: into the web app.
    if (href.indexOf('/portal') === 0 || href.indexOf('pebblepath.ai/portal') !== -1) {
      gtag('event', 'portal_click', {
        link_placement: placementOf(a),
        page_path: window.location.pathname
      });
      return;
    }

    // Credibility asset. Worth knowing if it earns its place in the funnel.
    if (href.indexOf('/method') === 0) {
      gtag('event', 'method_click', { page_path: window.location.pathname });
    }
  }, true);

  /* ---------------------------------------------------------------------
   * 4. Scroll depth
   *
   * The homepage is a long scroll-driven showcase. Knowing whether people
   * reach pricing at all separates a copy problem from a traffic problem.
   * ------------------------------------------------------------------ */
  var marks = [25, 50, 75, 90];
  var hit = {};

  function onScroll() {
    var h = document.documentElement;
    var scrollable = h.scrollHeight - h.clientHeight;
    if (scrollable <= 0) return;

    var pct = (h.scrollTop / scrollable) * 100;

    for (var i = 0; i < marks.length; i++) {
      var m = marks[i];
      if (pct >= m && !hit[m]) {
        hit[m] = true;
        gtag('event', 'scroll_depth', {
          percent: m,
          page_path: window.location.pathname
        });
      }
    }

    if (hit[90]) window.removeEventListener('scroll', onScroll);
  }

  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---------------------------------------------------------------------
   * 5. Consent banner
   *
   * Deliberately not a modal and not a full-screen overlay. Blocking the
   * page to demand a cookie choice would contradict the calm the product is
   * selling. A quiet bottom bar, two buttons of EQUAL weight, no pre-ticked
   * boxes and no "manage 47 vendors" maze, because there is exactly one
   * cookie category here: first-party analytics.
   * ------------------------------------------------------------------ */
  if (STORED === 'granted' || STORED === 'denied') return;

  function buildBanner() {
    if (document.getElementById('pp-consent')) return;

    var css = document.createElement('style');
    css.textContent = [
      '#pp-consent{position:fixed;left:16px;right:16px;bottom:16px;z-index:99999;',
      'max-width:620px;margin:0 auto;background:#FFFFFF;border:1px solid #EAE4DA;',
      'border-radius:16px;padding:16px 18px;display:flex;gap:14px;align-items:center;',
      'flex-wrap:wrap;box-shadow:0 1px 2px rgba(31,92,84,.04),0 12px 32px -12px rgba(31,92,84,.28);',
      'font-family:Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;',
      'opacity:0;transform:translateY(8px);transition:opacity .35s ease,transform .35s ease}',
      '#pp-consent.in{opacity:1;transform:none}',
      '#pp-consent p{margin:0;flex:1 1 300px;font-size:13.5px;line-height:1.5;color:#5C6B66}',
      '#pp-consent a{color:#1F5C54;text-decoration:underline}',
      '#pp-consent .b{display:flex;gap:8px;flex:0 0 auto}',
      '#pp-consent button{font:inherit;font-size:13px;font-weight:600;padding:9px 18px;',
      'border-radius:999px;cursor:pointer;border:1px solid #EAE4DA;background:#FCFBF8;color:#22302D;',
      'transition:border-color .15s ease,background .15s ease}',
      '#pp-consent button:hover{border-color:#3D9B8F}',
      '#pp-consent button.y{background:#3D9B8F;border-color:#3D9B8F;color:#fff}',
      '#pp-consent button.y:hover{background:#2D7A70;border-color:#2D7A70}',
      '@media (max-width:520px){#pp-consent{padding:14px}#pp-consent .b{width:100%}',
      '#pp-consent button{flex:1}}',
      '@media (prefers-reduced-motion:reduce){#pp-consent{transition:none;opacity:1;transform:none}}'
    ].join('');
    document.head.appendChild(css);

    var bar = document.createElement('div');
    bar.id = 'pp-consent';
    bar.setAttribute('role', 'dialog');
    bar.setAttribute('aria-label', 'Cookie choice');
    bar.innerHTML =
      '<p>We use a single analytics cookie to see which pages help families find us. ' +
      'Nothing is sold, and this is separate from your family data. ' +
      '<a href="/privacy">Privacy policy</a></p>' +
      '<div class="b">' +
      '<button type="button" data-c="denied">Decline</button>' +
      '<button type="button" class="y" data-c="granted">Accept</button>' +
      '</div>';

    document.body.appendChild(bar);
    requestAnimationFrame(function () { bar.classList.add('in'); });

    bar.addEventListener('click', function (e) {
      var choice = e.target && e.target.getAttribute && e.target.getAttribute('data-c');
      if (!choice) return;
      try { localStorage.setItem('pp-consent', choice); } catch (err) {}
      gtag('consent', 'update', { analytics_storage: choice });
      if (choice === 'granted') {
        gtag('event', 'consent_granted', { page_path: window.location.pathname });
      }
      bar.classList.remove('in');
      setTimeout(function () { if (bar.parentNode) bar.parentNode.removeChild(bar); }, 350);
    });
  }

  if (document.body) {
    buildBanner();
  } else {
    document.addEventListener('DOMContentLoaded', buildBanner);
  }
})();
