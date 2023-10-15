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
