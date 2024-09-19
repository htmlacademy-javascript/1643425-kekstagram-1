import { initPictureForm } from './form.js';
import { renderGallery } from './photo-creation.js';
import { initScale } from './scale.js';
import { initEffect } from './effects.js';
import { getData } from './api.js';
import { showAlert } from './util.js';
import { setupFilter } from './filters.js';

initPictureForm();
initScale();
initEffect();

getData()
  .then((data) => {
    renderGallery(data);
    setupFilter(data);
  })
  .catch((err) => {
    showAlert(err.message);
  }
  );


