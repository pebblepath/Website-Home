import { LitElement, html } from 'lit';

/**
 * Pebble Ripple Stone icon — the canonical mark for Pebble (the AI
 * advisor). Replaces the legacy double-ring (archery target) SVG.
 * Spec: `design_handoff_pebble_icon/README.md` + the Ripple Stone
 * HTML reference.
 *
 * Anatomy (back → front, on a 24×24 grid):
 *   1. Outer ripple ring  ellipse cx=12 cy=21.5 rx=9.5 ry=1.8  stroke 20%
 *   2. Inner ripple ring  ellipse cx=12 cy=20.5 rx=6.5 ry=1.2  stroke 35%
 *   3. Pebble body        organic oval                          fill 100%
 *   4. Dome highlight     smaller oval near top                 fill (see modes)
 *
 * Two render modes via `mode`:
 *   - "production" (default) → white dome at 33% opacity. Correct on
 *     all dark teal surfaces (chat avatar, daily card, FAB).
 *   - "template"             → same-color dome at 25% opacity. Use
 *     for monochrome contexts where the body itself is the only
 *     color (e.g. a white-on-teal lifted tab button).
 *
 * Usage:
 *   <pebble-icon size="14" color="#fff"></pebble-icon>
 *   <pebble-icon size="20" color="#fff" mode="template"></pebble-icon>
 *
 * Per spec: do NOT rotate, flip, or render below 16px — the rings vanish.
 */
export class PebbleIcon extends LitElement {
  static properties = {
    size: { type: Number },
    color: { type: String },
    mode: { type: String }, // "production" | "template"
  };

  constructor() {
    super();
    this.size = 24;
    this.color = 'currentColor';
    this.mode = 'production';
  }

  render() {
    const s = Number(this.size) || 24;
    const c = this.color || 'currentColor';
    // Dome fill: production = white@33%, template = same color@25%.
    // The template mode matches `pebble-ripple-template.svg` so the
    // dome reads as a subtle lighter spot on a monochrome icon.
    const dome = this.mode === 'template'
      ? { fill: c, opacity: 0.25 }
      : { fill: 'white', opacity: 0.33 };
    return html`
      <svg
        width=${s}
        height=${s}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        style="display:inline-block;vertical-align:middle;"
      >
        <ellipse cx="12" cy="21.5" rx="9.5" ry="1.8"
          stroke=${c} stroke-width="1" stroke-opacity="0.2"></ellipse>
        <ellipse cx="12" cy="20.5" rx="6.5" ry="1.2"
          stroke=${c} stroke-width="1" stroke-opacity="0.35"></ellipse>
        <path fill=${c}
          d="M4.5 13C4.5 8.8 7.8 7 12 7C16.2 7 19.5 8.8 19.5 13C19.5 17.2 16.2 19.5 12 19.5C7.8 19.5 4.5 17.2 4.5 13Z"></path>
        <path fill=${dome.fill} fill-opacity=${dome.opacity}
          d="M7.5 10.5C8 8.5 9.8 7.8 12 7.8C14.2 7.8 16 8.5 16 10.5C16 12 14.2 12.5 12 12.5C9.8 12.5 7.5 12 7.5 10.5Z"></path>
      </svg>
    `;
  }
}

customElements.define('pebble-icon', PebbleIcon);
