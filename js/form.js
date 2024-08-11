const form = document.querySelector('.img-upload__form');
const imgUploadInput = document.querySelector('.img-upload__input');
const imgUploadPreview = document.querySelector('.img-upload__preview img');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');


new Pristine(form);

imgUploadInput.addEventListener('change', (event) => {
  imgUploadOverlay.classList.remove('hidden');
  imgUploadPreview.src = event.target;
});

