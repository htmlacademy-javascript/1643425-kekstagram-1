const imgUploadInput = document.querySelector('.img-upload__input');
const imgUploadPreview = document.querySelector('.img-upload__preview').querySelector('img');
const effectsPreview = document.querySelectorAll('.effects__preview');

const FILE_TYPES = ['jpg', 'jpeg', 'png', 'webp'];

const onInputChange = () => {
  const file = imgUploadInput.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    const urlPhoto = URL.createObjectURL(file);
    imgUploadPreview.src = urlPhoto;

    for (const element of effectsPreview) {
      element.style.backgroundImage = `url(${urlPhoto})`;
    }
  }
};

export const addPhoto = () => {
  imgUploadInput.addEventListener('change', onInputChange);
};
