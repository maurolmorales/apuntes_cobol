const Mod3_4 = ({ Cuadro, Red, Grey, Esp, Com }) => {
  return (
    <section id="3.4">
      <h3>3.4 PROCEDURE DIVISION</h3>
      <p>
        Es donde se escriben las instrucciones lógicas y el flujo de control del
        programa. Aquí se implementan las operaciones que manipulan los datos
        definidos en la DATA DIVISION. Es el núcleo funcional del programa
        COBOL. Aquí se define qué hace el programa, paso por paso, utilizando
        sentencias estructuradas y llamadas a procedimientos o subprogramas.
      </p>
      <p>En esta división, se escribe el código principal del programa. Contiene
        las instrucciones que se ejecutarán para realizar la lógica de negocio.
        Es una de las divisiones principales en un programa COBOL y desempeña un
        papel central en la ejecución del programa. En esta división, se escribe
        el código que define la lógica y la funcionalidad del programa. Es el
        corazón de un programa COBOL, donde se define y se implementa la lógica
        de negocio. La capacidad de tomar decisiones, realizar cálculos y
        gestionar datos es fundamental en esta división. A través de un código
        claro y bien estructurado en la PROCEDURE DIVISION, se logra la
        funcionalidad deseada de la aplicación COBOL, lo que es especialmente
        importante en el contexto de las aplicaciones empresariales.</p>
        <p>La PROCEDURE DIVISION es donde se define la lógica de negocio del
        programa COBOL. Aquí se escriben las instrucciones y las operaciones que
        realizan cálculos, procesamiento de datos, toma de decisiones y otras
        operaciones necesarias para cumplir con los requisitos de la aplicación.
        Las sentencias COBOL en esta división controlan el flujo del programa y
        determinan cómo se procesan los datos.</p>
      <br />
      <h5>Declaración de parámetros (opcional)</h5>
      <p>
        Si el programa es un subprograma, puede recibir parámetros mediante la
        cláusula USING:
      </p>
      <div className="codigo">
        <Red>PROCEDURE DIVISION USING</Red> DATOS-CLIENTE.
      </div>
      <br />
      <h4>Párrafos</h4>
      <p>
        Los párrafos son bloques de instrucciones que se ejecutan en conjunto.
        Se identifican con un nombre seguido de un punto (.).
      </p>
      <div className="codigo">
        INICIO. <br />
        <Esp /> <Red>PERFORM</Red> VALIDAR-DATOS. <br />
        <Esp /> <Red>PERFORM</Red> PROCESAR. <br />
        <Esp /> <Red>GOBACK</Red>. <br />
      </div>
      <br />
      <h5>Sentencias o instrucciones</h5>
      <p>Dentro de los párrafos se colocan las instrucciones COBOL como:</p>
      <mark>MOVE</mark>, <mark>ADD</mark>, <mark>SUBTRACT</mark>,{" "}
      <mark>COMPUTE</mark>, <mark>IF</mark>, <mark>PERFORM</mark>,{" "}
      <mark>EVALUATE</mark>, <mark>CALL</mark>, <mark>OPEN</mark>,{" "}
      <mark>READ</mark>, <mark>WRITE</mark>, <mark>CLOSE</mark>, etc.
      <br />
      <br />

      <h5>INITIALIZE</h5>
      Inicializa, con valores predeterminados, a campos deﬁnidos, equiparándose
      a uno o varios MOVE.
      <div className="twoColums">
        <div className="codigo">
          <Red>INITIALIZE</Red> identiﬁcador-1 <Red>REPLACING ALPHABETIC</Red>{" "}
          <br />
          <Red>DATA BY</Red> identiﬁcador-2 <Red>ALPHANUMERIC</Red> literal-1{" "}
          <Red>NUMERIC</Red> <br />
          01 WS-EMPLEADO. <br />
          <Esp />
          02 WS-CODIGO <Red>PIC</Red> 9(5). <br />
          <Esp />
          02 WS-NOMBRE <Red>PIC</Red> X(40). <br />
          <Esp />
          02 WS-DPTO <Red>PIC</Red> 9(3). <br />
          <Esp />
          02 WS-TELEFONO <Red>PIC</Red> 9(5). <br />
          <Esp />
          02 WS-PROYECTO <Red>PIC</Red> XX. <br />
          <Com>............. </Com>
          <br />
          <Red>PROCEDURE DIVISION</Red>. <br />
          <Red>INITIALIZE</Red> WS-EMPLEADO <br />
        </div>
        <div>
          <p>
            Mueve ceros a WS-CODIGO/ WS-DPTO/ WS-TELEFONO y blancos a
            WS-NOMBRE/WS-PROYECTO. <br />
            INITIALIZE WS-EMPLEADO REPLACING ALPHANUMERIC DATA BY '*'. Se mueve
            '*' a datos alfanuméricos
          </p>
        </div>
      </div>


      <h4>Uso de MOVE</h4>
      <p>
        Descripción: Copia el contenido de una variable o un valor literal a
        otra variable. No se puede realizar MOVE sobre POINTER-DATA o
        INDEX-DATA.
      </p>
      <div className="twoColums">
        <div className="codigo">
          <Red>MOVE</Red> 'JUAN'<Red> TO </Red>NOMBRE-CLIENTE. <br />
          <Red>MOVE</Red> 35<Red> TO </Red>EDAD. <br />
        </div>
        <div className="codigo">
          <Red>MOVE</Red> fuente <Red>TO</Red> destino-1 destino-2 destino-3.
        </div>
      </div>
      <br />
      Ejemplos con MOVE:
      <div className="codigo">
        <Red>WORKING-STORAGE SECTION</Red>. <br />
        01 GRUPO-ITEM. <br />
        <Esp />
        02 ITEM1 <Red>PIC</Red> <span style={{ color: "yellow" }}>X</span>.{" "}
        <br />
        <Esp />
        02 ITEM2 <Red>PIC</Red> <span style={{ color: "lightblue" }}>XX</span>.{" "}
        <br />
        <Esp />
        02 ITEM3 <Red>PIC</Red> <span style={{ color: "pink" }}>X(3)</span>.{" "}
        <br />
        <Esp />
        02 ITEM4 <Red>PIC</Red> <span style={{ color: "aqua" }}>X(4)</span>.{" "}
        <br />
        <Red>PROCEDURE DIVISION</Red>. <br />
        <Esp />
        <Red>MOVE SPACES TO</Red> GRUPO-ITEM. <Esp />
        <span style={{ color: "yellow" }}>b</span>
        <span style={{ color: "lightblue" }}>bb</span>
        <span style={{ color: "pink" }}>bbb</span>
        <span style={{ color: "aqua" }}>bbbb</span> <br />
        <Esp />
        <Red>MOVE</Red> 'XY' <Red>TO</Red> ITEM1 ITEM3 <Esp />
        <span style={{ color: "yellow" }}>x</span>
        <span style={{ color: "lightblue" }}>bb</span>
        <span style={{ color: "pink" }}>XYb</span>
        <span style={{ color: "aqua" }}>bbbb</span> <br />
        <Esp />
        <Red>MOVE ALL</Red> '*'' <Red>TO</Red> ITEM4 <Esp />
        <span style={{ color: "yellow" }}>x</span>
        <span style={{ color: "lightblue" }}>bb</span>
        <span style={{ color: "pink" }}>XYb</span>
        <span style={{ color: "aqua" }}>****</span> <br />
        <Esp />
        <Red>MOVE ALL</Red> 'AB' <Red>TO</Red> ITEM3 <Esp />
        <span style={{ color: "yellow" }}>x</span>
        <span style={{ color: "lightblue" }}>bb</span>
        <span style={{ color: "pink" }}>ABA</span>
        <span style={{ color: "aqua" }}>****</span> <br />
      </div>
      <br />

      <h4>Cláusula CORRESPONDING (CORR)</h4>
      <p>
        La cláusula CORRESPONDING (también abreviada como CORR) permite realizar
        operaciones entre estructuras de datos grupo a grupo, copiando o sumando
        automáticamente solo los campos que tienen el mismo nombre dentro de
        ambos grupos. Solo afecta los campos con el mismo nombre exacto. Los
        campos deben estar dentro de estructuras de grupo. Ignora campos que no
        tengan una coincidencia exacta por nombre.
      </p>
      <p>
        Usá CORRESPONDING cuando quieras simplificar código con estructuras
        similares. Evitá su uso si los nombres de campo no están estandarizados
        o si necesitás control total sobre los campos a mover/sumar.
      </p>
      <p>Instrucciones que la usan: </p>
      <ul>
        <li>MOVE CORRESPONDING</li>
        <li>ADD CORRESPONDING</li>
        <li>SUBTRACT CORRESPONDING</li>
      </ul>
      <div className="twoColums">
        <div className="codigo">
          01 CLIENTE-ENTRADA. <br />
          <Esp />
          05 NOMBRE <Red>PIC</Red> X(20). <br />
          <Esp />
          05 EDAD <Red>PIC</Red> 99. <br />
          <Esp />
          05 TELEFONO <Red>PIC</Red> X(10). <br />
          <br />
          01 CLIENTE-SALIDA. <br />
          <Esp />
          05 NOMBRE <Red>PIC</Red> X(20). <br />
          <Esp />
          05 EDAD <Red>PIC</Red> 99. <br />
          <Esp />
          05 TELEFONO <Red>PIC</Red> X(10). <br />
          <Esp />
          05 DIRECCION <Red>PIC</Red> X(50). <br />
          <br />
          <Red>PROCEDURE DIVISION</Red>. <br />
          <Esp />
          <Red>MOVE CORRESPONDING</Red> CLIENTE-ENTRADA <Red>TO</Red>{" "}
          CLIENTE-SALIDA. <br />
        </div>
        <div>
          <p>
            En este caso, se copian automáticamente los valores de NOMBRE, EDAD
            y TELEFONO. El campo DIRECCION permanece sin cambios.
          </p>
        </div>
      </div>
      MOVE CORRESPONDING:
      <div className="twoColums">
        <div className="codigo">
          MOVE CORRESPONDING <br />
          01 ESTRUC-1. <br />
          <Esp />
          02 CAMPO-A <Red>PIC</Red> 9(9) <Red>VALUE</Red> 123456789. <br />
          <Esp />
          02 CAMPO-B <Red>PIC</Red> X(5) <Red>VALUE</Red> <Grey>'abcdf'</Grey>.{" "}
          <br />
          <Esp />
          02 CAMPO-C <Red>PIC</Red> 9(4)V99 <Red>VALUE</Red> 1234.56. <br />
          <Esp />
          02 CAMPO-D <Red>PIC</Red> 9(4)V99 <Red>VALUE</Red> 123456789. <br />
          <Esp />
          02 FILLER <Red>PIC</Red> X(20). <br />
          01 ESTRUC-2. <br />
          <Esp />
          02 CAMPO-C <Red>PIC</Red> Z(4).99. <br />
          <Esp />
          02 FILLER <Red>PIC</Red> XXX. <br />
          <Esp />
          02 CAMPO-B <Red>PIC</Red> X(5). <br />
          <Esp />
          02 FILLER <Red>PIC</Red> XXX. <br />
          <Esp />
          02 CAMPO-A <Red>PIC</Red> Z(9). <br />
          <Esp />
          02 FILLER <Red>PIC</Red> XXX. <br />
          <Com>....................... </Com> <br />
          <Red>MOVE CORRESPONDING</Red> ESTRUC-1 <Red>TO</Red> ESTRUC-2. <br />
        </div>
        <div>
          <p>
            La sentencia mueve 3 campos pero da un WARNING en la compilación.
          </p>
        </div>
      </div>
      <p>MOVE NUMÉRICOS EDICIÓN</p>
      <p>
        No está permitido realizar cálculos matemáticos con numéricos de
        edición.
      </p>
      <div className="codigo">
        01 SUELDO <Red>PIC</Red> 9999,99. <br />
        77 SUELDO-EDIT <Red>PIC</Red> 9999V99 <Red>COMP-3</Red>. <br />
        77 TOTAL-EDIT <Red>PIC</Red> ZZ.ZZ9,99. <br />
        <Com>................... </Com>
        <br />
        <Red>MOVE</Red> 1234.56<Red> TO </Red>SUELDO-EDIT. <br />
        <Red>MOVE</Red> 9876.54<Red> TO </Red>SUELDO. <br />
        <Red>DISPLAY</Red> SUELDO-EDIT. <br />
        <Red>MOVE</Red> SUELDO<Red> TO </Red>SUELDO-EDIT. <br />
        <Red>DISPLAY</Red> SUELDO-EDIT. <br />
        <Red>MOVE</Red> SUELDO<Red> TO </Red>TOTAL-EDIT. <br />
        <Red>DISPLAY</Red> TOTAL-EDIT. <br />
        <Com>.............. SALIDA .............. </Com>
        <br />
        123456 <br />
        9876,54 <br />
        9.876,54 <br />
      </div>



      <h4>Uso de DISPLAY</h4>
      <p>
        Es una instrucción utilizada para mostrar información en la salida del
        programa. Es una de las formas más comunes de generar resultados
        visibles para el usuario o para propósitos de depuración. La instrucción
        DISPLAY envía información a la pantalla del usuario o al dispositivo de
        salida designado. Es una herramienta útil para la interacción con el
        usuario o para proporcionar información sobre el estado del programa
        durante la ejecución. Aunque DISPLAY es útil para propósitos de
        depuración, debes tener en cuenta que mostrar demasiada información
        durante la ejecución del programa puede afectar el rendimiento. Es
        importante utilizar DISPLAY de manera moderada y estratégica para
        minimizar el impacto en el rendimiento del programa. Esta sentencia
        transﬁere el contenido de cada DATA-ITEM a una salida SYSOUT / CEEMSG
      </p>
      <div className="codigo">
        <Red>DISPLAY</Red> 'INGRESE SU NOMBRE:'. <br />
        <Red>DISPLAY</Red> NOMBRE-CLIENTE. <br />
      </div>
      <br />
      <h5>WITH NO ADVANCING</h5>
      <p>
        Evita el salto de línea luego del mensaje (similar a print() en Python
        sin \n). <br />
        El cursor queda en la misma línea para que el usuario escriba a
        continuación del mensaje. La cláusula WITH NOT ADVANCING es útil cuando se desea escribir múltiples registros consecutivos en la misma línea en un archivo de salida, como en informes de líneas detalladas o formatos de registro específicos. Al utilizar WITH NOT ADVANCING, se pueden agrupar registros relacionados en una sola línea para mejorar la legibilidad y la presentación de la información en el archivo de salida.
      </p>
      <div className="codigo">
        <Red>DISPLAY</Red> <Grey>'Ingrese su nombre: '</Grey>{" "}
        <Red>WITH NO ADVANCING</Red>. <br />
        <Red>ACCEPT</Red> NOMBRE-USUARIO.
      </div>
      <br />
      <h5>UPON</h5>
      <p>
        Destino Opcional. Especifica el destino, como CONSOLE, PRINTER,
        SYSPUNCH.
      </p>
      <div className="codigo">
        <Red>DISPLAY</Red> 'Registro enviado.' <Red>UPON CONSOLE</Red>.
      </div>
      <br />
      <h4>Uso de ACCEPT</h4>
      <p>
        Descripción: Permite ingresar datos desde el teclado (modo interactivo)
        o desde el sistema (por ejemplo, la fecha u hora del sistema). Permite
        el ingreso de datos desde SYSIN, el dato deberá estar deﬁnido en
        WORKING-STORAGE. Permite obtener fecha y hora del sistema operativo. Es
        una instrucción utilizada para leer datos desde la entrada estándar
        (generalmente el teclado) y almacenarlos en una variable. Esta
        instrucción permite la interacción del usuario con el programa, ya que
        le permite proporcionar datos durante la ejecución del programa. Es
        importante validar los datos introducidos por el usuario para asegurarse
        de que sean correctos antes de utilizarlos en el programa. Se pueden
        utilizar condiciones y estructuras de control para manejar diferentes
        situaciones de entrada de datos por parte del usuario.
      </p>
      <div className="twoColums">
        <div className="codigo">
          01 NOMBRE-USUARIO <Red>PIC</Red> X(20). <br />
          <Red>ACCEPT</Red> NOMBRE-USUARIO.
        </div>
        <p>
          Entrada del usuario. El programa esperará que el usuario escriba un
          nombre, y lo almacenará en NOMBRE-USUARIO.
        </p>
      </div>
      <div className="twoColums">
        <div className="codigo">
          01 FECHA-HOY <Red>PIC</Red> 9(8). <Com> AAAAMMDD</Com> <br />
          <Red>ACCEPT</Red> FECHA-HOY <Red>FROM DATE</Red>.
        </div>
        <p>
          Fecha del sistema. El campo FECHA-HOY recibe la fecha actual, por
          ejemplo: <mark>20250410</mark>.
        </p>
      </div>
      <div className="twoColums">
        <div className="codigo">
          01 HORA-ACTUAL <Red>PIC</Red> 9(6). <Com> HHMMSS</Com> <br />
          <Red>ACCEPT</Red> HORA-ACTUAL <Red>FROM TIME</Red>.
        </div>
        <p>
          Hora actual. Se guarda la hora actual del sistema, como{" "}
          <mark>154233</mark>.
        </p>
      </div>
      <div className="twoColums">
        <div className="codigo">
          01 DIA-ACTUAL <Red>PIC</Red> 9(5). <br />
          <Red>ACCEPT</Red> DIA-ACTUAL <Red>FROM DAY</Red>.
        </div>
        <p>
          Día del sistema. Se almacena la fecha en formato juliano (AAMMDD).
        </p>
      </div>
      <div className="twoColums">
        <div className="codigo">
          01 DIA-SEMANA <Red>PIC</Red> 9. <br />
          <Red>ACCEPT</Red> DIA-SEMANA <Red>FROM DAY-OF-WEEK</Red>.
        </div>
        <p>
          Día de la semana. Guarda un número del 1 al 7, donde 1 = Lunes, 7 =
          Domingo.
        </p>
      </div>
      <div className="twoColums">
        <div className="codigo">
          <Red>DISPLAY</Red> <Grey>"Por favor, introduzca su nombre: "</Grey>.{" "}
          <br />
          <Red>ACCEPT</Red> nombre-alumno. <br />
          <Red>DISPLAY</Red> <Grey>"¡Hola, "</Grey> nombre-alumno{" "}
          <Grey>"!"</Grey> <br />
        </div>
        <div className="codigo">
          77 FECHA-EJECUCION <Red>PIC</Red> X(10). <br />
          <Com>........</Com> <br />
          //SYSIN DD * <br />
          19/10/2019 <br />
          <Com>........</Com> <br />
          <Red>ACCEPT</Red> FECHA-EJECUCION <Red>FROM</Red> SYSIN. <br />
          <Red>DISPLAY</Red> FECHA-EJECUCION. <br />
          <Com>........</Com> SALIDA <br />
          19/10/2019 <br />
        </div>
      </div>
      <p>
        ⚠️ <u>Consideraciones importantes</u>:
      </p>
      <li>
        Cuando se usa sin <mark>FROM</mark>, el origen es el teclado.
      </li>
      <li>
        <mark>ACCEPT</mark> es una sentencia de bajo nivel de validación. No
        permite formatos complejos ni comprobación de tipos (esa lógica debe
        codificarse aparte).
      </li>
      <li>
        Las entradas siempre se capturan como texto (alfanuméricos). Si se
        quieren valores numéricos, hay que definir el campo como numérico y
        asegurarse de que la entrada sea válida.
      </li>
      <br />
      <h4>Uso de PERFORM</h4>
      <p>
        La sentencia <mark>PERFORM</mark> es utilizada para transferir
        explícitamente el control a uno o más procedimientos y devolver el
        control implícitamente, cuando la ejecución del procedimiento
        especiﬁcado, ﬁnalice. La sentencia PERFORM se puede utilizar para
        controlar la ejecución de una o más sentencias, las cuales están dentro
        del ámbito de la sentencia <mark>PERFORM</mark>. Se utiliza para repetir
        un bloque de código mientras se cumple una condición. Se utiliza para
        ejecutar uno o más párrafos o secciones dentro del programa, o bien para
        repetir bloques de código según una condición. Es una de las
        instrucciones más importantes para controlar el flujo del programa y
        evitar la duplicación de código. <br />
        <mark>END-PERFORM</mark>. Cuando se emplea este formato, la sentencia
        PERFORM ejecuta el número de veces especiﬁcado por entero o por nombre
        de datos, el conjunto de sentencias que hay entre <mark>PERFORM</mark> y{" "}
        <mark>END-PERFORM</mark>. Un punto, como ﬁnal de alguna de las
        sentencias de esta estructura, daría lugar a un error, ya que se
        entendería como ﬁnal de la sentencia PERFORM.
      </p>
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
      <h5>Simple (nombre de párrafo):</h5>
      <p>Llama y ejecuta un párrafo una vez.</p>
      <div className="codigo">
        <Red>PERFORM</Red> CALCULAR-SUELDO.
      </div>
      <br />
      <h5>Con intervalo (range)</h5>
      <p>
        Ejecuta una serie de párrafos de forma secuencial, desde uno inicial
        hasta uno final.
      </p>
      <div className="codigo">
        <Red>PERFORM</Red> INICIAR <Red>THRU</Red> FINALIZAR.
      </div>
      <div className="codigo">
        <Red>PERFORM</Red> INICIAR <Red>THROUGH</Red> FINALIZAR.
      </div>
      <div className="twoColums">
        <div className="codigo">
          <Red>PERFORM</Red> procedimiento-1 [THRU procedimiento-2]{" "}
        </div>
        <p>
          Si no se especiﬁca la sentencia THRU, la sentencia PERFORM ejecuta una
          vez, el conjunto de sentencias que forman el procedimiento-1. Si la
          opción THRU se especiﬁca, entonces se ejecutan, una vez todos los
          procedimientos existentes en el programa entre procedimiento-1 y
          procedimiento-2, ambos inclusive.
        </p>
      </div>
      <div className="twoColums">
        <div className="codigo">
          <Red>PERFORM</Red> procedimiento-1 [THRU procedimiento-2]{" "}
          <Red>UNTIL</Red> .....{" "}
        </div>

        <p>
          Si no se especiﬁca la opción THRU, la sentencia PERFORM ejecuta el
          número de veces especiﬁcado por entero o por un nombre de datos, el
          conjunto de sentencias que forman procedimiento-1. Si la opción THRU
          se especiﬁca, entonces se ejecutan el número de veces especiﬁcado,
          todos los procedimientos existentes en el programa entre
          procedimiento-1 y procedimiento-2, ambos inclusive.
        </p>
      </div>
      <li>
        <mark>THRU</mark> solo admite dos <mark>PERFORM</mark>.
      </li>
      <p>
        ⚠️ Importante: Todos los párrafos entre INICIAR y FINALIZAR (inclusive)
        se ejecutarán en orden.
      </p>
      <br />
      <h5>Con condición (ciclo UNTIL)</h5>
      <p>
        Repite un bloque de instrucciones o un párrafo hasta que se cumpla una
        condición.
      </p>
      <div className="codigo">
        <Red>PERFORM</Red> LEER-REGISTRO <Red>UNTIL</Red> FIN-DE-ARCHIVO ={" "}
        <Grey>'S'</Grey>.
      </div>
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
      <br />
      <h5>Con número fijo de repeticiones (TIMES)</h5>
      <p>Ejecuta un bloque o párrafo una cantidad específica de veces.</p>
      <div className="codigo">
        <Red>PERFORM</Red> IMPRIMIR-FACTURA 5 <Red>TIMES</Red>.
      </div>
      <h5>Bloque dentro de otro párrafo (N-LINE):</h5>
      <p>
        Este tipo de PERFORM se realiza sin invocar ningún párrafo, se realiza
        todo dentro de la sentencia <mark>PERFORM</mark> hasta el{" "}
        <mark>END-PERFORM</mark>. Permite escribir directamente el bloque de
        instrucciones dentro del <mark>PERFORM</mark>, sin necesidad de crear un
        párrafo externo.
      </p>
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
      <h5>VARYING (bucle con contador)</h5>
      <p>
        Permite repetir un bloque de instrucciones o párrafo, modificando el
        valor de una variable (contador), hasta cumplir una condición. Es muy
        útil para recorrer tablas o realizar bucles controlados.
      </p>
      <div className="twoColums">
        <div className="codigo">
          <Red>PERFORM</Red> MOSTRAR-DATO <br />
          <Esp /> <Red>VARYING</Red> INDICE <br />
          <Esp /> <Red>FROM</Red> 1 <Red>BY</Red> 1 <br />
          <Esp /> <Red>UNTIL</Red> INDICE {">"} 10. <br />
        </div>
        <div>
          Este ejemplo ejecuta el párrafo MOSTRAR-DATO 10 veces, incrementando
          el valor de INDICE desde 1 hasta 10.
        </div>
      </div>
      <div className="codigo">
        <Com>PERFORM VARYING con código in-line</Com> <br />
        <Esp /> <Red>PERFORM VARYING</Red> I <Red>FROM</Red> 1 <Red>BY</Red> 1{" "}
        <Red>UNTIL</Red> I {">"} 5 <br />
        <Esp /> <Red>DISPLAY</Red> <Grey>'NÚMERO: '</Grey> I <br />
        <Red>END-PERFORM</Red>. <br />
      </div>
      <p>
        <u>Notas importantes</u>:
      </p>
      <li>
        Se puede anidar <mark>PERFORM VARYING</mark> para recorrer matrices
        (ejemplo: <mark>I</mark> y <mark>J</mark>).
      </li>
      <li>
        También permite controlar más de una variable con <mark>AFTER</mark>.
      </li>
      <div className="twoColums">
        <div className="codigo">
          <Com>Ejemplo con dos contadores:</Com> <br />
          <Red>PERFORM VARYING</Red> I <Red>FROM</Red> 1 <Red>BY</Red> 1{" "}
          <Red>UNTIL</Red> I {">"} 3 <br />
          <Esp /> <Red>AFTER</Red> J <Red>FROM</Red> 1 <Red>BY</Red> 1{" "}
          <Red>UNTIL</Red> J {">"} 2 <br />
          <Esp /> <Red>DISPLAY</Red> <Grey>'I='</Grey> I <Grey>' J='</Grey> J{" "}
          <br />
          <Red>END-PERFORM</Red>. <br />
        </div>
        <div>
          <p>
            Esto ejecuta el cuerpo 6 veces: combina cada valor de <mark>I</mark>{" "}
            (1, 2, 3) con <mark>J</mark> (1, 2).
          </p>
        </div>
      </div>
      <br />
      <h5>
        VARYING ... AFTER ... (Con opción de <mark>WITH TEST BEFORE</mark> o{" "}
        <mark>WITH TEST AFTER</mark>)
      </h5>
      <p>
        Esta forma de PERFORM permite ejecutar un bloque de código o un párrafo
        de forma iterativa, variando múltiples variables de control y
        controlando cuándo se evalúa la condición.
      </p>
      <p>Explicación de los elementos:</p>
      <li>
        <mark>VARYING</mark>: define la primera variable que va a cambiar en
        cada iteración.
      </li>
      <li>
        <mark>AFTER</mark>: define una o más variables adicionales que también
        cambiarán, pero después de cada iteración completa.
      </li>
      <li>
        <mark>FROM</mark>: valor inicial del índice.
      </li>
      <li>
        <mark>BY</mark>: valor por el cual se incrementa (o decrementa).
      </li>
      <li>
        <mark>WITH TEST BEFORE</mark>: evalúa la condición antes de ejecutar el
        párrafo.
      </li>
      <li>
        <mark>WITH TEST AFTER</mark>: ejecuta primero el párrafo, luego evalúa
        la condici
      </li>
      <br />
      <div className="twoColums">
        <div className="codigo">
          <Com>
            Ejemplo con WITH TEST BEFORE <br /> (múltiples contadores):
          </Com>{" "}
          <br />
          <Red>PERFORM</Red> PROCESAR-DATO <br />
          <Esp /> <Red>VARYING</Red> I <Red>FROM</Red> 1 <Red>BY</Red> 1 <br />
          <Esp /> <Red>AFTER</Red> J <Red>FROM</Red> 10 <Red>BY</Red> -1 <br />
          <Esp /> <Red>UNTIL</Red> I {">"} 5 <Red>OR</Red> J {"<"} 1 <br />
          <Esp /> <Red>WITH TEST BEFORE</Red>. <br />
        </div>
        <div>
          <p>📌 Interpretación:</p>
          <li>
            Empieza con <mark>I = 1</mark> y <mark>J = 10</mark>.
          </li>
          <li>
            Se ejecuta <mark>PROCESAR-DATO</mark> si <mark>I {"<="} 5</mark> y{" "}
            <mark>J {">="} 1</mark>.
          </li>
          <li>
            En cada ciclo: <mark>I</mark> se incrementa en 1, <mark>J</mark> se
            reduce en 1.
          </li>
        </div>
      </div>
      <div className="twoColums">
        <div className="codigo">
          <Com>Ejemplo con WITH TEST AFTER:</Com> <br />
          <Red>PERFORM</Red> MOSTRAR <br />
          <Esp /> <Red>VARYING</Red> K <Red>FROM</Red> 1 <Red>BY</Red> 1 <br />
          <Esp /> <Red>UNTIL</Red> K {">"} 3 <br />
          <Esp /> <Red>WITH TEST AFTER</Red>. <br />
        </div>
        <div>
          <p>📌 Interpretación:</p>
          <li>
            Siempre ejecuta <mark>MOSTRAR</mark> al menos una vez.
          </li>
          <li>
            Luego evalúa si <mark>K {">"} 3</mark>.
          </li>
        </div>
      </div>
      <p>
        <u>Cuándo usar TEST BEFORE o AFTER</u>:
      </p>
      <li>
        <mark>WITH TEST BEFORE</mark> Querés que se evalúe la condición antes de
        la primera ejecución.
      </li>
      <li>
        <mark>WITH TEST AFTER</mark> Necesitás que el bloque se ejecute al menos
        una vez.
      </li>
      <br />
      <p>
        🧠 <u>Nota importante</u>:
      </p>
      <li>
        Podés usar <mark>AFTER</mark> para múltiples variables, anidadas como si
        fueran bucles anidados.
      </li>
      <li>
        Si omitís<mark> WITH TEST BEFORE/AFTER</mark>, el valor por defecto es{" "}
        <mark>WITH TEST BEFORE</mark>.
      </li>
      <br />
      <br />
      <br />
      <h5>Sentencia EXIT.</h5>
      <p>
        Esta sentencia se utiliza como complemento de la sentencia PERFORM, para
        proporcionar un punto ﬁnal para uno o más procedimientos, a ﬁn de
        permitir la salida desde cualquier punto. La sentencia <mark>EXIT</mark>{" "}
        forma por sí sola un párrafo identiﬁcado por un nombre.
      </p>
      <br />
      <br />
      <br />
      <p>
        ✅
        <u>
          Buenas prácticas con <mark>PERFORM</mark>
        </u>
        :
      </p>
      <li>
        Nombrar claramente los párrafos llamados para facilitar la lectura.
      </li>
      <li>
        Evitar rangos amplios con <mark>THRU</mark> que puedan ejecutar párrafos
        innecesarios.
      </li>
      <li>
        Usar <mark>PERFORM ... UNTIL</mark> con condiciones claramente
        definidas.
      </li>
      <li>
        Usar <mark>PERFORM in-line</mark> para tareas pequeñas que no se
        reutilizan.
      </li>
      <br />
      <p>
        🧠 <u>Nota técnica</u>:
      </p>
      <li>
        <mark>PERFORM</mark> no transfiere el control permanentemente, como lo
        hace <mark>GO TO</mark>. Cuando el párrafo o sección termina, el control
        vuelve a la instrucción siguiente al <mark>PERFORM</mark>.
      </li>
      <li>
        El uso de <mark>PERFORM</mark> favorece la modularización y el
        mantenimiento del código COBOL.
      </li> <br />
      
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

      <div className="twoColums">
        <div className="codigo">
          <Red>IF</Red> Edad {"<"} 18 <br />
            <Esp/><Red>DISPLAY</Red> <Grey>'Menor de edad'</Grey> <br />
          <Red>ELSE</Red> <br />
          <Esp/><Red>IF</Red> Edad {"<"} 65 <br />
          <Esp/><Esp/><Red>DISPLAY</Red> <Grey>'Adulto'</Grey> <br />
          <Esp/><Red>ELSE</Red> <br />
            <Esp/><Esp/><Red>DISPLAY</Red> <Grey>'Persona mayor'</Grey> <br />
            <Esp/>END-IF. <br />
          END-IF.
        </div>
        <p>
          En este ejemplo, se anidan sentencias IF-ELSE para determinar la
          categoría de edad.
        </p>
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

      <h4>EVALUATE TRUE</h4>
      <p>
        La sentencia EVALUATE se puede utilizar con la opción TRUE para repetir
        un bloque de código en función de múltiples condiciones.
      </p>
      <div className="twoColums">
        <div className="codigo">
          01 Opcion <Red>PIC</Red> 9 <Red>VALUE</Red> 1. <br />
          <br />
          <Red>EVALUATE TRUE</Red> <br />
          <Esp />
          <Red>WHEN</Red> Opcion = 1 <br />
          <Esp />
          <Esp />
          <Red>DISPLAY </Red><Grey>'Seleccionó la opción 1'</Grey> <br />
          <Esp />
          <Red>WHEN</Red> Opcion = 2 <br />
          <Esp />
          <Esp />
          <Red>DISPLAY </Red><Grey>'Seleccionó la opción 2'</Grey> <br />
          <Esp />
          <Red>WHEN OTHER </Red> <br />
          <Esp />
          <Esp />
          <Red>DISPLAY </Red><Grey>'Opción no válida'</Grey> <br />
          <Red>END-EVALUATE</Red>.
        </div>
        <p>
          En este ejemplo, se ejecuta el bloque de código basado en la opción
          seleccionada.
        </p>
      </div>

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

      <h5>Terminación de un Programa</h5>
      <ul>
        <li>
          <mark>EXIT PROGRAM</mark>: Especifica el fin de una rutina y
          retorna el control al programa llamador.
        </li>
        <li>
          <mark>STOP RUN</mark>: Al fin de ejecución retorna el control al
          sistema operativo.
        </li>
        <li>
          <mark>GOBACK</mark>: Cumple las dos funciones la de EXIT PROGRAM, si es una rutina
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
    </section>
  );
};

export { Mod3_4 };
