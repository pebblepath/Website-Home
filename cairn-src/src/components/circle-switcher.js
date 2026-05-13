import { LitElement, html, css } from 'lit';

/**
 * Segmented control for Personal / Family / Extended visibility.
 * Fires `circle-change` with detail: { value }.
 */
export class CircleSwitcher extends LitElement {
  static properties = {
    value: { type: String, reflect: true },
  };

  constructor() {
    super();
    this.value = 'family';
  }

  static OPTIONS = [
    { value: 'personal', label: 'Just me' },
    { value: 'family', label: 'Family' },
    { value: 'extended', label: 'Extended' },
  ];

  static styles = css`
    * {
      box-sizing: border-box;
    }
    :host {
      display: inline-block;
    }
    .track {
      display: inline-flex;
      padding: 4px;
      gap: 2px;
      background: var(--glass-fill);
      backdrop-filter: blur(20px) saturate(160%);
      -webkit-backdrop-filter: blur(20px) saturate(160%);
      border: 1px solid var(--glass-border);
      border-radius: var(--radius-pill);
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.08);
    }
    button {
      background: transparent;
      color: var(--text-secondary);
      border: none;
      padding: 9px 16px;
      font-family: var(--font-body);
      font-weight: 500;
      font-size: 13px;
      letter-spacing: 0.01em;
      border-radius: var(--radius-pill);
      cursor: pointer;
      transition: color 200ms ease, background 240ms ease;
      min-height: 36px;
    }
    @media (max-width: 420px) {
      button {
        padding: 8px 12px;
        font-size: 12.5px;
      }
    }
    button:hover {
      color: var(--text-primary);
    }
    button.active {
      color: var(--charcoal);
      background: var(--sand-warm);
      box-shadow:
        0 4px 14px rgba(20, 12, 6, 0.3),
        inset 0 1px 0 rgba(255, 255, 255, 0.5);
      font-weight: 600;
    }
  `;

  _select(value) {
    if (value === this.value) return;
    this.value = value;
    this.dispatchEvent(
      new CustomEvent('circle-change', {
        detail: { value },
        bubbles: true,
        composed: true,
      }),
    );
  }

  render() {
    return html`
      <div class="track" role="tablist" aria-label="Circle">
        ${CircleSwitcher.OPTIONS.map(
          (o) => html`
            <button
              role="tab"
              aria-selected=${this.value === o.value}
              class=${this.value === o.value ? 'active' : ''}
              @click=${() => this._select(o.value)}
            >
              ${o.label}
            </button>
          `,
        )}
      </div>
    `;
  }
}

customElements.define('circle-switcher', CircleSwitcher);
