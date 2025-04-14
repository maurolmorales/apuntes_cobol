const Mod2_1 = ({ Cuadro, Red, Grey, Esp, Com }) => {
  return (
    <section id="2.1">
      <h3>2.1 Formato de Escritura</h3>
      <p>
        COBOL es un lenguaje altamente estructurado y legible, originalmente
        diseñado para ser auto-documentado. Por esta razón, el formato de
        escritura tradicional sigue ciertas reglas históricas, aunque los
        compiladores modernos permiten mayor flexibilidad.
      </p>
      <h4>Reglas Clásicas (Formato Fijo)</h4>
      <Cuadro data={{ gridTemplateColumns: "10rem 35rem" }} key={10}>
        <div className="col tCenter">
          <div>COLUMNAS</div>
          <div>01 al 06</div>
          <div>07</div>
          <div>08 al 11</div>
          <div>12 al 72</div>
          <div>73 al 80</div>
        </div>
        <div className="col">
          <div>USO COBOL</div>
          <div>Número de secuencia de área</div>
          <div>Indicador de área</div>
          <div>Área A (declaraciones de DIVISION, SECTION, PARAGRAPH)</div>
          <div>Área B (instrucciones COBOL)</div>
          <div>
            Reservadas para el sistema (no se utilizan en compiladores modernos)
          </div>
        </div>
      </Cuadro>
      * Indicador de área:
      <ul>
        <li>
          <mark> * </mark>: Comentario.
        </li>
        <li>
          <mark> - </mark>: Continuación de una línea anterior.
        </li>
        <li>
          <mark> / </mark>: Salto de página (para listados impresos).
        </li>
      </ul>
      <li>
        El indicador de área, si lleva un '*', indica que la línea es un
        comentario.
      </li>
      <li>
        En el Área A, se describen: Las DIVISION / SECTION / Nombres de párrafos
        / Nivel de indicador FS o SD / Nivel de número 01 o 77
      </li>
      <li>
        En el Área B, describen: Entradas, sentencias, cláusulas y continuación
        de línea.
      </li>
      <br /><br />
      Formato Libre (con compiladores modernos) En versiones más actuales o
      entornos de desarrollo modernos, es posible utilizar formato libre, lo que
      elimina la necesidad estricta de columnas. Sin embargo, el orden
      jerárquico y la indentación clara siguen siendo recomendables para
      mantener la legibilidad. Recomendaciones de Escritura Usar indentación
      para reflejar la jerarquía del programa. Escribir palabras clave en
      mayúsculas. Utilizar comentarios descriptivos. Evitar nombres ambiguos
      para las variables. Mantener una estructura limpia y ordenada. Con estas
      prácticas, se garantiza que el código COBOL sea más comprensible para
      otros desarrolladores, especialmente en entornos corporativos donde el
      mantenimiento a largo plazo es fundamental.
    </section>
  );
};

export { Mod2_1 };
