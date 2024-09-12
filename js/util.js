const ALERT_SHOW_TIME = 5000;


const isEscapeKey = (evt) => evt.key === 'Escape';

const showAlert = (message, color = 'red') => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = color;

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};
const a = [1, 2, 3, 4, 5, 5, 5, 4, 37, 7];

const getRandomInteger = (array, countPhoto) => {
  const temporary = [];

  for (let i = 0; i < array.length; i++) {
    const randomNumber = Math.floor(Math.random() * array.length);

    if (!temporary.some((element) => element === randomNumber)) {
      temporary.push(randomNumber);
    }

  }
  return temporary.slice(0, countPhoto);
};

console.log(getRandomInteger(a, 3));

export {
  isEscapeKey,
  showAlert,
  getRandomInteger
};
