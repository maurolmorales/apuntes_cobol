import Cuadro from "../Cuadro.jsx";
import Red from "../Colors/Red.jsx";
import Grey from "../Colors/Grey.jsx";
import Com from "../Colors/Com.jsx";
import { Esp } from "../espacio.jsx";
import { Mod4_1 } from "./Mod4_1";
import { Mod4_2 } from "./Mod4_2";
import { Mod4_3 } from "./Mod4_3";
const Modulo4 = () => {
  return (
    <article id="modulo-4">
      <div className="h2-topBar">
        <h2> Módulo 4: Tipos de datos en COBOL</h2>
        <a href="#indice">al Indice</a>
      </div>
      <Mod4_1 Cuadro={Cuadro} Red={Red} Grey={Grey} Com={Com} Esp={Esp}/>
      <Mod4_2 Cuadro={Cuadro} Red={Red} Grey={Grey} Com={Com} Esp={Esp}/>
      <Mod4_3 Cuadro={Cuadro} Red={Red} Grey={Grey} Com={Com} Esp={Esp}/>
    </article>
  );
};
export { Modulo4 };
