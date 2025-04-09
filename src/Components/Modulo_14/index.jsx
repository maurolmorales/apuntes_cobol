import Cuadro from "../Cuadro.jsx";
import Red from "../Colors/Red.jsx";
import Grey from "../Colors/Grey.jsx";
import Com from "../Colors/Com.jsx";
import { Esp } from "../espacio.jsx";
import { Mod14_1 } from "./Mod14_1";
import { Mod14_2 } from "./Mod14_2";
import { Mod14_3 } from "./Mod14_3";
const Modulo14 = () => {
  const codigos = {};

  return (
    <article id="modulo-14">
      <div className="h2-topBar">
        <h2> Módulo 14: Seguridad en Aplicaciones COBOL</h2>

        <a href="#indice">al Indice</a>
      </div>
      <Mod14_1 Cuadro={Cuadro} Red={Red} Grey={Grey} Com={Com} Esp={Esp} />
      <Mod14_2 Cuadro={Cuadro} Red={Red} Grey={Grey} Com={Com} Esp={Esp} />
      <Mod14_3 Cuadro={Cuadro} Red={Red} Grey={Grey} Com={Com} Esp={Esp} />
    </article>
  );
};
export { Modulo14 };
