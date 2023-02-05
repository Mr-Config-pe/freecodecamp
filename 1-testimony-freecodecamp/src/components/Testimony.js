/*---------- Inicio Code Immer ----------*/

//import React from "react"; //Para usar todo el poder de react dentro del componente, apartir de la version 17, ya no se necesita
import '../assets/css/Testimony.css'
import '../assets/images/testimonio-emma.png'

function Testimony(props) {
  return (
    <div className="contenedor-testimonio">
      <img
        className="imagen-testimonio"
        src={require(`../assets/images/testimonio-${props.image}.png`)}
        alt={`Foto de ${props.image}`}
      />
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">
          <strong>{props.name}</strong> in {props.country}</p>
        <p className="cargo-testimonio">
          {props.ability} at <strong>{props.company}</strong></p>
        <p className="texto-testimonio">
          "{props.testimony}"
        </p>
      </div>
    </div>
  );
}

export default Testimony;

/*---------- Fin Code Immer ----------*/