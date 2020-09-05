import React from "react";


const daysBetween = (startDate, endDate) => {
  const msPerDay = 24 * 60 * 60 * 1000;
  return Math.floor((Date.parse(endDate) - Date.parse(startDate)) / msPerDay);
};

const Day = ({isToday, isGood}) => {
  return (<div className={'day'+(isToday?' today':'')+(isGood?' good':'')}></div>);
}

const getDays = (lifeSpanDays, daysTillToday, daysTillGoodTimes) => {
  const elements = [];
  for(let i = 0 ; i < lifeSpanDays ; i += 1){
    elements.push(<Day key={`day-${i}`} isToday={daysTillToday === i} isGood={daysTillGoodTimes < i && i < daysTillToday} />)
  }
  return elements;
};

const Graph = ({today, birthDate, lifeSpan}) => {
  const lifeSpanDays = Math.floor((lifeSpan * 365) + (lifeSpan / 4));
  const daysTillToday = daysBetween(birthDate, today);
  const daysTillGoodTimes = daysBetween(birthDate, today);

  return (
    <div className="graph">
      {getDays(lifeSpanDays, daysTillToday, daysTillGoodTimes)}
    </div>);
}

export default Graph;