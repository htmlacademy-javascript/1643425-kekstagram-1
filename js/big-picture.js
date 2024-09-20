import { isEscapeKey } from './util.js';

const bigPicture = document.querySelector('.big-picture');
const bigPictureCancel = document.querySelector('.big-picture__cancel');
const body = document.querySelector('body');
const commentsLoader = document.querySelector('.comments-loader');
const socialCommentCount = document.querySelector('.social__comment-count');
const socialComment = document.querySelector('.social__comment');
const socialCommentsContainer = document.querySelector('.social__comments');

let allComments = [];
let shownComments = 5;
const COMMENT_LIMIT = 5;

const renderComments = (comments) => {
  const createCommentFragment = document.createDocumentFragment();

  comments.forEach(({ avatar, name, message }) => {
    const commentElements = socialComment.cloneNode(true);

    commentElements.querySelector('.social__picture').src = avatar;
    commentElements.querySelector('.social__picture').alt = name;
    commentElements.querySelector('.social__text').textContent = message;

    createCommentFragment.appendChild(commentElements);
  });

  socialCommentsContainer.appendChild(createCommentFragment);
};

const onShowMoreButtonClick = () => {
  socialCommentsContainer.innerHTML = '';
  shownComments += 5;
  renderComments(allComments.slice(0, shownComments));
  //socialCommentCount.textContent = `${ allComments.slice(0, shownComments).length } из ${ allComments.length } комментариев`;
  console.log(allComments.length);

  if (allComments.slice(0, shownComments).length >= allComments.length) {
    commentsLoader.classList.add('hidden');
  }
};

const renderBigPhoto = (data) => {
  document.querySelector('.big-picture__img').querySelector('img').src = data.url;
  document.querySelector('.likes-count').textContent = data.likes;
  document.querySelector('.comments-count').textContent = data.comments.length;
  document.querySelector('.social__caption').textContent = data.description;
  socialCommentsContainer.innerHTML = '';
  renderComments(data.comments.slice(0, COMMENT_LIMIT));
  socialCommentCount.innerHtml = '10';
  //socialCommentCount.innerHtml = `${shownComments} из < span > ${data.comments.length}</span > `;
  //socialCommentCount.textContent = `${ shownComments } из ${ data.comments.length } комментариев`;
  allComments = data.comments;

  if (data.comments.length <= 5) {
    commentsLoader.classList.add('hidden');
  } else {
    commentsLoader.classList.remove('hidden');
    commentsLoader.addEventListener('click', onShowMoreButtonClick);
  }

};

const closeUserModal = () => {
  shownComments = 5;

  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
};

const openUserModal = () => {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
};

const renderBigPicture = (data) => {
  openUserModal();
  renderBigPhoto(data);
};

function onDocumentKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUserModal();
  }
}

bigPictureCancel.addEventListener('click', () => {
  closeUserModal();
});

export { renderBigPicture };


