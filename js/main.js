import { renderGallery } from './photo-creation.js';
import { initPictureForm } from './form.js';
import { initScale } from './scale.js';
import { initEffect } from './effects.js';
import { closeUserModal } from './form.js';
import { setUserFormSubmit } from './form.js';
import { getData } from './api.js';
import { showAlert } from './util.js';

initPictureForm();
initScale();
initEffect();

getData()
  .then((dataPhoto) => {
    renderGallery(dataPhoto);
  })
  .catch(
    (err) => {
      showAlert(err.message);
    }
  );

setUserFormSubmit(closeUserModal);
