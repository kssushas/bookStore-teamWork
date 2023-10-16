import axios from 'axios';

axios.defaults.baseURL = 'https://books-backend.p.goit.global/books/';

//  Не чіпати - це запит для модалки!!!
export async function serviceModal(touchId) {
  const responce = await axios.get(`${touchId}`);
  return await responce.data;
}
// !!!!!!
// В цьому файлі мають бути лише запити!!!! Такий як зверху!!! Без викликів функцій, без розмітки

export async function makeList() {
  return axios.get('top-books').then(response => {
    if (response.status !== 200) {
      throw new Error(response.status);
    }
    return response.data;
  });
}

// makeList();

// // // ------------------------------------------------------------------ //

// const listOfBookFromCategory = document.querySelector(
//   '.listOfBookFromCategory'
// );

// list.addEventListener('click', e => {
//   const nameOfCategory = e.target.textContent;

export async function booksOfCurrentCategory(nameOfCategory) {
  return axios.get(`category?category=${nameOfCategory}`).then(response => {
    if (response.status !== 200) {
      throw new Error(response.status);
    }
    return response.data;
  });
}

//   makeRequest();
// });

// //-----------------------------------------------------//

export async function topFive() {
  return axios.get('top-books').then(response => {
    if (response.status !== 200) {
      throw new Error(response.status);
    }
    return response.data;
  });
}

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

// function markupAllCategories() {
//   return `     <li class="list-Elem" data-target="All categories">All categories</li> 
// `;
// }
// // console.log(markupAllCategories())
// list.insertAdjacentHTML('afterbegin', markupAllCategories());
// markupAllCategories();

// list.addEventListener('click', e => {
//   const nameOfCategory = e.target.textContent;
//   if (nameOfCategory === 'All categories') {
//     topFive();
//   }
// });

// function tabClick(evt) {
//   let tabs = document.getElementsByClassName('list-Elem');
//   let listTabs = Array.from(tabs);

//   for (let i = 0; i < listTabs.length; i++) {
//     listTabs[i].classList.remove('chose');
//   }
//   evt.target.classList.add('chose');
// }

// list.addEventListener('click', tabClick);
