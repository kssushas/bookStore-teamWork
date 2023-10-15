import axios from 'axios';
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
      return `      <li>
    <img src="${elem.book_image}" alt="" />
    <h1>${elem.title}</h1>
  </li>`;
    })
    .join('');
}

//-----------------------------------------------------//

// async function topFive() {
//   const result1 = axios.get('top-books');

//   const resultVal1 = await result1.then(data => data.data);
// console.log(resultVal1);
// const dta = awaFit resultVal1.map(e => e.books);
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
//   }
// }

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

async function topFive() {
  const result = axios.get('top-books');
  const resultVal = await result.then(data =>
    data.data.map(val => markupTopFive(val.list_name, val.books))
  );
}

function markupTopFive(category, arrBook) {
  // console.log(arrBook);
  // let titleSection = `<p class="title-section>${category}</h2>`;
  const book = arrBook
    .map(
      elem => `<li class="list-card"> 
                <img class="list-img" src="${elem.book_image}" alt="${elem._id}">
                <div class="">
                  <h3 class="list-title">${elem.title}</h3>
                  <p class="autor">${elem.author}</p>
                </div>   
               </li>`
    )
    .join('');
  // console.log(titleSection);
  listOfBookFromCategory.insertAdjacentHTML(
    'beforeend',
    `<div><h2>${category}</h2>
       <ul class="markup-list">${book}</ul>
       <button>SEE MORE</button>
     </div>`
  );
}

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
listOfBookFromCategory.addEventListener('click', e => {
  const touch = e.target.closest('li');
  const touchId = touch.dataset.id;
  forModal(touchId);
});
