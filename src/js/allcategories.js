import axios from 'axios';
//Це Функція виклику модалки!!!
import { forModal } from './modal';

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
      return `<li class="list-elem"  data-target="${element}">${element}</li>`;
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
    const markupListBook = markupBookOfcategory(resReq);
    listOfBookFromCategory.innerHTML = markupListBook;
  }

  makeRequest();
});

function markupBookOfcategory(val) {
  return val
    .map(elem => {
      return ` <li data-id="${elem._id}">
    <img src="${elem.book_image}" alt="" />
    <h1>${elem.title}</h1>
  </li>`;
    })
    .join('');
}

//-----------------------------------------------------//

// async function topFive1() {
//   const result1 = axios.get('top-books');

//   const resultVal12 = await result1.then(data => data.data);
//   console.log(resultVal12);
// const dta = awaFit resultVal12.map(e => e.books);
// console.log(dta);
// const booksTopFive = dta.last_name;
// console.log(booksTopFive);
// for (let i = 0; i < dta.length; i++) {
//   let category;
//   for (const data of dta[i]) {
//     category = data.list_name;
//   }
// console.log(category);
// console.log(dta[i]);

// let markupForTopFive = markupTopFive(dta[i]);
// console.log(markupForTopFive);
//     listOfBookFromCategory.insertAdjacentHTML('beforeend', markupForTopFive);
// }
// }
// topFive1();
// const catName = document.querySelector('.cat');
// console.log(catName.textContent);

// async function topFive() {
//   const result1 = axios.get('top-books');
//   const resultVal1 = await result1.then(data => data.data);
//   const dta = await resultVal1.map(e => e.books);

//   function myFunc() {
//     dta.map(val =>
//       val.map(elm => {
//         // console.log(elm.list_name);
//         // console.log(catName.textContent)
//         if (catName.textContent === elm.list_name) {
//           // console.log(catName.textContent);
//           const markupForTopFive = markupTopFive(val);
//           listOfBookFromCategory.innerHTML = markupForTopFive;
//         }
//       })
//     );
//   }

//   myFunc();
// }

// function markupTopFive(val) {
//   return (
//     val
//       .map(
//         e => `<li data-id="${e._id}" class="list-card">
//                  <img src="${e.book_image}" alt="" class="list-img">
//                  <h3>${e.title}</h3>
//                  <h4 class="autor">${e.author}</h4>

//                </li>`
//       )
//       // })
//       .join('')
//   );
// }

async function topFive() {
  const result = axios.get('top-books');
  const resultVal = await result.then(data =>
    data.data.map(val => markupTopFive(val.list_name, val.books))
  );
}

function markupTopFive(category, arrBook) {
  const book = arrBook
    .map(
      elem => `<li class="js-list-card" data-id="${elem._id}"> 
                <img class="js-list-img" src="${elem.book_image}" alt="${elem._id}">
                <div class="js-list-text">
                  <h4 class="js-list-title">${elem.title}</h4>
                  <p class="js-autor">${elem.author}</p>
                </div>   
               </li>`
    )
    .join('');

  listOfBookFromCategory.insertAdjacentHTML(
    'beforeend',
    `<div>
       <h3 class="js-markup-category">${category}</h3>
       <ul class="js-markup-list">${book}</ul>
       <div class="js-button-more"><button class="js-see-more">See more</button></div>
     </div>`
  );
}

const listHeader = document.querySelector('.list-header');
listHeader.insertAdjacentHTML(
  'beforeend',
  `<h2 class="top-list-header">
  Best Sellers <span class="top-list-header-span">Books</span>
</h2>`
);

topFive();

//---------------------------------------------------------------//

// const modal = document.querySelector('.modal');

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

// // ============================================================ //
// function makeModal(val) {
//   return `<h1>MODAL</h1>
//   <img src=${val.book_image}>
//   <h2>${val.title}</h2>
//   <h3>${val.author}</h3>
//   <h4>${val.contibutor}</h4>
//   <button type="button" class="js-add"> add </button>
//   `;
// }


// Це виклик модалки
listOfBookFromCategory.addEventListener('click', e => {
  const touch = e.target.closest('li');
  const touchId = touch.dataset.id;
  forModal(touchId);
});
