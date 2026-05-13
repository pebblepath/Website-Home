import { LitElement, html, css } from 'lit';

/**
 * Small avatar circle. Uses initials + a hue-derived gradient when no photo.
 */
export class MemberChip extends LitElement {
  static properties = {
    name: { type: String },
    hue: { type: Number },
    photo: { type: String },
    size: { type: Number },
    showName: { type: Boolean, attribute: 'show-name' },
  };

  constructor() {
    super();
    this.name = '';
    this.hue = 200;
    this.photo = '';
    this.size = 36;
    this.showName = false;
  }

  static styles = css`
    :host {
      display: inline-flex;
      align-items: center;
      gap: 8px;
    }
    .avatar {
      border-radius: 999px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-family: var(--font-display);
      font-weight: 600;
      color: rgba(255, 255, 255, 0.95);
      letter-spacing: -0.01em;
      box-shadow:
        0 4px 14px rgba(20, 12, 6, 0.3),
        inset 0 1px 0 rgba(255, 255, 255, 0.25);
      border: 1.5px solid rgba(255, 248, 235, 0.6);
      overflow: hidden;
      flex-shrink: 0;
    }
    .avatar img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .name {
      font-size: 13px;
      font-weight: 500;
      color: var(--text-secondary);
    }
  `;

  _initials() {
    return this.name
      .split(/\s+/)
      .map((p) => p[0])
      .filter(Boolean)
      .slice(0, 2)
      .join('')
      .toUpperCase();
  }

  render() {
    const grad = `linear-gradient(135deg, hsl(${this.hue}, 55%, 62%) 0%, hsl(${(this.hue + 40) % 360}, 50%, 42%) 100%)`;
    const style = `width:${this.size}px;height:${this.size}px;background:${grad};font-size:${this.size * 0.38}px;`;
    return html`
      <div class="avatar" style=${style} title=${this.name}>
        ${this.photo
          ? html`<img src=${this.photo} alt=${this.name} />`
          : html`<span>${this._initials()}</span>`}
      </div>
      ${this.showName ? html`<span class="name">${this.name}</span>` : ''}
    `;
  }
}

customElements.define('member-chip', MemberChip);
