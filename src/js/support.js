const supports = [
  {
    title: 'Save the Children',
    url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
    img: '/img/support/save-the-children@x2.png',
  },
  {
    title: 'Project HOPE',
    url: 'https://www.projecthope.org/country/ukraine/',
    img: '/img/support/project-hope@x2.png',
  },
  {
    title: 'UNITED24',
    url: 'https://u24.gov.ua/uk',
    img: '/img/support/united24@x2.png',
  },
  {
    title: 'International Medical Corps',
    url: 'https://internationalmedicalcorps.org/country/ukraine/',
    img: '/img/support/international-medical-corps@x2.png',
  },
  {
    title: 'Medicins Sans Frontieres',
    url: 'https://www.msf.org/ukraine',
    img: '/img/support/medecins-sans-frontires@x2.png',
  },
  {
    title: 'RAZOM',
    url: 'https://www.razomforukraine.org/',
    img: '/img/support/razom@x2.png',
  },
  {
    title: 'Action against hunger',
    url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
    img: '/img/support/action-against-hunger@x2.png',
  },
  {
    title: 'World vision',
    url: 'https://www.wvi.org/emergencies/ukraine',
    img: '/img/support/world-vision@x2.png',
  },
  {
    title: 'Serhiy Prytula Charity Foundation',
    url: 'https://prytulafoundation.org/en',
    img: '/img/support/sergiy-prytula@x2.png',
  },
];

const fondsContainer = document.querySelector('.js-support-list');
let counter = 1;
const markup = supports.map(item => {
  let numberCounter;
  numberCounter = '0' + counter;
  fondsContainer.innerHTML += `<div class="swiper-slide support-slider__item"><a href=${item.url} 
  target='_blank'><span>${numberCounter}</span><img src="${item.img}" alt="${item.title}" /></a></div>`;
  counter++;
});

import Swiper from 'swiper/bundle';
import { Navigation } from 'swiper/modules';

document.addEventListener('DOMContentLoaded', () => {
  const newSwiper = new Swiper('.swiper', {
    modules: [Navigation],
    direction: 'vertical',
    slidesPerView: 6,
    spaceBetween: 20,
    slidesPerGroup: 3,
    navigation: {
      nextEl: '.btn-swap-next',
      prevEl: '.btn-swap-prev',
    },
  });
});

