// PlantList
// Child of: PlantPage    Parent of: PlantCard
// Turns the array of plants into a list of PlantCard components.
// Props:
//   plants (array) - the plants to show (already filtered by the search)

import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants }) {
  return (
    <ul className="cards">
      {/* One PlantCard per plant. key must be unique, so we use the id. */}
      {plants.map((plant) => (
        <PlantCard key={plant.id} plant={plant} />
      ))}
    </ul>
  );
}

export default PlantList;
