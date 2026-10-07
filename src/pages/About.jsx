import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "./About.css";

const About = () => {
  return (
    <>
      <Navbar />

      <div className="about-page">
        <div className="about-hero">
          <h1>About Sky Trip</h1>

          <p>
            Sky Trip is your friendly travel companion for discovering beautiful
            destinations, planning comfortable journeys, and turning travel dreams
            into real memories.
          </p>
        </div>

        <div className="about-section">
          <h2>Who We Are</h2>

          <p>
            We created Sky Trip to make travel planning simple, enjoyable, and
            inspiring. Whether you want a peaceful holiday, a city adventure, or a
            memorable family trip, our app helps you explore destinations and book
            your journey with confidence.
          </p>
        </div>

        <div className="about-section">
          <h2>What We Offer</h2>

          <p>
            Sky Trip allows users to search countries, explore destination details,
            choose travel options, save favorite places, and book trips easily. Our
            goal is to bring everything a traveler needs into one clean and modern
            platform.
          </p>
        </div>

        <div className="features">
          <div className="feature-box">
            <h2>Easy Search</h2>
            <p>Find destinations quickly and explore useful country details.</p>
          </div>

          <div className="feature-box">
            <h2>Smart Booking</h2>
            <p>Choose your city, vehicle, hotel, and trip duration in one form.</p>
          </div>

          <div className="feature-box">
            <h2>Favorite Places</h2>
            <p>Save the destinations you love and come back to them later.</p>
          </div>

          <div className="feature-box">
            <h2>Friendly Design</h2>
            <p>Enjoy a simple, beautiful, and responsive travel experience.</p>
          </div>
        </div>

        <div className="about-section about-closing">
          <h2>Our Mission</h2>

          <p>
            Our mission is to make travel planning easier, warmer, and more
            exciting for everyone. With Sky Trip, every journey starts with one
            simple search.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;