import { getRandomInteger } from './util.js';

const COUNT_PHOTO = 10;

const imgFilter = document.querySelector('.img-filters');
const filterDefault = document.querySelector('#filter-default');
const filterRandom = document.querySelector('#filter-random');
const filterDiscussed = document.querySelector('#filter-discussed');

export const showFilters = () => {
  imgFilter.classList.remove('img-filters--inactive');
};

const showRandomPhoto = () => {

};


filterRandom.addEventListener('change', showRandomPhoto);
