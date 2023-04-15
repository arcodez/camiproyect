import React from "react";

const GallerySection = () => {
  return (
    <div className="gallery-section">
      <h2 className="gallery-section-title">Camila Abdel Khalek</h2>

      <div className="gallery-cards">
        <div className="gallery-card1">
          <div className="gallery-card-image">
            <img src="/camila/cami_stand.png" alt="" />
          </div>
        </div>
        <div className="gallery-card2">
          <div className="gallery-card-image">
            <img src="/camila/cami_car.png" alt="" />
          </div>
        </div>
        <div className="gallery-card3">
          <div className="gallery-card-image">
            <img src="/camila/cami_ice_cube.png" alt="" />
          </div>
        </div>
        <div className="gallery-card4">
          <div className="gallery-card-image">
            <img src="/camila/cami_seat.png" alt="" />
          </div>
        </div>
        <div className="gallery-card5">
          <div className="gallery-card-image">
            <img src="/camila/cami_flower.png" alt="" />
          </div>
        </div>
        <div className="gallery-card6">
          <div className="gallery-card-image">
            <img src="/camila/cami_star.png" alt="" />
          </div>
        </div>
      </div>

      {
        <div className="gallery-blobs gallery-blob1">
          <img src="/blob/blob1gallery.svg" alt="" />
        </div>
      }

      <div className="gallery-blobs gallery-blob2">
        <img src="/blob/blob2gallery.svg" alt="" />
      </div>
    </div>
  );
};

export default GallerySection;
