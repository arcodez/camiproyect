import React from "react";
import TimeLineElement from "../TimeLineElement";

const TimeLineInfo = [
  { date: "25/05/2014", image: "camila_piscina.jpg" },
  { date: "25/05/2014", image: "cami_peque_church.jpg" },
  { date: "19/08/2014", image: "cami_peque_seat.jpg" },
  { date: "07/05/2015", image: "cami_delfin.jpg" },
  { date: "24/02/2016", image: "cami_peque_headphones.jpg" },
  { date: "17/12/2016", image: "cami_medium_flower.jpg" },
  { date: "26/03/2020", image: "cami_medium_model.jpg" },
  { date: "01/09/2018", image: "cami_medium_green.jpg" },
  { date: "11/03/2021", image: "cami_medium_with_dog.jpg" },
  { date: "19/12/2021", image: "cami_end_selfie.jpg" },
  { date: "19/12/2021", image: "cami_end2.jpg" },
  { date: "21/12/2021", image: "cami_end4.jpg" },
  { date: "16/04/2022", image: "cami_end3.jpg" },
  { date: "22/01/2023", image: "cami_end5.jpg" },
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
