import confetti from "canvas-confetti";
import React from "react";

const Navbar = () => {
  const handleConfeti = () => {
    if (typeof document !== "undefined") {
      confetti();
    } else {
      console.log("No se pudo xd");
    }
  };

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li onClick={handleConfeti} className="navbar-link">
          <a href="#header">Inicio</a>
        </li>
        <li className="navbar-link">
          <a href="#timeline">Recuerdos</a>
        </li>

        <li className="navbar-link">
          <a href="#gallery">Galeria</a>
        </li>
        <li className="navbar-link">
          <a href="#cardmessage">Carta</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
