import React from "react";
import TimeLineElement from "../TimeLineElement";

const TimeLineInfo = [
  { date: "20/03/2010", image: "camila_piscina.jpg" },

  { date: "20/03/2010", image: "cami_delfin.jpg" },
  { date: "20/03/2010", image: "cami_peque_seat.jpg" },
  { date: "20/03/2010", image: "cami_peque_headphones.jpg" },
  { date: "20/03/2010", image: "cami_peque_church.jpg" },
  { date: "20/03/2010", image: "cami_medium_with_dog.jpg" },
  { date: "20/03/2010", image: "cami_medium_model.jpg" },
  { date: "20/03/2010", image: "cami_medium_flower.jpg" },
  { date: "20/03/2010", image: "cami_medium_green.jpg" },
  { date: "20/03/2010", image: "cami_end_selfie.jpg" },
  { date: "20/03/2010", image: "cami_end2.jpg" },
  { date: "20/03/2010", image: "cami_end3.jpg" },
  { date: "20/03/2010", image: "cami_end4.jpg" },
  { date: "20/03/2010", image: "cami_end5.jpg" },
];

const TimeLineSection = () => {
  return (
    <div className="timelineSection">
      <div className="timeline-section">
        <div className="timeline-tittle">
          <h2>El tiempo se pasa volando</h2>
        </div>

        <div className="timeline-cards">
          {TimeLineInfo.map((e, index) => (
            <TimeLineElement key={index} {...e} />
          ))}
        </div>
      </div>

      <div className="timeline-blobs timeline-blob1">
        <img src="/blob/blob1timeline.svg" alt="" />
      </div>

      <div className="timeline-blobs timeline-blob2">
        <img src="/blob/blob2timeline.svg" alt="" />
      </div>
    </div>
  );
};

export default TimeLineSection;
