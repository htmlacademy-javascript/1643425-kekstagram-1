const effectsRadio = document.querySelectorAll('.effects__radio');
const imgUploadPreview = document.querySelector('.img-upload__preview img');
const effectLevelValue = document.querySelector('.effect-level__value');
const imgUploadEffectLevel = document.querySelector('.img-upload__effect-level');
const sliderElement = document.querySelector('.effect-level__slider');


const addingEffectClass = () => {
  for (const element of effectsRadio) {
    element.addEventListener('click', () => {
      imgUploadPreview.removeAttribute('class');
      imgUploadPreview.classList.add(`effects__preview--${element.value}`);
    });
  }
};
addingEffectClass();

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 1,
  },
  start: 1,
  step: 0.1
});
