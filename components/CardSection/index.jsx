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
              ¡Feliz cumpleaños, Camila! Aunque estés lejos, quiero que sepas
              que siempre estás en mi corazón y que te deseo lo mejor en este
              día tan especial. Espero que recibas muchos abrazos, besos y
              regalos. Que este año te traiga mucha felicidad, amor y éxito en
              todo lo que emprendas. Te mando un fuerte abrazo y mis mejores
              deseos desde aquí. ¡Que disfrutes al máximo tu día!
            </p>

            <p className="card-text-paragraph">
              Quiero que sepas que eres una persona muy especial para mí y que
              te valoro muchísimo. Espero que hoy sea un día lleno de amor,
              alegría y mucha diversión. Que todos tus deseos se hagan realidad
              y que recibas todo el cariño que mereces. Aunque no esté contigo
              en este momento, te envío un abrazo gigante. Te deseo lo mejor hoy
              y siempre. ¡Feliz cumpleaños!
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
