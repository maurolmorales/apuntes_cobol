import { Mod15_1 } from "./Mod15_1";
import { Mod15_2 } from "./Mod15_2";
import { Mod15_3 } from "./Mod15_3";

const Modulo15 = () => {
  const codigos = {};

  return (
    <article id="modulo-15">
      <div className="h2-topBar">
        <h2> Módulo 15: Tendencias y Futuro de COBOL</h2>

        <a href="#indice">al Indice</a>
      </div>
      <Mod15_1 />
      <Mod15_2 />
      <Mod15_3 />
    </article>
  );
};
export { Modulo15 };
