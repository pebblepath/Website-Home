import { LitElement, html, css } from 'lit';
import './member-chip.js';

/**
 * Children tab body — surfaces the PebblePath app's child-development
 * data on the web: child card, the 4 CDC domain tiles, coming-up +
 * recently-achieved milestones, growth insights, and Pebble's daily
 * card. Read-only mirror of the iOS app (no writes here).
 *
 * Props:
 *   child       — selected child { id, name, dateOfBirth:Date,
 *                  profilePhotoURL, pronouns, themeColorHex }
 *   children    — all children (renders a switcher when > 1)
 *   milestones  — [{ category, title, status, ageRangeStartMonths, ... }]
 *   insights    — [{ type, domain, title, body, relevanceScore }]
 *   dailyCard   — { title, body, topicForChat } | null
 *
 * Events:
 *   select-child  detail: childId
 *   ask-pebble    detail: seed question string
 */
const DOMAINS = [
  { key: 'motor', label: 'Motor', color: '#6b9ac4' },
  { key: 'language', label: 'Language', color: '#d4a843' },
  { key: 'socialEmotional', label: 'Social-Emotional', color: '#c98a8a' },
  { key: 'cognitive', label: 'Cognitive', color: '#8b7bb5' },
];

// Legacy 'selfCare' rows decode to motor (matches the iOS decoder
// back-compat — Build 9 retag).
function normCat(c) {
  return c === 'selfCare' ? 'motor' : c;
}

function ageLabel(dob) {
  if (!dob || Number.isNaN(dob.getTime?.() ?? NaN)) return '';
  const now = new Date();
  let months =
    (now.getFullYear() - dob.getFullYear()) * 12 +
    (now.getMonth() - dob.getMonth());
  if (now.getDate() < dob.getDate()) months -= 1;
  months = Math.max(0, months);
  const y = Math.floor(months / 12);
  const m = months % 12;
  if (y === 0) return `${m} month${m === 1 ? '' : 's'}`;
  const mm = m ? `, ${m} month${m === 1 ? '' : 's'}` : '';
  return `${y} year${y === 1 ? '' : 's'}${mm}`;
}

export class ChildOverview extends LitElement {
  static properties = {
    child: { type: Object },
    children: { type: Array },
    milestones: { type: Array },
    insights: { type: Array },
    dailyCard: { type: Object },
  };

  constructor() {
    super();
    this.child = null;
    this.children = [];
    this.milestones = [];
    this.insights = [];
    this.dailyCard = null;
  }

