import React, { useEffect, useState } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer() {

  const [listings, setListings] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then(res => res.json())
    .then(data => setListings(data))
  }, []) 

  return (
    <main>
      <ul className="cards">
        {listings.map(listing => {
          return (<ListingCard listing={listing} key={listing.id} /> )
        })}
      </ul>
    </main>
  );
}

export default ListingsContainer;
