import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const  gallery = document.querySelector('.gallery');


// Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи./
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

gallery.insertAdjacentHTML("afterbegin", listNew);
