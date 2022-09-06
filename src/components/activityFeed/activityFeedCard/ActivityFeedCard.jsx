import React from 'react'
import './activityFeedCard.css'
import parse from 'html-react-parser';

const ActivityFeedCard = ({data}) => {
  const {person, action, target, created_at} = data;
  
  // Map action to output string
  const actionMapping = (name, action, target) => {
    let string = '';
    if(action === 'increased_quota') {
        string = `<b>${name}</b> increased <b>${target}</b>'s quota`
    }
    if(action === 'added_leads') {
        string = `<b>${name}</b> added new leads to <b>${target}</b>`
    }
    if(action === 'archived_team') {
        string = `<b>${name}</b> archieved the team <b>${target}</b>`
    }
    return string;
  }

  return (
    <div className='activityFeed_card'>
      <img src={person.avatar} alt="person avatar"/>
      <div className='activityFeed_card-content'>
       <p className='activityFeed_card-action'>{parse(actionMapping(person.name, action, target))}</p>
       <p className='activityFeed_card-created'>{created_at}</p>
      </div>
    </div>
  )
}

export default ActivityFeedCard