import { isEscapeKey } from './util.js';

const success = document.querySelector('#success').content.querySelector('.success');
const error = document.querySelector('#error').content.querySelector('.error');

const closeUserModal = () => {
  document.body.removeChild(document.querySelector('.success'));
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
    document.body.removeChild(document.querySelector('.success'));
  });

  successElement.addEventListener('click', (evt) => {
    if (evt.target === successElement) {
      document.body.removeChild(document.querySelector('.success'));
    }
  });
};

export const showErrorModal = () => {
  const errorElement = error.cloneNode(true);

  document.body.append(errorElement);
  document.addEventListener('keydown', onDocumentKeydown);
  document.querySelector('.error__button').addEventListener('click', () => {
    document.body.removeChild(document.querySelector('.error'));
  });

  errorElement.addEventListener('click', (evt) => {
    if (evt.target === errorElement) {
      document.body.removeChild(document.querySelector('.error'));
    }
  });
};
