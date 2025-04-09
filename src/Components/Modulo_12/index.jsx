import Cuadro from "../Cuadro.jsx";
import Red from "../Colors/Red.jsx";
import Grey from "../Colors/Grey.jsx";
import Com from "../Colors/Com.jsx";
import { Esp } from "../espacio.jsx";
import { Mod12_1 } from "./Mod12_1";
import { Mod12_2 } from "./Mod12_2";
import { Mod12_3 } from "./Mod12_3";

const Modulo12 = () => {
  const codigos = {};

  return (
    <article id="modulo-12">
      <div className="h2-topBar">
        <h2> Módulo 12: Mantenimiento y Evolución de Programas COBOL</h2>

        <a href="#indice">al Indice</a>
      </div>
      <Mod12_1 Cuadro={Cuadro} Red={Red} Grey={Grey} Com={Com} Esp={Esp}/>
      <Mod12_2 Cuadro={Cuadro} Red={Red} Grey={Grey} Com={Com} Esp={Esp}/>
      <Mod12_3 Cuadro={Cuadro} Red={Red} Grey={Grey} Com={Com} Esp={Esp}/>
    </article>
  );
};
export { Modulo12 };
