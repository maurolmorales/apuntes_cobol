import Cuadro from "../Cuadro.jsx";
import Red from "../Colors/Red.jsx";
import Grey from "../Colors/Grey.jsx";
import Com from "../Colors/Com.jsx";
import { Esp } from "../espacio.jsx";
import { Mod11_1 } from "./Mod11_1";
import { Mod11_2 } from "./Mod11_2";
import { Mod11_3 } from "./Mod11_3";
const Modulo11 = () => {
  return (
    <article id="modulo-11">
      <div className="h2-topBar">
        <h2> Módulo 11: Aplicaciones Prácticas de COBOL</h2>

        <a href="#indice">al Indice</a>
      </div>
      <Mod11_1 Cuadro={Cuadro} Red={Red} Grey={Grey} Com={Com} Esp={Esp} />
      <Mod11_2 Cuadro={Cuadro} Red={Red} Grey={Grey} Com={Com} Esp={Esp} />
      <Mod11_3 Cuadro={Cuadro} Red={Red} Grey={Grey} Com={Com} Esp={Esp} />
    </article>
  );
};
export { Modulo11 };
