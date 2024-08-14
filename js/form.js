import { isEscapeKey } from './util.js';
const form = document.querySelector('.img-upload__form');
const imgUploadInput = document.querySelector('.img-upload__input');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const uploadCancel = document.querySelector('#upload-cancel');
const textHashtags = form.querySelector('.text__hashtags');
const textDescription = form.querySelector('.text__description');

const HASHTAG = /^#[a-zа-яё0-9]{1,19}$/i;

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--invalid',
  successClass: 'img-upload__field-wrapper--valid',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'p',
  errorTextClass: 'img-upload__error'
});

const checkValidityMessages = (field) => {

  const fieldValue = field.trim().split(/\s/);
  if ((fieldValue.length <= 5 && fieldValue.every((element) => element.match(HASHTAG)) &&
    !fieldValue.some((item, i, arr) => arr.indexOf(item, i + 1) >= i + 1))) {
    return true;
  } {
    return false;
  }
};

pristine.addValidator(textHashtags, checkValidityMessages, 'Хештег начинается со знака #, разделяются пробелами, не повторяются, максимальное количество хештегов - 5');

const openUserModal = () => {
  imgUploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
};

imgUploadInput.addEventListener('change', (evt) => {
  evt.preventDefault();
  openUserModal();
});

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUserModal();
  }
};

const closeUserModal = () => {
  imgUploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  imgUploadInput.value = '';
};

uploadCancel.addEventListener('click', () => {
  closeUserModal();
});

textHashtags.addEventListener('keydown', (event) => {
  if (isEscapeKey(event)) {
    event.stopPropagation();
  }
});
textDescription.addEventListener('keydown', (event) => {
  if (isEscapeKey(event)) {
    event.stopPropagation();
  }
});
