import { LitElement, html, css } from 'lit';
import './member-chip.js';

/**
 * Family circle (P4-B-b4/b5, flat-family model — Portal dusk-glass
 * twin of the iOS FamilyCircleView). A visual relationship LENS,
 * NOT account privilege: YOU at the centre, an inner "Your family"
 * ring (your co-parents + your children), an outer "Your
 * connections" ring (everyone who joined by invitation). Band
 * labels are PLAIN WORDS — no "Tier N" wording (locked
 * nomenclature). Pure display: reuses the already-derived
 * `immediate` / `extended` member arrays the manage-members modal
 * is given; no new data layer.
 *
 * Colours match the iOS twin: You = blue (--dusty-blue), Your
 * family = dark green (--sage-deep), Your connections = purple
 * (--purple-muted).
 *
 * Avatars are placed PROGRAMMATICALLY around each ring (angle =
 * index / count) so it scales to any real family size; the inner
 * ring is phase-offset half a step so its avatars interleave with
 * the outer ones instead of stacking (the name-collision fix
 * carried over from iOS).
 *
 * Properties:
 *   immediate — derived immediate members [{uid,displayName,photoURL,hue,role}]
 *   extended  — derived extended members  [{uid,displayName,photoURL,hue,role}]
 */
export class FamilyCircle extends LitElement {
  static properties = {
    immediate: { type: Array },
    extended: { type: Array },
  };

  constructor() {
    super();
    this.immediate = [];
    this.extended = [];
  }

  static styles = css`
    * {
      box-sizing: border-box;
    }
    :host {
      display: block;
    }
    /* 15% shorter than wide — trims the dead space above/below the
       rings. The circle itself stays full-size: the square .disc
       (sized by WIDTH) holds the rings/avatars and is centred in
       the shorter stage, overflowing symmetrically into the
       surrounding glass-panel padding (overflow visible).
       IMPORTANT — do not use backticks anywhere inside this css
       template, not even in comments: JS parses the template as
       text and a backtick terminates it (broke the Portal once
       2026-05-19; see flat-family-model-plan.md). */
    .stage {
      position: relative;
      width: 100%;
      max-width: 340px;
      margin: 0 auto;
      aspect-ratio: 1 / 0.85;
    }
    .disc {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      aspect-ratio: 1 / 1;
    }
    .ring {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 50%;
      aspect-ratio: 1 / 1;
      pointer-events: none;
    }
    .ring.connections {
      width: 92%;
      border: 1.5px dashed rgba(139, 123, 181, 0.7);
      background: rgba(139, 123, 181, 0.42);
      /* Donut shape — mask out the inner area where the family ring
         sits so the two rings don't color-mix. The family ring is
         54% of the disc; the connections ring is 92%, so the family
         radius as a fraction of the connections radius is
         54/92 ≈ 0.587. With closest-side (50% of element width as the
         100% reference), the family radius is 58.7% of that gradient
         radius. A 4% gradient transition smooths the edge. */
      -webkit-mask-image: radial-gradient(
        circle closest-side,
        transparent 58%,
        #000 62%
      );
      mask-image: radial-gradient(
        circle closest-side,
        transparent 58%,
        #000 62%
      );
    }
    .ring.family {
      width: 54%;
      border: 1.5px dashed rgba(31, 92, 84, 0.75);
      background: rgba(31, 92, 84, 0.45);
    }
    .node {
      position: absolute;
      transform: translate(-50%, -50%);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;
      width: 78px;
    }
    .node .cap {
      font-size: 10.5px;
      font-weight: 500;
      color: var(--text-secondary);
      max-width: 78px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      text-align: center;
    }
    .you {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;
    }
    .you .ringwrap {
      border-radius: 999px;
      padding: 3px;
      background: var(--dusty-blue);
      box-shadow: 0 6px 18px rgba(107, 154, 196, 0.4);
    }
    .you .cap {
      font-size: 11px;
      font-weight: 600;
      color: var(--text-secondary);
    }
  `;

  _self() {
    return (this.immediate ?? []).find(
      (m) => m.role === 'self' || m.role === 'self-extended',
    );
  }

  _family() {
    return (this.immediate ?? []).filter(
      (m) => m.role === 'co-parent' || m.role === 'child',
    );
  }

  _connections() {
    return this.extended ?? [];
  }

  /** Even radial placement; phaseDeg sets the starting angle. */
  _pos(index, count, radiusPct, phaseDeg) {
    if (count <= 0) return 'left:50%;top:50%;';
    const a = (phaseDeg + (index / count) * 360) * (Math.PI / 180);
    const left = 50 + radiusPct * Math.cos(a);
    const top = 50 + radiusPct * Math.sin(a);
    return `left:${left}%;top:${top}%;`;
  }

  _node(m, size, posStyle) {
    const first = (m.displayName ?? '').split(/\s+/)[0] || m.displayName || '';
    return html`
      <div class="node" style=${posStyle}>
        <member-chip
          .name=${m.displayName ?? ''}
          .photo=${m.photoURL ?? ''}
          .hue=${m.hue ?? 200}
          size=${size}
        ></member-chip>
        <span class="cap">${first}</span>
      </div>
    `;
  }

  render() {
    const self = this._self();
    const fam = this._family();
    const conn = this._connections();
    // Inner ring phase-offset half a step so a lone inner avatar
    // never stacks on a lone outer one (the iOS collision fix).
    const innerPhase = -90 + 180 / Math.max(1, fam.length);

    return html`
      <div class="stage">
        <div class="disc">
          <div class="ring connections"></div>
          <div class="ring family"></div>

          ${conn.map((m, i) =>
            this._node(m, 36, this._pos(i, conn.length, 37, -90)),
          )}
          ${fam.map((m, i) =>
            this._node(m, 36, this._pos(i, fam.length, 19, innerPhase)),
          )}

          <div class="you">
            <div class="ringwrap">
              <member-chip
                .name=${self?.displayName ?? 'You'}
                .photo=${self?.photoURL ?? ''}
                .hue=${self?.hue ?? 198}
                size="36"
              ></member-chip>
            </div>
            <span class="cap">You</span>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('family-circle', FamilyCircle);
