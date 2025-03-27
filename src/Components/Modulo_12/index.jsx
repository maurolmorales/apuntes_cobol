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
      <Mod12_1 />
      <Mod12_2 />
      <Mod12_3 />
    </article>
  );
};
export { Modulo12 };
