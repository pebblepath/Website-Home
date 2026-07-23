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
    /* 2026-07-23 (design-sandbox/54 hybrid, iOS-lockstep) — frosted
       GLASS discs replace the dashed rings + flat tints (dashes read
       as prototype). Outer full disc = connections (terracotta inner
       glow); inner disc stacks ON TOP = household (teal glow), so the
       old donut mask is no longer needed. White-frost glass reads
       correctly on both the light mesh and the dusk theme. */
    .ring.connections {
      width: 92%;
      background: radial-gradient(
        circle at 50% 46%,
        rgba(255, 255, 255, 0.10) 0%,
        rgba(255, 255, 255, 0.26) 100%
      );
      backdrop-filter: blur(6px) saturate(1.05);
      -webkit-backdrop-filter: blur(6px) saturate(1.05);
      box-shadow:
        inset 0 0 0 1px rgba(255, 255, 255, 0.5),
        inset 0 0 46px rgba(198, 123, 92, 0.20),
        inset 0 0 90px rgba(198, 123, 92, 0.08),
        0 18px 40px -22px rgba(122, 60, 40, 0.35);
    }
    .ring.family {
      width: 54%;
      background: radial-gradient(
        circle at 50% 44%,
        rgba(255, 255, 255, 0.26) 0%,
        rgba(255, 255, 255, 0.44) 100%
      );
      backdrop-filter: blur(9px) saturate(1.1);
      -webkit-backdrop-filter: blur(9px) saturate(1.1);
      box-shadow:
        inset 0 0 0 1px rgba(255, 255, 255, 0.65),
        inset 0 0 40px rgba(61, 155, 143, 0.28),
        inset 0 0 70px rgba(61, 155, 143, 0.10),
        0 14px 32px -20px rgba(31, 92, 84, 0.4);
    }
    /* Soft radial glow halo behind You — the centrepiece marker. */
    .halo {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 44%;
      aspect-ratio: 1 / 1;
      border-radius: 50%;
      background: radial-gradient(
        circle,
        rgba(92, 191, 176, 0.42) 0%,
        rgba(107, 154, 196, 0.20) 40%,
        rgba(92, 191, 176, 0) 72%
      );
      pointer-events: none;
    }
    /* Low-opacity hand-drawn pebble watermarks (brand shape library). */
    .pebble {
      position: absolute;
      opacity: 0.1;
      pointer-events: none;
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
    /* design-sandbox/54 hybrid — frosted name pills (were bare text).
       Theme-adaptive via the glass tokens so the dusk theme flips
       fill + border + ink automatically. */
    .node .cap {
      font-size: 10.5px;
      font-weight: 600;
      color: var(--text-primary);
      background: var(--glass-fill-strong);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      border: 1px solid var(--glass-border);
      border-radius: 999px;
      padding: 2px 9px;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.07);
      max-width: 86px;
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
      font-weight: 700;
      color: var(--dusty-blue);
      background: var(--glass-fill-strong);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      border: 1px solid var(--glass-border);
      border-radius: 999px;
      padding: 2px 10px;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.07);
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
    // Non-co-parent household members (role 'member', set by
    // deriveImmediateMembers when a memberIds person parents no child)
    // belong in the connection ring, not the inner family ring (which
    // is co-parents + children). Mirrors iOS: the ring = everyone who
    // isn't a co-parent of your children. Without this they'd vanish
    // (they live in `immediate` but _family()'s co-parent||child filter
    // drops them).
    const members = (this.immediate ?? []).filter((m) => m.role === 'member');
    return [...(this.extended ?? []), ...members];
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

          <svg class="pebble" style="top:8%;right:12%;width:44px;height:37px" viewBox="0 0 52 44" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 24C2 14 14 3 27 4c14 1 24 9 22 20-2 12-16 19-30 15C10 36 9 31 6 24Z" fill="#C67B5C"/>
          </svg>
          <svg class="pebble" style="bottom:10%;left:9%;width:34px;height:29px" viewBox="0 0 40 34" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 18C1 10 11 2 21 3c11 1 18 7 16 16-2 10-13 15-23 11C7 27 6 24 4 18Z" fill="#C67B5C"/>
          </svg>
          <svg class="pebble" style="bottom:28%;right:27%;width:32px;height:27px" viewBox="0 0 38 32" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 17C1 9 10 2 19 3c10 1 16 7 15 15-2 9-12 14-21 10C7 25 6 22 4 17Z" fill="#3D9B8F"/>
          </svg>

          <div class="halo"></div>

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
