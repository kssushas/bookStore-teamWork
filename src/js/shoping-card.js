// import axios from 'axios';

// const URL = 'https://books-backend.p.goit.global/books';

// const listOfBookFromCategory = document.querySelector(
//   '.listOfBookFromCategory'
// );

// async function topFive() {
//   const result1 = await axios.get(`${URL}/top-books`);
//   const resultVal1 = await result1.data;
//   const dta = resultVal1.map(e => e.books);

//   const markupForTopFive = await markupShoppingListCard(dta);
//   listOfBookFromCategory.innerHTML = markupForTopFive;
// }

// function markupShoppingListCard(value) {
//   // console.log(value);
//   return value
//     .map(element => {
//       // console.log(element);
//       return element.map(
//         e => `<ul class="container">
//                <li data-id="${e._id}">
//                  <img src="${e.book_image}" alt="${e.title}" class="img-card">
//                  <h2>${e.title}</h2>
//                  <h3>${e.list_name}</h3>
//                  <p>${e.description}</p>
//                  <h4>${e.author}</h4></li></ul>`
//       );
//     })
//     .join(
//       '===================================================================='
//     );
// }

// topFive();

import amazonI from '/src/images/icons/amazon.png';
import ibookI from '/src/images/icons/ibook.png';
import removeIcon from '/src/images/icons.svg';

import bookShopI from '/src/images/icons/book-shop.png';
import amazonWhite from '../images/icons/white-amazon.png';






// Активна Shopping-кнопка на сторінці Shopping List

document.querySelector('#shop-page').classList.add('active');
document.querySelector('#bestsellers').classList.remove('active');



// розмітка книг

function generateBookCard(book) {
  let amazonLnk = '';
  let ibookLnk = '';
  let bookshopLnk = '';
  if (book.buy_links) {
    for (const iterator of book.buy_links) {
      switch (iterator.name) {
        case 'Amazon':
          amazonLnk = iterator.url;
          break;
        case 'Apple Books':
          ibookLnk = iterator.url;
          break;
        case 'Bookshop':
          const url = new URL(iterator.url);
          bookshopLnk = url.searchParams.get('url1');
          break;
        default:
          break;
      }
    }
  }
}
function emptyShopping() {
  return ` 
    <p class="shop-list-text">
      This page is empty, add some books and proceed to order.
    </p>
    <div class="shopping-list-book-img"></div>

  `;
}

// Відображ. список книжок

function renderBooks() {
  const savedBooks = getSavedBooks();

  if (savedBooks.length === 0) {
    emptyListImg.style.display = 'block';
      booksEl.innerHTML = '';
      
      // Приховує всі зображ, якщо список порож.
      
    imagesToHide.forEach(image => {
      image.style.display = 'none';
    });
  } else {
    const booksMarkup = savedBooks.map(book => generateBookCard(book)).join('');
    booksEl.innerHTML = booksMarkup;
    emptyListImg.style.display = 'none';
    //  Відображ. зображ. якщо є книга в списку
    imagesToHide.forEach(image => {
      image.style.display = 'block';
    });
  }
}


containerBooks.addEventListener('click', removeButton);
function removeButton(event) {
  if (event.target.tagName != 'svg') return;
  let curentBookId = event.target.parentElement.dataset.bookid;
  if (!curentBookId) return;
  const userBucket = load('userBucket');
  const curentBook = [];
  const userBucketNew = userBucket.filter(
    iterator => iterator._id !== curentBookId
  );
  save('userBucket', userBucketNew);
  showBooks();
}

const load = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? [] : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
    return [];
  }
};
const save = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
};