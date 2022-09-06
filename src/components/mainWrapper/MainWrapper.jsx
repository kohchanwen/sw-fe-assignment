import React, {useState} from "react";
import ActivityFeed from "../activityFeed/ActivityFeed";
import Content from "../content/Content";
import Header from "../header/Header";
import "./mainWrapper.css";

const MainWrapper = () => {
  const [activeTab, setActiveTab] = useState('All')

  return (
    <div>
      <Header activeTab={activeTab} onTabClick={setActiveTab}/>
      <div className="main_content">
        <Content activeTab={activeTab}/>
        <ActivityFeed />
      </div>
    </div>
  );
};

export default MainWrapper;
