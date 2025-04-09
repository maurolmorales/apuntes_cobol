import Cuadro from "../Cuadro.jsx";
import Red from "../Colors/Red.jsx";
import Grey from "../Colors/Grey.jsx";
import Com from "../Colors/Com.jsx";
import { Esp } from "../espacio.jsx";
import { Mod10_1 } from "./Mod10_1";
import { Mod10_2 } from "./Mod10_2";
import { Mod10_3 } from "./Mod10_3";
const Modulo10 = () => {
  return (
    <article id="modulo-10">
      <div className="h2-topBar">
        <h2> Módulo 10: Integración y Modernización de COBOL</h2>

        <a href="#indice">al Indice</a>
      </div>
      <Mod10_1 Cuadro={Cuadro} Red={Red} Grey={Grey} Com={Com} Esp={Esp} />
      <Mod10_2 Cuadro={Cuadro} Red={Red} Grey={Grey} Com={Com} Esp={Esp} />
      <Mod10_3 Cuadro={Cuadro} Red={Red} Grey={Grey} Com={Com} Esp={Esp} />
    </article>
  );
};
export { Modulo10 };
