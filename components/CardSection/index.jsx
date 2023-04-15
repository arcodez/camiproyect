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
              Quiero que sepas que siempre estás en mi corazón y que te deseo lo
              mejor en este día tan especial. Espero que recibas muchos abrazos
              y regalos. Que este año te traiga mucha felicidad, amor y éxito en
              todo lo que emprendas. Te mando mis mejores deseos desde aquí.
            </p>

            <p className="card-text-paragraph">
              Eres una persona muy especial para mí y que te valoro muchísimo.
              Aunque no esté contigo en este momento, te envío un abrazo
              gigante. ¡Qué disfrutes al máximo tu día!
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
