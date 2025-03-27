import { Esp } from "../espacio";
import Red from "../Colors/Red";
import Grey from "../Colors/Grey";
const Mod6_1 = () => {
  return (
    <section id="6.1">
      <h3>6.1. Definición de Procedimientos y Subrutinas en COBOL</h3>
      <p>
        Por supuesto, a continuación, desarrollaré el punto 6.1: "Definición de
        Procedimientos y Subrutinas" en un curso de COBOL. 6.1. Definición de
        Procedimientos y Subrutinas en COBOL Los procedimientos y subrutinas en
        COBOL son bloques de código reutilizable que se utilizan para realizar
        tareas específicas dentro de un programa. Estas estructuras permiten
        descomponer un programa en partes más pequeñas y más manejables, lo que
        facilita el mantenimiento y la reutilización del código.
      </p>
      <h4>Definición de Procedimientos</h4>
      <p>
        Un procedimiento en COBOL es un bloque de código que realiza una tarea
        específica. Estos procedimientos se definen dentro de la sección
        PROCEDURE DIVISION y se llaman desde otros lugares del programa
        principal. La definición de un procedimiento se inicia con la palabra
        clave PROCEDURE DIVISION y termina con END PROCEDURE.
      </p>
      <div className="codigo">
        PROCEDURE DIVISION. <br />
        <Esp />
        DISPLAY 'Inicio del programa principal'. <br />
        <br />
        <Esp />
        PERFORM MiProcedimiento. <br />
        <br />
        <Esp />
        DISPLAY 'Fin del programa principal'. <br />
        <br />
        <Esp />
        STOP RUN. <br />
        <br />
        <Esp />
        MiProcedimiento. <br />
        <Esp />
        DISPLAY 'Este es un procedimiento'.
      </div>
      <p>
        En este ejemplo, se define un procedimiento llamado MiProcedimiento que
        muestra un mensaje en pantalla. El procedimiento se llama desde el
        programa principal utilizando la sentencia PERFORM.
      </p>
      <h4>Definición de Subrutinas</h4>
      <p>
        Las subrutinas en COBOL son similares a los procedimientos, pero se
        definen fuera de la sección PROCEDURE DIVISION. Las subrutinas pueden
        recibir y devolver valores a través de parámetros. Se definen utilizando
        la palabra clave ENTRY y se llaman desde el programa principal
        utilizando la palabra clave CALL.
      </p>
      <div className="codigo">
        IDENTIFICATION DIVISION. <br />
        PROGRAM-ID. MiPrograma. <br />
        <br />
        DATA DIVISION. <br />
        <br />
        WORKING-STORAGE SECTION. <br />
        01 NumeroA PIC 9(3) VALUE 100. <br />
        01 NumeroB PIC 9(3) VALUE 50. <br />
        01 Resultado PIC 9(4). <br />
        <br />
        PROCEDURE DIVISION. <br />
        <Esp />
        DISPLAY 'Inicio del programa principal'. <br />
        <br />
        <Esp />
        CALL 'MiSubrutina' USING NumeroA NumeroB Resultado. <br />
        <br />
        <Esp />
        DISPLAY 'Resultado: ' Resultado. <br />
        <Esp />
        DISPLAY 'Fin del programa principal'. <br />
        <br />
        STOP RUN. <br />
        <br />
        MiSubrutina. <br />
        <Esp />
        ENTRY 'MiSubrutina' USING NumA NumB Result. <br />
        <Esp />
        COMPUTE Result = NumA + NumB. <br />
      </div>
      <p>
        En este ejemplo, se define una subrutina llamada MiSubrutina que recibe
        dos números y devuelve su suma a través del parámetro Result. La
        subrutina se llama desde el programa principal utilizando la sentencia
        CALL.
      </p>
      <h4>Conclusión</h4>
      <p>
        La definición de procedimientos y subrutinas en COBOL es una práctica
        común para modularizar y organizar el código de manera más eficiente.
        Estas estructuras permiten dividir un programa en tareas más manejables
        y reutilizables, lo que facilita el mantenimiento y la escalabilidad de
        las aplicaciones COBOL. Comprender cómo definir y utilizar
        procedimientos y subrutinas es fundamental para desarrollar aplicaciones
        COBOL bien estructuradas y mantenibles.
      </p>
    </section>
  );
};

export { Mod6_1 };
