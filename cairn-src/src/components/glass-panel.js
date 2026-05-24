import { LitElement, html, css } from 'lit';

/**
 * Frosted-glass container. Renders a blurred, translucent surface with
 * a subtle inner highlight on top. Slot children for content.
 *
 * Attributes:
 *   variant = "default" | "strong"   — opacity of the fill
 *   lifted                            — boolean: deeper shadow
 *   padding                           — "none" | "sm" | "md" | "lg" (default md)
 */
export class GlassPanel extends LitElement {
  static properties = {
    variant: { type: String },
    lifted: { type: Boolean },
    padding: { type: String },
  };

  constructor() {
    super();
    this.variant = 'default';
    this.lifted = false;
    this.padding = 'md';
  }

  static styles = css`
    :host {
      display: block;
    }
    :host([stretch]) {
      height: 100%;
    }
    :host([stretch]) .panel {
      height: 100%;
    }
    /* 2026-05-23 — also stretch the inner .content wrapper so a
       slotted flex-column (e.g. the calendar section cal-inner)
       can use height 100% and have it actually cascade. Without
       this rule the slot parent .content sized to natural content
       only, and the calendar Week/Month views sat at half-height. */
    :host([stretch]) .content {
      height: 100%;
    }
    .panel {
      position: relative;
      border-radius: var(--radius-card);
      background: var(--glass-fill);
      backdrop-filter: blur(var(--glass-blur)) saturate(var(--glass-saturation));
      -webkit-backdrop-filter: blur(var(--glass-blur)) saturate(var(--glass-saturation));
      border: 1px solid var(--glass-border);
      box-shadow: var(--glass-shadow);
      overflow: hidden;
      box-sizing: border-box;
    }
    .panel.strong {
      background: var(--glass-fill-strong);
      border-color: var(--glass-border-strong);
    }
    .panel.lifted {
      box-shadow: var(--glass-shadow-lifted);
    }
    .panel::before {
      content: '';
      position: absolute;
      inset: 0;
      border-radius: inherit;
      background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0.12) 0%,
        rgba(255, 255, 255, 0) 35%
      );
      pointer-events: none;
    }
    .pad-none {
      padding: 0;
    }
    .pad-sm {
      padding: 16px;
    }
    .pad-md {
      padding: 28px;
    }
    .pad-lg {
      padding: 44px;
    }
    .content {
      position: relative;
      z-index: 1;
    }
  `;

  render() {
    const classes = [
      'panel',
      this.variant === 'strong' ? 'strong' : '',
      this.lifted ? 'lifted' : '',
      `pad-${this.padding}`,
    ]
      .filter(Boolean)
      .join(' ');
    return html`
      <div class=${classes}>
        <div class="content"><slot></slot></div>
      </div>
    `;
  }
}

customElements.define('glass-panel', GlassPanel);
