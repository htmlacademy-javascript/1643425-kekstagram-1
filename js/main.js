import { createDuplicatesPictures } from './data.js';
import { renderGallery } from './photo-creation.js';
import { initPictureForm } from './form.js';

const pictures = createDuplicatesPictures();

renderGallery(pictures);
initPictureForm();
