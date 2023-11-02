import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const list = document.querySelector(".gallery");

list.insertAdjacentHTML("afterbegin", createMarkUp(galleryItems));
list.addEventListener("click", openModal)

function openModal (event){
 if (event.target === event.currentTarget) {
    return;
 }
 const currentImg = event.target.closest(".gallery-item"); //.closest - looks for the closest parent elem.
 const currentImgPrev = currentImg.querySelector("img").getAttribute("src");
 const image = galleryItems.find(({preview}) => preview === currentImgPrev);
 const instance = basicLightbox.create(`
    <img src="${image.original}">
`)

instance.show();

document.addEventListener("keydown", closeModal);
   function closeModal(event) {
      if (event.key === "Escape") {
        instance.close();
        document.removeEventListener("keydown", closeModal);
      }
};
};

function createMarkUp (arr) {
    return arr
   .map (({preview, original, description}) =>`
    <li class = "gallery-item">
     <a class="gallery-link" href="${original}">
        <img 
            class="gallery-image" 
            src ="${preview}" 
            data-source="${original}" 
            alt ="${description}"
            width = "360"
        />
     </a>
    </li>
   `).join("")
};

const links = document.querySelectorAll(".gallery-link");

links.forEach (function(link){
link.addEventListener ("click", function (event) {
  event.preventDefault();
});
});

