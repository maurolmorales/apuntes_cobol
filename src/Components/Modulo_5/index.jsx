import Cuadro from "../Cuadro.jsx";
import Red from "../Colors/Red.jsx";
import Grey from "../Colors/Grey.jsx";
import Com from "../Colors/Com.jsx";
import { Esp } from "../espacio.jsx";
import { Mod5_1 } from "./Mod5_1";
import { Mod5_2 } from "./Mod5_2";
import { Mod5_3 } from "./Mod5_3";
import { Mod5_4 } from "./Mod5_4";
import { Mod5_5 } from "./Mod5_5";
const Modulo5 = () => {
  return (
    <article id="modulo-5">
      <div className="h2-topBar">
        <h2> Módulo 5: Tablas en Cobol</h2>
        <a href="#indice">al Indice</a>
      </div>
      <Mod5_1 Cuadro={Cuadro} Red={Red} Grey={Grey} Com={Com} Esp={Esp} />
      <Mod5_2 Cuadro={Cuadro} Red={Red} Grey={Grey} Com={Com} Esp={Esp} />
      <Mod5_3 Cuadro={Cuadro} Red={Red} Grey={Grey} Com={Com} Esp={Esp} />
      <Mod5_4 Cuadro={Cuadro} Red={Red} Grey={Grey} Com={Com} Esp={Esp} />
      <Mod5_5 Cuadro={Cuadro} Red={Red} Grey={Grey} Com={Com} Esp={Esp} />
    </article>
  );
};
export { Modulo5 };
