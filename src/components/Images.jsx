import bird from "./../assets/img/blackbird.jpg";
import butterfly from "./../assets/img/butterfly.jpg";
import flowers from "./../assets/img/flowers.jpg";
import nature from "./../assets/img/nature.jpg";
import { useState, useEffect } from "react";

const Images = () => {
  const images = [
    { src: bird, name: "bird" },
    { src: butterfly, name: "butterfly" },
    { src: flowers, name: "flowers" },
    { src: nature, name: "nature" },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  });

  const imgStyle = {
    maxWidth: '75%',
    height: 'auto',
  }

  return (
    <figure>
      <img style={imgStyle} src={images[currentIndex].src} alt={images[currentIndex].name} />
      <figcaption>{images[currentIndex].name} </figcaption>
    </figure>
  );
};

export default Images;
