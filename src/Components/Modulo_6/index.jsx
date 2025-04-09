import Cuadro from "../Cuadro.jsx";
import Red from "../Colors/Red.jsx";
import Grey from "../Colors/Grey.jsx";
import Com from "../Colors/Com.jsx";
import { Esp } from "../espacio.jsx";
import { Mod6_1 } from "./Mod6_1";
import { Mod6_2 } from "./Mod6_2";
import { Mod6_3 } from "./Mod6_3";
import { Mod6_4 } from "./Mod6_4";
const Modulo6 = () => {
  return (
    <article id="modulo-6">
      <div className="h2-topBar">
        <h2> Módulo 6: Procedimientos y Subrutinas en COBOL</h2>

        <a href="#indice">al Indice</a>
      </div>
      <Mod6_1 Cuadro={Cuadro} Red={Red} Grey={Grey} Com={Com} Esp={Esp} />
      <Mod6_2 Cuadro={Cuadro} Red={Red} Grey={Grey} Com={Com} Esp={Esp} />
      <Mod6_3 Cuadro={Cuadro} Red={Red} Grey={Grey} Com={Com} Esp={Esp} />
      <Mod6_4 Cuadro={Cuadro} Red={Red} Grey={Grey} Com={Com} Esp={Esp} />
    </article>
  );
};
export { Modulo6 };
