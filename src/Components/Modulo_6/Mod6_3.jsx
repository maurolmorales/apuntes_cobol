import { Esp } from "../espacio";
import Red from "../Colors/Red";
import Grey from "../Colors/Grey";
const Mod6_3 = () => {
  return (
    <section id="6.3">
      <h3>6.3. Llamada a Procedimientos en COBOL</h3>
      <p>
        Las llamadas a procedimientos en COBOL permiten ejecutar bloques de
        código reutilizables que se encuentran dentro de la sección PROCEDURE
        DIVISION. Estos procedimientos son similares a las subrutinas, pero se
        definen dentro del programa principal y no requieren una declaración de
        ENTRY.
      </p>
      <h4>Definición de Procedimientos</h4>
      <p>
        Los procedimientos en COBOL son bloques de código reutilizable que se
        definen dentro del programa principal. No requieren una sección de
        IDENTIFICATION DIVISION. Para definir un procedimiento, se utiliza la
        palabra clave PROCEDURE DIVISION seguida de un nombre de procedimiento.
      </p>
      <div className="codigo">
        PROCEDURE DIVISION. <br />
        <Esp />
        DISPLAY 'Este es un procedimiento'. <br />
        <Esp />
        COMPUTE Resultado = NumeroA + NumeroB. <br />
        <Esp />
        DISPLAY 'Resultado: ' Resultado. <br />
      </div>
      <p>
        En este ejemplo, se define un procedimiento que muestra un mensaje en
        pantalla, realiza una operación de suma y muestra el resultado. El
        procedimiento no recibe ni devuelve parámetros.
      </p>
      <h4>Llamada a Procedimientos</h4>
      <p>
        Para llamar a un procedimiento en COBOL, se utiliza la sentencia PERFORM
        seguida del nombre del procedimiento.
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
      </div>
      <p>
        En este ejemplo, se llama al procedimiento MiProcedimiento desde el
        programa principal utilizando la sentencia PERFORM. El procedimiento se
        ejecuta y realiza las acciones definidas en su interior.
      </p>
      <h4>Paso de Parámetros</h4>
      <p>
        Los procedimientos en COBOL pueden acceder a variables definidas en la
        sección DATA DIVISION del programa principal. Esto permite compartir
        información entre el programa principal y los procedimientos. No es
        necesario definir parámetros explícitamente en la declaración del
        procedimiento.
      </p>
      <div className="codigo">
        DATA DIVISION. <br /> <br />
        WORKING-STORAGE SECTION. <br />
        01 NumeroA PIC 9(3) VALUE 100. <br />
        01 NumeroB PIC 9(3) VALUE 50. <br />
        01 Resultado PIC 9(4). <br /> <br />
        PROCEDURE DIVISION. <br />
        <Esp />
        DISPLAY 'Inicio del programa principal'. <br /> <br />
        <Esp />
        PERFORM MiProcedimiento. <br /> <br />
        <Esp />
        DISPLAY 'Resultado: ' Resultado. <br />
        <Esp />
        DISPLAY 'Fin del programa principal'. <br /> <br />
        MiProcedimiento. <br />
        <Esp />
        DISPLAY 'Este es un procedimiento'. <br />
        <Esp />
        COMPUTE Resultado = NumeroA + NumeroB. <br />
        <Esp />
        DISPLAY 'Resultado en procedimiento: ' Resultado. <br />
      </div>
      <p>
        En este ejemplo, el procedimiento MiProcedimiento accede a las variables
        NumeroA y NumeroB definidas en la sección DATA DIVISION del programa
        principal y realiza una operación de suma. El resultado se comparte
        entre el programa principal y el procedimiento.
      </p>
      <h4>Conclusión</h4>
      <p>
        Las llamadas a procedimientos en COBOL permiten modularizar y organizar
        el código de manera más eficiente. Los procedimientos son bloques de
        código reutilizable que se definen dentro del programa principal y se
        llaman cuando es necesario. Comprender cómo definir, llamar y compartir
        información entre procedimientos es fundamental para desarrollar
        aplicaciones COBOL bien estructuradas y mantenibles.
      </p>
    </section>
  );
};

export { Mod6_3 };
