// =============================================
//  loader.js - Ordered section loading with self-healing
// =============================================

const sections = [
  'sections/about.html',
  'sections/projects.html',
  'sections/services.html',
  'sections/certificates.html',
  'sections/contact.html'
];

const container = document.getElementById('main-container');
const loaderDiv = document.getElementById('loader');

// Pre‑create placeholder slots in strict DOM order
const slots = sections.map((file, index) => {
  const placeholder = document.createElement('div');
  placeholder.setAttribute('data-section-index', index);
  placeholder.setAttribute('data-section-file', file);
  placeholder.setAttribute('data-section-status', 'pending');
  container.appendChild(placeholder);
  return placeholder;
});

let loadedCount = 0;

sections.forEach((file, index) => {
  fetch(file)
    .then(res => res.ok ? res.text() : '')
    .then(html => {
      const slot = slots[index];
      if (html) {
        const temp = document.createElement('div');
        temp.innerHTML = html;
        const sectionNode = temp.firstElementChild;
        if (sectionNode) {
          sectionNode.setAttribute('data-section-index', index);
          sectionNode.setAttribute('data-section-file', file);
          slot.replaceWith(sectionNode);
          slots[index] = sectionNode;
        } else {
          slot.setAttribute('data-section-status', 'empty');
        }
      } else {
        slot.setAttribute('data-section-status', 'empty');
      }
      loadedCount++;
      if (loadedCount === sections.length) {
        if (loaderDiv) loaderDiv.style.display = 'none';
        verifyAndHealOrder();
      }
    })
    .catch(err => {
      console.warn(`Failed to load ${file}`, err);
      slots[index].setAttribute('data-section-status', 'error');
      loadedCount++;
      if (loadedCount === sections.length) {
        if (loaderDiv) loaderDiv.style.display = 'none';
        verifyAndHealOrder();
      }
    });
});

function verifyAndHealOrder() {
  const children = Array.from(container.children);
  let correct = true;
  for (let i = 0; i < children.length; i++) {
    const idx = parseInt(children[i].getAttribute('data-section-index'), 10);
    if (!isNaN(idx) && idx !== i) {
      correct = false;
      break;
    }
  }
  if (correct) {
    console.info('[Loader] Section order verified.');
    document.dispatchEvent(new Event('sectionsLoaded'));
    return;
  }
  console.warn('[Loader] Order mismatch – reordering sections...');
  const tagged = children.filter(c => c.getAttribute('data-section-index') !== null);
  const untagged = children.filter(c => c.getAttribute('data-section-index') === null);
  tagged.sort((a, b) => parseInt(a.getAttribute('data-section-index'),10) - parseInt(b.getAttribute('data-section-index'),10));
  while (container.firstChild) container.removeChild(container.firstChild);
  tagged.forEach(node => container.appendChild(node));
  untagged.forEach(node => container.appendChild(node));
  console.info('[Loader] Reorder complete.');
  document.dispatchEvent(new Event('sectionsLoaded'));
}