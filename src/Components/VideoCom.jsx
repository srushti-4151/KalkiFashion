import React, { useState } from "react";
import Slider from "react-slick";
import "../styles/VideoCom.scss";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import video3 from "../assets/video3.mp4";
import video4 from "../assets/video4.mp4";
import video5 from "../assets/video5.mp4";
import video6 from "../assets/video2.mp4";
import video7 from "../assets/video3.mp4";
import video8 from "../assets/video4.mp4";

const VideoSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const videos = [video1, video2, video3, video4, video5, video6, video7, video8];

  const settings = {
    centerMode: true,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 5,
    speed: 500,
    focusOnSelect: true,
    beforeChange: (_, newIndex) => setCurrentSlide(newIndex),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "50px",
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: "50px",
        },
      },
    ],
  };

  return (
    <div className="video-slider-container">
      <h2 className="title">Trending Looks To Watch</h2>
      <Slider {...settings}>
        {videos.map((video, index) => (
          <div
            key={index}
            className={`video-card ${index === currentSlide ? "active" : ""}`}
          >
            <div className="video-wrapper">
              <video
                className="video"
                src={video}
                muted
                loop
                autoPlay
              ></video>
              <div className="video-overlay">
                <button className="btn">Shop Shaadi Saga</button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default VideoSlider;
