import { renderGallery } from './photo-creation.js';
import { initPictureForm } from './form.js';
import { initScale } from './scale.js';
import { initEffect } from './effects.js';
import { getData } from './api.js';
import { showAlert } from './util.js';

initPictureForm();
initScale();
initEffect();

getData()
  .then((data) => {
    renderGallery(data);
  })
  .catch((err) => {
    showAlert(err.message);
  }
  );
