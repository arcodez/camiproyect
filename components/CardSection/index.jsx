import React from "react";

const CardSection = () => {
  return (
    <div className="card-section">
      <div className="card-body">
        <div className="card-section-text">
          <div className="card-text1">
            <h2 className="card-text-title">
              Feliz cumpleaños, <span>Camila</span>.
            </h2>

            <p className="card-text-paragraph">
              Pasala super en tu día, eres una persona especial para mí y aunque
              no hablemos mucho, siempre te recuerdo
            </p>

            <p className="card-text-paragraph">
              Ninguna cantidad de palabras puede ser suficiente para expresar
              mis sentimientos por ti
            </p>
          </div>
          <p className="card-text-by">Att. Abel Rodríguez </p>
        </div>

        <div className="card-section-image">
          <img src="/cake.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default CardSection;
