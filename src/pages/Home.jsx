import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import DestinationCard from "../components/DestinationCard";
import Loader from "../components/Loader";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";
import { fetchCountries } from "../services/Api";
import "./Home.css";

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [displayedCountries, setDisplayedCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [searchText, setSearchText] = useState("");
  const [searched, setSearched] = useState(false);

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const getCountries = async () => {
      try {
        const data = await fetchCountries();
         setCountries(data);
        setDisplayedCountries(data.slice(0, 12));
      } catch (error) {
        setError("Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    getCountries();
  }, []);

  const handleSearch = () => {
  console.log("Search clicked:", searchText);

  const text = searchText.trim().toLowerCase();

  if (text === "") {
    setDisplayedCountries(countries.slice(0, 12));
    setSearched(false);
    return;
  }

  const results = countries.filter((country) =>
    country.name?.common?.toLowerCase().includes(text)
  );

  console.log("Results:", results);

  setDisplayedCountries(results);
  setSearched(true);
};
  return (
    <div className={darkMode ? "home-page dark" : "home-page"}>
      <Navbar />
      <Hero />

      <div className="dark-mode-btn">
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      <SearchBar
        searchText={searchText}
        setSearchText={setSearchText}
        handleSearch={handleSearch}
      />

      {loading && <Loader />}

      {error && <h1 className="error-message">{error}</h1>}

      {!loading && !error && (
        <>
          {searched && displayedCountries.length > 0 && (
            <div className="search-result-title">
              <h2>Search Results</h2>
              <p>
                Here are the destinations we found for your search.
              </p>
            </div>
          )}

          <div className="countries-container">
            {displayedCountries.map((country) => (
              <DestinationCard
                key={country.cca3}
                country={country}
              />
            ))}

            {displayedCountries.length === 0 && (
              <div className="no-result">
                <h1>No destination found 😔</h1>
                <p>
                  Try another country name, such as Japan, Turkey,
                  Canada, Afghanistan, France, or India.
                </p>
              </div>
            )}
          </div>
        </>
      )}

      <Footer />
    </div>
  );
};

export default Home;