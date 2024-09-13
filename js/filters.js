import { getRandomNumbers } from './util.js';
import { renderGallery } from './photo-creation.js';

const COUNT_PHOTO = 10;

const imgFilter = document.querySelector('.img-filters');
const imgFiltersButton = document.querySelectorAll('.img-filters__button');


const showFilters = () => {
  imgFilter.classList.remove('img-filters--inactive');
};

const selectsPhoto = (arrayA, arrayB) => {
  const sharedArray = [];

  for (let i = 0; i < arrayA.length; i++) {
    sharedArray.push(arrayB[arrayA[i]]);
  }

  return sharedArray;
};

/* const showSelectedPhotos = (evt, data) => {
  if (evt.target.id === filterDefault) {
    console.log('выбран дефолт');
    renderGallery(data);
  }
  if (evt.target.id === filterRandom) {
    console.log('выбран рандом');
    renderGallery(selectsPhoto(getRandomNumbers(data, COUNT_PHOTO), data));
  }
 */
//selectsPhoto(getRandomNumbers(data, COUNT_PHOTO), data);
//};

const onFilterButtonClick = (evt, data) => {
  if (evt.target.id === 'filter-default') {
    console.log('выбран дефолт');
    renderGallery(data);
  }
  if (evt.target.id === 'filter-random') {
    console.log('выбран рандом');
    renderGallery(selectsPhoto(getRandomNumbers(data, COUNT_PHOTO), data));
  }
  if (evt.target.id === 'filter-discussed') {
    console.log('dsfsfdf');
  }
};

//const onFilterButtonClick = (evt) => console.log(evt.target.id)


const showSelectedFilter = (data) => {
  for (const element of imgFiltersButton) {
    element.addEventListener('click', (evt) => onFilterButtonClick(evt, data));
  }
};
//showSelectedFilter();
//imgFiltersButton.addEventListener('click', (evt) => evt, console.log('sdfds'));


const setupFilter = (data) => {
  //renderGallery(data);
  showFilters();
  showSelectedFilter(data);
};


export { showFilters, setupFilter };
