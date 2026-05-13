import { LitElement, html, css } from 'lit';

/**
 * Gradient-filled or glass-outlined button.
 *
 * Attributes:
 *   variant = "primary" | "ghost"    — primary fills with --gradient-dawn, ghost is glass
 *   size = "md" | "lg"
 *   full                              — boolean: full width
 *   disabled
 */
export class GlassButton extends LitElement {
  static properties = {
    variant: { type: String },
    size: { type: String },
    full: { type: Boolean },
    disabled: { type: Boolean, reflect: true },
  };

  constructor() {
    super();
    this.variant = 'primary';
    this.size = 'md';
    this.full = false;
    this.disabled = false;
  }

  static styles = css`
    * {
      box-sizing: border-box;
    }
    :host {
      display: inline-block;
    }
    :host([disabled]) button {
      opacity: 0.5;
      cursor: not-allowed;
    }
    button {
      font-family: var(--font-body);
      font-weight: 600;
      letter-spacing: -0.01em;
      color: var(--text-primary);
      border-radius: var(--radius-pill);
      border: 1px solid transparent;
      cursor: pointer;
      transition:
        transform 160ms ease,
        box-shadow 240ms ease,
        background 240ms ease;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      width: 100%;
      min-height: 44px; /* iOS touch target minimum */
    }
    button:active {
      transform: translateY(1px) scale(0.99);
    }
    .size-md {
      padding: 12px 22px;
      font-size: 15px;
    }
    .size-lg {
      padding: 16px 28px;
      font-size: 17px;
    }
    .full {
      display: block;
      width: 100%;
    }
    .primary {
      background-image: var(--gradient-cta);
      color: #fff;
      text-shadow: 0 1px 1px rgba(20, 12, 6, 0.35);
      box-shadow:
        0 8px 24px rgba(139, 90, 62, 0.4),
        inset 0 1px 0 rgba(255, 255, 255, 0.32);
      border-color: rgba(255, 248, 235, 0.22);
    }
    .primary:hover:not(:disabled) {
      background-image: var(--gradient-cta-hover);
      box-shadow:
        0 12px 32px rgba(139, 90, 62, 0.5),
        inset 0 1px 0 rgba(255, 255, 255, 0.38);
    }
    .ghost {
      background: var(--glass-fill);
      backdrop-filter: blur(20px) saturate(160%);
      -webkit-backdrop-filter: blur(20px) saturate(160%);
      border-color: var(--glass-border);
    }
    .ghost:hover:not(:disabled) {
      background: var(--glass-fill-strong);
      border-color: var(--glass-border-strong);
    }
  `;

  render() {
    const cls = [this.variant, `size-${this.size}`, this.full ? 'full' : '']
      .filter(Boolean)
      .join(' ');
    return html`
      <button class=${cls} ?disabled=${this.disabled}>
        <slot></slot>
      </button>
    `;
  }
}

customElements.define('glass-button', GlassButton);
