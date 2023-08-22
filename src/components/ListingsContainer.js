import React, { useEffect, useState } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer( { listings, setListings, searchText}) {

  

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then(res => res.json())
    .then(data => setListings(data))
  }, []) 

  function handleDeleteListing(id) {
    const newListings = listings.filter(listing => listing.id !== id)
    setListings(newListings)
  }

  return (
    <main>
      <ul className="cards">
        {listings.map(listing => {
          return (<ListingCard listing={listing} key={listing.id} onDeleteListing={handleDeleteListing} /> )
        })}
      </ul>
    </main>
  );
}

export default ListingsContainer;
