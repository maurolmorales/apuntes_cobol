const Mod6_1 = ({ Cuadro, Red, Grey, Esp, Com }) => {
  return (
    <section id="6.1">
      <h3>6.1. Definición de Procedimientos y Subrutinas en COBOL</h3>
      <p>
        Los procedimientos y subrutinas en COBOL son bloques de código
        reutilizable que se utilizan para realizar tareas específicas dentro de
        un programa. Estas estructuras permiten descomponer un programa en
        partes más pequeñas y más manejables, lo que facilita el mantenimiento y
        la reutilización del código.
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
        <Red>PROCEDURE DIVISION</Red>. <br />
        <Esp />
        <Red>DISPLAY </Red>
        <Grey>'Inicio del programa principal'</Grey>. <br />
        <br />
        <Esp />
        <Red>PERFORM </Red>MiProcedimiento. <br />
        <br />
        <Esp />
        <Red>DISPLAY </Red>
        <Grey>'Fin del programa principal'</Grey>. <br />
        <br />
        <Esp />
        <Red>STOP RUN</Red>. <br />
        <br />
        <Esp />
        MiProcedimiento. <br />
        <Esp />
        <Red>DISPLAY </Red>
        <Grey>'Este es un procedimiento'</Grey>.
      </div>
      <p>
        En este ejemplo, se define un procedimiento llamado MiProcedimiento que
        muestra un mensaje en pantalla. El procedimiento se llama desde el
        programa principal utilizando la sentencia PERFORM.
      </p>
      <h4>Definición de Subrutinas</h4>
      <p>
        Las subrutinas en COBOL son similares a los procedimientos, pero se
        definen fuera de la sección PROCEDURE DIVISION . Las subrutinas pueden
        recibir y devolver valores a través de parámetros. Se definen utilizando
        la palabra clave ENTRY y se llaman desde el programa principal
        utilizando la palabra clave CALL.
      </p>
      <div className="codigo">
        <Red>IDENTIFICATION DIVISION</Red>. <br />
        <Red>PROGRAM-ID</Red>. MiPrograma. <br />
        <br />
        <Red>DATA DIVISION</Red>. <br />
        <br />
        <Red>WORKING-STORAGE SECTION</Red>. <br />
        01 NumeroA<Red> PIC </Red>9(3) <Red>VALUE</Red> 100. <br />
        01 NumeroB<Red> PIC </Red>9(3) <Red>VALUE</Red> 50. <br />
        01 Resultado<Red> PIC </Red>9(4). <br />
        <br />
        <Red>PROCEDURE DIVISION</Red>. <br />
        <Esp />
        <Red>DISPLAY </Red>
        <Grey>'Inicio del programa principal'</Grey>. <br />
        <br />
        <Esp />
        <Red>CALL</Red> <Grey>'MiSubrutina'</Grey> <Red>USING</Red> NumeroA
        NumeroB Resultado. <br />
        <br />
        <Esp />
        <Red>DISPLAY </Red>
        <Grey>'Resultado: '</Grey> Resultado. <br />
        <Esp />
        <Red>DISPLAY </Red>
        <Grey>'Fin del programa principal'</Grey>. <br />
        <br />
        <Red>STOP RUN</Red>. <br />
        <br />
        MiSubrutina. <br />
        <Esp />
        <Red>ENTRY</Red> <Grey>'MiSubrutina'</Grey> <Red>USING</Red> NumA NumB
        Result. <br />
        <Esp />
        <Red>COMPUTE</Red> Result = NumA + NumB. <br />
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
