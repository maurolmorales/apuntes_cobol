const Mod2_5 = ({ Cuadro, Red, Grey, Esp, Com }) => {
  return (
    <section id="2.5">
      <h3>PROCEDURE DIVISION</h3>
      <p>
        En esta división, se escribe el código principal del programa. Contiene
        las instrucciones que se ejecutarán para realizar la lógica de negocio.
        Es una de las divisiones principales en un programa COBOL y desempeña un
        papel central en la ejecución del programa. En esta división, se escribe
        el código que define la lógica y la funcionalidad del programa. Es el
        corazón de un programa COBOL, donde se define y se implementa la lógica
        de negocio. La capacidad de tomar decisiones, realizar cálculos y
        gestionar datos es fundamental en esta división. A través de un código
        claro y bien estructurado en la PROCEDURE DIVISION, se logra la
        funcionalidad deseada de la aplicación COBOL, lo que es especialmente
        importante en el contexto de las aplicaciones empresariales.
      </p>
      <h4>Código de Lógica de Negocio</h4>
      <p>
        La PROCEDURE DIVISION es donde se define la lógica de negocio del
        programa COBOL. Aquí se escriben las instrucciones y las operaciones que
        realizan cálculos, procesamiento de datos, toma de decisiones y otras
        operaciones necesarias para cumplir con los requisitos de la aplicación.
        Las sentencias COBOL en esta división controlan el flujo del programa y
        determinan cómo se procesan los datos.
      </p>
      <div className="twoColums">
        <div className="codigo">
          <Red>PROCEDURE DIVISION</Red>. <br />
          <Esp />
          <Red>DISPLAY</Red> <Grey>"Ingrese el primer número: "</Grey>. <br />
          <Esp />
          <Red>ACCEPT</Red> Numero1. <br />
          <Esp />
          <Red>DISPLAY</Red> <Grey>"Ingrese el segundo número: "</Grey>. <br />
          <Esp />
          <Red>ACCEPT</Red> Numero2. <br />
          <Esp />
          <Red>COMPUTE</Red> Resultado = Numero1 + Numero2. <br />
          <Esp />
          <Red>DISPLAY</Red> <Grey>"El resultado es: "</Grey>,Resultado. <br />
          <Esp />
          <Red>STOP RUN</Red>.
        </div>
        <p>
          Las instrucciones DISPLAY muestran mensajes en la pantalla, ACCEPT
          recopila datos del usuario, COMPUTE realiza una operación de suma y el
          programa se detiene con STOP RUN al final.
        </p>
      </div>
      <h4>Control de Flujo y Toma de Decisiones</h4>
      <p>
        Dentro de la PROCEDURE DIVISION, se pueden utilizar sentencias de
        control de flujo y toma de decisiones para dirigir la ejecución del
        programa. Algunas de las sentencias comunes que se utilizan para el
        control de flujo incluyen:
      </p>
      <ul>
        <li>
          <strong>IF-ELSE: </strong>Permite tomar decisiones basadas en
          condiciones y ejecutar diferentes bloques de código según el
          resultado.
          <div className="codigo">
            <Red>IF</Red> Numero1 {">"} Numero2 <br />
            <Esp />
            <Red>DISPLAY</Red> <Grey>"Número 1 es mayor."</Grey> <br />
            <Red>ELSE</Red> <br />
            <Esp />
            <Red>DISPLAY</Red> <Grey>"Número 2 es mayor o igual."</Grey> <br />
            <Red>END-IF</Red>.
          </div>
        </li>
        <li>
          <strong>PERFORM:</strong> Se utiliza para realizar bucles y repetir
          bloques de código hasta que se cumpla una condición.
          <div className="codigo">
            <Red>PERFORM</Red> 5 <Red>TIMES</Red> <br />
            <Esp />
            <Red>DISPLAY</Red> <Grey>"Este es el ciclo número "</Grey>,
            contador. <br />
            <Esp />
            <Red>ADD</Red> 1 <Red>TO</Red> contador <br />
            <Red>END-PERFORM</Red>.
          </div>
        </li>
        <li>
          <strong> EVALUATE: </strong>Permite realizar una evaluación de
          múltiples condiciones y ejecutar código basado en el valor de una
          variable.
          <div className="codigo">
            <Red>EVALUATE</Red> Numero1 <br />
            <Red>WHEN</Red> 0 <br />
            <Esp />
            <Red>DISPLAY</Red> <Grey>"El número es cero."</Grey> <br />
            <Red>WHEN</Red> 1 <br />
            <Esp />
            <Red>DISPLAY</Red> <Grey>"El número es uno."</Grey> <br />
            <Red>WHEN OTHER </Red> <br />
            <Esp />
            <Red>DISPLAY</Red> <Grey>"El número no escero ni uno."</Grey> <br />
            <Red>END-EVALUATE</Red>.
          </div>
        </li>
      </ul>
      <h5>Entry Point</h5>
      <p>
        Es el punto de entrada de ejecución de un programa ( ENTRY POINT ), con
        el nombre definido en PROGRAMID
      </p>
      <h5>División de Procedimientos</h5>
      Indica la secuencia de operaciones necesarias, sentencias COBOL, para
      resolver un problema dado. El formato general para esta división es el
      siguiente: <br />
      {"{Nombre de Sección SECTION [numero-segmento]."} <br />
      {"[Nombre de párrafo. Sentencia] ...]...}..."}
      <br />
      <p>
        La cláusula USING se especifica solamente en programas que luego son
        llamados (CALL) o enlazados CHAIN. Puede ser dividida en secciones y
        estas a su vez en párrafos. Cada párrafo generalmente agrupa varias
        sentencias. La división en párrafos es frecuente. Opcionalmente la
        PROCEDURE DIVISION puede contener secciones DECLARATIVAS. En caso de
        utilizarlas, estas deben ser las primeras en definirse.
      </p>
      <h5>Terminación de un Programa</h5>
      <ul>
        <li>
          <strong>EXIT PROGRAM</strong>: Especifica el fin de una rutina y
          retorna el control al programa llamador.
        </li>
        <li>
          <strong>STOP RUN</strong>: Al fin de ejecución retorna el control al
          sistema operativo.
        </li>
        <li>
          GOBACK: Cumple las dos funciones la de EXIT PROGRAM, si es una rutina
          y la STOP RUN si es un programa MAIN. EL GOBACK es el recomendado.
        </li>
      </ul>
      <h5>Terminación de Sentencias</h5>
      <Cuadro data={{ gridTemplateColumns: "1fr 1fr 1fr" }} key={1}>
        <div className="col">
          <ul>
            <li>
              <strong>END-SEARCH</strong>
            </li>
            <li>
              <strong>END-PERFORM</strong>
            </li>
            <li>
              <strong>END-READ</strong>
            </li>
            <li>
              <strong>END-IF</strong>
            </li>
          </ul>
        </div>
        <div className="col">
          <ul>
            <li>END-ADD</li>
            <li>END-INVOKE</li>
            <li>END-CALL</li>
            <li>END-MULTIPLY</li>
            <li>END-START</li>
            <li>END-COMPUTE</li>
            <li>END-STRING</li>
          </ul>
        </div>
        <div className="col">
          <ul>
            <li>END-DELETE</li>
            <li>END-SUBSTRING</li>
            <li>END-DIVIDE</li>
            <li>END-RETURN</li>
            <li>END-UNSTRING</li>
            <li>END-EVALUATE</li>
            <li>END-REWRITE</li>
            <li>END-WRITE</li>
          </ul>
        </div>
      </Cuadro>
      <hr />
    </section>
  );
};

export { Mod2_5 };
