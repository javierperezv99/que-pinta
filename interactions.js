'use strict';
const viewer = document.querySelector('#photo-viewer');
const viewerImage = document.querySelector('#viewer-image');
const viewerCaption = document.querySelector('#viewer-caption');
document.querySelectorAll('.work-card .work-image').forEach(container => {
  const image = container.querySelector('img');
  const title = container.closest('figure').querySelector('strong').textContent;
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'expand-work';
  button.setAttribute('aria-label', 'Ampliar: ' + title);
  image.replaceWith(button);
  button.append(image);
  const hint = document.createElement('span');
  hint.className = 'expand-hint';
  hint.textContent = 'Ver detalle ↗';
  hint.setAttribute('aria-hidden', 'true');
  button.append(hint);
  button.addEventListener('click', () => {
    viewerImage.src = image.src;
    viewerImage.alt = image.alt;
    viewerCaption.textContent = title;
    viewer.showModal();
    document.body.style.overflow = 'hidden';
  });
});
viewer.querySelector('.viewer-close').addEventListener('click', () => viewer.close());
viewer.addEventListener('click', event => {
  if (event.target === viewer) viewer.close();
});
viewer.addEventListener('close', () => { document.body.style.overflow = ''; });
document.querySelector('#year').textContent = new Date().getFullYear();
