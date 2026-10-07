import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./DestinationCard.css";

const DestinationCard = ({ country }) => {
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    const savedFavorites =
      JSON.parse(localStorage.getItem("favorites")) || [];

    const exists = savedFavorites.find(
      (item) => item.cca3 === country.cca3
    );

    if (exists) {
      setFavorite(true);
    } else {
      setFavorite(false);
    }
  }, [country]);

  const handleFavorite = () => {
    const savedFavorites =
      JSON.parse(localStorage.getItem("favorites")) || [];

    if (favorite) {
      const updatedFavorites = savedFavorites.filter(
        (item) => item.cca3 !== country.cca3
      );

      localStorage.setItem(
        "favorites",
        JSON.stringify(updatedFavorites)
      );

      setFavorite(false);
    } else {
      savedFavorites.push(country);

      localStorage.setItem(
        "favorites",
        JSON.stringify(savedFavorites)
      );

      setFavorite(true);
    }
  };

  return (
    <div className="card">
      <img
        src={country.flags?.png}
        alt={country.name?.common}
      />

      <div className="card-content">
        <h2>{country.name?.common}</h2>

        <p>Region: {country.region}</p>

        <p>
          Population: {country.population?.toLocaleString()}
        </p>

        <div className="buttons">
          <Link to="/booking">
            <button>Book Now</button>
          </Link>

          <button
            className={favorite ? "favorite active" : "favorite"}
            onClick={handleFavorite}
          >
            ❤️
          </button>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;