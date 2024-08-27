const effectsRadio = document.querySelectorAll('.effects__radio');
const imgUploadPreview = document.querySelector('.img-upload__preview img');
const effectLevelValue = document.querySelector('.effect-level__value');
const imgUploadEffectLevel = document.querySelector('.img-upload__effect-level');
const sliderElement = document.querySelector('.effect-level__slider');

const DATA_FOR_SLIDER = {
  'chrome': {
    filter: 'grayscale',
    minRange: 0,
    maxRange: 1,
    stepRange: 0.1,
    startRange: 1
  },
  'sepia': {
    filter: 'sepia',
    minRange: 0,
    maxRange: 1,
    stepRange: 0.1,
    startRange: 1
  },
  'marvin': {
    filter: 'invert',
    minRange: 0,
    maxRange: 100,
    stepRange: 1,
    startRange: 100
  },
  'phobos': {
    filter: 'blur',
    minRange: 0,
    maxRange: 3,
    stepRange: 0.1,
    startRange: 3
  },
  'heat': {
    filter: 'brightness',
    minRange: 1,
    maxRange: 3,
    stepRange: 0.1,
    startRange: 3
  }
};

const resetEffect = () => {
  imgUploadPreview.style.removeProperty('filter');
  imgUploadEffectLevel.classList.add('hidden');
};

const createEffect = (shade, value) => {
  imgUploadPreview.style.filter = `${shade}(${value})`;
};

const createDepthEffect = (filter, minRange, maxRange, stepRange, startRange) => {

  if (document.querySelector('.noUi-base')) {
    sliderElement.noUiSlider.destroy();
  }

  noUiSlider.create(sliderElement, {
    range: {
      min: minRange,
      max: maxRange,
    },
    start: startRange,
    step: stepRange
  });

  sliderElement.noUiSlider.on('update', () => {
    effectLevelValue.value = sliderElement.noUiSlider.get();
    createEffect(filter, effectLevelValue.value);
  });
};

const initEffect = () => {
  for (const element of effectsRadio) {

    element.addEventListener('change', () => {
      imgUploadPreview.removeAttribute('class');
      imgUploadPreview.classList.add(`effects__preview--${element.value}`);
      createDepthEffect(DATA_FOR_SLIDER[element.value].filter,
        DATA_FOR_SLIDER[element.value].minRange,
        DATA_FOR_SLIDER[element.value].maxRange,
        DATA_FOR_SLIDER[element.value].stepRange,
        DATA_FOR_SLIDER[element.value].startRange);

      // вот эту часть не знаю как реализовать element.value === 'none' не срабатывает)

      /* if (element.value === 'none') {
          imgUploadEffectLevel.classList.add('hidden');
          imgUploadPreview.style.removeProperty('filter');
        } */

    });
  }

};

export { initEffect };

