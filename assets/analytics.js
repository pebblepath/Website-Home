/**
 * PebblePath website analytics.
 *
 * One file owns the Measurement ID and all event tracking. Each page loads
 * this with a single tag in <head>:
 *
 *   <script src="/assets/analytics.js" defer></script>
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
})();
