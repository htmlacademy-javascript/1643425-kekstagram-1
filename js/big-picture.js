const bigPicture = document.querySelector('.big-picture');
const bigPictureCancel = document.querySelector('.big-picture__cancel');

const creatingLargeImages = (picture) => {
  picture.addEventListener('click', () => {
    bigPicture.classList.remove('hidden');
  });
  //закрытие модалки
  bigPictureCancel.addEventListener('click', () => {
    bigPicture.classList.add('hidden');
  });
};
export { creatingLargeImages };
