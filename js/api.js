
import { isEscapeKey } from './util.js';

const bodyContainer = document.querySelector('body');
const success = document.querySelector('#success').content.querySelector('.success');


const BASE_URL = 'https://28.javascript.htmlacademy.pro/kekstagram';
const Route = {
  GET_DATA: '/data',
  SEND_DATA: '/',
};
const Method = {
  GET: 'GET',
  POST: 'POST',
};
const ErrorText = {
  GET_DATA: 'Не удалось загрузить данные. Попробуйте обновить страницу',
  SEND_DATA: 'Не удалось отправить форму. Попробуйте ещё раз',
};

const closeUserModal = () => {
  bodyContainer.removeChild(document.querySelector('.success'));
  document.removeEventListener('keydown', onDocumentKeydown);
};

function onDocumentKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUserModal();
  }
}

const showMessageWhenUploadingImages = () => {
  const createMessageFragment = document.createDocumentFragment();

  const successElement = success.cloneNode(true);
  createMessageFragment.append(successElement);
  bodyContainer.append(createMessageFragment);
  document.addEventListener('keydown', onDocumentKeydown);
  document.querySelector('.success__button').addEventListener('click', () => {

    closeUserModal();
  });
};

const load = (route, errorText, method = Method.GET, body = null) =>
  fetch(`${BASE_URL}${route}`, { method, body })
    .then((response) => {
      if (method === Method.POST && response.ok) {
        showMessageWhenUploadingImages();
      }
      if (!response.ok) {
        throw new Error();
      }
      return response.json();
    })
    .catch(() => {
      throw new Error(errorText);
    });

const getData = () => load(Route.GET_DATA, ErrorText.GET_DATA);

const sendData = (body) => load(Route.SEND_DATA, ErrorText.SEND_DATA, Method.POST, body,);


export { getData, sendData };
