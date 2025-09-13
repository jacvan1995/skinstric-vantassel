const SearchBar = ({ placeholder, onSearch }) => (
  <div className="skinstric-search-wrapper">
    <input
      type="text"
      className="skinstric-search-input"
      placeholder={placeholder}
      onChange={(e) => onSearch(e.target.value)}
    />
  </div>
);

export default SearchBar