import './components/glass-panel.js';
import './components/glass-button.js';
import './components/cairn-mark.js';
import './components/pebble-icon.js';
import './components/trip-form.js';
import './components/event-form.js';
import './components/family-circle.js';
import './components/manage-members-modal.js';
import './components/all-trips-modal.js';
import './components/import-calendar-modal.js';
import './components/profile-sheet.js';
import './components/activity-type-picker.js';
import './components/date-range-picker.js';
import './components/pebble-chat.js';
import './components/discover-pebblepath.js';
import './components/join-family-screen.js';
import './components/sign-in-screen.js';
import './components/register-screen.js';
import './components/home-screen.js';
import './components/app-shell.js';

// Portal analytics (2026-07-24). Loads gtag, applies the shared consent
// state from the marketing banner, and sends the first screen view.
// No-ops on the ?preview mock route. See services/analytics.js.
import { initAnalytics } from './services/analytics.js';
initAnalytics();
