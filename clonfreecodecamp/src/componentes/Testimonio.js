/*---------- Inicio Code Immer ----------*/

//import React from "react"; //Para usar todo el poder de react dentro del componente, apartir de la version 17, ya no se necesita
import '../css/Testimonio.css'
import '../imagenes/testimonio-emma.png'

function Testimonio(props) {
  return (
    <div className="contenedor-testimonio">
      <img
        className="imagen-testimonio"
        src={require(`../imagenes/testimonio-${props.imagen}.png`)}
        alt={`Foto de ${props.imagen}`}
      />
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">
          <strong>{props.nombre}</strong> en {props.pais}</p>
        <p className="cargo-testimonio">
          {props.cargo} en <strong>{props.empresa}</strong></p>
        <p className="texto-testimonio">
          "{props.testimonio}"
        </p>
      </div>
    </div>
  );
}

export default Testimonio;

/*---------- Fin Code Immer ----------*/