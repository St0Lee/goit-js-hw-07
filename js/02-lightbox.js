import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const list = document.querySelector(".gallery");

list.insertAdjacentHTML("afterbegin", createMarkUp(galleryItems));

function createMarkUp (arr) {
    return arr
   .map (({preview, original, description}) =>`
    <li class = "gallery-item">
     <a class="gallery-link" href="${original}">
        <img 
            class="gallery-image" 
            src ="${preview}" 
            alt ="${description}"
            width = "360"
        />
     </a>
    </li>
   `).join("")
};

var lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: 250
 });

