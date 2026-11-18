// PlantCard
// Child of: PlantList
// Shows one plant. The "sold out" status is kept in this card's own state
// because no other component needs it (and it is not saved to the backend,
// so refreshing the page puts every plant back in stock).
// Props:
//   plant (object) - { id, name, image, price }

import React, { useState } from "react";

function PlantCard({ plant }) {
  const { name, image, price } = plant;

  // true = in stock, false = sold out
  const [inStock, setInStock] = useState(true);

  // Flip the value on every click
  function handleStockClick() {
    setInStock((inStock) => !inStock);
  }

  return (
    <li className="card" data-testid="plant-item">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {/* Conditional rendering: a different button depending on inStock */}
      {inStock ? (
        <button className="primary" onClick={handleStockClick}>
          In Stock
        </button>
      ) : (
        <button onClick={handleStockClick}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
