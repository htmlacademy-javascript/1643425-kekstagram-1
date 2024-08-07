import { createDuplicatesPictures } from './data.js';
import { renderGallery } from './photo-creation.js';
const pictures = createDuplicatesPictures();

renderGallery(pictures);
