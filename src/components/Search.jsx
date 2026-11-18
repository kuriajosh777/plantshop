// Search
// Child of: PlantPage
// A controlled search box. Every keystroke is sent up to PlantPage.
// Props:
//   searchQuery    (string)   - the current text, shown in the input
//   onSearchChange (function) - called with the new text on every change

import React from "react";

function Search({ searchQuery, onSearchChange }) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={searchQuery}
        onChange={(event) => onSearchChange(event.target.value)}
      />
    </div>
  );
}

export default Search;
