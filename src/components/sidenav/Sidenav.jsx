import React from "react";
import "./sidenav.css";
import SWLogo from "../../assets/sw-logo-white.png";
import Icon_campaign from "../../assets/icon-campaign.png";
import Icon_leads from "../../assets/icon-leads.svg";
import Icon_reports from "../../assets/icon-reports.svg";
import Icon_teams from "../../assets/icon-teams.svg";
import Icon_help from "../../assets/icon-help.svg";

const Sidenav = () => {
  return (
    <nav className="container side_nav">
      <div className="sw-logo">
        <img src={SWLogo} alt="SW icon"/>
      </div>
      <ul className="side_nav-menu">
        <li>
          <img src={Icon_campaign} alt="campaign icon"/>
        </li>
        <li className="side_nav-icon-active">
          <img src={Icon_teams} alt="teams icon"/>
        </li>
        <li>
          <img src={Icon_leads} alt="leads icon"/>
        </li>
        <li>
          <img src={Icon_reports} alt="reports icon"/>
        </li>
      </ul>
      <div className="side_nav-help">
        <img src={Icon_help} alt="help icon"/>
      </div>
    </nav>
  );
};

export default Sidenav;
