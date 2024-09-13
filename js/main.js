import { renderGallery } from './photo-creation.js';
import { initPictureForm } from './form.js';
import { initScale } from './scale.js';
import { initEffect } from './effects.js';
import { getData } from './api.js';
import { showAlert } from './util.js';
//import { setupFilter } from './filters.js';
import { showFilters, setupFilter } from './filters.js';
import './filters.js';

initPictureForm();
initScale();
initEffect();
showFilters();

getData()
  .then((data) => {
    //renderGallery(data);
    setupFilter(data);

  })
  .catch((err) => {
    showAlert(err.message);
  }
  );


