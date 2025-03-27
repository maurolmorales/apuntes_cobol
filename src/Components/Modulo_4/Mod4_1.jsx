import { Esp } from "../espacio";
import Red from "../Colors/Red";
import Grey from "../Colors/Grey";
const Mod4_1 = () => {
  return (
    <section id="4.1">
      <h3>4.1. Sentencias de control de flujo</h3>
      <p>
        En COBOL, las sentencias de control de flujo se utilizan para dirigir la
        ejecución del programa a diferentes partes del código según ciertas
        condiciones. Estas sentencias son fundamentales para tomar decisiones,
        repetir tareas y controlar el flujo de ejecución en una aplicación COBOL
      </p>
      <h4>IF-ELSE</h4>
      <p>
        La sentencia IF en COBOL se utiliza para tomar decisiones basadas en
        condiciones. Puede ir acompañada de ELSE para manejar situaciones
        alternativas.
      </p>
      <div className="codigo">
        IF SaldoCuenta {"<"} 0 <br />
        <Esp /> DISPLAY 'Cuenta en números rojos' <br />
        ELSE <br />
        <Esp />
        DISPLAY 'Cuenta en buen estado' <br />
        END-IF.
      </div>
      <p>
        En este ejemplo, se muestra un mensaje en función del saldo de la
        cuenta.
      </p>
      <h4>EVALUATE</h4>
      <p>
        La sentencia EVALUATE en COBOL se utiliza para realizar múltiples
        comparaciones en paralelo y tomar decisiones basadas en los resultados
        de esas comparaciones.
      </p>
      <div className="codigo">
        EVALUATE OpcionMenu <br />
        <Esp />
        WHEN '1' DISPLAY 'Seleccionó la opción 1' <br />
        <Esp />
        WHEN '2' DISPLAY 'Seleccionó la opción 2' <br />
        <Esp />
        WHEN '3' DISPLAY 'Seleccionó la opción 3' <br />
        <Esp />
        WHEN OTHER DISPLAY 'Opción no válida' <br />
        END-EVALUATE.
      </div>
      <p>
        En este ejemplo, se evalúa la opción de menú y se muestra un mensaje en
        función de la opción seleccionada.
      </p>
      <h4>PERFORM</h4>
      <p>
        La sentencia PERFORM se utiliza para repetir un bloque de código
        mientras se cumple una condición. Puede usarse con VARYING para
        modificar una variable de control en cada iteración.
      </p>
      <div className="codigo">
        01 Contador PIC 9 VALUE 1. <br /> <br />
        PERFORM UNTIL Contador {">"} 5 <br />
        <Esp />
        DISPLAY 'Iteración ' Contador <br />
        <Esp />
        ADD 1 TO Contador <br />
        END-PERFORM.
      </div>
      <p>
        En este ejemplo, se muestra un mensaje en cada iteración hasta que el
        contador sea mayor que 5.
      </p>
      <h4>GO TO</h4>
      <p>
        La sentencia GO TO se utiliza para redirigir la ejecución a una etiqueta
        específica en el código. Aunque su uso no se recomienda en programas
        modernos, todavía se encuentra en aplicaciones COBOL legadas.
      </p>
      <div className="codigo">
        IF Error <br />
        <Esp />
        GO TO ManejarError <br />
        END-IF.
      </div>
      <p>
        En este ejemplo, si se encuentra un error, el programa salta a la
        etiqueta ManejarError.
      </p>
      <h4>Conclusión</h4>
      <p>
        Las sentencias de control de flujo en COBOL son fundamentales para tomar
        decisiones, repetir tareas y controlar el flujo de ejecución en un
        programa. Comprender cómo utilizar estas sentencias es esencial para
        desarrollar aplicaciones COBOL efectivas. En módulos posteriores,
        exploraremos cómo estas sentencias se combinan con estructuras de
        decisión y repetición para construir lógica más compleja en programas
        COBOL.
      </p>
    </section>
  );
};

export { Mod4_1 };
