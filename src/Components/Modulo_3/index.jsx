import Cuadro from "../Cuadro.jsx";
import Red from "../Colors/Red.jsx";
import Grey from "../Colors/Grey.jsx";
import Com from "../Colors/Com.jsx";
import { Esp } from "../espacio.jsx";
import { Mod3_1 } from "./Mod3_1";
import { Mod3_2 } from "./Mod3_2";
import { Mod3_3 } from "./Mod3_3";
import { Mod3_4 } from "./Mod3_4";

/*
3.1 Declaración de variables
3.2 Niveles de jerarquía en COBOL
3.3 Tipos de datos numéricos
3.4 Tipos de datos alfanuméricos
3.5 Manipulación de datos en COBOL
*/

import { CodigoPre } from "../CodigoPre";
const Modulo3 = () => {
  return (
    <article id="modulo-3">
      <div className="h2-topBar">
        <h2> Módulo 3: Variables y Tipos de Datos en COBOL </h2>
        <a href="#indice">al Indice</a>
      </div>
      <Mod3_1 Cuadro={Cuadro} Red={Red} Grey={Grey} Com={Com} Esp={Esp}/>
      <Mod3_2 Cuadro={Cuadro} Red={Red} Grey={Grey} Com={Com} Esp={Esp}/>
      <Mod3_3 Cuadro={Cuadro} Red={Red} Grey={Grey} Com={Com} Esp={Esp}/>
      <Mod3_4 Cuadro={Cuadro} Red={Red} Grey={Grey} Com={Com} Esp={Esp}/>
    </article>
  );
};

export { Modulo3 };
