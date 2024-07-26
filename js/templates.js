import { creatingDuplicatesPictures } from './data.js';

const randomImages = document.querySelector('#picture').content.querySelector('.picture');
const container = document.querySelector('.pictures');

const createPictures = creatingDuplicatesPictures();
const similarListFragment = document.createDocumentFragment();

createPictures.forEach(({ url, likes, comments }) => {

  const pictureElements = randomImages.cloneNode(true);
  pictureElements.querySelector('.picture__img').src = url;
  pictureElements.querySelector('.picture__likes').textContent = likes;
  pictureElements.querySelector('.picture__comments').textContent = comments.length;
  similarListFragment.appendChild(pictureElements);
});

container.appendChild(similarListFragment);
