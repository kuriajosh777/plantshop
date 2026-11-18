// PlantPage
// Child of: App    Parent of: NewPlantForm, Search, PlantList
// Owns the two pieces of state the page needs, because more than one child
// uses them:
//   plants      -> the list from the backend (shown by PlantList,
//                  added to by NewPlantForm)
//   searchQuery -> what the user typed (changed by Search,
//                  used here to decide which plants to show)
//
// Data flow:  PlantPage (state) --props--> children --callbacks--> PlantPage

import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

// Base URL of the json-server backend (run with `npm run server`)
const API_URL = "http://localhost:6001/plants";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // GET: when the page first loads, fetch all plants and store them.
  // The empty [] means this effect runs only once, on the first render.
  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((plantsFromServer) => setPlants(plantsFromServer))
      .catch((error) => console.error("Could not load plants:", error));
  }, []);

  // Called by NewPlantForm after the server created the plant (POST).
  // Adds the new plant to the END of the array without changing state directly.
  function handleAddPlant(newPlant) {
    setPlants((plants) => [...plants, newPlant]);
  }

  // Search by name: keep only plants whose name includes the query.
  // Both sides are lowercased so "ALOE", "aloe" and "Aloe" all match.
  // An empty query ("") is included in every name, so deleting the text
  // brings every plant back. We do not keep this list in state because it
  // can always be worked out from plants + searchQuery.
  const visiblePlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} />
      <Search searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <PlantList plants={visiblePlants} />
    </main>
  );
}

export default PlantPage;
