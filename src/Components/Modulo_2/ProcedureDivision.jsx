import { Esp } from "../espacio";
const ProcedureDivision = () => {
  return (
    <section>
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
      <div className="codigo">
        PROCEDURE DIVISION. <br />
        <Esp />
        DISPLAY "Ingrese el primer número: ". <br />
        <Esp />
        ACCEPT Numero1. <br />
        <Esp />
        DISPLAY "Ingrese el segundo número: ". <br />
        <Esp />
        ACCEPT Numero2. <br />
        <Esp />
        COMPUTE Resultado = Numero1 + Numero2. <br />
        <Esp />
        DISPLAY "El resultado es: ",Resultado. <br />
        <Esp />
        STOP RUN.
      </div>
      <p>
        En el ejemplo anterior, las instrucciones DISPLAY muestran mensajes en
        la pantalla, ACCEPT recopila datos del usuario, COMPUTE realiza una
        operación de suma y el programa se detiene con STOP RUN al final.
      </p>
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
            IF Numero1 {">"} Numero2 <br />
            <Esp />
            DISPLAY "Número 1 es mayor." <br />
            ELSE <br />
            <Esp />
            DISPLAY "Número 2 es mayor o igual." <br />
            END-IF.
          </div>
        </li>
        <li>
          <strong>PERFORM:</strong> Se utiliza para realizar bucles y repetir
          bloques de código hasta que se cumpla una condición.
          <div className="codigo">
            PERFORM 5 TIMES <br />
            <Esp />
            DISPLAY "Este es el ciclo número ", contador. <br />
            <Esp />
            ADD 1 TO contador <br />
            END-PERFORM.
          </div>
        </li>
        <li>
          <strong> EVALUATE: </strong>Permite realizar una evaluación de
          múltiples condiciones y ejecutar código basado en el valor de una
          variable.
          <div className="codigo">
            EVALUATE Numero1 <br />
            WHEN 0 <br />
            <Esp />
            DISPLAY "El número es cero." <br />
            WHEN 1 <br />
            <Esp />
            DISPLAY "El número es uno." <br />
            WHEN OTHER <br />
            <Esp />
            DISPLAY "El número no escero ni uno." <br />
            END-EVALUATE.
          </div>
        </li>
      </ul>
    </section>
  );
};

export { ProcedureDivision };
