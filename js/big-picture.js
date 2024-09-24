import { isEscapeKey } from './util.js';

const COMMENT_LIMIT = 5;

const bigPicture = document.querySelector('.big-picture');
const bigPictureCancel = document.querySelector('.big-picture__cancel');
const commentsLoader = document.querySelector('.comments-loader');
const socialComment = document.querySelector('.social__comment');
const socialCommentsContainer = document.querySelector('.social__comments');
const socialCommentCount = document.querySelector('.social__comment-count');

let allComments = [];
let shownComments = COMMENT_LIMIT;


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

const setPhotoDescription = (shown, all) => {
  socialCommentCount.innerHTML = `${shown} из <span class="comments-count">${all}</span> комментариев`;
};

const onShowMoreButtonClick = () => {
  renderComments(allComments.slice(shownComments, shownComments + COMMENT_LIMIT));
  shownComments += 5;

  //socialCommentCount.innerHTML = `${allComments.slice(0, shownComments).length} из <span class="comments-count">${allComments.length}</span> комментариев`;
  setPhotoDescription(shownComments, allComments.length);

  if (shownComments >= allComments.length) {
    commentsLoader.classList.add('hidden');
  }
};

const renderBigPhoto = (data) => {
  bigPicture.querySelector('.big-picture__img').querySelector('img').src = data.url;
  bigPicture.querySelector('.likes-count').textContent = data.likes;
  bigPicture.querySelector('.comments-count').textContent = data.comments.length;
  bigPicture.querySelector('.social__caption').textContent = data.description;
  socialCommentsContainer.innerHTML = '';
  renderComments(data.comments.slice(0, COMMENT_LIMIT));

  allComments = data.comments;

  setPhotoDescription(shownComments, allComments.length);

  if (data.comments.length <= COMMENT_LIMIT) {
    commentsLoader.classList.add('hidden');
  } else {
    commentsLoader.classList.remove('hidden');
    commentsLoader.addEventListener('click', onShowMoreButtonClick);
  }
};

const closeUserModal = () => {
  shownComments = COMMENT_LIMIT;

  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  commentsLoader.removeEventListener('click', onShowMoreButtonClick);
};

const openUserModal = () => {
  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');
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


