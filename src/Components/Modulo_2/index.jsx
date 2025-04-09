import Cuadro from "../Cuadro.jsx";
import Red from "../Colors/Red.jsx";
import Grey from "../Colors/Grey.jsx";
import Com from "../Colors/Com.jsx";
import { Esp } from "../espacio.jsx";
import { Mod2_1 } from "./Mod2_1";
import { Mod2_2 } from "./Mod2_2";
import { Mod2_3 } from "./Mod2_3";
import { Mod2_4 } from "./Mod2_4";
import { Mod2_5 } from "./Mod2_5";
const Modulo2 = () => {
  return (
    <article id="modulo-2">
      <div className="h2-topBar">
        <h2> Módulo 2: Estructura de un Programa en COBOL.</h2>
        <a href="#indice">al Indice</a>
      </div>
      <Mod2_1 Cuadro={Cuadro} Red={Red} Grey={Grey} Com={Com} Esp={Esp} />
      <Mod2_2 Cuadro={Cuadro} Red={Red} Grey={Grey} Com={Com} Esp={Esp} />
      <Mod2_3 Cuadro={Cuadro} Red={Red} Grey={Grey} Com={Com} Esp={Esp} />
      <Mod2_4 Cuadro={Cuadro} Red={Red} Grey={Grey} Com={Com} Esp={Esp} />
      <Mod2_5 Cuadro={Cuadro} Red={Red} Grey={Grey} Com={Com} Esp={Esp} />

     
    </article>
  );
};

export { Modulo2 };
