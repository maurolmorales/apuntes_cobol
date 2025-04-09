import Cuadro from "../Cuadro.jsx";
import Red from "../Colors/Red.jsx";
import Grey from "../Colors/Grey.jsx";
import Com from "../Colors/Com.jsx";
import { Esp } from "../espacio.jsx";
import { Mod13_1 } from "./Mod13_1";
import { Mod13_2 } from "./Mod13_2";
import { Mod13_3 } from "./Mod13_3";

const Modulo13 = () => {
  const codigos = {};

  return (
    <article id="modulo-13">
      <div className="h2-topBar">
        <h2> Módulo 13: Aspectos de Rendimiento y Optimización</h2>

        <a href="#indice">al Indice</a>
      </div>
      <Mod13_1 Cuadro={Cuadro} Red={Red} Grey={Grey} Com={Com} Esp={Esp} />
      <Mod13_2 Cuadro={Cuadro} Red={Red} Grey={Grey} Com={Com} Esp={Esp} />
      <Mod13_3 Cuadro={Cuadro} Red={Red} Grey={Grey} Com={Com} Esp={Esp} />
    </article>
  );
};
export { Modulo13 };
