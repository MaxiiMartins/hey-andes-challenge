import React from "react";
import "./Box.css";

function Box({ mayorVentas = null, mayorMes = null }) {
  return (
    <div className="box">
      <h3>{mayorVentas ? mayorVentas.name : "Mes mas ventas"}</h3>
      <span>{mayorVentas ? `$ ${mayorVentas.total}` : mayorMes.toUpperCase()}</span>
    </div>
  );
}

export default Box;
