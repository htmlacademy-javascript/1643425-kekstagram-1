import { isEscapeKey } from './util.js';
const bigPicture = document.querySelector('.big-picture');
const bigPictureCancel = document.querySelector('.big-picture__cancel');
const body = document.querySelector('body');
const commentsLoader = document.querySelector('.comments-loader');
const socialCommentCount = document.querySelector('.social__comment-count');
const socialComment = document.querySelector('.social__comment');
const socialCommentsContainer = document.querySelector('.social__comments');


const createCommentFragment = document.createDocumentFragment();

const renderComments = (array) => {

  array.forEach(({ avatar, name, message }) => {

    const commentElements = socialComment.cloneNode(true);
    commentElements.querySelector('.social__picture').src = avatar;
    commentElements.querySelector('.social__picture').alt = name;
    commentElements.querySelector('.social__text').textContent = message;

    createCommentFragment.appendChild(commentElements);
  });

  return socialCommentsContainer.appendChild(createCommentFragment);
};


const renderBigPhoto = (data) => {
  document.querySelector('.big-picture__img').querySelector('img').src = data.url;
  document.querySelector('.likes-count').textContent = data.likes;
  document.querySelector('.comments-count').textContent = data.comments.length;
  document.querySelector('.social__caption').textContent = data.description;
  socialCommentsContainer.innerHTML = ' ';
  renderComments(data.comments);
};

const creatingLargeImages = (data) => {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  commentsLoader.classList.add('hidden');
  socialCommentCount.classList.add('hidden');


  renderBigPhoto(data);
};


//закрытие модалки

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUserModal();
  }
};

function closeUserModal() {
  bigPictureCancel.addEventListener('click', () => {
    bigPicture.classList.add('hidden');
    body.classList.remove('modal-open');
    document.removeEventListener('keydown', onDocumentKeydown);
  });
}

bigPictureCancel.addEventListener('click', () => {
  closeUserModal();
});
export { creatingLargeImages };


