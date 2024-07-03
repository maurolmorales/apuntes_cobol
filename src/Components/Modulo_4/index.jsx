import { Esp } from "../espacio";
const Modulo4 = () => {
  
  return (
    <article id="modulo-4">
      <div className="h2-topBar">
        <h2> Módulo 4: Estructuras de Control y Decisiones</h2>

        <a href="#indice">al Indice</a>
      </div>
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
        <Esp/>GO TO ManejarError <br />
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
      <h3>4.2. Sentencias de Toma de Decisiones en COBOL</h3>
      <p>
        En COBOL, las sentencias de toma de decisiones se utilizan para tomar
        acciones específicas en función de condiciones o valores. Estas
        sentencias son fundamentales para dirigir la ejecución del programa en
        diferentes ramas de acuerdo con las condiciones evaluadas.
      </p>
      <h4>IF-ELSE</h4>
      <p>
        La sentencia IF en COBOL se utiliza para tomar decisiones basadas en
        condiciones. Puede ir acompañada de ELSE para manejar situaciones
        alternativas.
      </p>
      <div className="codigo">
        IF SaldoCuenta {"<"} 0 <br />
        <Esp/>  DISPLAY 'Cuenta en números rojos' <br />
        ELSE <br />
        <Esp/>DISPLAY 'Cuenta en buen estado' <br />
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
          <Esp/>WHEN '1' DISPLAY 'Seleccionó la opción 1' <br />
          <Esp/>WHEN '2' DISPLAY 'Seleccionó la opción 2' <br />
          <Esp/>WHEN '3' DISPLAY 'Seleccionó la opción 3' <br />
          <Esp/>WHEN OTHER DISPLAY 'Opción no válida' <br />
        END-EVALUATE.
      </div>
      <p>
        En este ejemplo, se evalúa la opción de menú y se muestra un mensaje en
        función de la opción seleccionada.
      </p>
      <h4>PERFORM UNTIL</h4>
      <p>
        La sentencia PERFORM UNTIL se utiliza para repetir un bloque de código
        hasta que se cumple una condición.
      </p>
      <div className="codigo">
        01 Contador PIC 9 VALUE 1. <br /><br />

        PERFORM UNTIL Contador {">"} 5 <br />
           <Esp/>DISPLAY 'Iteración ' Contador <br />
           <Esp/>ADD 1 TO Contador <br />
        END-PERFORM.
      </div>
      <p>
        En este ejemplo, se muestra un mensaje en cada iteración hasta que el
        contador sea mayor que 5.
      </p>
      <h4>IF-ELSE anidados</h4>
      <p>
        En COBOL, es posible anidar sentencias IF-ELSE para manejar condiciones
        más complejas. Esto permite tomar decisiones en función de múltiples
        condiciones.
      </p>
      <div className="codigo">
        IF Edad {"<"} 18 <br />
          <Esp/>DISPLAY 'Menor de edad' <br />
        ELSE <br />
        <Esp/>IF Edad {"<"} 65 <br />
        <Esp/><Esp/>DISPLAY 'Adulto' <br />
        <Esp/>ELSE <br />
          <Esp/><Esp/>DISPLAY 'Persona mayor' <br />
          <Esp/>END-IF. <br />
        END-IF.
      </div>
      <p>
        En este ejemplo, se anidan sentencias IF-ELSE para determinar la
        categoría de edad.
      </p>
      <h4>Conclusión</h4>
      <p>
        Las sentencias de toma de decisiones en COBOL son fundamentales para
        controlar el flujo de ejecución del programa en función de condiciones o
        valores evaluados. Comprender cómo utilizar estas sentencias y cómo
        anidarlas es esencial para desarrollar aplicaciones COBOL efectivas. En
        módulos posteriores, exploraremos ejemplos más complejos de toma de
        decisiones y cómo manejar situaciones más elaboradas en programas COBOL.
      </p>
      <h3>4.3. Bucles y Repeticiones en COBOL</h3>
      <p>
        En COBOL, los bucles y las repeticiones se utilizan para ejecutar un
        bloque de código múltiples veces hasta que se cumple una condición.
        Estas estructuras son esenciales para realizar tareas repetitivas y
        procesar grandes volúmenes de datos en aplicaciones empresariales.
      </p>
      <h4>PERFORM</h4>
      <p>
        La sentencia PERFORM se utiliza para repetir un bloque de código hasta
        que se cumple una condición. Puedes utilizar la cláusula UNTIL para
        especificar la condición de finalización.
      </p>
      <div className="codigo">
01 Contador PIC 9 VALUE 1. <br /><br /> 

PERFORM UNTIL Contador {">"} 5 <br />
   <Esp/>DISPLAY 'Iteración ' Contador <br />
   <Esp/>ADD 1 TO Contador <br />
END-PERFORM.
      </div>
      <p>
        En este ejemplo, se muestra un mensaje en cada iteración hasta que el
        contador sea mayor que 5.
      </p>
      <h4>PERFORM VARYING</h4>
      <p>
        La sentencia PERFORM se puede combinar con la cláusula VARYING para
        modificar una variable de control en cada iteración.
      </p>
      <div className="codigo">
01 Contador PIC 9 VALUE 1. <br /><br />

PERFORM VARYING Contador FROM 1 BY 1 UNTIL Contador {">"} 5 <br />
<Esp/>DISPLAY 'Iteración ' Contador <br />
END-PERFORM.
      </div>
      <p>
        En este ejemplo, la variable Contador se modifica en cada iteración
        hasta que sea mayor que 5.
      </p>
      <h4>EVALUATE TRUE</h4>
      <p>
        La sentencia EVALUATE se puede utilizar con la opción TRUE para repetir
        un bloque de código en función de múltiples condiciones.
      </p>
      <div className="codigo">
01 Opcion PIC 9 VALUE 1. <br /><br />

EVALUATE TRUE <br />
   <Esp/>WHEN Opcion = 1 <br />
   <Esp/><Esp/>DISPLAY 'Seleccionó la opción 1' <br />
   <Esp/>WHEN Opcion = 2 <br />
   <Esp/><Esp/>DISPLAY 'Seleccionó la opción 2' <br />
   <Esp/>WHEN OTHER <br />
   <Esp/><Esp/>DISPLAY 'Opción no válida' <br />
END-EVALUATE.
      </div>
      <p>
        En este ejemplo, se ejecuta el bloque de código basado en la opción
        seleccionada.
      </p>
      <h4>Conclusión</h4>
      <p>
        Las estructuras de bucles y repeticiones en COBOL son fundamentales para
        realizar tareas repetitivas y procesar grandes volúmenes de datos en
        aplicaciones empresariales. Comprender cómo utilizar estas estructuras,
        ya sea con PERFORM, PERFORM VARYING, o EVALUATE TRUE, es esencial para
        desarrollar aplicaciones COBOL efectivas. Estas estructuras son
        ampliamente utilizadas en aplicaciones empresariales para realizar
        cálculos, procesar registros y llevar a cabo otras tareas que requieren
        repeticiones controladas.
      </p>
    </article>
  );
};
export { Modulo4 };
