import React, { useState } from "react";
import "../styles/VideoCom.scss"

const VideoCom = () => {
  return (
    <div className="storyblock-container">
      <h2 className="section-title">Trending Looks To Watch</h2>
      <div className="carousel">
        <button className="carousel-control left">{`<`}</button>
        <div className="carousel-cards">
          <div className="card active">
            <video
              className="video"
              controls
              autoPlay
              muted
              poster="https://cdn4.fireworktv.com/medias/2024/9/25/1727264421-tvrxyapi/watermarked/540/LOOK03.mp4"
            >
              <source
                src="https://cdn4.fireworktv.com/medias/2024/9/25/1727264421-tvrxyapi/watermarked/540/LOOK03.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            <button className="mute-button">Unmute video</button>
          </div>
          <div className="card">
            <img
              src="https://cdn4.fireworktv.com/medias/2024/9/25/1727264421-zhqidjut/transcoded/240_400/LOOK01.jpg.62.jpg"
              alt="Thumbnail 1"
            />
          </div>
          <div className="card">
            <img
              src="https://cdn4.fireworktv.com/medias/2024/9/25/1727264422-wfjnaxsm/transcoded/240_400/LOOK05-1727267166790.jpg.62.jpg"
              alt="Thumbnail 2"
            />
          </div>
        </div>
        <button className="carousel-control right">{`>`}</button>
      </div>
      <button className="cta-button">DISCOVER COCKTAIL EDIT</button>
    </div>
  );
};

export default VideoCom;