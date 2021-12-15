import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const  gallery = document.querySelector('.gallery');

let instance = {};


// 1.Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи./
const listNew = galleryItems.map(({ original, preview, description }) => 
     `<div class="gallery__item">
     <a class="gallery__link" href="large-image.jpg">
       <img
         class="gallery__image"
         src="${preview}"
      data-source="${original}"
      alt="${description}"
       />
     </a>
   </div>`).join("");;

gallery.insertAdjacentHTML("beforeend", listNew);

// 2.Реализация делегирования на div.gallery и получение url большого изображения.


function onClick(evt) {
    evt.preventDefault();
    
    if(evt.target.nodeName !== 'IMG'){
        return;
    }
    openModalWindow(evt.target.dataset.source);
}

gallery.addEventListener('click', onClick);

// 3.
function onCreateModal(pic) {
  return basicLightbox.create(`
    <img src="${pic}" width="800" height="600">
`);
}

// 4
function openModalWindow(pic) {
  instance = onCreateModal(pic);
  instance.show();
  document.addEventListener("keyup", pressEscapeInModal);
}


  function pressEscapeInModal(evt) {
    if (evt.code !== "Escape") {
      return;
    }
    instance.close();
    document.removeEventListener("keyup", pressEscapeInModal);
  }