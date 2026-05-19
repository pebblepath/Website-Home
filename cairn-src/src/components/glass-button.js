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
    /* Parity with the iOS welcome screen's Register button —
       PebbleTranslucentButtonStyle(tint: .ppTeal): a teal wash sitting
       OVER frosted glass, white label, a hairline white border. Reads
       as a brand-tinted frosted pill in BOTH themes (the teal mix is
       opaque enough that white text stays legible regardless of the
       surface behind it). Additive variant — primary/ghost untouched. */
    .frost-teal {
      background: color-mix(in srgb, var(--teal-pebble) 60%, transparent);
      backdrop-filter: blur(20px) saturate(160%);
      -webkit-backdrop-filter: blur(20px) saturate(160%);
      color: #fff;
      text-shadow: 0 1px 1px rgba(20, 12, 6, 0.3);
      border-color: rgba(255, 255, 255, 0.4);
      box-shadow:
        0 8px 22px rgba(61, 155, 143, 0.32),
        inset 0 1px 0 rgba(255, 255, 255, 0.28);
    }
    .frost-teal:hover:not(:disabled) {
      background: color-mix(in srgb, var(--teal-pebble) 72%, transparent);
      border-color: rgba(255, 255, 255, 0.55);
    }
    /* Neutral frosted sibling of frost-teal — the iOS welcome Login
       button (PebbleTranslucentButtonStyle, no tint). The pre-login
       backdrop is the LIGHT Daybreak wallpaper (warm sand/peach), so
       a near-white frost vanished into it. This is a DARKER warm-grey
       frosted pill with a white label — the iOS-faithful look: it
       reads as a distinct darker shape against the light wallpaper. */
    .frost-neutral {
      background: rgba(74, 70, 66, 0.46);
      backdrop-filter: blur(20px) saturate(160%);
      -webkit-backdrop-filter: blur(20px) saturate(160%);
      color: #fff;
      text-shadow: 0 1px 2px rgba(20, 12, 6, 0.4);
      border-color: rgba(255, 255, 255, 0.28);
      box-shadow:
        inset 0 1px 0 rgba(255, 255, 255, 0.16),
        0 6px 18px rgba(20, 12, 6, 0.2);
    }
    .frost-neutral:hover:not(:disabled) {
      background: rgba(74, 70, 66, 0.56);
      border-color: rgba(255, 255, 255, 0.42);
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
