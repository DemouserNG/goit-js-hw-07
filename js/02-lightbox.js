import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const imagesContainer = document.querySelector(".gallery");

galleryItems.forEach((el) => {
  imagesContainer.insertAdjacentHTML(
    'afterbegin',

    `<a class="gallery__item" href="${el.original}">
     <img class="gallery__image" src="${el.preview}" alt="${el.description}" />

    </a>`)
  imagesContainer.innerHTML;
});



// const list = creatGallary(galleryItems);
// imagesContainer.insertAdjacentHTML("beforeend", list);



// function creatGallary (el) {
//   return el
//     .map(({ preview, original, description }) => {
//       return `
//         <a class="gallery__item"
//         href="${original}">
//         <img class="gallery__image"
//             src="${preview}" 
//             alt="${description}" />
//         </a>
//         `;
//     })
//     .join("");
// };




new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});


