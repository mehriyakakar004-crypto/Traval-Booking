import "./Hero.css";
import travelVideo from "../assets/video/travel.mp4";
import { FaPlane } from "react-icons/fa";

const Hero = () => {

  return (

    <div className="hero">

      <video
        autoPlay
        loop
        muted
        playsInline
        className="background-video"
      >

        <source
          src={travelVideo}
          type="video/mp4"
        />

      </video>

      <div className="overlay"></div>

      <div className="hero-content">

        <h1>
          <FaPlane />
          Explore The World With Sky 
        </h1>

        <p>
          Discover beautiful destinations
          and book your dream vacation.
        </p>

        <button>
          Start Your Journey
        </button>

      </div>

    </div>
  );
};

export default Hero;