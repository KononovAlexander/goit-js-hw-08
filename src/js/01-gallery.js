// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";



const gallery = document.querySelector('.gallery');
function addPictures(object) {
    object.forEach(element => {
        gallery.insertAdjacentHTML(
            "afterbegin",
            `
            <a class="gallery__item" href="${element.original}">
                <img class="gallery__image" src="${element.preview}" alt="${element.description}"/>
            </a>`
        ) 
            new SimpleLightbox('.gallery a', {
                sourceAttr: 'href',
                overlay: true,
                overlayOpacity: 0.7,
                captionsData: "alt",
                captionDelay: 250
            })
    });
}


addPictures(galleryItems);