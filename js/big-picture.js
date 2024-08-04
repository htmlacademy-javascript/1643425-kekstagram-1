const bigPicture = document.querySelector('.big-picture');
const bigPictureCancel = document.querySelector('.big-picture__cancel');
const body = document.querySelector('body');
const commentsLoader = document.querySelector('.comments-loader');
const socialCommentCount = document.querySelector('.social__comment-count');

const creatingLargeImages = (data) => {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  commentsLoader.classList.add('hidden');
  socialCommentCount.classList.add('hidden');
};


//закрытие модалки
bigPictureCancel.addEventListener('click', () => {
  bigPicture.classList.add('hidden');
});


export { creatingLargeImages };


