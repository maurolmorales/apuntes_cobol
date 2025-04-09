import Cuadro from "../Cuadro.jsx";
import Red from "../Colors/Red.jsx";
import Grey from "../Colors/Grey.jsx";
import Com from "../Colors/Com.jsx";
import { Esp } from "../espacio.jsx";
import { Mod7_1 } from "./Mod7_1";
import { Mod7_2 } from "./Mod7_2";
import { Mod7_3 } from "./Mod7_3";
import { Mod7_4 } from "./Mod7_4";
const Modulo7 = () => {
  return (
    <article id="modulo-7">
      <div className="h2-topBar">
        <h2> Módulo 7: Trabajo con Datos en COBOL</h2>

        <a href="#indice">al Indice</a>
      </div>
      <Mod7_1 Cuadro={Cuadro} Red={Red} Grey={Grey} Com={Com} Esp={Esp} />
      <Mod7_2 Cuadro={Cuadro} Red={Red} Grey={Grey} Com={Com} Esp={Esp} />
      <Mod7_3 Cuadro={Cuadro} Red={Red} Grey={Grey} Com={Com} Esp={Esp} />
      <Mod7_4 Cuadro={Cuadro} Red={Red} Grey={Grey} Com={Com} Esp={Esp} />
    </article>
  );
};
export { Modulo7 };
