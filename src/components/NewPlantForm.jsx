// NewPlantForm
// Child of: PlantPage
// A CONTROLLED form: the input values live in state, so React always knows
// what is typed. On submit it POSTs the new plant to the backend.
// Props:
//   onAddPlant (function) - tells PlantPage to add the new plant to its state
//                           (inverse data flow: child -> parent)

import React, { useState } from "react";

const API_URL = "http://localhost:6001/plants";

function NewPlantForm({ onAddPlant }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  // POST: when the form is submitted, create the plant on the backend.
  function handleSubmit(event) {
    event.preventDefault(); // stop the browser from reloading the page

    // The price is sent exactly as typed in the form (a string)
    const newPlant = { name, image, price };

    fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPlant),
    })
      .then((response) => response.json())
      .then((createdPlant) => {
        onAddPlant(createdPlant); // the server's copy includes the new id
        setName(""); // clear the form
        setImage("");
        setPrice("");
      })
      .catch((error) => console.error("Could not add plant:", error));
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Plant name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={image}
          onChange={(event) => setImage(event.target.value)}
        />
        <input
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
