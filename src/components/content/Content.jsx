import React from "react";
import data from "../../assets/data.json";
import "./content.css";
import TeamCard from "./teamCard/TeamCard";

const Content = ({ activeTab }) => {
  const teamsData = data.teams;

  const activeTabCount = () => {
    let filteredTeams = teamsData.filter((team) => {
      if (activeTab === "Favorites") {
        return team.is_favorited;
      }
      if (activeTab === "Archived") {
        return team.is_archived;
      }
      return team;
    });
    return filteredTeams.length;
  };

  const activeTabData = () => {
    let filteredTeams = teamsData.filter((team) => {
      if (activeTab === "Favorites") {
        return team.is_favorited;
      }
      if (activeTab === "Archived") {
        return team.is_archived;
      }
      return team;
    });
    return filteredTeams;
  };

  return (
    <div className="container content_teams">
      <h4 className="content_teams-type">{activeTab} Teams</h4>
      <p className="content_teams-count">
        Showing {activeTabCount()} out of {teamsData.length} teams
      </p>
      <div className="break"></div>
      <div className="cards_container">
        {activeTabData().map((team) => {
          return <TeamCard key={team.id} data={team} />;
        })}
      </div>
    </div>
  );
};

export default Content;
