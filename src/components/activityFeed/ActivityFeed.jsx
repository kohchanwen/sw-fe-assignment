import React from "react";
import "./activityFeed.css";
import data from "../../assets/data.json";
import ActivityFeedCard from "./activityFeedCard/ActivityFeedCard";

const ActivityFeed = () => {
  const activities = data.activities;
  return (
    <div className="activity_feed">
      <h3 className="activity_feed-title">Activity</h3>
      <div className="activity_feeds-wrapper">
       {
        activities.map((activity) => {
          return <ActivityFeedCard key={activity.id} data={activity}/>
        })
       }   
      </div>
    </div>
  );
};

export default ActivityFeed;
