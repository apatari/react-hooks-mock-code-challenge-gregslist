import React, { useState } from "react";

function ListingCard({ listing }) {

  const [fav, setFav] = useState(false)

  function handleClick() {
    setFav((fav) => !fav)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={"description"} />
      </div>
      <div className="details">
        {fav ? (
          <button className="emoji-button favorite active" onClick={handleClick} >★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleClick} >☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
