import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

const markup  = galleryItems
.map(({preview, original, description})=> {
  return `<div class=gallery__item>
  <a class="gallery__link" href="${original}">
  <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/>
  </a>
  </div>
   `
}).join('');

gallery.innerHTML = markup;


const onImageClick = event => (
  event.preventDefault(), event.target.nodeName === 'IMG' ? onOpenModalWindow(event) : false
);

gallery.addEventListener('click', onImageClick);

function onOpenModalWindow(event) {
  const pressEsc = event => (event.code === 'Escape' ? instance.close() : false);

  const instance = basicLightbox.create(
    `<img src = "${event.target.dataset.source}"
    width="1280" height="1024">`,
    {
      onShow: instance => {
        document.addEventListener('keydown', pressEsc);
      },
      onClose: instance => {
        document.removeEventListener('keydown', pressEsc);
      },
    }
  );
  instance.show();
}
console.log(galleryItems);
