import { serviceModal } from './apisearch';
import { checkLocaleStorage } from './localeStorage';



export {result};

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
        <div class="modal-icons">
            <picture>
              <source
                srcset="
                  ../images/modal/_amazon.png 1x,
                  ../images/modal/_amazon-retina.png 2x
                "
                type="image/png"
              />
              <a
                href="${amazon_product_url}"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Amazon"
              >
                <img
                  class="modal-amazon"
                  src="./images/modal/_amazon.png"
                  alt="Amazon"
                  width="62"
                  height="19"
                  loading="lazy"
                />
              </a>
            </picture>
            <picture>
              <source
                srcset="
                  ../images/modal/_book.png 1x,
                  ../images/modal/_book-retina.png 2x
                "
                type="image/png"
              />
              <a
                href="${buy_links[1].url}"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Amazon"
              >
                <img
                  class="modal-apple"
                  src="./images/modal/_book.png"
                  alt="Apple"
                  width="62"
                  height="19"
                  loading="lazy"
                />
              </a>
            </picture>
            </div>`;

  picture.insertAdjacentHTML('beforeend', content);
  modalInfo.insertAdjacentHTML('beforeend', text);
}

function closeModal() {
  modal.classList.remove('active');
  overlay.classList.remove('active');
  document.body.style.overflow = '';
}
closeBtn.addEventListener('click', closeModal);


document.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
    closeModal(); 
  }
})

overlay.addEventListener('click', () =>  {
    closeModal();
});

export { result };
// 
