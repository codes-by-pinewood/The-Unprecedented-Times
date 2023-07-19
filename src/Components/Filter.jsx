import React from "react";

const Filter = () => {
  return (
    <div>
      <label for="cars">Choose a category:</label>

      <select name="category" id="category">
        <option value="volvo">sport</option>
        <option value="saab">money</option>
        <option value="mercedes">politics</option>
        <option value="mercedes">comment is free</option>
      </select>
    </div>
  );
};

export default Filter;
