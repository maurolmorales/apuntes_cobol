const Mod6_4 = ({ Cuadro, Red, Grey, Esp, Com }) => {
  return (
    <section id="6.4">
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
        <Red>DATA DIVISION</Red>. <br /> <br />
        <Red>COPY</Red> RegistroCliente. <br /> <br />
        <Red>PROCEDURE DIVISION</Red>. <br />
        <Esp />
        <Red>MOVE</Red> <Grey>'Juan Pérez'</Grey>
        <Red> TO </Red>NombreCliente. <br />
        <Esp />
        <Red>DISPLAY</Red> <Grey>'Nombre del Cliente: '</Grey> NombreCliente.{" "}
        <br /> <br />
        <Esp />
        <Red>MOVE</Red>
        <Grey> 'María Rodríguez'</Grey>
        <Red> TO </Red>NombreCliente. <br />
        <Esp />
        <Red>DISPLAY</Red> <Grey>'Nombre del Cliente: '</Grey> NombreCliente.
      </div>
      <p>
        En este ejemplo, se ha definido una copia del registro RegistroCliente
        en la sección DATA DIVISION. Esto permite reutilizar la estructura de
        datos en diferentes partes del programa sin tener que volver a
        definirla.
      </p>

      <h4>COPY</h4>
      <p>
        Un programa COBOL puede y es aconsejable, re-utilizar el código
        programado, recurriendo a la inclusión de estos por medio de COPY.
      </p>
      <ul>
        <li>Declaración de archivos (Select)</li>
        <li>Definición de archivos y sus registros (FD) </li>
        <li>Variables propias de cada archivo (Ubicación, File Status)</li>
        <li>
          Definición de variables comunes para todos los programas
          Working-Storage
        </li>
        <li>Definición de Tablas de Bases de Datos</li>
        <li>Rutinas comunes (Cálculos, Mensajes, Errores, LOG, etc)</li>
        <li>Esqueletos pre-definidos con pseudo-texto</li>
      </ul>
      <p>
        Vamos a crear el COPY FILEA, como miembro FILEA en SYS1.COPYLIB, que
        contendrá la siguiente estructura:
      </p>
      <div className="codigo">
        <Esp />
        01 FILEA <br />
        <Esp />
        <Esp />
        02 NOMBRE-EMPL <Red>PIC</Red> X(40). <br />
        <Esp />
        <Esp />
        02 DOMICILIO <Red>PIC</Red> X(40). <br />
        <Esp />
        <Esp />
        02 CIUDAD <Red>PIC</Red> X(20). <br />
        <Esp />
        <Esp />
        02 COD-POSTAL <Red>PIC</Red> X(04). <br />
        <Com>. . . . . . . . . . . . . . . . . . . Fuente del programa </Com>
        <br />
        <Esp />
        <Red>WORKING-STORAGE SECTION</Red>. <br />
        <Esp />
        <Esp />
        <Red>COPY</Red> FILEA. <br />
        <Com>
          . . . . . . . . . . . . . . . . . . . Posterior a la compilación
        </Com>{" "}
        <br />
        <Esp />
        <Red>WORKING-STORAGE SECTION</Red>. <br />
        01 FILEA <br />
        <Esp />
        <Esp />
        02 NOMBRE-EMPL <Red>PIC</Red> X(40). <br />
        <Esp />
        <Esp />
        02 DOMICILIO <Red>PIC</Red> X(40). <br />
        <Esp />
        <Esp />
        02 CIUDAD <Red>PIC</Red> X(20). <br />
        <Esp />
        <Esp />
        02 COD-POSTAL <Red>PIC</Red> X(04). <br />
      </div>

      <h4>REPLACE</h4>
      <ul>
        <li>Se proveen los copys que usan los programas</li>
        <li>Archivos y Tablas de la Base de Datos</li>
        <li>Ejemplos de Procedimientos comunes a todos los programas</li>
      </ul>
      <p>
        Sirve para realizar cambios en el texto del COPY previamente generado en
        COPYLIB, por necesidad del programador. Ejemplo de cómo es reemplazado
        en el programa el contenido de un COPY:
      </p>
      <div className="codigo">
        <Red>COPY</Red> PAYLIB <Red>REPLACING</Red> <br />
        <Esp />
        FLDA <Red>BY</Red> PAY-RECORD <br />
        <Esp />
        FLDB <Red>BY</Red> HRLY-RATE <br />
        <Esp />
        FLDC <Red>BY</Red> HRS-WORKD. <br />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          placeItems: "center",
        }}
      >
        <div>
          <p>TEXTO DEL COPY EN LA BIBLIOTECA</p>
          <div className="codigo">
            01 FLDA. <br />
            <Esp />
            02 FLDB <Red>PIC</Red> 999V99. <br />
            <Esp />
            02 FLDC <Red>PIC</Red> 999V99 <br />
          </div>
        </div>
        <div>
          <p>TEXTO DEL COPY EN EL PROGRAMA</p>
          <div className="codigo">
            01 PAY-RECORD. <br />
            <Esp />
            02 HRLY-RATE <Red>PIC</Red> 999V99. <br />
            <Esp />
            02 HRS-WORKD <Red>PIC</Red> 999V99. <br />
          </div>
        </div>
      </div>

      <h4>COPY DE PROCEDURE DIVISION</h4>
      <p>
        Este tipo de COPY se invoca en la PROCEDURE DIVISION y contiene un
        conjunto de sentencias, de uso común para los programas, por ejemplo
        tratamiento de errores.
      </p>
      <div className="codigo">
        <Red>COPY</Red> text-name <Red>OF</Red> nombre-biblioteca{" "}
        <Red>SUPRESS REPLACING</Red> operando-1 <Red>BY</Red> operando-2
      </div>
      <p>Ejemplo Invocando rutina error: </p>

      <div className="codigo">
        <Red>PROCEDURE DIVISION</Red>. <br />
        <Esp />
        <Red>READ</Red> FILEA <br />
        <Esp />
        <Red>IF</Red> RETORNO <Red>IS NOT EQUAL</Red> <Grey>'OK'</Grey> <br />
        <Esp />
        <Esp />
        <Red>PERFORM</Red> INVOCO-ERROR <br />
        <Esp />
        <Red>ELSE</Red> <br />
        <Com>. . . . . . . . . </Com> <br />
        INVOCO-ERROR <br />
        <Esp />
        <Red>COPY</Red> RUT-ERROR <br />
        <Com>... Texto del copy en la biblioteca ... </Com> <br />
        <Esp />
        <Red>MOVE</Red> RETORNO <Red>TO</Red> COD-ERROR. <br />
        <Esp />
        <Red>CALL</Red> <Grey>'RUTERROR'</Grey> <Red>USING</Red> COD-ERROR.{" "}
        <br />
      </div>
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
      <hr />
    </section>
  );
};

export { Mod6_4 };
