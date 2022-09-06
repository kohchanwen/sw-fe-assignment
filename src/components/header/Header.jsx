import React from "react";
import "./header.css";
import Icon_companies from "../../assets/icon companies.svg";
import Icon_plus from "../../assets/Shape.svg";
import Icon_search from "../../assets/icon-search.svg";

const Header = ({activeTab, onTabClick }) => {
  const handleClick = (tab) => {
    onTabClick(tab);
  };
  return (
    <div className="container header">
      <div className="header_title">
        <img src={Icon_companies} alt="companies icon" />
        <h2>Teams</h2>
      </div>
      <div className="btn header_btn">
        <img src={Icon_plus} alt="companies icon" />
        <p>Create New Team</p>
      </div>
      <div className="header_tab">
        <div
          onClick={() => handleClick("All")}
          className={activeTab === "All" ? "header_tab-active" : ""}
        >
          All
        </div>
        <div
          onClick={() => handleClick("Favorites")}
          className={activeTab === "Favorites" ? "header_tab-active" : ""}
        >
          Favorites
        </div>
        <div
          onClick={() => handleClick("Archived")}
          className={activeTab === "Archived" ? "header_tab-active" : ""}
        >
          Archived
        </div>
      </div>
      <div className="header_search">
        <img src={Icon_search} alt="search icon" />
        <input placeholder="Search team name..."></input>
      </div>
    </div>
  );
};

export default Header;
