import axios from 'axios';

axios.defaults.baseURL = 'https://books-backend.p.goit.global/books/';

//  Не чіпати - це запит для модалки!!!
export async function serviceModal(touchId) {
  const responce = await axios.get(`${touchId}`);
  return await responce.data; 
}
// !!!!!!
// В цьому файлі мають бути лише запити!!!! Такий як зверху!!! Без викликів функцій, без розмітки

// async function makeList() {
//   const result = axios.get('top-books');
//   const resultVal = await result.then(data => data.data);
//   const dta = await resultVal.map(val => val.list_name);
//   console.log(dta)
//   const markupLi = markup(dta);
//   list.insertAdjacentHTML('beforeend', markupLi);
// }


// makeList();

// // // ------------------------------------------------------------------ //

// const listOfBookFromCategory = document.querySelector(
//   '.listOfBookFromCategory'
// );

// list.addEventListener('click', e => {
//   const nameOfCategory = e.target.textContent;

//   async function makeRequest() {
//     const categoryList = axios.get(`category?category=${nameOfCategory}`);
//     const resReq = await categoryList.then(data => data.data);
//     const markupListBook = markupBookOfcategory(resReq);
//     listOfBookFromCategory.innerHTML = markupListBook;
//   }

//   makeRequest();
// });

// //-----------------------------------------------------//

// async function topFive() {
//   const result1 = axios.get('top-books');
//   const resultVal1 = await result1.then(data => data.data);
//   const dta = await resultVal1.map(e => e.books);
//   const booksTopFive = dta.map(e => e);
//   const markupForTopFive = markupTopFive(booksTopFive);
//   listOfBookFromCategory.innerHTML = await markupForTopFive;
// }

// topFive();

// //---------------------------------------------------------------//

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

// ============================================================ //


//===========================================================//
//===========================================================//
//===========================================================//
// list.addEventListener('click', e => {
//   const nameOfCategory = e.target.textContent;
//   if (nameOfCategory === 'All categories') {
//     topFive();
//   }
// });

// function markupAllCategories() {
//   return `     <li class="list-Elem" data-target="All categories">All categories</li> 
// `;
// }
// list.insertAdjacentHTML('afterbegin', markupAllCategories());
// markupAllCategories();

// function tabClick(evt) {
//   let tabs = document.getElementsByClassName('list-Elem');
//   let listTabs = Array.from(tabs);

//   for (let i = 0; i < listTabs.length; i++) {
//     listTabs[i].classList.remove('chose');
//   }
//   evt.target.classList.add('chose');
// }

// list.addEventListener('click', tabClick);
