import React from "react";
import TimeLineElement from "../TimeLineElement";

const TimeLineInfo = [
  { date: "20/03/2010", image: "camila_piscina.png" },

  { date: "20/03/2010", image: "cami_delfin.png" },
  { date: "20/03/2010", image: "cami_peque_seat.png" },
  { date: "20/03/2010", image: "cami_peque_headphones.png" },
  { date: "20/03/2010", image: "cami_peque_church.png" },
  { date: "20/03/2010", image: "cami_medium_with_dog.png" },
  { date: "20/03/2010", image: "cami_medium_model.png" },
  { date: "20/03/2010", image: "cami_medium_flower.png" },
  { date: "20/03/2010", image: "cami_medium_green.png" },
  { date: "20/03/2010", image: "cami_end_selfie.png" },
  { date: "20/03/2010", image: "cami_end2.png" },
  { date: "20/03/2010", image: "cami_end3.png" },
  { date: "20/03/2010", image: "cami_end4.png" },
  { date: "20/03/2010", image: "cami_end5.png" },
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
