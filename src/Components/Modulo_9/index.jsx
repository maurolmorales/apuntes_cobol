import Cuadro from "../Cuadro.jsx";
import Red from "../Colors/Red.jsx";
import Grey from "../Colors/Grey.jsx";
import Com from "../Colors/Com.jsx";
import { Esp } from "../espacio.jsx";
import { Mod9_1 } from "./Mod9_1";
import { Mod9_2 } from "./Mod9_2";
import { Mod9_3 } from "./Mod9_3";

const Modulo9 = () => {
  return (
    <article id="modulo-9">
      <div className="h2-topBar">
        <h2> Módulo 9: Mejores Prácticas y Estilo de Codificación</h2>
        <a href="#indice">al Indice</a>
      </div>
      <Mod9_1 Cuadro={Cuadro} Red={Red} Grey={Grey} Com={Com} Esp={Esp} />
      <Mod9_2 Cuadro={Cuadro} Red={Red} Grey={Grey} Com={Com} Esp={Esp} />
      <Mod9_3 Cuadro={Cuadro} Red={Red} Grey={Grey} Com={Com} Esp={Esp} />
    </article>
  );
};
export { Modulo9 };
