const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const container = document.querySelector('.pictures');


const createPhotoFragment = document.createDocumentFragment();

const renderPictures = (array) => {

  array.forEach(({ url, likes, comments }) => {

    const pictureElements = pictureTemplate.cloneNode(true);
    pictureElements.querySelector('.picture__img').src = url;
    pictureElements.querySelector('.picture__likes').textContent = likes;
    pictureElements.querySelector('.picture__comments').textContent = comments.length;
    createPhotoFragment.appendChild(pictureElements);
  });

  return container.appendChild(createPhotoFragment);
};


export { renderPictures };
