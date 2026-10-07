import "./SearchBar.css";

const SearchBar = ({ searchText, setSearchText, handleSearch }) => {
  const submitSearch = (e) => {
    e.preventDefault();
    handleSearch();
  };

  return (
    <div className="search-section">
      <h2>Find Your Dream Destination</h2>

      <p>
        Search for a country and explore beautiful travel destinations.
      </p>

      <form className="search-box" onSubmit={submitSearch}>
        <input
          type="text"
          placeholder="Search country"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        <button type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;