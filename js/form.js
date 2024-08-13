import { isEscapeKey } from './util.js';
const form = document.querySelector('.img-upload__form');
const imgUploadInput = document.querySelector('.img-upload__input');
//const imgUploadPreview = document.querySelector('.img-upload__preview img');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const uploadCancel = document.querySelector('#upload-cancel');
const textHashtags = form.querySelector('.text__hashtags');
const hashtag = /^#[a-zа-яё0-9]{1,19}$/i;

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--invalid',
  successClass: 'img-upload__field-wrapper--valid',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'span',
  errorTextClass: 'img-upload__error'
});
const checkValidityMessages = (field) => {
  addEventListener('input', () => {

    const fieldValue = field.trim().split(/\s/);


    if (fieldValue.length <= 5) {
      return true;
    } {
      return false;
    }

  });

};
const triam = (value) => {
  // here `this` refers to the respective input element
  if (value.length <= 5) {
    return true;
  } {
    return false;
  }
};
//const validateHashtag = (value) => checkingValidityMessages.test(value);

//pristine.addValidator(textHashtags, checkValidityMessages(textHashtags), 'не корректные символы');

pristine.addValidator(textHashtags, checkValidityMessages, 'ошибка');

/* form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const isValid = pristine.validate();
  if (isValid) {
    console.log('Можно отправлять');
  } else {
    console.log('Форма невалидна');
  }
}); */
//модалка
const openUserModal = () => {
  imgUploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
  //checkValidityMessages(textHashtags);
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
//закрытие модалки
const closeUserModal = () => {
  imgUploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  imgUploadInput.value = '';
};

uploadCancel.addEventListener('click', () => {
  closeUserModal();
});
