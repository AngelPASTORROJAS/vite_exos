import bird from './../assets/img/blackbird.jpg'
import butterfly from './../assets/img/butterfly.jpg';
import flowers from './../assets/img/flowers.jpg';
import nature from './../assets/img/nature.jpg';

const images = [
    { src: bird, name: 'bird'},
    { src: butterfly, name: 'butterfly'},
    { src: flowers, name: 'flowers'},
    { src: nature, name: 'nature'},
]

const Images = () => {
    return <>
        <ul>
            {images.map( image =>
            <li key={image}><img src={image.src} alt={image.name} /></li>
            )}
        </ul>
    </>
}

export default Images