  static styles = css`
    :host { display: block; }
    section { margin-bottom: 30px; }
    .section-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 14px;
      padding: 0 4px;
      gap: 14px;
      flex-wrap: wrap;
    }
    .section-head h2 {
      margin: 0;
      font-family: var(--font-display);
      font-size: 18px;
      font-weight: 600;
      letter-spacing: -0.01em;
    }
    .note {
      font-size: 12.5px;
      color: var(--text-tertiary);
      margin: 0;
    }
    .panel {
      position: relative;
      border-radius: var(--radius-card);
      background: var(--glass-fill-strong);
      backdrop-filter: blur(var(--glass-blur)) saturate(var(--glass-saturation));
      -webkit-backdrop-filter: blur(var(--glass-blur)) saturate(var(--glass-saturation));
      border: 1px solid var(--glass-border-strong);
      box-shadow: var(--glass-shadow);
      padding: 24px;
    }

    /* child switcher */
    .switcher {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
      margin-bottom: 16px;
    }
    .switcher button {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 7px 14px 7px 8px;
      border-radius: var(--radius-pill);
      background: var(--glass-fill);
      border: 1px solid var(--glass-border);
      color: var(--text-secondary);
      font-family: var(--font-body);
      font-weight: 600;
      font-size: 13px;
      cursor: pointer;
    }
    .switcher button.on {
      background: rgba(61, 155, 143, 0.2);
      color: #fff;
      border-color: rgba(61, 155, 143, 0.45);
    }

    /* child card */
    .child-card {
      display: flex;
      align-items: center;
      gap: 22px;
      flex-wrap: wrap;
    }
    .ring {
      border-radius: 999px;
      padding: 4px;
      background: var(--theme, var(--teal-pebble));
      display: inline-flex;
    }
    .meta h2 {
      margin: 0;
      font-family: var(--font-display);
      font-size: 26px;
      letter-spacing: -0.02em;
    }
    .meta .sub {
      color: var(--text-secondary);
      font-size: 14px;
      margin-top: 3px;
    }
    .meta .agepill {
      display: inline-block;
      margin-top: 10px;
      padding: 4px 12px;
      border-radius: var(--radius-pill);
      font-size: 12.5px;
      font-weight: 600;
      background: rgba(61, 155, 143, 0.18);
      color: #9fded2;
      border: 1px solid rgba(61, 155, 143, 0.35);
    }
    .progress {
      margin-left: auto;
      text-align: right;
      min-width: 150px;
    }
    .progress .big {
      font-family: var(--font-display);
      font-size: 30px;
      font-weight: 700;
      color: var(--text-primary);
    }
    .progress .lbl {
      color: var(--text-secondary);
      font-size: 12.5px;
      margin-top: 2px;
    }

    /* domain tiles */
    .domains {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 14px;
    }
    @media (max-width: 880px) {
      .domains { grid-template-columns: repeat(2, 1fr); }
    }
    .dtile {
      border-radius: var(--radius-tile);
      padding: 18px;
      border: 1px solid var(--glass-border);
      background: var(--tint);
    }
    .dico {
      width: 34px;
      height: 34px;
      border-radius: 10px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      margin-bottom: 14px;
      background: var(--c);
    }
    .dico svg { width: 18px; height: 18px; }
    .dname {
      font-family: var(--font-display);
      font-weight: 700;
      font-size: 14px;
    }
    .dcount {
      font-size: 12.5px;
      color: var(--text-secondary);
      margin: 4px 0 12px;
    }
    .bar {
      height: 7px;
      border-radius: 999px;
      background: rgba(255, 255, 255, 0.12);
      overflow: hidden;
    }
    .bar i {
      display: block;
      height: 100%;
      border-radius: 999px;
      background: var(--c);
    }

    /* milestone rows */
    .ms-row {
      display: flex;
      align-items: center;
      gap: 14px;
      padding: 13px 4px;
      border-bottom: 1px solid rgba(255, 248, 235, 0.07);
    }
    .ms-row:last-child { border-bottom: none; }
    .ms-dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      flex-shrink: 0;
    }
    .ms-row .t {
      flex: 1;
      font-size: 14.5px;
      font-weight: 500;
    }
    .ms-row .t small {
      display: block;
      color: var(--text-tertiary);
      font-size: 12px;
      font-weight: 400;
      margin-top: 2px;
    }
    .ms-stat {
      padding: 4px 11px;
      border-radius: var(--radius-pill);
      font-size: 11.5px;
      font-weight: 600;
      white-space: nowrap;
    }
    .ms-stat.done { background: rgba(79, 194, 107, 0.18); color: #a6e6b8; }
    .ms-stat.emerging { background: rgba(212, 168, 67, 0.18); color: #ecca7e; }
    .ms-stat.up { background: rgba(255, 248, 235, 0.08); color: var(--text-secondary); }

    .two-col {
      display: grid;
      grid-template-columns: 1fr 1.1fr;
      gap: 18px;
      align-items: start;
    }
    @media (max-width: 1024px) {
      .two-col { grid-template-columns: 1fr; }
    }

    /* insights */
    .insight {
      display: flex;
      gap: 14px;
      padding: 16px;
      border-radius: var(--radius-tile);
      background: var(--glass-fill);
      border: 1px solid var(--glass-border);
      margin-bottom: 12px;
    }
    .insight:last-child { margin-bottom: 0; }
    .insight .strip {
      width: 4px;
      border-radius: 999px;
      flex-shrink: 0;
    }
    .insight.strength .strip { background: var(--teal-pebble); }
    .insight.watching .strip { background: var(--amber-glow); }
    .insight.connection .strip { background: var(--purple-muted); }
    .insight.nudge .strip { background: var(--terracotta); }
    .ikind {
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      margin-bottom: 5px;
      color: var(--text-secondary);
    }
    .insight.strength .ikind { color: #7fd3c6; }
    .insight.watching .ikind { color: #ecca7e; }
    .insight.connection .ikind { color: #b6a8d8; }
    .insight.nudge .ikind { color: #e6b39a; }
    .insight h4 {
      margin: 0 0 5px;
      font-family: var(--font-display);
      font-size: 15px;
      font-weight: 600;
    }
    .insight p {
      margin: 0;
      font-size: 13.5px;
      color: var(--text-secondary);
      line-height: 1.55;
    }

    /* Pebble's daily card */
    .daily {
      border-radius: var(--radius-card);
      padding: 24px;
      position: relative;
      overflow: hidden;
      background: linear-gradient(135deg, #3d9b8f 0%, #1f5c54 100%);
      box-shadow: 0 12px 30px rgba(31, 92, 84, 0.4);
    }
    .daily::after {
      content: '';
      position: absolute;
      right: -30px;
      top: -30px;
      width: 160px;
      height: 160px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(255, 255, 255, 0.14), transparent 70%);
    }
    .daily .tag {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: rgba(255, 255, 255, 0.8);
      margin-bottom: 10px;
    }
    .daily .tag svg { width: 13px; height: 13px; }
    .daily h3 {
      margin: 0 0 8px;
      font-family: var(--font-display);
      font-size: 19px;
      color: #fff;
      letter-spacing: -0.01em;
    }
    .daily p {
      margin: 0 0 16px;
      font-size: 14px;
      color: rgba(255, 255, 255, 0.88);
      line-height: 1.6;
    }
    .daily .ask {
      display: inline-flex;
      align-items: center;
      gap: 7px;
      padding: 8px 16px;
      border-radius: var(--radius-pill);
      background: rgba(255, 255, 255, 0.16);
      border: 1px solid rgba(255, 255, 255, 0.28);
      color: #fff;
      font-family: var(--font-body);
      font-weight: 600;
      font-size: 13px;
      cursor: pointer;
    }
    .daily .ask:hover { background: rgba(255, 255, 255, 0.24); }

    .empty {
      color: var(--text-secondary);
      font-size: 13.5px;
      line-height: 1.55;
      padding: 6px 0;
    }
  `;

