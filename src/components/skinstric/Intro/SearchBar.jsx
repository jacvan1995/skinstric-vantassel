// src/components/skinstric/Intro/SearchBar.jsx
import React, { useState } from "react";
import PropTypes from "prop-types";
import "../../../styles/Intro/SearchBar.css";

const SearchBar = ({ placeholder = "Search...", onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
      setQuery(""); // optional: clear after submit
    }
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className="search-input"
      />
      <button type="submit" className="search-submit-btn">
        →
      </button>
    </form>
  );
};

SearchBar.propTypes = {
  placeholder: PropTypes.string,
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;