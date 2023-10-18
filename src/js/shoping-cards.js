const listOfShopingBooks = document.querySelector('.js-shoping-list-book');
const listOfBookFromCategory = document.querySelector(
  '.listOfBookFromCategory'
);

let takeBook = JSON.parse(localStorage.getItem('books'));
checkShopingCard();

listOfShopingBooks.addEventListener('click', clickOnRemoveBtn);

function checkShopingCard() {
  if (!takeBook || takeBook.length === 0) {
    const empty = emptyShopping();
    listOfBookFromCategory.innerHTML = empty;
    listOfShopingBooks.style.display = 'none';
    return;
  }

  listOfShopingBooks.style.display = 'flex';
  listOfShopingBooks.innerHTML = markupShoppingListCard(takeBook);
}

function clickOnRemoveBtn(e) {
  if (e.target.tagName != 'BUTTON') return;
  const bookToDelete = takeBook.findIndex(
    book => book._id === e.target.dataset.id
  );
  takeBook.splice(bookToDelete, 1);
  localStorage.setItem('books', JSON.stringify(takeBook));
  checkShopingCard();
}

function emptyShopping() {
  return ` <div class="shoping-empty">
      <p class="shop-list-empty-text">
        This page is empty, add some books and proceed to order.
      </p>
      <div class="shopping-list-empty-img"></div></div>`;
}

function markupShoppingListCard(value) {
  return value
    .map(e => {
      return `
               <li class ="shoping-books-item">
                 <img src="${e.book_image}" alt="${e.title}" class="shopping-img-card">
                 <div>
                  <button type="button" class="shopping-card-button js-modal-remove-btn">
                  <svg class="shopping-card-icon" data-id="${e._id}">
                 <use href="../img/sprite.svg#icon-trash">
                </svg></button>
                 <h2 class = "shopping-card-title">${e.title}</h2>
                
                 <h3 class="shopping-card-list-name">${e.list_name}</h3>
                 <p class="shopping-card-description">${e.description}</p>
                 
                 <p class="shopping-card-autor">${e.author}</p></div>
                 <div class="shop-list-icons"><a class="modal-amazon"></a></a>
                <a class="modal-apple">
                </a></div>
                </li>
                 `;
    })
    .join('');
}
