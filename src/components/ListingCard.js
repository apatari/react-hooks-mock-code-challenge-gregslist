import React, { useState } from "react";

function ListingCard({ listing, onDeleteListing }) {

  const [fav, setFav] = useState(false)

  function handleFavClick() {
    setFav((fav) => !fav)
  }

  function handleDeleteClick() {
    fetch(`http://localhost:6001/listings/${listing.id}`, {
      method: "DELETE"
    })
    .then(res => res.json)
    .then(() => onDeleteListing(listing.id))
    
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={"description"} />
      </div>
      <div className="details">
        {fav ? (
          <button className="emoji-button favorite active" onClick={handleFavClick} >★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleFavClick} >☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button className="emoji-button delete" onClick={handleDeleteClick} >🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
