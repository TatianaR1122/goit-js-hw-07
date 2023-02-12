import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');

const markup  = galleryItems
.map(({preview, original, description})=> {
  return `
  <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}"/>
  </a>
  
   `
}).join('');

gallery.innerHTML = markup;

let galleryEl = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    animationSpeed: 250,
  });
  console.log(SimpleLightbox);

console.log(galleryItems);


