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

  const [pause, setPause] = useState(false);
  useEffect(() => {
    let intervalId;
    if(!pause){
      intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);
    }

    return () => clearInterval(intervalId);
  });

  const imgStyle = {
    maxWidth: "75%",
    height: "auto",
  };

  const handlePauseClick = () => {
    setPause(!pause);
  };
  
  const handlePreviousClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <>
      <figure>
        <img
          style={imgStyle}
          src={images[currentIndex].src}
          alt={images[currentIndex].name}
        />
        <figcaption>{images[currentIndex].name} </figcaption>
      </figure>
      <div>
        <button onClick={handlePreviousClick} id="previous">Previous</button>
        <button style={{ backgroundColor: pause?"red":"green" }} onClick={handlePauseClick} id="playpause">{pause? "Pause":"Play"}</button>
        <button onClick={handleNextClick} id="next">Next</button>
      </div>
    </>
  );
};

export default Images;
