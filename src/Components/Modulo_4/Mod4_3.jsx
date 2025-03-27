import { Esp } from "../espacio";
import Red from "../Colors/Red";
import Grey from "../Colors/Grey";
const Mod4_3 = () => {
  return (
    <section id="4.3">
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
    </section>
  );
};

export { Mod4_3 };