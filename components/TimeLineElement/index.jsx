import React from "react";

const TimeLineElement = ({
  date = "15/04/2020",
  image = "/camila_piscina.png",
}) => {
  return (
    <div className="timeline-card">
      <div className="timeline-card-content">
        <h2>{date}</h2>

        <img src={`/camila/${image}`} alt={image} />
      </div>
    </div>
  );
};
export default TimeLineElement;
