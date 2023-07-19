import React from "react";
import { useState, useEffect } from "react";
import SearchIcon from "../search.svg";
import ArticleCard from "../Components/ArticleCard";

const GUARDIAN_API_URL =
  "https://content.guardianapis.com/search?api-key=df1f7ffe-54b1-46b1-8e7b-d4f01e99a138";

const NY_TIMES_API_URL =
  "https://api.nytimes.com/svc/search/v2/articlesearch.json?";

const API_KEY = "AwnuCeRhGx6GADkQY6JqBU3b5rYRlDUl";

const Directory = () => {
  const [articles, setArticles] = useState([]);
  const [searchterm, setSearchTerm] = useState("");

  const searchArticles = async (webTitle) => {
    console.log(webTitle);
    let response = await fetch(`${GUARDIAN_API_URL}&q=${webTitle}`);
    let data = await response.json();
    console.log(data.response.results);

    setArticles(data.response.results);
  };

  useEffect(() => {
    searchArticles("Spiderman");
  }, []);

  return (
    <div>
      <div className="search">
        <input
          placeholder="Search for articles"
          value={searchterm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
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

      {articles.length > 0 ? (
        <div className="container">
          {articles.map((article) => (
            <ArticleCard article1={article} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2> no articles found</h2>
        </div>
      )}
    </div>
  );
};

export default Directory;
