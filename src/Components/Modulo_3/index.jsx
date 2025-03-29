import { Esp } from "../espacio";
import { Mod3_1 } from "./Mod3_1";
import { Mod3_2 } from "./Mod3_2";
import { Mod3_3 } from "./Mod3_3";
import { Mod3_4 } from "./Mod3_4";
import { Mod3_5 } from "./Mod3_5";

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
      <Mod3_1 />
      <Mod3_2 />
      <Mod3_3 />
      <Mod3_4 />
      <Mod3_5 />
    </article>
  );
};

export { Modulo3 };
