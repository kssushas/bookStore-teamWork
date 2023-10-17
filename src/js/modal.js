import { serviceModal } from './apisearch';
import { checkLocaleStorage } from './localeStorage';

const modal = document.querySelector('.modal-field');
const picture = document.querySelector('.js-modal-picture');
const modalInfo = document.querySelector('.js-modal-info');
const overlay = document.querySelector('.js-overlay-modal');
const closeBtn = document.querySelector('.js-modal-close');

let result = null;

export async function forModal(touchId) {
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
  picture.innerHTML = '';
  modalInfo.innerHTML = '';
  result = await serviceModal(touchId);
  checkLocaleStorage(result);

  const modalMake = makeModal(result);
  modal.classList.add('active');
  return modalMake;
}

function makeModal({
  author,
  book_image,
  book_image_width,
  book_image_height,
  description,
  title,
  amazon_product_url,
  buy_links,
}) {
  const content = `<img class="modal-picture-content" src="${book_image}" alt="${title}"  width="${book_image_width}" height="${book_image_height}" />`;
  const text = `<h2 class= "modal-title">${title}</h2>
        <h3 class="modal-author">${author}</h3>
        <p class="modal-description">${description}</p>
        <div class="modal-icons"><a
      class="modal-amazon"
      href="${amazon_product_url}"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Amazon"
    >
    </a><a
      class="modal-apple"
      href="${buy_links[1].url}"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Apple"
    >
    </a></div>`;

  picture.insertAdjacentHTML('beforeend', content);
  modalInfo.insertAdjacentHTML('beforeend', text);
}

function closeModal() {
  modal.classList.remove('active');
  overlay.classList.remove('active');
  document.body.style.overflow = '';
}
closeBtn.addEventListener('click', closeModal);

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeModal();
  }
});

overlay.addEventListener('click', () => {
  closeModal();
});

export { result };
