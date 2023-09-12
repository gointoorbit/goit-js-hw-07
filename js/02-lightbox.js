import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

galleryItems.forEach((item) => {
  const galleryItem = document.createElement("li");
  //   galleryItem.classList.add("gallery__item");
  galleryItem.insertAdjacentHTML(
    "afterbegin",
    `<a class="gallery__item" href="${item.original}" onclick="return(false)"> <img class="gallery__image" src="${item.preview}" alt="${item.description}"/></a>`
  );
  gallery.append(galleryItem);
});

const modalBox = new SimpleLightbox(".gallery__item", {
  captionsData: "alt",
  captionDelay: 250,
});
