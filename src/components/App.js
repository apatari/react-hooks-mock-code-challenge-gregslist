import React, { useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [listings, setListings] = useState([])
  const [searchText, setSearchText] = useState("")

  function handleSearchSubmit() {
    fetch("http://localhost:6001/listings")
    .then(res => res.json())
    .then(listings => setListings(
      listings.filter(listing => listing.description.toLowerCase().includes(searchText.toLowerCase()))
    ))
  }

  return (
    <div className="app">
      <Header searchText={searchText} setSearchText={setSearchText} onSearchSubmit={handleSearchSubmit}/>
      <ListingsContainer listings={listings} setListings={setListings} searchText={searchText} />
    </div>
  );
}

export default App;
