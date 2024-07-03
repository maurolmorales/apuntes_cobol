import { Esp } from "../espacio";
import { DataDivision } from "./DataDivision";
import { EnvironmentDivision } from "./EnvironmentDivision";
import { IdentificationDivision } from "./IdentificationDivision";
import { ProcedureDivision } from "./ProcedureDivision";
const Modulo2 = () => {
  return (
    <article id="modulo-2">
      <div className="h2-topBar">
        <h2> Módulo 2: Estructura de un Programa en COBOL.</h2>
        <a href="#indice">al Indice</a>
      </div>
      <p>
        El lenguaje COBOL (Common Business-Oriented Language) es un lenguaje de
        programación diseñado específicamente para aplicaciones empresariales, y
        su estructura se enfoca en la facilidad de lectura y mantenimiento del
        código. Las cosas más grandes en un programa COBOL son{" "}
        <strong> divisiones</strong>, y dentro de esas divisiones hay{" "}
        <strong>secciones</strong>, y dentro de esas secciones usted encontrará{" "}
        <strong>párrafos</strong>. Los párrafos contiene <strong>frases</strong>
        , y las frases tienen declaraciones.
      </p>
      <p>
        La estructura de un programa COBOL: <strong>PROGRAMA</strong> &#8658;{" "}
        <strong>DIVISION</strong> &#8658;
        <strong>SECCION</strong> &#8658; <strong>PÁRRAFO</strong> &#8658;{" "}
        <strong>INSTRUCCIÓN</strong>.
      </p>
      <p>
        Un programa COBOL consta de varias divisiones y secciones. Cada división
        y sección tiene un propósito específico y contribuye a la organización y
        funcionalidad del programa. Las principales divisiones son:
      </p>
      <div className="codigo">
        IDENTIFICATION DIVISION. <br />
        ENVIRONMENT DIVISION. <br />
        DATA DIVISION. <br />
        PROCEDURE DIVISION.
      </div>
      
      <IdentificationDivision />
      <EnvironmentDivision />
      <DataDivision />
      <ProcedureDivision />

      <h4>Uso de Variables y Datos</h4>
      <p>
        En la PROCEDURE DIVISION, se utilizan las variables y estructuras de
        datos declaradas en la DATA DIVISION para realizar cálculos, almacenar
        resultados y llevar a cabo operaciones. Las variables se pueden utilizar
        en operaciones matemáticas, concatenación de cadenas, comparaciones y
        otras manipulaciones de datos según sea necesario para la lógica de
        negocio del programa.
      </p>
      <h4>Presentación de Resultados</h4>
      <p>
        La PROCEDURE DIVISION también se utiliza para mostrar resultados al
        usuario, ya sea mediante la impresión de informes, la visualización en
        la pantalla o la escritura en archivos de salida. El uso de sentencias
        DISPLAY, WRITE y otras sentencias de salida es común en esta división.
      </p>
      <h4>Otros Elementos Importantes</h4>
      <p>
        Además de las divisiones mencionadas, un programa COBOL puede contener
        divisiones adicionales como la INPUT-OUTPUT SECTION, FILE-CONTROL, DATA
        DIVISION EXTENSION, entre otras, según las necesidades específicas del
        programa.
      </p>
      <p>
        Las sentencias COBOL son las instrucciones que controlan el flujo y la
        lógica del programa. Algunas sentencias comunes incluyen DISPLAY (para
        mostrar datos en la pantalla), ACCEPT (para recopilar datos del usuario)
        y COMPUTE (para realizar cálculos).
      </p>
      <h4>Conclusión</h4>
      <p>
        La estructura de un programa en COBOL sigue una organización clara y
        legible. Comprender las divisiones y secciones, así como las sentencias
        y tipos de datos, es fundamental para desarrollar programas efectivos en
        COBOL.
      </p>
      <p>
        Este informe proporciona una visión general de la estructura de un
        programa COBOL, pero es importante recordar que la complejidad de los
        programas puede variar según las necesidades comerciales específicas.
      </p>
    </article>
  );
};

export { Modulo2 };
