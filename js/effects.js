const effectsRadio = document.querySelectorAll('.effects__radio');
const imgUploadPreview = document.querySelector('.img-upload__preview img');
const effectLevelValue = document.querySelector('.effect-level__value');
const imgUploadEffectLevel = document.querySelector('.img-upload__effect-level');
const sliderElement = document.querySelector('.effect-level__slider');

const DATA_FOR_SLIDER = {
  'none': {
    filter: 'none',
    range: {
      min: 0,
      max: 100
    },
    step: 1,
    start: 100,
    unit: ''
  },
  'chrome': {
    filter: 'grayscale',
    range: {
      min: 0,
      max: 1
    },
    step: 0.1,
    start: 1,
    unit: ''
  },
  'sepia': {
    filter: 'sepia',
    range: {
      min: 0,
      max: 1
    },
    step: 0.1,
    start: 1,
    unit: ''

  },
  'marvin': {
    filter: 'invert',
    range: {
      min: 0,
      max: 100
    },
    step: 1,
    start: 100,
    unit: '%'
  },
  'phobos': {
    filter: 'blur',
    range: {
      min: 0,
      max: 3
    },
    step: 0.1,
    start: 3,
    unit: 'px'
  },
  'heat': {
    filter: 'brightness',
    range: {
      min: 1,
      max: 3
    },
    step: 0.1,
    start: 3,
    unit: ''
  }
};

const DEFAULT_EFFECTS = DATA_FOR_SLIDER['none'];

const resetEffect = () => {
  imgUploadPreview.style.removeProperty('filter');
  imgUploadPreview.className = 'none';
  imgUploadEffectLevel.classList.add('hidden');
};

const initSlider = (effect = DEFAULT_EFFECTS) => {
  noUiSlider.create(sliderElement, effect);
};

const createEffect = (shade, value, unit) => {
  const filter = unit ? `${shade}(${value}${unit})` : `${shade}(${value})`;
  imgUploadPreview.style.filter = filter;
};

const onEffectChange = (evt) => {
  const currentEffect = evt.target.value;
  imgUploadPreview.className = `effects__preview--${currentEffect}`;

  if (currentEffect === 'none') {
    resetEffect();
    return;
  }

  imgUploadEffectLevel.classList.remove('hidden');
  const sliderOptions = DATA_FOR_SLIDER[currentEffect];

  sliderElement.noUiSlider.updateOptions(sliderOptions);

  sliderElement.noUiSlider.on('update', () => {
    effectLevelValue.value = sliderElement.noUiSlider.get();
    createEffect(sliderOptions.filter, effectLevelValue.value, sliderOptions.unit);
  });
};

const initEffect = () => {
  initSlider();
  effectsRadio.forEach((element) => element.addEventListener('change', onEffectChange));
};

export { initEffect, resetEffect };

