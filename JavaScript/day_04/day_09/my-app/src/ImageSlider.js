import React, { useState } from "react";

function ImageSlider() {
  const images = [
    "https://picsum.photos/id/1015/600/400",
    "https://picsum.photos/id/1016/600/400",
    "https://picsum.photos/id/1018/600/400",
    "https://picsum.photos/id/1025/600/400",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    if (currentImage < images.length - 1) {
      setCurrentImage(currentImage + 1);
    }
  };

  const previousImage = () => {
    if (currentImage > 0) {
      setCurrentImage(currentImage - 1);
    }
  };

  return (
    <div className="slider-container">
      <h1>Image Slider</h1>

      <div className="slider">
        <button onClick={previousImage}>←</button>

        <img src={images[currentImage]} alt="Slider" />

        <button onClick={nextImage}>→</button>
      </div>

      <p>
        Image {currentImage + 1} of {images.length}
      </p>
    </div>
  );
}

export default ImageSlider;