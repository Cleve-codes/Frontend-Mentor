const Search = ({ handleSearchNote, searchNote }) => {
  return (
    <div className="search">
      <input
        onChange={(e) => handleSearchNote(e.target.value)}
        value={searchNote}
        type="text"
        placeholder="Start typing to search for notes..."
      />
      <span className="search-icon">🔍️</span>
    </div>
  );
};

export default Search;
