import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

galleryItems.forEach((item) => {
  const galleryItem = document.createElement("div");
  galleryItem.classList.add("gallery__item");
  galleryItem.insertAdjacentHTML(
    "afterbegin",
    `<a class="gallery__link" href="${item.original}" onclick="return(false)"> <img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}"/></a>`
  );
  gallery.append(galleryItem);
});

gallery.addEventListener("click", modalWindow);

function modalWindow(event) {
  if (event.target.nodeName === "IMG") {
    const modalBox = basicLightbox.create(
      `<img src="${event.target.dataset.source}"/>`
    );
    modalBox.show();

    const closeModalBox = (event) => {
      if (event.code === "Escape") {
        modalBox.close();
        document.removeEventListener("keydown", closeModalBox);
      }
    };
    document.addEventListener("keydown", closeModalBox);
  }
}
