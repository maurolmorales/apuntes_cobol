import Cuadro from "../Cuadro.jsx";
import Red from "../Colors/Red.jsx";
import Grey from "../Colors/Grey.jsx";
import Com from "../Colors/Com.jsx";
import { Esp } from "../espacio.jsx";
import { Mod15_1 } from "./Mod15_1";
import { Mod15_2 } from "./Mod15_2";
import { Mod15_3 } from "./Mod15_3";

const Modulo15 = () => {
  const codigos = {};

  return (
    <article id="modulo-15">
      <div className="h2-topBar">
        <h2> Módulo 15: Tendencias y Futuro de COBOL</h2>

        <a href="#indice">al Indice</a>
      </div>
      <Mod15_1 Cuadro={Cuadro} Red={Red} Grey={Grey} Com={Com} Esp={Esp} />
      <Mod15_2 Cuadro={Cuadro} Red={Red} Grey={Grey} Com={Com} Esp={Esp} />
      <Mod15_3 Cuadro={Cuadro} Red={Red} Grey={Grey} Com={Com} Esp={Esp} />
    </article>
  );
};
export { Modulo15 };
