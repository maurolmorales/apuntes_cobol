const Mod4_1 = ({ Cuadro, Red, Grey, Esp, Com }) => {
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
        <Red>IF</Red> SaldoCuenta {"<"} 0 <br />
        <Esp /> <Red>DISPLAY</Red> <Grey>'Cuenta en números rojos'</Grey> <br />
        <Red>ELSE</Red> <br />
        <Esp />
        <Red>DISPLAY</Red> <Grey>'Cuenta en buen estado'</Grey> <br />
        <Red>END-IF</Red>.
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
        <Red>EVALUATE</Red> OpcionMenu <br />
        <Esp />
        <Red>WHEN</Red> <Grey>'1'</Grey> <Red>DISPLAY</Red> <Grey>'Seleccionó la opción 1'</Grey> <br />
        <Esp />
        <Red>WHEN</Red> <Grey>'2'</Grey> <Red>DISPLAY</Red> <Grey>'Seleccionó la opción 2'</Grey> <br />
        <Esp />
        <Red>WHEN</Red> <Grey>'3'</Grey> <Red>DISPLAY</Red> <Grey>'Seleccionó la opción 3'</Grey> <br />
        <Esp />
        <Red>WHEN  OTHER DISPLAY</Red> <Grey>'Opción no válida'</Grey> <br />
        <Red>END-EVALUATE</Red>.
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
        01 Contador <Red>PIC</Red> 9 <Red>VALUE</Red> 1. <br /> <br />
        <Red>PERFORM UNTIL </Red> Contador {">"} 5 <br />
        <Esp />
        <Red>DISPLAY</Red> <Grey>'Iteración '</Grey> Contador <br />
        <Esp />
        <Red>ADD</Red> 1 <Red>TO</Red> Contador <br />
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
        <Red>IF</Red> Error <br />
        <Esp />
        <Red>GO TO</Red> ManejarError <br />
        <Red>END-IF</Red>.
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
