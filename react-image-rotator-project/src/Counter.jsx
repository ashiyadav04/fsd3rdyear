import React, { useEffect, useState } from "react";

import image1 from "./assets/image1.svg";
import image2 from "./assets/image2.svg";
import image3 from "./assets/image3.svg";
import image4 from "./assets/image4.svg";

const images = [image1, image2, image3, image4];

export default function Counter() {
  const [index, setIndex] = useState(0);

  const nextImage = () => {
    setIndex((currentIndex) => (currentIndex + 1) % images.length);
  };

  const previousImage = () => {
    setIndex(
      (currentIndex) => (currentIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="page">
      <section className="card">
        <p className="eyebrow">React Image Rotator</p>
        <h1>Image Slider</h1>

        <div className="image-frame">
          <img src={images[index]} alt={`Slide ${index + 1}`} />
        </div>

        <div className="controls">
          <button onClick={previousImage} aria-label="Previous image">
            ← Previous
          </button>

          <span className="counter">
            {index + 1} / {images.length}
          </span>

          <button onClick={nextImage} aria-label="Next image">
            Next →
          </button>
        </div>

        <div className="dots">
          {images.map((_, imageIndex) => (
            <button
              key={imageIndex}
              className={imageIndex === index ? "dot active" : "dot"}
              onClick={() => setIndex(imageIndex)}
              aria-label={`Go to image ${imageIndex + 1}`}
            />
          ))}
        </div>

        <p className="info">Automatically changes every 2 seconds.</p>
      </section>
    </main>
  );
}
