import Cuadro from "../Cuadro.jsx";
import Red from "../Colors/Red.jsx";
import Grey from "../Colors/Grey.jsx";
import Com from "../Colors/Com.jsx";
import {Esp} from "../espacio.jsx"
import { Mod1_1 } from "./Mod1_1";
import { Mod1_2 } from "./Mod1_2";
import { Mod1_3 } from "./Mod1_3";
import { Mod1_4 } from "./Mod1_4";
const Modulo1 = () => {
  return (
    <article id="modulo-1">
      <div className="h2-topBar">
        <h2> Módulo 1: Introducción a COBOL.</h2>
        <a href="#indice">al Indice</a>
      </div>
      <Mod1_1 Cuadro={Cuadro} Red={Red} Grey={Grey} Com={Com} Esp={Esp}  />
      <Mod1_2 Cuadro={Cuadro} Red={Red} Grey={Grey} Com={Com} Esp={Esp}  />
      <Mod1_3 Cuadro={Cuadro} Red={Red} Grey={Grey} Com={Com} Esp={Esp}  />
      <Mod1_4 Cuadro={Cuadro} Red={Red} Grey={Grey} Com={Com} Esp={Esp}  />
    </article>
  );
};

export { Modulo1 };
