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
        alternativas. El ámbito de la sentencia IF ﬁnaliza de cualquiera de las
        formas siguientes:
      </p>
      <li>Por un punto.</li>
      <li>Por la cláusula END-IF.</li>
      <p>
        Cuando la acción-1 o la acción-2 están formadas por varias sentencias,
        solamente la última ﬁnaliza con un punto, ya que este indica el ﬁnal de
        una sentencia IF. Si se especiﬁca la frase END-IF no se puede utilizar
        la frase NEXT SENTENCE. <br />
        También, hay que tener presente que el operador NOT puede preceder a una
        condición simple o una condición combinada.
      </p>
      <div className="twoColums">
        <div className="codigo">
          <Red>IF</Red> SaldoCuenta {"<"} 0 <br />
          <Esp /> <Red>DISPLAY</Red> <Grey>'Cuenta en números rojos'</Grey>{" "}
          <br />
          <Red>ELSE</Red> <br />
          <Esp />
          <Red>DISPLAY</Red> <Grey>'Cuenta en buen estado'</Grey> <br />
          <Red>END-IF</Red>.
        </div>
        <p>
          En este ejemplo, se muestra un mensaje en función del saldo de la
          cuenta.
        </p>
      </div>
      <h5>Condiciones combinadas.</h5>
      <p>
        Una condición combinada está formada por un conjunto de condiciones
        simples unidas por los operadores OR y AND. <br />
        También, hay que tener presente que el operador NOT puede preceder a una
        condición simple o a una condición combinada.
      </p>
      <div className="codigo">
        <Red>IF</Red> A = ( 1 <Red>OR</Red> 5 <Red>OR</Red> 7) <Red>AND</Red> B
        = 4
      </div>
      <h5>ANIDAMIENTO DE SENTENCIAS IF.</h5>
      <p>
        La estructura presentada a continuación, aparece con bastante frecuencia
        y es por lo que la damos un tratamiento por separado. Esta estructura es
        consecuencia del anidamiento de sentencias IF. Las sentencias IF...THEN
        pueden estar anidadas. Esto quiere decir que como acción-1 o acción-2,
        de acuerdo con el formato, puede escribirse otra sentencia IF.
      </p>
      <div className="codigo">
        <Red>IF</Red> .... ACCIÓN-1 <br />
        <Esp />
        <Red>IF</Red> .... ACCIÓN-2 <br />
        <Esp />
        <Red>ELSE</Red> ACCIÓN-3 <br />
        <Esp />
        <Red>END-IF</Red> <br />
        <Red>END-IF</Red>. <br />
      </div>
      Ejemplos:
      <div className="twoColums">
        <div className="codigo">
          <Red>IF</Red> condición-1 <Red>THEN</Red> sentencia-1 <br />
          <Esp />
          <Com>NEXT SENTENCE</Com> <br />
          <Red>ELSE</Red> sentencia-2 <br />
          <Esp />
          <Com>NEXT SENTENCE</Com> <br />
          <Red>END-IF</Red>. <br />
          <Com>...................</Com> <br />
          <Red>IF </Red>DATO-1 <Red>IS NOT NUMERIC THEN</Red> ...... <br />
          <Red>END-IF</Red>. <br />
          <Com>...................</Com> <br />
          <Red>IF</Red> NUMERO-CLIENTE <Red>IS LESS THAN</Red>{" "}
          PREV-NUMERO-CLIENTE <br />
          <Esp />
          <Red>MOVE</Red> 'CLIENTE FUERA DE SECUENCIA' <Red>TO</Red>{" "}
          MESSAGE-TEXTO <br />
          <Esp />
          <Red>PERFORM</Red> WRITE-MESSAGE <br />
          <Red>END-IF</Red>. <br />
        </div>
        <div className="codigo">
          01 DEDIC-EMPLEADO <Red>PIC</Red> X. <br />
          <Esp />
          88 PARTTIME <Red>VALUE</Red> 'P'. <br />
          <Esp />
          88 FULL-TIME <Red>VALUE</Red> 'F'. <br />
          <br />
          <Esp />
          <Red>IF</Red> PARTTIME <br />
          <Esp />
          <Esp />
          <Red>PERFORM</Red> CALCULO-SALARIO-PARTTIME. <br />
          <br />
          <Esp />
          <Red>IF</Red> DEDIC-EMPLEADO = 'F' <br />
          <Esp />
          <Esp />
          <Red>PERFORM</Red> CALCULO-SALARIO. <br />
        </div>
      </div>
      <div className="twoColums">
        <div className="codigo">
          <Com>Estructura IF. CON OPERADORES LÓGICOS ******************** </Com>{" "}
          <br />
          <Red>IF</Red> FECHA-AA = 2020 <Red>AND</Red> FECHA-MM = 02{" "}
          <Red>AND</Red> FECHA-DD = 29 <br />
          <Esp />
          <Red>PERFORM</Red> CALCULO-CIERRE-BISIESTO <br />
          <Red>ELSE</Red> <br />
          <Esp />
          <Red>PERFORM</Red> CALCULO-CIERRE-NORMAL <br />
          <Red>END-IF</Red>. <br />
          <Red>IF</Red> PARM-MM = 01 <br />
          <Esp />
          <Red>OR</Red> PARM-MM = 03 <br />
          <Esp />
          <Red>OR</Red> PARM-MM = 05 <br />
          <Esp />
          <Red>OR</Red> PARM-MM = 07 <br />
          <Esp />
          <Red>OR</Red> PARM-MM = 08 <br />
          <Esp />
          <Red>OR</Red> PARM-MM = 10 <br />
          <Esp />
          <Red>OR</Red> PARM-MM = 12 AND PARM-DD = 31 <br />
          <Red>PERFORM</Red> CALCULO-FIN-MES <br />
          <Red>ELSE</Red> <br />
          <Esp />
          <Red>PERFORM</Red> ANALISIS-MES. <br />
        </div>

        <div className="codigo">
          <Com>Estructura IF. ANIDADOS......</Com> <br />
          <Com>EVITAR SU USO................</Com> <br />
          <Red>IF</Red> ESTADO-EMPLEADO = 'EXEMPL' <br />
          <Esp />
          <Red>PERFORM</Red> CALCULO-SALARIO-EXEMPL <br />
          <Red>ELSE</Red> <br />
          <Esp />
          <Red>IF</Red> ESTADO-EMPLEADO = 'DPEMPL' <br />
          <Esp />
          <Esp />
          <Red>PERFORM</Red> CALCULO-SALARIO DPEMPL <br />
          <Esp />
          <Red>ELSE</Red> <br />
          <Esp />
          <Esp />
          <Red>PERFORM</Red> CALCULO-SALARIO-COMUN <br />
          <Esp />
          <Red>END-IF</Red> <br />
          <Red>END-IF</Red>. <br />
        </div>
      </div>
      <div className="codigo">
        <Red>MOVE</Red> 'abcdefgh' <Red>TO</Red> DISPLAY-AREA. <br />
        <Red>IF</Red> DISPLAY-AREA <Red>IS</Red> ALPHABETIC-UPPER <br />
        <Red>THEN MOVE</Red> 'MAYUSCULA' <Red>TO</Red> MESSAGE-TEXT <br />
        <Red>ELSE</Red> <br />
        <Esp />
        <Red>IF</Red> DISPLAY-AREA <Red>IS</Red> ALPHABETIC-LOWER <br />
        <Esp />
        <Esp />
        <Red>THEN MOVE</Red> 'MINUSCULA' <Red>TO</Red> MESSAGE-TEXT <br />
        <Esp />
        <Red>END-IF</Red> <br />
        <Red>END-IF</Red>. <br />
      </div>
      <br />
      <h4>EVALUATE</h4>
      <p>
        Se usa en reemplazo del IF condicional para una programación
        estructurada. Se recomienda el uso del EVALUATE en vez del IF. <br />
        La sentencia EVALUATE en COBOL se utiliza para realizar múltiples
        comparaciones en paralelo y tomar decisiones basadas en los resultados
        de esas comparaciones.
      </p>
      <div className="twoColums">
        <div className="codigo">
          <Red>EVALUATE</Red> OpcionMenu <br />
          <Esp />
          <Red>WHEN</Red> <Grey>'1'</Grey> <Red>DISPLAY</Red>{" "}
          <Grey>'Seleccionó la opción 1'</Grey> <br />
          <Esp />
          <Red>WHEN</Red> <Grey>'2'</Grey> <Red>DISPLAY</Red>{" "}
          <Grey>'Seleccionó la opción 2'</Grey> <br />
          <Esp />
          <Red>WHEN</Red> <Grey>'3'</Grey> <Red>DISPLAY</Red>{" "}
          <Grey>'Seleccionó la opción 3'</Grey> <br />
          <Esp />
          <Red>WHEN OTHER DISPLAY</Red> <Grey>'Opción no válida'</Grey> <br />
          <Red>END-EVALUATE</Red>.
        </div>
        <div className="codigo">
          <Red>EVALUATE</Red> TRANS-ID <br />
          <Esp />
          <Red>WHEN</Red> 'A001' <Red>PERFORM</Red> ALTA
          <br />
          <Esp />
          <Red>WHEN</Red> 'D001' <Red>PERFORM</Red> BAJA <br />
          <Esp />
          <Red>WHEN</Red> 'U001' <Red>PERFORM</Red> MODIFICA
          <br />
          <Esp />
          <Red>WHEN</Red> 'C001' <Red>PERFORM</Red> CONSULTA <br />
          <Esp />
          <Red>WHEN</Red> OTHER <Red>PERFORM</Red> TRANS-ID-INVALIDA
          <br />
          <Red>END-EVALUATE</Red>. <br />
        </div>
      </div>
      <div className="codigo">
        <Red>EVALUATE TRUE</Red> <br />
        <Esp />
        <Red>WHEN</Red> HORARIO <Red>IS LESS THAN</Red> 8
        <Esp />
        <Red>COMPUTE</Red> HORARIO = HORARIO * 0.65 <br />
        <Esp />
        <Red>PERFORM</Red> MENSA1 <br />
        <br />
        <Esp />
        <Red>WHEN</Red> HORARIO <Red>IS GREATER THAN</Red> 8 <br />
        <Esp />
        <Esp />
        <Red>COMPUTE</Red> HORARIO = HORARIO * 1.25 <br />
        <Esp />
        <Esp />
        <Red>PERFORM</Red> MENSA2 <br />
        <br />
        <Esp />
        <Red>WHEN OTHER </Red>
        <br />
        <Esp />
        <Esp />
        <Red>PERFORM</Red> MENSA3 <br />
        <Red>END-EVALUATE</Red>. <br />
        <br />
        <Red>EVALUATE</Red> A <Red>IS LESS THAN</Red> B <Red>AND</Red> C{" "}
        <Red>IS GREATER THAN</Red> D <br />
        <Esp />
        <Red>WHEN TRUE </Red> <br />
        <Esp />
        <Esp />
        <Red>PERFORM</Red> SEDIO <br />
        <Esp />
        <Red>WHEN FALSE </Red> <br />
        <Esp />
        <Esp />
        <Red>PERFORM</Red> NO-SEDIO <br />
        <Esp />
        <Red>WHEN OTHER </Red>
        <br />
        <Esp />
        <Esp />
        <Red>PERFORM </Red> ERROR <br />
        <Red>END-EVALUATE</Red>. <br />
      </div>
      <p>
        En este ejemplo, se evalúa la opción de menú y se muestra un mensaje en
        función de la opción seleccionada.
      </p>
      <h4>PERFORM</h4>
      <p>
        La sentencia PERFORM es utilizada para transferir explícitamente el
        control a uno o más procedimientos y devolver el control implícitamente,
        cuando la ejecución del procedimiento especiﬁcado, ﬁnalice. La sentencia
        PERFORM se puede utilizar para controlar la ejecución de una o más
        sentencias, las cuales están dentro del ámbito de la sentencia PERFORM.
        Se utiliza para repetir un bloque de código mientras se cumple una
        condición. Puede usarse con VARYING para modificar una variable de
        control en cada iteración.
      </p>
      <div className="twoColums">
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
      </div>
      <ul>
        <li>
          <u>Formato 1</u>: <br />
          <div className="codigo">
            <Red>PERFORM</Red> procedimiento-1 [THRU procedimiento-2]{" "}
          </div>
          <br />
          Si no se especiﬁca la sentencia THRU, la sentencia PERFORM ejecuta una
          vez, el conjunto de sentencias que forman el procedimiento-1. Si la
          opción THRU se especiﬁca, entonces se ejecutan, una vez todos los
          procedimientos existentes en el programa entre procedimiento-1 y
          procedimiento-2, ambos inclusive.
        </li>{" "}
        <br />
        <li>
          <u>Formato 2</u>: <br />
          <div className="codigo">
            <Red>PERFORM</Red> procedimiento-1 [THRU procedimiento-2]{" "}
            <Red>UNTIL</Red> .....{" "}
          </div>
          <br />
          Si no se especiﬁca la opción THRU, la sentencia PERFORM ejecuta el
          número de veces especiﬁcado por entero o por un nombre de datos, el
          conjunto de sentencias que forman procedimiento-1. Si la opción THRU
          se especiﬁca, entonces se ejecutan el número de veces especiﬁcado,
          todos los procedimientos existentes en el programa entre
          procedimiento-1 y procedimiento-2, ambos inclusive.
        </li>
        <br />
        <li>
          <u>Formato 3</u>: <br />
          <div className="codigo">
            <Red>PERFORM UNTIL</Red> ......{" "}
          </div>
          <br />
          END-PERFORM. Cuando se emplea este formato, la sentencia PERFORM
          ejecuta el número de veces especiﬁcado por entero o por nombre de
          datos, el conjunto de sentencias que hay entre PERFORM y END-PERFORM.
          Un punto, como ﬁnal de alguna de las sentencias de esta estructura,
          daría lugar a un error, ya que se entendería como ﬁnal de la sentencia
          PERFORM.
        </li>
        <br />
        <li>
          <u>Formato 4</u>: <br />
          <div className="codigo">
            <Red>PERFORM THRU</Red>..... <Red>VARYING</Red> I <Red>FROM</Red> 1{" "}
            <Red>BY</Red> 1 <Red>UNTIL</Red> .....{" "}
          </div>
          <br />
          Cuando se emplea este formato, la sentencia PERFORM se ejecuta el
          número de veces indicado en la condición de VARING
        </li>
      </ul>
      <h5>ANIDAMIENTO DE SENTENCIAS PERFORM.</h5>
      <p>
        Dentro del ámbito de una sentencia PERFORM, puede especiﬁcarse otra
        sentencia PERFORM, aunque hay que tener presentes las siguientes reglas:
      </p>
      <ol>
        <li>
          El procedimiento PERFORM ejecutado desde el ámbito de otro PERFORM
          debe ser totalmente exterior o totalmente interior a este.
        </li>
        <li>
          Los ámbitos de dos PERFORM se pueden solapar cuando las sentencias de
          llamada para su ejecución están fuera de estos ámbitos.
        </li>
        <li>Las sentencias PERFORM pueden ser anidadas libremente.</li>
        <li>
          Un procedimiento PERFORM puede llamarse a sí mismo, esto es, la
          recursividad está permitida.
        </li>
      </ol>
      <h5>PERFORM In-line</h5>
      <p>
        Este tipo de PERFORM se realiza sin invocar ningún párrafo, se realiza
        todo dentro de la sentencia PERFORM hasta el END-PERFORM.
      </p>
      <div className="twoColums">
        <div className="codigo">
          <Red>PROCEDURE DIVISION</Red>. <br />
          <Esp /> <Red>DISPLAY</Red> 'Inicio del programa'. <br />
          <Esp /> <br />
          <Esp /> <Red>PERFORM</Red> <br />
          <Esp />
          <Esp /> <Red>DISPLAY</Red> 'Este es un PERFORM in-line'. <br />
          <Esp />
          <Esp /> <Red>ADD</Red> 1 <Red>TO</Red> CONTADOR <br />
          <Esp /> <Red>END-PERFORM</Red>. <br />
          <Esp /> <br />
          <Esp /> <Red>DISPLAY</Red> "Fin del programa". <br />
          <Esp /> <Red>STOP RUN</Red>. <br />
        </div>

        <div className="codigo">
          <Com>PERFORM EJEMPLOS</Com> <br />
          77 X PIC 9(03) <Red>BINARY VALUE</Red> 1. <br />
          <Com>.........</Com> <br />
          <Red>PERFORM</Red> PARA1 <Red>UNTIL</Red> 100 <Red>TIMES</Red> <br />
          <Com>Se ejecuta 100 veces</Com> <br />
          <Red>END-PERFORM</Red>. <br />
          <Red>PERFORM UNTIL</Red> X <Red>GREATER THAN</Red> 100 <br />
          <Com>Se ejecuta 100 veces</Com> <br />
          <Esp />
          <Red>ADD</Red> A(X)<Red> TO </Red>TOTAL <br />
          <Esp />
          <Red>ADD</Red> 1<Red> TO </Red>X <br />
          <Red>END-PERFORM</Red>. <br />
          <Red>PERFORM VARYING</Red> X <Red>FROM</Red> 1 <Red>BY</Red> 1{" "}
          <Red>UNTIL</Red> X <Red>GREATER THAN</Red> 100 <br />
          <Com>(Se ejecuta 100 veces)</Com> <br />
          <Esp />
          <Red>ADD</Red> A(X) <Red>TO</Red> TOTAL <br />
          <Red>END-PERFORM</Red>. <br />
        </div>
      </div>
      <h5>Sentencia EXIT.</h5>
      <p>
        Esta sentencia se utiliza como complemento de la sentencia PERFORM, para
        proporcionar un punto ﬁnal para uno o más procedimientos, a ﬁn de
        permitir la salida desde cualquier punto. Formato: EXIT. La sentencia
        EXIT forma por sí sola un párrafo identiﬁcado por un nombre.
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
