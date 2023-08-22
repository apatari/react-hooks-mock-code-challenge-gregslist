import React from "react";

function Search({ searchText, setSearchText, onSearchSubmit}) {
  function handleSubmit(e) {
    e.preventDefault();
    onSearchSubmit();
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
