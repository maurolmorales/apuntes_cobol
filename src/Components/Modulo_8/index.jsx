import Cuadro from "../Cuadro.jsx";
import Red from "../Colors/Red.jsx";
import Grey from "../Colors/Grey.jsx";
import Com from "../Colors/Com.jsx";
import { Esp } from "../espacio.jsx";
import { Mod8_1 } from "./Mod8_1";
import { Mod8_2 } from "./Mod8_2";
import { Mod8_3 } from "./Mod8_3";

const Modulo8 = () => {
  return (
    <article id="modulo-8">
      <div className="h2-topBar">
        <h2> Módulo 8: Depuración y Pruebas en COBOL</h2>

        <a href="#indice">al Indice</a>
      </div>
      <Mod8_1 Cuadro={Cuadro} Red={Red} Grey={Grey} Com={Com} Esp={Esp}/>
      <Mod8_2 Cuadro={Cuadro} Red={Red} Grey={Grey} Com={Com} Esp={Esp}/>
      <Mod8_3 Cuadro={Cuadro} Red={Red} Grey={Grey} Com={Com} Esp={Esp}/>
    </article>
  );
};
export { Modulo8 };
