import { getRandomNumbers, selectsPhoto } from './util.js';
import { renderGallery } from './photo-creation.js';

const COUNT_PHOTO = 10;

const imgFilter = document.querySelector('.img-filters');
const imgFiltersButton = document.querySelectorAll('.img-filters__button');

const showFilters = () => {
  imgFilter.classList.remove('img-filters--inactive');
};

const changClass = (evt) => {
  document.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
  document.querySelector(`#${evt}`).classList.add('img-filters__button--active');
};

const sortingComments = (photoA, photoB) => photoB.comments.length - photoA.comments.length;

const onFilterButtonClick = (evt, data) => {

  if (evt.target.id === 'filter-default') {
    document.querySelectorAll('.picture').forEach((element) => {
      element.remove();
    });

    changClass(evt.target.id);
    renderGallery(data);
  }

  if (evt.target.id === 'filter-random') {
    changClass(evt.target.id);
    document.querySelectorAll('.picture').forEach((element) => {
      element.remove();
    });

    renderGallery(selectsPhoto(getRandomNumbers(data, COUNT_PHOTO), data));
  }

  if (evt.target.id === 'filter-discussed') {
    document.querySelectorAll('.picture').forEach((element) => {
      element.remove();
    });

    changClass(evt.target.id);
    renderGallery(data.slice().sort(sortingComments));
  }

};

const showSelectedFilter = (data) => {
  for (const element of imgFiltersButton) {
    element.addEventListener('click', (evt) => onFilterButtonClick(evt, data));
  }
};

const setupFilter = (data) => {
  showFilters();
  showSelectedFilter(data);
};

export { showFilters, setupFilter };
