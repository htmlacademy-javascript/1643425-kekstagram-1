const form = document.querySelector('.img-upload__form');
const scaleControlSmaller = form.querySelector('.scale__control--smaller');
const scaleControlBigger = form.querySelector('.scale__control--bigger');
const scaleControlValue = form.querySelector('.scale__control--value');
const imgUploadPreview = form.querySelector('.img-upload__preview img');
const SCALE_STEP = 0.25;
const DEFAULT_SCALE = 1;


const transformPicture = (scaleControlValueNumber) => {
  imgUploadPreview.style.transform = `scale(${scaleControlValueNumber})`;
};

const resetScale = () => {
  transformPicture(DEFAULT_SCALE);
};

const changScale = (scaleControlValueNumber) => {

  scaleControlValue.value = `${scaleControlValueNumber * 100}%`;
  transformPicture(scaleControlValueNumber);
};

const onButtonSmallerClick = () => {
  let scaleControlValueNumber = parseInt(scaleControlValue.value, 10) / 100;

  if (scaleControlValueNumber > SCALE_STEP) {
    scaleControlValueNumber -= SCALE_STEP;

    changScale(scaleControlValueNumber);
  }
};

const onButtonBiggerClick = () => {
  let scaleControlValueNumber = parseInt(scaleControlValue.value, 10) / 100;

  if (scaleControlValueNumber < 1) {
    scaleControlValueNumber += SCALE_STEP;

    changScale(scaleControlValueNumber);
  }
};


const initScale = () => {

  scaleControlSmaller.addEventListener('click', onButtonSmallerClick);
  scaleControlBigger.addEventListener('click', onButtonBiggerClick);
};


export { initScale, resetScale };
