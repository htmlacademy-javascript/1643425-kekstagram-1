const imgUploadInput = document.querySelector('.img-upload__input');
const imgUploadPreview = document.querySelector('.img-upload__preview').querySelector('img');

const FILE_TYPES = ['jpg', 'jpeg', 'png', 'webp'];

const waitingForPhoto = () => {

  const file = imgUploadInput.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    imgUploadPreview.src = URL.createObjectURL(file);
  }
};

export const addingPhoto = () => {
  imgUploadInput.addEventListener('change', waitingForPhoto);
};
