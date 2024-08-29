import { createDuplicatesPictures } from './data.js';
import { renderGallery } from './photo-creation.js';
import { initPictureForm } from './form.js';
import { initScale } from './scale.js';
import { initEffect } from './effects.js';

const pictures = createDuplicatesPictures();

renderGallery(pictures);
initPictureForm();
initScale();
initEffect();
