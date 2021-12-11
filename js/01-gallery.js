import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const  gallery = document.querySelector('gallery');
const listNew = galleryItems
 .map(galleryItems => `<li class="gallery__item">
                     <img class="gallery__img" src="${galleryItems.preview}" alt="${galleryItems.description}" width="630" height="375">
                 </li>`);
//gallery.addEventListener('click' );
//gallery.insertAdjacentHTML("afterbegin", listNew)