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

    // const imgEl = document.createElement('img');
    // imgEl.classList.add('gallery__image');
    // imgEl.src = el.preview;
    // // imgEl.dataset = el.original;
    // imgEl.alt = el.description;

    imagesContainer.append(el);
});

    // imagesContainer.addEventListener('click', e => {
    //     console.log(e.target.nodeName)
    // })