import { useState, useEffect } from "react";
import "./Portfolio.css";

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageLoaded, setImageLoaded] = useState({});

  const images = [
    "DSCF1920.jpeg",
    "DSCF1980.jpeg",
    "DSCF5023.jpeg",
    "DSCF5064.jpeg",
    "DSCF6070.jpeg",
    "DSCF8233.jpg",
    "DSCF9198.jpg",
    "DSCF9512.jpeg",
    "IMG_0957.jpeg",
    "IMG_1219.jpeg",
    "IMG_1594.jpeg",
    "P1020828.jpg",
    "P1021181.jpg",
    "P1021202.jpg",
    "P1021207.jpg",
  ];

  const openModal = (index) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    if (selectedImage !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedImage]);

  const navigateImage = (direction) => {
    if (selectedImage === null) return;
    const newIndex = selectedImage + direction;
    if (newIndex >= 0 && newIndex < images.length) {
      setSelectedImage(newIndex);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImage === null) return;
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowLeft") navigateImage(-1);
      if (e.key === "ArrowRight") navigateImage(1);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  const handleImageLoad = (index) => {
    setImageLoaded((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Portfolio</h2>
          <div className="title-underline"></div>
          <p className="section-description">My recent work</p>
        </div>

        <div className="portfolio-grid">
          {images.map((image, index) => (
            <div
              key={index}
              className="portfolio-item"
              onClick={() => openModal(index)}
            >
              <div className="portfolio-image">
                {!imageLoaded[index] && <div className="image-skeleton"></div>}
                <img
                  src={`/${image}`}
                  alt={`Portfolio ${index + 1}`}
                  loading="lazy"
                  onLoad={() => handleImageLoad(index)}
                  style={{ opacity: imageLoaded[index] ? 1 : 0 }}
                />
                <div className="image-overlay">
                  <span className="overlay-text">Click to Preview</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage !== null && (
        <div className="modal-overlay" onClick={closeModal}>
          <button className="modal-close" onClick={closeModal}>
            &times;
          </button>

          {selectedImage > 0 && (
            <button
              className="modal-nav modal-prev"
              onClick={(e) => {
                e.stopPropagation();
                navigateImage(-1);
              }}
            >
              &#8249;
            </button>
          )}

          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={`/${images[selectedImage]}`}
              alt={`Portfolio ${selectedImage + 1}`}
            />
          </div>

          {selectedImage < images.length - 1 && (
            <button
              className="modal-nav modal-next"
              onClick={(e) => {
                e.stopPropagation();
                navigateImage(1);
              }}
            >
              &#8250;
            </button>
          )}

          <div className="modal-counter">
            {selectedImage + 1} / {images.length}
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
