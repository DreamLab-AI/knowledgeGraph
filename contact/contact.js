// Contact form: mounts into every [data-contact-form] element.
//   data-topic   label of what the visitor is asking about (default "Narrative Gold Mine")
//   data-source  provenance tag grouped by the nightly inbox watch
//                (default "narrativegoldmine_contact_form")
// The message is gift-wrapped (NIP-17) in the browser and published to the
// DreamLab Nostr relay; nothing is stored by this site. The transport bundle is
// loaded on first submit so it costs the page nothing until someone writes.

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const COOLDOWN_MS = 30000;

function throttled() {
  try {
    const last = Number(sessionStorage.getItem('cf-last') || 0);
    return Date.now() - last < COOLDOWN_MS;
  } catch {
    return false;
  }
}
function markSent() {
  try { sessionStorage.setItem('cf-last', String(Date.now())); } catch { /* storage unavailable */ }
}

function field(label, control) {
  const wrap = document.createElement('label');
  wrap.className = 'cf-field';
  const span = document.createElement('span');
  span.textContent = label;
  wrap.append(span, control);
  return wrap;
}

function input(name, type, autocomplete, maxLength) {
  const el = document.createElement('input');
  el.name = name;
  el.type = type;
  el.autocomplete = autocomplete;
  el.maxLength = maxLength;
  el.required = true;
  return el;
}

function mount(host) {
  const topic = host.dataset.topic || 'Narrative Gold Mine';
  const source = host.dataset.source || 'narrativegoldmine_contact_form';

  const form = document.createElement('form');
  form.className = 'cf';
  form.noValidate = true;

  const name = input('name', 'text', 'name', 100);
  const email = input('email', 'email', 'email', 254);
  const message = document.createElement('textarea');
  message.name = 'message';
  message.rows = 5;
  message.maxLength = 4000;
  message.required = true;

  // Honeypot: real visitors never see or fill it.
  const trap = document.createElement('input');
  trap.name = 'website';
  trap.type = 'text';
  trap.tabIndex = -1;
  trap.autocomplete = 'off';
  trap.className = 'cf-hp';
  trap.setAttribute('aria-hidden', 'true');

  const button = document.createElement('button');
  button.type = 'submit';
  button.className = 'cf-send';
  button.textContent = 'Send message';

  const status = document.createElement('p');
  status.className = 'cf-status';
  status.setAttribute('role', 'status');
  status.setAttribute('aria-live', 'polite');

  const note = document.createElement('p');
  note.className = 'cf-note';
  note.textContent = 'Sent end-to-end encrypted to DreamLab AI over Nostr. This site stores nothing.';

  form.append(
    field('Name', name),
    field('Email', email),
    field('How can we help?', message),
    trap,
    button,
    status,
    note
  );
  host.replaceChildren(form);

  const say = (text, ok) => {
    status.textContent = text;
    status.dataset.state = ok ? 'ok' : 'error';
  };

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (trap.value) { say('Thanks, we will be in touch.', true); return; }
    const n = name.value.trim();
    const em = email.value.trim().toLowerCase();
    const msg = message.value.trim();
    if (!n) return say('Please tell us your name.', false);
    if (!EMAIL_RE.test(em)) return say('Please enter a valid email address.', false);
    if (msg.length < 10) return say('Please add a little more detail (at least 10 characters).', false);
    if (throttled()) return say('You just sent a message. Please wait a moment before sending another.', false);

    button.disabled = true;
    say('Sending…', true);
    try {
      const { sendEnquiry } = await import('./nostr-contact.js');
      const result = await sendEnquiry({ name: n, email: em, message: msg, topic, source });
      if (result.ok) {
        markSent();
        form.reset();
        say('Thanks. Your message has been delivered and we will reply by email.', true);
      } else {
        say('Sorry, that did not go through. Please try again shortly.', false);
      }
    } catch {
      say('Sorry, that did not go through. Please try again shortly.', false);
    } finally {
      button.disabled = false;
    }
  });
}

export function mountContactForms() {
  document.querySelectorAll('[data-contact-form]').forEach(mount);
}

mountContactForms();
