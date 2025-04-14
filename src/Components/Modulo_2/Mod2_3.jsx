const Mod2_3 = ({ Cuadro, Red, Grey, Esp, Com }) => {
  return (
    <section id="2.3">
      <h3>2.3 Estructura Jerárquica en COBOL</h3>
      <p>
        El lenguaje COBOL está diseñado con una estructura jerárquica muy clara
        y organizada, lo cual facilita su comprensión y mantenimiento,
        especialmente en ambientes empresariales donde la claridad y la
        documentación son fundamentales. A continuación, se explica la jerarquía
        típica que se sigue en un programa COBOL, desde su nivel más general
        hasta las instrucciones individuales:
      </p>
      <br />
      <h4>2.3.1 Nivel 1 - PROGRAMA</h4>
      <p>
        El programa COBOL comienza con la identificación del programa. Aquí se
        define el nombre del mismo y se establecen algunas características
        generales.
      </p>
      <div className="codigo">
        <Red>IDENTIFICATION DIVISION</Red>. <br />
        <Red>PROGRAM-ID</Red>. PROGRAMA-EJEMPLO. <br />
      </div>
      <br />
      <h4>2.3.2 Nivel 2 - DIVISIONS</h4>
      <p>
        El programa COBOL está organizado en cuatro divisiones principales. Cada
        DIVISION se declara explícitamente y suele ir en mayúsculas, iniciando
        en la columna 8.
      </p>
      <br />
      <p>Divisiones:</p>
      <ul>
        <li>
          <strong>IDENTIFICATION</strong>: Describe el programa y su autoría
        </li>
        <li>
          <strong>ENVIRONMENT</strong>: Define el entorno del sistema y archivos
        </li>
        <li>
          <strong>DATA</strong>: Declara las estructuras de datos y archivos
        </li>
        <li>
          <strong>PROCEDURE</strong>: Contiene la lógica del programa
          (instrucciones)
        </li>
      </ul>
      <br />
      <h4>2.3.3 Nivel 3 SECTIONS</h4>
      <p>
        Dentro de algunas divisiones, existen secciones que agrupan componentes
        relacionados. No todas las divisiones las requieren, pero cuando están
        presentes, ayudan a mantener el orden.
      </p>
      <br />
      <p>Ejemplos de secciones comunes:</p>
      <div className="twoColums" style={{ gridTemplateColumns: "1fr 1fr" }}>
        <Cuadro data={{ gridTemplateColumns: "10rem 20rem" }} key={1}>
          <div className="col">
            <div>División</div>
            <div>ENVIRONMENT</div>
            <div>DATA</div>
            <div>PROCEDURE</div>
          </div>
          <div className="col">
            <div>Sección</div>
            <div>CONFIGURATION, INPUT-OUTPUT</div>
            <div>FILE, WORKING-STORAGE, LINKAGE</div>
            <div>(opcionalmente puede tener secciones)</div>
          </div>
        </Cuadro>

        <div className="codigo">
          <Red>DATA DIVISION</Red>. <br />
          <Red>WORKING-STORAGE SECTION</Red>. <br />
        </div>
      </div>
      <br />
      <h4>2.3.4 Nivel 4 - PARAGRAPHS (Párrafos)</h4>
      <p>
        Los párrafos son bloques de código o lógica con un nombre identificador
        único. Su uso es obligatorio en la PROCEDURE DIVISION y permiten dividir
        la lógica del programa en partes manejables. Cada párrafo contiene una o
        más sentencias (instrucciones), y se declara sin necesidad de una
        palabra reservada como PARAGRAPH.
      </p>
      <div className="codigo">
        <Red>PROCEDURE DIVISION</Red>. <br />
        INICIAR. <br />
        <Esp /> <Red>DISPLAY</Red> <Grey>'Inicio del programa'</Grey>. <br />
      </div>
      <br />
      <h4>
        2.3.5 Nivel 5 - SENTENCES / INSTRUCTIONS (Sentencias e Instrucciones)
      </h4>
      <p>
        Las sentencias (sentences) están compuestas por una o más instrucciones
        (statements) COBOL, terminadas con punto (.). Las instrucciones son las
        operaciones o comandos que realiza el programa:
        <mark>MOVE</mark>, <mark>DISPLAY</mark>, <mark>PERFORM</mark>,{" "}
        <mark>IF</mark>, <mark>EVALUATE</mark>, etc.
      </p>

      <div className="codigo">
        <Red>MOVE</Red> 0 <Red>TO</Red> CONTADOR. <br />
        <Red>PERFORM</Red> LEER-DATOS. <br />
      </div>
     <br />

     <h4>2.3.6 Esquema visual de la jerarquía</h4>
      <div className="codigo">
      PROGRAMA    <br />
      <Esp/><Esp/>  &#8627; DIVISION    <br />
      <Esp/><Esp/><Esp/><Esp/>&#8627; SECTION    <br />
      <Esp/><Esp/><Esp/><Esp/><Esp/><Esp/>&#8627;  PARAGRAPH    <br />
      <Esp/><Esp/><Esp/><Esp/><Esp/><Esp/><Esp/><Esp/>&#8627; SENTENCE    <br />
      <Esp/><Esp/><Esp/><Esp/><Esp/><Esp/><Esp/><Esp/><Esp/><Esp/>&#8627; INSTRUCTION    <br />
    <br />
      </div>
    </section>
  );
};

export { Mod2_3 };
