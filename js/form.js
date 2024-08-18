import { isEscapeKey } from './util.js';

const form = document.querySelector('.img-upload__form');
const imgUploadInput = document.querySelector('.img-upload__input');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const uploadCancel = document.querySelector('#upload-cancel');
const textHashtags = form.querySelector('.text__hashtags');
const textDescription = form.querySelector('.text__description');
const scaleControlSmaller = form.querySelector('.scale__control--smaller');
const scaleControlBigger = form.querySelector('.scale__control--bigger');
const scaleControlValue = form.querySelector('.scale__control--value');
const imgUploadPreview = form.querySelector('.img-upload__preview img');

const QUANTITY_HASHTAG = 5;
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

  const hashtags = field.trim().split(/\s/);
  if (hashtags.length > QUANTITY_HASHTAG) {
    return false;
  }
  if (hashtags.some((element) => !element.match(HASHTAG))) {
    return false;
  }
  if (hashtags.length > [...new Set(hashtags)].length) {
    return false;
  }

  return true;
};

const changScale = () => {
  scaleControlValue.value = '100%';
  let scaleControlValueNumber = Number(scaleControlValue.value.slice(0, -1)) / 100;

  const transformPicture = (ValueNumber) => {
    imgUploadPreview.style.transform = `scale(${ValueNumber})`;
  };

  scaleControlSmaller.addEventListener('click', () => {

    if (scaleControlValueNumber > 0.25) {

      scaleControlValueNumber -= 0.25;
      scaleControlValue.value = `${scaleControlValueNumber * 100}%`;
      transformPicture(scaleControlValueNumber);
    }
  });

  scaleControlBigger.addEventListener('click', () => {

    if (scaleControlValueNumber < 1) {

      scaleControlValueNumber += 0.25;
      scaleControlValue.value = `${scaleControlValueNumber * 100}%`;
      transformPicture(scaleControlValueNumber);
    }
  });
};

const closeUserModal = () => {
  imgUploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  imgUploadInput.value = '';
};

const openUserModal = () => {
  imgUploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
  changScale();

};

function onDocumentKeydown(evt) {
  if (isEscapeKey(evt) && textHashtags !== document.activeElement && textDescription !== document.activeElement) {
    evt.preventDefault();
    closeUserModal();
  }
}

const initPictureForm = () => {
  pristine.addValidator(textHashtags,
    checkValidityMessages,
    'Хештег начинается со знака #, разделяются пробелами, не повторяются, максимальное количество хештегов - 5'
  );

  uploadCancel.addEventListener('click', () => {
    closeUserModal();
  });

  imgUploadInput.addEventListener('change', (evt) => {
    evt.preventDefault();
    openUserModal();
  });
};

export { initPictureForm };
