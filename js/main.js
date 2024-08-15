import { createDuplicatesPictures } from './data.js';
import { renderGallery } from './photo-creation.js';
import { unitPictureForm } from './form.js';

const pictures = createDuplicatesPictures();

renderGallery(pictures);
unitPictureForm();
