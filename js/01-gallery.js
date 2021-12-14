import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const  gallery = document.querySelector('.gallery');


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

gallery.insertAdjacentHTML("afterbegin", listNew);

// 2.Реализация делегирования на div.gallery и получение url большого изображения.

gallery.addEventListener('click', onClick);

function onClick(evt) {
    evt.preventDefault();
    
    if(evt.target.nodeName !== 'IMG'){
        return;
    }
}
