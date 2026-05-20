import { LitElement, html, css } from 'lit';

/**
 * Subtle "Discover PebblePath" footer that integrates into the bottom
 * of the dusk gradient rather than sitting as a floating card. Echoes
 * the website CTA's brand cues (Ponari wordmark, Nunito tagline,
 * App Store link) without competing with the dashboard above.
 */
export class DiscoverPebblePath extends LitElement {
  static styles = css`
    :host {
      display: block;
      margin-top: 24px;
      padding: 48px 24px 32px;
      text-align: center;
      position: relative;
    }
    :host::before {
      content: '';
      position: absolute;
      top: 0;
      left: 20%;
      right: 20%;
      height: 1px;
      background: linear-gradient(
        90deg,
        transparent 0%,
        var(--glass-border-strong) 50%,
        transparent 100%
      );
    }
    .icon {
      width: 36px;
      height: 36px;
      border-radius: 8px;
      margin: 0 auto 14px;
      display: block;
      box-shadow: 0 4px 14px rgba(20, 12, 6, 0.35);
      opacity: 0.95;
    }
    .wordmark {
      font-family: var(--font-pebble);
      font-weight: 400;
      font-size: 30px;
      /* --brand-wordmark-color is theme-aware: cream on the dark
         dusk-glass surface, SAGE-DEEP (the brand dark-green that the
         navbar uses) on the light sand backdrop. */
      color: var(--brand-wordmark-color);
      letter-spacing: 0.04em;
      line-height: 1;
      text-shadow: 0 2px 12px rgba(0, 0, 0, 0.18);
      margin-bottom: 6px;
    }
    .tagline {
      font-family: var(--font-nunito);
      font-weight: 600;
      font-size: 13px;
      color: var(--text-tertiary);
      letter-spacing: 0.01em;
      margin-bottom: 16px;
    }
    .cta {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      color: var(--text-secondary);
      text-decoration: none;
      font-family: var(--font-body);
      font-size: 13px;
      font-weight: 500;
      letter-spacing: 0.01em;
      padding: 6px 0;
      transition: color 200ms ease;
    }
    .cta:hover {
      color: var(--text-primary);
    }
    .cta .arrow {
      display: inline-block;
      transition: transform 220ms ease;
    }
    .cta:hover .arrow {
      transform: translateX(3px);
    }
  `;

  render() {
    // Vite's BASE_URL = '/' in dev, '/cairn/' in production — keeps the
    // icon resolvable at both localhost:5273 and pebblepath.ai/cairn.
    const iconUrl = `${import.meta.env.BASE_URL}assets/pebblepath-icon.png`;
    return html`
      <img class="icon" src=${iconUrl} alt="" aria-hidden="true" />
      <div class="wordmark">PebblePath</div>
      <a
        class="cta"
        href="https://apps.apple.com/app/pebblepath-ai/"
        target="_blank"
        rel="noopener"
      >
        Download the app <span class="arrow">→</span>
      </a>
    `;
  }
}

customElements.define('discover-pebblepath', DiscoverPebblePath);
