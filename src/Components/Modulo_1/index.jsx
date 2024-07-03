import { Historia } from "./Historia";
import { Caracteristicas } from "./Caracteristicas";
import { VentajasDesventajas } from "./VentajasDesventajas";
import { EntornoDesarrollo } from "./EntornoDesarrollo";
const Modulo1 = () => {
  return (
    <article id="modulo-1">
      <div className="h2-topBar">
        <h2> Módulo 1: Introducción a COBOL.</h2>
        <a href="#indice">al Indice</a>
      </div>
      <Historia />
      <Caracteristicas />
      <VentajasDesventajas />
      <EntornoDesarrollo />
    </article>
  );
};

export { Modulo1 };
