import React from "react";
import "./navbar.css";
import data from "../../assets/data.json";
import icon_menu_notif from "../../assets/menu notification.png";
import icon_caret_down from "../../assets/caret down.png";

const Navbar = () => {
  const currentUser = data.current_user;
  return (
    <nav className="container top_nav">
      <div className="app_name">
        <h4>NARWHAL</h4>
      </div>

      <ul className="breadcrumbs">
        <li>
          <a href="#">Teams</a>
        </li>
      </ul>
      <div className="menu_notification">
        <img src={icon_menu_notif} alt="menu notification" />
      </div>
      <div className="menu_settings">
        <p className="menu_greetings">Hello, {currentUser.name}</p>
        <div className="menu_profile">
          <img src={currentUser.avatar} alt="Profile avartar" />
        </div>
        <div className="menu_caret_down">
          <img src={icon_caret_down} alt="icon_caret_down" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
