const form = document.querySelector('.img-upload__form');
const scaleControlSmaller = form.querySelector('.scale__control--smaller');
const scaleControlBigger = form.querySelector('.scale__control--bigger');
const scaleControlValue = form.querySelector('.scale__control--value');
const imgUploadPreview = form.querySelector('.img-upload__preview img');
const SCALE_STEP = 0.25;

const transformPicture = (valueNumber) => {
  imgUploadPreview.style.transform = `scale(${valueNumber})`;
};

const changScale = () => {

  let scaleControlValueNumber = parseInt(scaleControlValue.value, 10) / 100;
  scaleControlValue.value = `${scaleControlValueNumber * 100}%`;
  transformPicture(scaleControlValueNumber);


  const onButtonSmallerClick = () => {
    scaleControlSmaller.addEventListener('click', () => {
      if (scaleControlValueNumber > SCALE_STEP) {
        scaleControlValueNumber -= SCALE_STEP;
      }
    });

    scaleControlBigger.addEventListener('click', () => {
      if (scaleControlValueNumber < 1) {
        scaleControlValueNumber += SCALE_STEP;

      }
    });
  };
};

const initScale = () => {
  scaleControlValue.value = '100%';
  scaleControlSmaller.addEventListener('click', onButtonSmallerClick);
  scaleControlBigger.addEventListener('click', onButtonSmallerClick);
};


export { initScale };
