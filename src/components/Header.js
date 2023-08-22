import React from "react";
import Search from "./Search";

function Header({ searchText, setSearchText, onSearchSubmit}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search searchText={searchText} setSearchText={setSearchText} onSearchSubmit={onSearchSubmit} />
    </header>
  );
}

export default Header;
