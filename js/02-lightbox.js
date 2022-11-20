import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const imagesContainer = document.querySelector('.gallery')

galleryItems.forEach((el) => {
    imagesContainer.insertAdjacentHTML(
        'afterbegin',
        `<a class="gallery__item" href="${el.original}">
  <img class="gallery__image" src="${el.preview}" alt="${el.description}" />
</a>`
    )
    imagesContainer.append(el);
    
    
});

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});


