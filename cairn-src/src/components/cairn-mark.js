import { LitElement, html, css } from 'lit';

/**
 * Cairn logo — stacked stones. Placeholder until official mark exists.
 *
 * Attribute: size (number, defaults to 44). Render is square.
 */
export class CairnMark extends LitElement {
  static properties = {
    size: { type: Number },
  };

  constructor() {
    super();
    this.size = 44;
  }

  static styles = css`
    :host {
      display: inline-block;
      line-height: 0;
    }
    svg {
      display: block;
      filter: drop-shadow(0 6px 18px rgba(20, 12, 6, 0.45));
    }
  `;

  render() {
    const s = this.size;
    return html`
      <svg
        viewBox="0 0 64 64"
        width=${s}
        height=${s}
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Portal"
      >
        <defs>
          <linearGradient id="cm-stone-warm" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="#f0e3cf" />
            <stop offset="0.6" stop-color="#c9b89a" />
            <stop offset="1" stop-color="#8b5a3e" />
          </linearGradient>
          <linearGradient id="cm-stone-sage" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="#aebfa6" />
            <stop offset="1" stop-color="#4a6754" />
          </linearGradient>
          <linearGradient id="cm-stone-clay" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="#d99a7a" />
            <stop offset="1" stop-color="#8b5a3e" />
          </linearGradient>
          <linearGradient id="cm-highlight" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="rgba(255,255,255,0.55)" />
            <stop offset="1" stop-color="rgba(255,255,255,0)" />
          </linearGradient>
        </defs>

        <!-- Base stone (largest, warm) -->
        <ellipse cx="32" cy="54" rx="22" ry="7" fill="url(#cm-stone-warm)" />
        <ellipse cx="32" cy="52" rx="20" ry="2.2" fill="url(#cm-highlight)" opacity="0.55" />

        <!-- Stone 2 (clay) -->
        <ellipse cx="29.5" cy="43" rx="16.5" ry="6" fill="url(#cm-stone-clay)" />
        <ellipse cx="29.5" cy="41.4" rx="14.8" ry="1.9" fill="url(#cm-highlight)" opacity="0.5" />

        <!-- Stone 3 (sage) -->
        <ellipse cx="33.5" cy="33" rx="12.5" ry="5" fill="url(#cm-stone-sage)" />
        <ellipse cx="33.5" cy="31.6" rx="11" ry="1.6" fill="url(#cm-highlight)" opacity="0.5" />

        <!-- Stone 4 (warm) -->
        <ellipse cx="30.5" cy="24" rx="9" ry="4" fill="url(#cm-stone-warm)" />
        <ellipse cx="30.5" cy="23" rx="7.8" ry="1.4" fill="url(#cm-highlight)" opacity="0.6" />

        <!-- Top stone (smallest, clay) -->
        <ellipse cx="33" cy="16" rx="6" ry="3.2" fill="url(#cm-stone-clay)" />
        <ellipse cx="33" cy="15.2" rx="5" ry="1.1" fill="url(#cm-highlight)" opacity="0.65" />
      </svg>
    `;
  }
}

customElements.define('cairn-mark', CairnMark);
