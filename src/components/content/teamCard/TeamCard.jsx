import React from "react";
import "./teamCard.css";
import Icon_star_active from "../../../assets/star active.svg";
import Icon_star_default from "../../../assets/star default.png";
import Icon_conversations from "../../../assets/icon-conversations-small.png";
import Icon_leads from "../../../assets/icon-leads-small.png";

const TeamCard = ({ data }) => {
  const {
    name,
    image,
    description,
    campaigns_count,
    leads_count,
    is_favorited,
    is_archived,
    created_at,
  } = data;
  return (
    <div className="team_card-wrapper">
      <img className="team_card-company-logo" src={image} alt="company logo" />
      <div className="team_card-title">
        <p className="team_card-company">{name}</p>
        <p className="team_card-createDate">{is_archived ? "Archived": "Created"} on {created_at}</p>
      </div>
      {is_favorited ? (
        <img src={Icon_star_active} className="team_card-star-icon" alt="active star icon"/>
      ) : (
        <img src={Icon_star_default} className="team_card-star-icon" alt="inactive star icon"/>
      )}
      <div className="team_card-description">{description}</div>
      <div className="team_card-footer">
        <img src={Icon_conversations} alt="campaigns icon"/>
        <p className="team_card-footer-campaigns">{campaigns_count} Campaigns</p>
        <img src={Icon_leads} alt="leads icon"/>
        <p className="team_card-footer-leads">{leads_count} Leads</p>
      </div>
    </div>
  );
};

export default TeamCard;
