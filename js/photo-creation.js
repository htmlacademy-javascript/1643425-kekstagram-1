import { creatingLargeImages } from './big-picture.js';
import { pictures } from './data.js';
//import { renderGallery } from './big-picture.js';

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const container = document.querySelector('.pictures');


const createPhotoFragment = document.createDocumentFragment();

const renderPictures = (array) => {

  array.forEach(({ url, likes, comments, id }) => {

    const pictureElements = pictureTemplate.cloneNode(true);
    pictureElements.querySelector('.picture__img').src = url;
    pictureElements.querySelector('.picture__likes').textContent = likes;
    pictureElements.querySelector('.picture__comments').textContent = comments.length;
    pictureElements.dataset.pictureId = id;
    createPhotoFragment.appendChild(pictureElements);
  });

  return container.appendChild(createPhotoFragment);
};

const renderGallery = (picture) => {
  container.addEventListener('click', (evt) => {
    const availabilityPhoto = evt.target.closest('[data-picture-id]');

    if (!availabilityPhoto) {
      return;
    }
    const photos = picture.find((item) => item.id === +availabilityPhoto.dataset.pictureId);
    creatingLargeImages(photos);
  }
  );
};


export { renderPictures, renderGallery };
