import { result } from './modal';
export { checkLocaleStorage };

const addBtn = document.querySelector('.js-modal-btn');
const removeBtn = document.querySelector('.js-modal-remove-btn');
const addBook = document.querySelector('.js-modal-add');

let arrayOfChosenBooks = [];

if (
  localStorage.getItem('books') ||
  localStorage.getItem('books').length === 0
) {
  localStorage.setItem('books', JSON.stringify(arrayOfChosenBooks));
}

function addToShopingList(result) {
  arrayOfChosenBooks.push(result);
  localStorage.setItem('books', JSON.stringify(arrayOfChosenBooks));
  addBtn.style.display = 'none';
  removeBtn.style.display = 'block';
  addBook.style.display = 'block';
}

function removeFromTheShopList(result) {
  const indexToDelete = arrayOfChosenBooks.indexOf(result);
  arrayOfChosenBooks.splice(indexToDelete, 1);
  localStorage.setItem('books', JSON.stringify(arrayOfChosenBooks));
  addBtn.style.display = 'block';
  removeBtn.style.display = 'none';
  addBook.style.display = 'none';
}

addBtn.addEventListener('click', () => {
  addBtn.removeEventListener('click', this);
  addToShopingList(result);
});

removeBtn.addEventListener('click', () => {
  removeFromTheShopList(result);
});

// let takeBook=null;
function checkLocaleStorage(currentBook) {
  const takeBook = JSON.parse(localStorage.getItem('books'));
  const find = takeBook.find(element => element._id === currentBook._id);

  if (takeBook.length === 0 || !find) {
    addBtn.style.display = 'block';
    removeBtn.style.display = 'none';
    addBook.style.display = 'none';
    return;
  }
  addBtn.style.display = 'none';
  removeBtn.style.display = 'block';
  addBook.style.display = 'block';
}
