/**
 * Portal analytics (2026-07-24).
 *
 * The Portal shipped with NO measurement at all, so we had zero idea
 * whether families use the web companion. This adds GA4, deliberately
 * scoped to stay consistent with the privacy position the product sells
 * on:
 *
 *   - SAME measurement ID as the marketing site. The Portal lives at
 *     pebblepath.ai/portal/ — one domain, one stream is the GA4 guidance.
 *     Reports separate the two by the /portal/ page path, and a visitor
 *     who reads the site then opens the Portal stays ONE user with one
 *     session instead of being double-counted.
 *   - SAME consent contract. The marketing banner stores its choice in
 *     localStorage 'pp-consent' on this exact origin, so the decision a
 *     visitor already made carries into the Portal. EEA/UK/CH default to
 *     DENIED until they accept, matching assets/analytics.js.
 *   - NO personal data, ever. No uid, email, display name, child name,
 *     invite code or free text is passed as a parameter. Events are
 *     counts and enum-ish labels only. Signed-in family sessions are the
 *     most sensitive surface we have; aggregate usage is all we take.
 *   - Preview/mock route is excluded so demo data never pollutes a live
 *     property.
 *
 * Event names mirror iOS Services/AnalyticsService.swift exactly, so the
 * two platforms fold into one funnel in the same property (GA4's own
 * platform dimension splits web vs iOS when you need them apart).
 */

const GA_ID = 'G-9JQBCG8SVM';

// Identical to assets/analytics.js — GDPR / UK GDPR require prior consent
// for analytics storage, so these regions start denied.
const CONSENT_REQUIRED_REGIONS = [
  'AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR', 'DE', 'GR',
  'HU', 'IS', 'IE', 'IT', 'LV', 'LI', 'LT', 'LU', 'MT', 'NL', 'NO', 'PL',
  'PT', 'RO', 'SK', 'SI', 'ES', 'SE', 'GB', 'CH',
];

/** Mirrors the iOS AnalyticsService.Event enum. Keep the two in lockstep. */
export const Ev = {
  INVITE_SENT: 'invite_sent',
  INVITE_REDEEMED: 'invite_redeemed',
  FAMILY_CREATED: 'family_created',
  CHILD_ADDED: 'child_added',
  PEBBLE_QUESTION: 'pebble_question',
};

let started = false;

function gtag() {
  window.dataLayer = window.dataLayer || [];
  // eslint-disable-next-line prefer-rest-params
  window.dataLayer.push(arguments);
}

/** True on the ?preview mock route, where nothing should be recorded. */
function isPreview() {
  try {
    return new URLSearchParams(window.location.search).has('preview');
  } catch {
    return false;
  }
}

function storedConsent() {
  try {
    return localStorage.getItem('pp-consent');
  } catch {
    return null; // private mode
  }
}

/**
 * Load gtag once and apply the consent defaults. Safe to call repeatedly.
 * No-ops on the preview route and if some other script already loaded a
 * tag on this page.
 */
export function initAnalytics() {
  if (started || isPreview()) return;
  if (!GA_ID || GA_ID.indexOf('PLACEHOLDER') !== -1) return;
  started = true;

  const s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
  document.head.appendChild(s);

  window.gtag = window.gtag || gtag;

  // Consent defaults MUST precede config, or the first hit fires with no
  // consent state attached. Advertising signals stay denied everywhere:
  // PebblePath runs no ads and no cross-site tracking.
  gtag('consent', 'default', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'denied',
    region: CONSENT_REQUIRED_REGIONS,
    wait_for_update: 500,
  });
  gtag('consent', 'default', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'granted',
  });

  const consent = storedConsent();
  if (consent === 'granted' || consent === 'denied') {
    gtag('consent', 'update', { analytics_storage: consent });
  }

  gtag('js', new Date());
  // send_page_view false: the Portal is a single-page app whose URL never
  // changes on tab switches, so the automatic pageview would fire once and
  // then never again. screenView() below drives them manually instead.
  gtag('config', GA_ID, {
    anonymize_ip: true,
    send_page_view: false,
  });

  screenView('open');
}

/**
 * Manual page_view for an in-app tab. The Portal never changes its URL
 * when you move between Today / Children / Pebble / Activities / Settings,
 * so without this we would record a single hit per session and learn
 * nothing about what people actually use.
 *
 * @param {string} tab short tab id, e.g. 'today' — no personal data.
 */
export function screenView(tab) {
  if (!started) return;
  const safe = String(tab || '').replace(/[^a-z0-9_-]/gi, '').slice(0, 40);
  gtag('event', 'page_view', {
    page_path: '/portal/' + safe,
    page_title: 'Portal: ' + safe,
    page_location: window.location.origin + '/portal/' + safe,
  });
}

/**
 * Log a product event. Parameters must be counts or fixed labels only —
 * never a name, email, uid, code or anything a user typed.
 *
 * @param {string} name one of Ev.*
 * @param {Record<string, string|number>} [params]
 */
export function logEvent(name, params) {
  if (!started || !name) return;
  gtag('event', name, params || {});
}