  _domainStats(key) {
    const inDomain = (this.milestones ?? []).filter(
      (m) => normCat(m.category) === key,
    );
    const achieved = inDomain.filter((m) => m.status === 'achieved').length;
    const total = inDomain.length;
    return { achieved, total, pct: total ? Math.round((achieved / total) * 100) : 0 };
  }

  _pebbleIcon() {
    return html`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="4" fill="currentColor" stroke="none" /></svg>`;
  }

  render() {
    const child = this.child;
    if (!child) {
      return html`<div class="panel empty">No child selected yet.</div>`;
    }
    const ms = this.milestones ?? [];
    const achievedAll = ms.filter((m) => m.status === 'achieved');
    const overallPct = ms.length
      ? Math.round((achievedAll.length / ms.length) * 100)
      : 0;
    const recently = achievedAll
      .slice()
      .sort(
        (a, b) => (b.ageRangeStartMonths ?? 0) - (a.ageRangeStartMonths ?? 0),
      )
      .slice(0, 4);
    const comingUp = ms
      .filter((m) => m.status !== 'achieved')
      .slice(0, 5);
    const theme = child.themeColorHex || 'var(--teal-pebble)';
    const insights = this.insights ?? [];
    const daily = this.dailyCard;
    const statusClass = (s) =>
      s === 'achieved' ? 'done' : s === 'emerging' ? 'emerging' : 'up';
    const statusLabel = (s) =>
      s === 'achieved' ? 'Achieved' : s === 'emerging' ? 'Emerging' : 'Upcoming';

    return html`
      ${(this.children ?? []).length > 1
        ? html`<div class="switcher">
            ${this.children.map(
              (k) => html`<button
                class=${k.id === child.id ? 'on' : ''}
                @click=${() =>
                  this.dispatchEvent(
                    new CustomEvent('select-child', {
                      detail: k.id,
                      bubbles: true,
                      composed: true,
                    }),
                  )}
              >
                <member-chip
                  .name=${k.name}
                  .photo=${k.profilePhotoURL ?? ''}
                  .hue=${150}
                  size="22"
                ></member-chip>
                ${k.name}
              </button>`,
            )}
          </div>`
        : ''}

      <section>
        <div class="panel">
          <div class="child-card" style="--theme:${theme};">
            <span class="ring">
              <member-chip
                .name=${child.name}
                .photo=${child.profilePhotoURL ?? ''}
                .hue=${150}
                size="84"
              ></member-chip>
            </span>
            <div class="meta">
              <h2>${child.name}</h2>
              <div class="sub">${ageLabel(child.dateOfBirth)}</div>
              <span class="agepill"
                >${achievedAll.length} of ${ms.length} milestones
                achieved</span
              >
            </div>
            <div class="progress">
              <div class="big">${overallPct}%</div>
              <div class="lbl">of tracked milestones</div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="section-head">
          <h2>Milestone areas</h2>
          <p class="note">From ${child.name}'s PebblePath path</p>
        </div>
        <div class="domains">
          ${DOMAINS.map((d) => {
            const s = this._domainStats(d.key);
            return html`<div
              class="dtile"
              style="--c:${d.color};--tint:${d.color}26;"
            >
              <div class="dico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M4 18l5-9 4 6 3-5 4 8" />
                </svg>
              </div>
              <div class="dname">${d.label}</div>
              <div class="dcount">${s.achieved} of ${s.total} achieved</div>
              <div class="bar"><i style="width:${s.pct}%"></i></div>
            </div>`;
          })}
        </div>
      </section>

      <section>
        <div class="two-col">
          <div>
            <div class="section-head"><h2>Coming up</h2></div>
            <div class="panel">
              ${comingUp.length === 0
                ? html`<div class="empty">
                    Nothing flagged as next right now — ${child.name} is on
                    track across the board.
                  </div>`
                : comingUp.map((m) => {
                    const c =
                      DOMAINS.find((d) => d.key === normCat(m.category))
                        ?.color ?? '#6b9ac4';
                    return html`<div class="ms-row">
                      <span class="ms-dot" style="background:${c}"></span>
                      <div class="t">
                        ${m.title}
                        <small
                          >${DOMAINS.find(
                            (d) => d.key === normCat(m.category),
                          )?.label ?? ''}
                          · ${m.ageRangeStartMonths}–${m.ageRangeEndMonths}
                          months</small
                        >
                      </div>
                      <span class="ms-stat ${statusClass(m.status)}"
                        >${statusLabel(m.status)}</span
                      >
                    </div>`;
                  })}
            </div>
            <div class="section-head" style="margin-top:18px;">
              <h2>Recently achieved</h2>
            </div>
            <div class="panel">
              ${recently.length === 0
                ? html`<div class="empty">
                    No milestones logged as achieved yet.
                  </div>`
                : recently.map((m) => {
                    const c =
                      DOMAINS.find((d) => d.key === normCat(m.category))
                        ?.color ?? '#6b9ac4';
                    return html`<div class="ms-row">
                      <span class="ms-dot" style="background:${c}"></span>
                      <div class="t">${m.title}</div>
                      <span class="ms-stat done">Achieved</span>
                    </div>`;
                  })}
            </div>
          </div>

          <div>
            ${daily
              ? html`<div class="daily" style="margin-bottom:18px;">
                  <div class="tag">${this._pebbleIcon()} Pebble's daily</div>
                  <h3>${daily.title}</h3>
                  <p>${daily.body}</p>
                  <button
                    class="ask"
                    @click=${() =>
                      this.dispatchEvent(
                        new CustomEvent('ask-pebble', {
                          detail:
                            daily.topicForChat ||
                            `Tell me more about: ${daily.title}`,
                          bubbles: true,
                          composed: true,
                        }),
                      )}
                  >
                    Ask Pebble about this →
                  </button>
                </div>`
              : ''}
            <div class="section-head"><h2>Growth insights</h2></div>
            ${insights.length === 0
              ? html`<div class="panel empty">
                  Pebble is still learning about ${child.name} — insights
                  appear as more milestones are logged in the app.
                </div>`
              : insights.map(
                  (i) => html`<div class="insight ${i.type}">
                    <div class="strip"></div>
                    <div>
                      <div class="ikind">
                        ${i.type === 'nudge' ? 'Try this' : i.type}
                      </div>
                      <h4>${i.title}</h4>
                      <p>${i.body}</p>
                    </div>
                  </div>`,
                )}
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('child-overview', ChildOverview);
