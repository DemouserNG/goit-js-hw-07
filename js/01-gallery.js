import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const imagesContainer = document.querySelector('.gallery')

galleryItems.forEach((el) => {
    imagesContainer.insertAdjacentHTML(
        'afterbegin',
        `<div class="gallery__item">
      <a class="gallery__link" href="${el.original}">
    <img
      class="gallery__image"
      src="${el.preview}"
      data-source="${el.original}"
      alt="${el.description}"
    />
  </a>
</div>`
    );


    imagesContainer.append(el);
});


imagesContainer.addEventListener('click', onClick); 

function onClick(event) {
    event.preventDefault();

    if (event.target.nodeName === 'IMG') {
        const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">`)
        
        
        instance.show()
    }
    
};


