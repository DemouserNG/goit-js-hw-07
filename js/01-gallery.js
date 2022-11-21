import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const imagesContainer = document.querySelector(".gallery");


const list = creatGallary(galleryItems);
imagesContainer.insertAdjacentHTML("beforeend", list);


function creatGallary (el) {
  return el
    .map(({ preview, original, description }) => {
      return `
       <div class="gallery__item">
      <a class="gallery__link" href="${el.original}">
    <img
      class="gallery__image"
      src="${preview}"
     data-source="${original}"
     alt="${description}"
    />
  </a>
 </div>`;
    })
    .join("");
};

imagesContainer.addEventListener('click', onClick); 

function onClick(event) {
    event.preventDefault();

    if (event.target.nodeName === 'IMG') {
        const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">`)
        
        
        instance.show()
    }
    
};


