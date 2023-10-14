import './js/header.js';
import './js/allcategories.js';
import './js/modal.js';
import './js/support.js';
import './js/shoping-card.js';

// =======================
import axios from 'axios';

const list = document.querySelector('.js-list');

axios.defaults.baseURL = 'https://books-backend.p.goit.global/books/';

async function makeList() {
  const result = axios.get('top-books');
  const resultVal = await result.then(data => data.data);
  const dta = await resultVal.map(val => val.list_name);
  const markupLi = markup(dta);
  list.insertAdjacentHTML('beforeend', markupLi);
}

function markup(val) {
  return val
    .map(element => {
      return `<li class="li">${element}</li>`;
    })
    .join('');
}

makeList();

// ------------------------------------------------------------------ //

const listOfBookFromCategory = document.querySelector(
  '.listOfBookFromCategory'
);

list.addEventListener('click', e => {
  const nameOfCategory = e.target.textContent;

  async function makeRequest() {
    const categoryList = axios.get(`category?category=${nameOfCategory}`);
    const resReq = await categoryList.then(data => data.data);
    // const date = await resReq.map(cal => cal);
    const markupListBook = markupBookOfcategory(resReq);
    listOfBookFromCategory.innerHTML = markupListBook;
  }

  makeRequest();
});

function markupBookOfcategory(val) {
  return val
    .map(elem => {
      return `      <li>
    <img src="${elem.book_image}" alt="" />
    <h1>${elem.title}</h1>
  </li>`;
    })
    .join('');
}

//-----------------------------------------------------//

async function topFive() {
  const result1 = axios.get('top-books');
  const resultVal1 = await result1.then(data => data.data);
  const dta = await resultVal1.map(e => e.books);
  const booksTopFive = dta.map(e => e);
  const markupForTopFive = markupTopFive(booksTopFive);
  listOfBookFromCategory.innerHTML = await markupForTopFive;
}

function markupTopFive(val) {
  console.log(val);
  return val
    .map(element => {
      return element.map(
        e => `<ul>
               <li data-id="${e._id}">
                 <img src="${e.book_image}" width=150px alt="">
                 <h1>${e.title}</h1>
                 <h2>${e.author}</h2>
                 <p></p>
               </li>
              </ul>`
      );
    })
    .join('');
}

topFive();

//---------------------------------------------------------------//

// const modal = document.querySelector('.modal');

// const LS_KEY = 'book-inf';

// listOfBookFromCategory.addEventListener('click', e => {
//   const touch = e.target.closest('li');
//   const touchId = touch.dataset.id;

//   async function forModal() {
//     const result = axios.get(`${touchId}`);
//     const resultVal = await result.then(data => data.data);
//     const modalMake = makeModal(resultVal);
//     modal.innerHTML = modalMake;
//   }

//   forModal();
// });

// ============================================================ //
// function makeModal(val) {
//   return `<h1>MODAL</h1>
//   <img src=${val.book_image}>
//   <h2>${val.title}</h2>
//   <h3>${val.author}</h3>
//   <h4>${val.contibutor}</h4>
//   <button type="button" class="js-add"> add </button>
//   `;
// }

// list.addEventListener('click', e => {
//   const nameOfCategory = e.target.textContent;
//   if (nameOfCategory === 'All categories') {
//     topFive();
//   }
// });
// =========================================================

// try todo
// async function forShopList() {

//   const touch = e.target;
//   const touchId = touch.dataset.id;

//   const result = axios.get(`${touchId}`);
//   const resultVal = await result.then(data => data.data);
//   const modalMake = makeModal(resultVal);
//   modal.innerHTML = modalMake;

//   console.log(resultVal._id);

//   const bookID = resultVal._id ;
//   // console.log(bookID);

//   const LSproduct = JSON.parse(localStorage.getItem(LS_KEY)) || []
//   const IndexOfBook = LSproduct.findIndex(({ _id }) => _id === bookID)
//   if (IndexOfBook === -1) {
//     LSproduct.push(resultVal)
//   }

//   console.log(LSproduct)
// }

list.addEventListener('click', e => {
  const nameOfCategory = e.target;
  console.log(nameOfCategory);
  nameOfCategory.classList.toggle('choosen-category');
});
// =======================
