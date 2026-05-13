/**
 * Lightweight global toast. Used to surface "coming soon" stubs without
 * pulling in a dialog/modal system. One toast at a time — newer replaces
 * older. Auto-dismisses after `duration` ms.
 */
let host = null;
let timer = null;

function ensureHost() {
  if (host) return host;
  host = document.createElement('div');
  host.id = 'cairn-toast-host';
  Object.assign(host.style, {
    position: 'fixed',
    bottom: '24px',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 9999,
    pointerEvents: 'none',
  });
  document.body.appendChild(host);
  return host;
}

export function toast(message, { duration = 2800 } = {}) {
  const root = ensureHost();
  clearTimeout(timer);
  root.innerHTML = '';
  const card = document.createElement('div');
  card.textContent = message;
  Object.assign(card.style, {
    padding: '12px 18px',
    background: 'rgba(20, 12, 6, 0.78)',
    backdropFilter: 'blur(24px) saturate(180%)',
    webkitBackdropFilter: 'blur(24px) saturate(180%)',
    border: '1px solid rgba(255, 248, 235, 0.22)',
    borderRadius: '999px',
    color: 'rgba(255, 248, 235, 0.96)',
    fontFamily: "'Inter', system-ui, sans-serif",
    fontSize: '13.5px',
    fontWeight: '500',
    letterSpacing: '0.005em',
    boxShadow: '0 12px 32px rgba(20, 12, 6, 0.45)',
    pointerEvents: 'auto',
    transform: 'translateY(8px)',
    opacity: '0',
    transition: 'opacity 200ms ease, transform 240ms ease',
  });
  root.appendChild(card);
  requestAnimationFrame(() => {
    card.style.opacity = '1';
    card.style.transform = 'translateY(0)';
  });
  timer = setTimeout(() => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(8px)';
    setTimeout(() => card.remove(), 260);
  }, duration);
}
