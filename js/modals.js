import { isEscapeKey } from './util.js';

const success = document.querySelector('#success').content.querySelector('.success');
const error = document.querySelector('#error').content.querySelector('.error');

const removeSucces = () => {
  document.body.removeChild(document.querySelector('.success'));
};

const removeError = () => {
  document.body.removeChild(document.querySelector('.error'));
};

const closeUserModal = () => {

  if (document.querySelector('.haserror')) {
    removeError();
  } else {
    removeSucces();
  }

  document.removeEventListener('keydown', onDocumentKeydown);
};

function onDocumentKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUserModal();
  }
}

export const showSuccesModal = () => {
  const successElement = success.cloneNode(true);

  document.body.append(successElement);
  document.addEventListener('keydown', onDocumentKeydown);
  document.querySelector('.success__button').addEventListener('click', () => {
    removeSucces();
  });

  successElement.addEventListener('click', (evt) => {
    if (evt.target === successElement) {
      removeSucces();
    }
  });
};

export const showErrorModal = () => {
  const errorElement = error.cloneNode(true);

  document.body.append(errorElement);
  document.body.querySelector('.error').classList.add('haserror');
  document.addEventListener('keydown', onDocumentKeydown);
  document.querySelector('.error__button').addEventListener('click', () => {
    removeError();
  });

  errorElement.addEventListener('click', (evt) => {
    if (evt.target === errorElement) {
      removeError();
    }
  });
};
