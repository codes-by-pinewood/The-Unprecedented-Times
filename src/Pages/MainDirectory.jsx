import React from "react";

import SearchIcon from "../search.svg";
import { useState, useEffect } from "react";

const MainDirectory = () => {
  const [searchterm, setSearchTerm] = useState("");

  const sendSearchTerm = (e) => {
    setSearchTerm(e.target.value);
    searchterm = e.target.value;
  };

  return (
    <div>
      <div className="search">
        <input
          placeholder="Search for articles"
          value={searchterm}
          onChange={(e) => {
            sendSearchTerm(searchterm);
          }}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => {
            searchArticles(searchterm);
          }}
        />
      </div>
    </div>
  );
};

export default MainDirectory;
