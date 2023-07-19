import React from "react";
import guardianlogo from "../guardian-default.png";

const ArticleCard = ({ article1 }) => {
  return (
    <div>
      <div className="article">
        <div>
          <a href={"https://www.theguardian.com/" + article1.id}>
            <img src={guardianlogo} alt="hello" />
          </a>

          <figcaption>
            {article1.webTitle ? article1.webTitle : article1.headline.main}
          </figcaption>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
