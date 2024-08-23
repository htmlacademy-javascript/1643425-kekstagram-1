const effectsRadio = document.querySelectorAll('.effects__radio');
const imgUploadPreview = document.querySelector('.img-upload__preview img');
const effectLevelValue = document.querySelector('.effect-level__value');
const imgUploadEffectLevel = document.querySelector('.img-upload__effect-level');
const sliderElement = document.querySelector('.effect-level__slider');


/* Для эффекта «Хром» — filter: grayscale(0..1) с шагом 0.1;
Для эффекта «Сепия» — filter: sepia(0..1) с шагом 0.1;
Для эффекта «Марвин» — filter: invert(0..100 %) с шагом 1 %;
Для эффекта «Фобос» — filter: blur(0..3px) с шагом 0.1px;
Для эффекта «Зной» — filter: brightness(1..3) с шагом 0.1;
Для эффекта «Оригинал» CSS - стили filter удаляются. */

const DATAFORSLIDER = {
  'chrome': { filter: 'grayscale', min: 0, max: 1, step: 0.1 },
  'sepia': { filter: 'sepia', min: 0, max: 1, step: 0.1 },
  'marvin': { filter: 'invert', min: 0, max: `${100}%`, step: `${1}%` },
  'phobos': { filter: 'blur', min: 0, max: `${3}px`, step: `${0.1}px` },
  'heat': { filter: 'brightness', min: 1, max: 3, step: 0.1 },
};
console.log((DATAFORSLIDER)['chrome']['min']);
const findingKeysObject = (element) => {
  for (let i = 0; i < Object.keys(DATAFORSLIDER).length; i++) {
    if (Object.keys(DATAFORSLIDER)[i] === element.value) {
      return Object.keys(DATAFORSLIDER)[i], Object.keys(DATAFORSLIDER)[i]['filter'], Object.keys(DATAFORSLIDER)[i]['min'], Object.keys(DATAFORSLIDER)[i]['max'], Object.keys(DATAFORSLIDER)[i]['step'];
    }
  }
};

const createEffect = (shade, value) => {
  imgUploadPreview.style.filter = `${shade}(${value})`;
};
const createDepthEffect = (shade, minRange, maxRange, stepRange) => {
  debugger;
  noUiSlider.create(sliderElement, {
    range: {
      min: minRange,
      max: maxRange,
    },
    start: 1,
    step: stepRange
  });

  sliderElement.noUiSlider.on('update', () => {
    effectLevelValue.value = sliderElement.noUiSlider.get();
    createEffect(shade, effectLevelValue.value);
  });
};

const addingEffectClass = () => {
  for (const element of effectsRadio) {
    element.addEventListener('click', () => {
      imgUploadPreview.removeAttribute('class');
      imgUploadPreview.classList.add(`effects__preview--${element.value}`);
      console.log(findingKeysObject(element));
      createDepthEffect(findingKeysObject(element));
    });
  }
};
addingEffectClass();


