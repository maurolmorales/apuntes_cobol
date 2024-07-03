import { Esp } from "../espacio";
const Modulo6 = () => {
  return (
    <article id="modulo-6">
      <div className="h2-topBar">
        <h2> Módulo 6: Procedimientos y Subrutinas en COBOL</h2>

        <a href="#indice">al Indice</a>
      </div>
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
<Esp/>DISPLAY 'Inicio del programa principal'. <br /><br />
<Esp/>PERFORM MiProcedimiento. <br /><br />
<Esp/>DISPLAY 'Fin del programa principal'. <br /><br />
<Esp/>STOP RUN. <br /><br />
<Esp/>MiProcedimiento. <br />
<Esp/>DISPLAY 'Este es un procedimiento'.
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
PROGRAM-ID. MiPrograma. <br /><br />
DATA DIVISION. <br /><br />
WORKING-STORAGE SECTION. <br />
01 NumeroA PIC 9(3) VALUE 100. <br />
01 NumeroB PIC 9(3) VALUE 50. <br />
01 Resultado PIC 9(4). <br /><br />
PROCEDURE DIVISION. <br />
<Esp/>DISPLAY 'Inicio del programa principal'. <br /><br />
<Esp/>CALL 'MiSubrutina' USING NumeroA NumeroB Resultado. <br /><br />
<Esp/>DISPLAY 'Resultado: ' Resultado. <br />
<Esp/>DISPLAY 'Fin del programa principal'. <br /><br />
STOP RUN. <br /><br />
MiSubrutina. <br />
<Esp/>ENTRY 'MiSubrutina' USING NumA NumB Result. <br />
<Esp/>COMPUTE Result = NumA + NumB. <br />
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
      <h3>6.2. Paso de Parámetros en COBOL</h3>
      <p>
        El paso de parámetros en COBOL es una técnica que permite que los
        procedimientos y subrutinas reciban información desde el programa
        principal y devuelvan resultados a través de parámetros. Los parámetros
        son variables que se pasan entre el programa principal y las subrutinas
        para compartir información.
      </p>
      <h4>Paso de Parámetros a Subrutinas</h4>
      <p>
        El paso de parámetros a subrutinas se realiza utilizando la cláusula
        USING en la llamada a la subrutina. Los parámetros se enumeran en la
        sección USING y se pasan a la subrutina. La subrutina debe estar
        definida para recibir los parámetros en el mismo orden.
      </p>
      <div className="codigo">
IDENTIFICATION DIVISION. <br />
PROGRAM-ID. MiPrograma. <br /><br />
DATA DIVISION. <br /><br />
WORKING-STORAGE SECTION. <br />
01 NumeroA PIC 9(3) VALUE 100. <br />
01 NumeroB PIC 9(3) VALUE 50. <br />
01 Resultado PIC 9(4). <br /><br />
PROCEDURE DIVISION. <br />
<Esp/>DISPLAY 'Inicio del programa principal'. <br /><br />
<Esp/>CALL 'MiSubrutina' USING NumeroA NumeroB Resultado. <br /><br />
<Esp/>DISPLAY 'Resultado: ' Resultado. <br />
<Esp/>DISPLAY 'Fin del programa principal'. <br /><br />
STOP RUN. <br /><br />
MiSubrutina. <br />
<Esp/>IDENTIFICATION DIVISION. <br />
<Esp/>PROGRAM-ID. MiSubrutina. <br /><br />
<Esp/>DATA DIVISION. <br /><br />
<Esp/>LINKAGE SECTION. <br />
<Esp/>01 NumA PIC 9(3). <br />
<Esp/>01 NumB PIC 9(3). <br />
<Esp/>01 Resul PIC 9(4). <br /><br />

<Esp/>PROCEDURE DIVISION USING NumA NumB Resul. <br />
<Esp/>COMPUTE Resul = NumA + NumB.
      </div>
      <p>
        En este ejemplo, la subrutina MiSubrutina recibe tres parámetros: NumA,
        NumB, y Resul. Estos parámetros se pasan desde el programa principal
        mediante la sentencia CALL utilizando la cláusula USING.
      </p>
      <h4>Paso de Parámetros de Retorno</h4>
      <p>
        El paso de parámetros de retorno se utiliza para devolver resultados
        desde una subrutina al programa principal. Los parámetros de retorno se
        declaran en la subrutina y se modifican para enviar resultados al
        programa principal.
      </p>
      <div className="codigo">
DENTIFICATION DIVISION. <br />
PROGRAM-ID. MiPrograma. <br /><br />
DATA DIVISION. <br /><br />
WORKING-STORAGE SECTION. <br />
01 NumeroA PIC 9(3) VALUE 100. <br />
01 NumeroB PIC 9(3) VALUE 50. <br />
01 Resultado PIC 9(4). <br /><br />
PROCEDURE DIVISION. <br />
<Esp/>DISPLAY 'Inicio del programa principal'. <br /><br />
<Esp/>CALL 'MiSubrutina' USING NumeroA NumeroB Resultado. <br /><br />
<Esp/>DISPLAY 'Resultado: ' Resultado. <br />
<Esp/>DISPLAY 'Fin del programa principal'. <br /><br />
STOP RUN. <br /><br />
MiSubrutina. <br />
<Esp/>IDENTIFICATION DIVISION. <br />
<Esp/>PROGRAM-ID. MiSubrutina. <br /><br />
<Esp/>DATA DIVISION. <br /><br />
<Esp/>LINKAGE SECTION. <br />
<Esp/>01 NumA PIC 9(3). <br />
<Esp/>01 NumB PIC 9(3). <br />
<Esp/>01 Resul PIC 9(4). <br /><br />
<Esp/>PROCEDURE DIVISION USING NumA NumB Resul. <br />
<Esp/>COMPUTE Resul = NumA + NumB.
      </div>
      <p>
        En este ejemplo, la subrutina MiSubrutina modifica el parámetro Resul y
        envía el resultado de vuelta al programa principal.
      </p>
      <h4>Conclusión</h4>
      <p>
        El paso de parámetros en COBOL es esencial para compartir información
        entre el programa principal y las subrutinas. Permite que las subrutinas
        realicen tareas específicas con datos proporcionados por el programa
        principal y devuelvan resultados si es necesario. Comprender cómo pasar
        y recibir parámetros en COBOL es crucial para el desarrollo de
        aplicaciones estructuradas y modularizadas en COBOL.
      </p>
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
<Esp/>DISPLAY 'Este es un procedimiento'. <br />
<Esp/>COMPUTE Resultado = NumeroA + NumeroB. <br />
<Esp/>DISPLAY 'Resultado: ' Resultado. <br />
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
<Esp/>DISPLAY 'Inicio del programa principal'. <br /><br />
<Esp/>PERFORM MiProcedimiento. <br /><br />
<Esp/>DISPLAY 'Fin del programa principal'. <br />
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
<Esp/>DISPLAY 'Inicio del programa principal'. <br /> <br />
<Esp/>PERFORM MiProcedimiento. <br /> <br />
<Esp/>DISPLAY 'Resultado: ' Resultado. <br />
<Esp/>DISPLAY 'Fin del programa principal'. <br /> <br />
MiProcedimiento. <br />
<Esp/>DISPLAY 'Este es un procedimiento'. <br />
<Esp/>COMPUTE Resultado = NumeroA + NumeroB. <br />
<Esp/>DISPLAY 'Resultado en procedimiento: ' Resultado. <br />
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
      <h3>6.4. Reutilización de Código en COBOL</h3>
      <p>
        La reutilización de código es una práctica esencial en la programación,
        que consiste en escribir código de manera que pueda ser utilizado en
        múltiples partes de una aplicación o en diferentes programas. En COBOL,
        la reutilización de código se logra a través de procedimientos,
        subrutinas y la organización estructurada del programa.
      </p>
      <h4>Procedimientos y Subrutinas</h4>
      <p>
        Una de las principales formas de reutilización de código en COBOL es
        mediante la creación de procedimientos y subrutinas. Estos bloques de
        código realizan tareas específicas y se pueden llamar desde diferentes
        partes de un programa o incluso desde varios programas.
      </p>
      <p>
        Un ejemplo de reutilización de código con procedimientos y subrutinas se
        ha presentado en secciones anteriores. Definir tareas específicas en
        procedimientos y subrutinas y llamarlos cuando sea necesario es una
        estrategia efectiva para evitar la duplicación de código y mejorar la
        mantenibilidad.
      </p>
      <h4>Copias de Registros</h4>
      <p>
        Otra forma de reutilización de código en COBOL es a través de copias de
        registros. En lugar de definir la misma estructura de datos
        repetidamente en diferentes partes del programa, se puede crear una
        copia del registro en la sección DATA DIVISION y luego utilizarla en
        múltiples lugares.
      </p>
      <div className="codigo">
DATA DIVISION. <br /> <br />
COPY RegistroCliente. <br /> <br />
PROCEDURE DIVISION. <br />
<Esp/>MOVE 'Juan Pérez' TO NombreCliente. <br />
<Esp/>DISPLAY 'Nombre del Cliente: ' NombreCliente. <br /> <br />
<Esp/>MOVE 'María Rodríguez' TO NombreCliente. <br />
<Esp/>DISPLAY 'Nombre del Cliente: ' NombreCliente.
      </div>
      <p>
        En este ejemplo, se ha definido una copia del registro RegistroCliente
        en la sección DATA DIVISION. Esto permite reutilizar la estructura de
        datos en diferentes partes del programa sin tener que volver a
        definirla.
      </p>
      <h4>Bibliotecas de Enlace Dinámico</h4>
      <p>
        En COBOL, también es posible reutilizar código a nivel de programas
        mediante el uso de bibliotecas de enlace dinámico. Esto implica
        almacenar procedimientos, subrutinas o módulos en bibliotecas separadas
        y luego enlazar dinámicamente esos recursos cuando se ejecuta el
        programa principal. De esta manera, los mismos procedimientos pueden ser
        compartidos entre múltiples programas.
      </p>
      <h4>Conclusión</h4>
      <p>
        La reutilización de código es una práctica fundamental en la
        programación en COBOL, que ayuda a reducir la redundancia, mejorar la
        mantenibilidad y acelerar el desarrollo de aplicaciones. Mediante la
        creación de procedimientos, subrutinas, copias de registros y el uso de
        bibliotecas de enlace dinámico, es posible lograr una reutilización
        efectiva del código en COBOL, lo que resulta en programas más eficientes
        y fáciles de mantener.
      </p>
    </article>
  );
};
export { Modulo6 };
