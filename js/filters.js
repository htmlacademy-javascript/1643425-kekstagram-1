import { debounce, getRandomNumbers } from './util.js';
import { renderPictures } from './photo-creation.js';


const COUNT_PHOTO = 10;

const imgFilter = document.querySelector('.img-filters');
const imgFiltersButton = document.querySelectorAll('.img-filters__button');

const showFilters = () => {
  imgFilter.classList.remove('img-filters--inactive');
};

const changeActiveButton = (evt) => {
  document.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
  evt.target.classList.add('img-filters__button--active');
};

const sortingComments = (a, b) => b.comments.length - a.comments.length;

const deletePictures = () => {
  document.querySelectorAll('.picture').forEach((element) => {
    element.remove();
  });
};

const processFilter = debounce((id, data) => {

  let filteredData = [];

  switch (id) {
    case 'filter-default':
      filteredData = data;
      break;
    case 'filter-random':
      filteredData = getRandomNumbers(data, COUNT_PHOTO);
      break;
    case 'filter-discussed':
      filteredData = data.slice().sort(sortingComments);
      break;
    default:
      throw new Error('Unknown filter');
  }

  deletePictures();
  renderPictures(filteredData);
});

const onFilterButtonClick = (evt, data) => {
  changeActiveButton(evt);
  processFilter(evt.target.id, data);
};

const setupFilter = (data) => {
  showFilters();

  for (const element of imgFiltersButton) {
    element.addEventListener('click', (evt) => onFilterButtonClick(evt, data));
  }
};

export { showFilters, setupFilter };
