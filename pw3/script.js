'use strict';
const subscribeButton = document.querySelector('#subscribe-button');
const subscribeStatus = document.querySelector('#subscribe-status');
let subscribed = false;
try { subscribed = localStorage.getItem('world-trivia-subscription') === 'true'; } catch { /* Storage can be unavailable in private contexts. */ }
function renderSubscription() {
  subscribeButton.setAttribute('aria-pressed', String(subscribed));
  subscribeButton.textContent = subscribed ? 'Unsubscribe from daily puzzle' : 'Subscribe to Puzzle of the Day';
}
renderSubscription();
subscribeButton.addEventListener('click', () => {
  subscribed = !subscribed;
  let saved = true;
  try { localStorage.setItem('world-trivia-subscription', String(subscribed)); } catch { saved = false; }
  renderSubscription();
  subscribeStatus.textContent = subscribed
    ? (saved ? 'Daily puzzle preference enabled on this device.' : 'Enabled for this visit. Browser storage is unavailable.')
    : 'Daily puzzle preference disabled.';
});
document.querySelector('#contact-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.querySelector('#name');
  const message = document.querySelector('#message');
  if (!name.value.trim() || !message.value.trim()) {
    document.querySelector('#contact-status').textContent = 'Please enter a name and message containing more than spaces.';
    (!name.value.trim() ? name : message).focus();
    return;
  }
  document.querySelector('#contact-status').textContent = 'Your message passed validation. This is a demo; nothing was sent or stored.';
});
