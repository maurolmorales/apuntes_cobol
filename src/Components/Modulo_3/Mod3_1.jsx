const Mod3_1 = ({ Cuadro, Red, Grey, Esp, Com }) => {
  return (
    <section id="Mod3_1">
      <h3 id="3.1">Declaración de Variables en COBOL</h3>
      <p>
        En COBOL, la declaración de variables es una parte fundamental para
        definir la estructura de datos que se utilizará en un programa. Las
        variables en COBOL se utilizan para almacenar información, realizar
        cálculos y representar datos de entrada y salida. Por convención se
        antepone <strong>wsv_</strong> para las variables y{" "}
        <strong>wsc_</strong> para las constantes Aquí se describen los aspectos
        clave de la declaración de variables en COBOL:
      </p>
      <h4>Nombres de Variables en COBOL</h4>
      <p>
        En COBOL, los nombres de variables deben seguir ciertas reglas y
        convenciones:
      </p>
      <ul>
        <li>Los nombres son sensibles a mayúsculas y minúsculas.</li>
        <li>
          Los nombres pueden contener letras, números y guiones bajos
          (underscores).
        </li>
        <li>Los nombres no pueden comenzar con un número.</li>
        <li>
          Los nombres pueden tener una longitud máxima, que varía según la
          implementación de COBOL, pero generalmente es de 30 a 31 caracteres.
        </li>
      </ul>
      <div className="twoColums">
        <div className="codigo">
          01 NumeroCliente <Red>PIC</Red> <Grey> 9(5)</Grey>. <br />
          01 NombreCliente <Red>PIC</Red> <Grey>X(30)</Grey>. <br />
          01 SaldoCuenta <Red>PIC</Red> <Grey>S9(7)V99</Grey>.
        </div>
        <p>
          En el ejemplo anterior, hemos declarado tres variables: NumeroCliente,
          NombreCliente y SaldoCuenta. Estos nombres siguen las reglas de
          nombres de variables en COBOL.
        </p>
      </div>
      <h4>El uso de DISPLAY</h4>
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
        <Red>DISPLAY</Red> <Grey>'¡Hola, mundo!'</Grey>. <br />
        <Red>DISPLAY</Red> <Grey>'El valor de X es: '</Grey> X. <br />
        <Red>DISPLAY</Red> <Grey>'El resultado de la suma es: '</Grey> NUM1 +
        NUM2. <br />
      </div>
      <h4>El uso de WITH NOT ADVANCING</h4>
      <p>
        Es una cláusula utilizada en instrucciones de escritura para indicar que
        los registros consecutivos escritos no deben avanzar una línea en el
        archivo de salida después de cada registro. Esto significa que múltiples
        registros escritos con la misma instrucción WRITE se colocarán uno
        debajo del otro en la misma línea en el archivo de salida. Se utiliza en
        combinación con la instrucción WRITE para controlar el posicionamiento
        de registros escritos en un archivo de salida. Indica que los registros
        consecutivos escritos con la misma instrucción WRITE deben colocarse uno
        debajo del otro en la misma línea en el archivo de salida, en lugar de
        avanzar a una nueva línea después de cada registro. La cláusula WITH NOT
        ADVANCING es útil cuando se desea escribir múltiples registros
        consecutivos en la misma línea en un archivo de salida, como en informes
        de líneas detalladas o formatos de registro específicos. Al utilizar
        WITH NOT ADVANCING, se pueden agrupar registros relacionados en una sola
        línea para mejorar la legibilidad y la presentación de la información en
        el archivo de salida.
      </p>
      <div className="codigo">
        <Red>WRITE</Red> DETAIL-RECORD-1 <Red>WITH NOT ADVANCING</Red>. <br />
        <Red>WRITE</Red> DETAIL-RECORD-2 <Red>WITH NOT ADVANCING</Red>. <br />
        <Red>WRITE</Red> DETAIL-RECORD-3. <br />
      </div>
      <h4>El uso de UPON</h4>
      <p>
        Es una palabra reservada que se utiliza en conjunto con la cláusula FILE
        STATUS dentro de la sección FILE-CONTROL para especificar un nombre de
        variable de estado de archivo que se utilizará para almacenar
        información sobre el estado de una operación de E/S (entrada/salida) en
        un archivo.
      </p>
      <div className="codigo">
        <Red>FILE-CONTROL</Red>. <br />
        <Esp />
        <Red>SELECT</Red> archivo <Red>ASSIGN TO</Red> <Grey>"datos.txt"</Grey>{" "}
        <br />
        <Esp />
        <Esp />
        <Red>ORGANIZATION IS SEQUENTIAL</Red> <br />
        <Esp />
        <Esp />
        <Red>FILE STATUS</Red> archivo-status <Red>UPON I-O</Red>. <br /> <br />
        <Red>DATA DIVISION</Red>. <br />
        <Red>WORKING-STORAGE SECTION</Red>. <br />
        01 archivo-status <Red>PIC</Red> X(02). <br />
      </div>
      <h4>El uso de ACCEPT</h4>
      <p>
        Permite el ingreso de datos desde SYSIN, el dato deberá estar deﬁnido en
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
      <h4>El uso de MOVE</h4>
      <p>
        Es una instrucción fundamental que se utiliza para asignar valores a
        variables. Transfiere datos de un área de memoria a una o más áreas de
        memoria. Esta instrucción copia datos desde una fuente (como una
        constante, una variable o una expresión) a un destino (una variable) en
        el programa COBOL. MOVE puede utilizarse para asignar valores entre
        diferentes tipos de datos, siempre y cuando la conversión sea válida
        según las reglas de COBOL. También se pueden realizar operaciones
        aritméticas o lógicas en la fuente antes de asignar el valor utilizando
        MOVE. No se puede realizar MOVE sobre POINTER-DATA o INDEX-DATA. Si el
        identificador-n receptor tiene una longitud menor a identificador-1 se
        produce truncamiento, en caso contrario se rellena con ceros o blancos
        dependiendo si identificador-n es numérico o alfanumérico. El contenido
        del campo emisor se va colocando en el campo receptor de derecha a
        izquierda, excepto cuando en el campo receptor se haya declarado la
        cláusula JUSTIFIED RIGHT.
      </p>
      <div className="twoColums">
        <div className="codigo">
          <Red>MOVE</Red> numero1 <Red>TO</Red> numero2. <br />
          <Red>DISPLAY</Red> <Grey>"El valor de numero2 es: "</Grey> numero2.{" "}
          <br />
        </div>
        <p>
          En este ejemplo, la instrucción MOVE numero1 TO numero2 copia el valor
          de la variable numero1 (que es 10) en la variable numero2. Luego, se
          muestra el valor de numero2.
        </p>
      </div>
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
      <h4>CALL</h4>
      <p>
        La sentencia CALL transﬁere el control, desde un programa objeto a otro,
        en una unidad de ejecución. El programa llamador es llamado programa
        MAIN, y el programa invocado es normalmente llamado subprograma o
        rutina. Ahora un subprograma o rutina no puede realizar CALL, si no
        tiene atributo de RECURSIVE. El CALL al llamar a un programa, lo detecta
        con el ENTRY POINT y este se encuentra en la dirección de memoria donde
        fue cargado el PROCEDURE DIVISION del programa llamado. El compilador
        COBOL, lleva la opción DYNAM / NODYNAM. Por defecto los compiladores
        tienen NODYNAM. Si el compilador llevará DYNAM, la rutina sea invocada
        con literal o con data-name siempre va a ser dinámica. EL subprograma o
        rutina la PROCEDURE DIVISION debe usarse USING, por donde ingresarán la
        información pasado por el programa llamador o MAIN. Se puede manejar
        RETURN-CODE del subprograma usando RETURNING, donde el subprograma debe
        dejar el código de retorno. Y en el programa MAIN en WORKING-STORAGE,
        debe estar deﬁnido el campo de RETURN-CODE para que allí se impacte la
        información dada por RETURNING el subprograma. El programa MAIN puede
        realizar CALL con RETURNING al subprograma, entonces el subprograma debe
        especiﬁcar el RETURNING en la PROCEDURE DIVISION. Las rutinas o
        subprogramas pueden ser invocados en forma dinámica o estática.
      </p>
      <h5>CALL ESTÁTICO</h5>
      <p>
        Lleva literales, para que en la LINKEDICIÓN del programa, previamente
        debe existir el objeto del CALL y debe estar en una biblioteca a nivel
        de SYSLIB del LINKED del programa. Las rutinas estáticas se cargan en
        memoria del programa MAIN. Por lo tanto ante el CALL de la rutina no hay
        LOAD de la misma, y esto es eﬁciente. Las rutinas elegidas para ser
        estáticas son aquellas QUE NO SUFREN MODIFICACIONES. Por ejemplo,
        rutinas de manejo de errores, de fecha. Si una rutina estática, sufre
        modiﬁcación se deben realizar la recompilación de todos los programas
        que la invocan, y esto es grave, por la envergadura del trabajo a
        realizar y con la posibilidad de errores.
      </p>
      <div className="codigo">
        <Red>CALL</Red> 'RUTERROR' <Red>USING</Red> .......... <br />
        <Esp />
        <Red>ON EXCEPTION SET</Red> GOOD-CALL <Red>TO TRUE</Red> <br />
        <Esp />
        <Red>NOT ON EXCEPCION SET</Red> BAD-CALL <Red>TO TRUE</Red> <br />
        <Red>END-CALL</Red>. <br />
      </div>
      <h5>CALL DINÁMICO</h5>
      <p>
        Se invoca desde un DATA-NAME, deﬁnido en WORKING-STORAGE. En tiempo de
        ejecución cuando el programa MAIN ejecute un CALL a una rutina dinámica,
        la misma produce un LOAD en memoria, llevando el tiempo de LOAD en
        RESPTIME y CPUTIME. Las rutinas elegidas para ser dinámicas puede ser
        cualquiera, ya que puede sufrir o no modiﬁcaciones que siempre se va a
        tomar la última versión en un CALL. Es el tipo de rutina conveniente en
        una instalación.
      </p>
      <div className="codigo">
        77 RUT-PGM <Red>PIC</Red> X(8) <Red>VALUE</Red> 'RUTERROR'. <br />
        <Red>CALL</Red> RUT-PGM <Red>USING</Red> ........ <br />
        <Esp />
        <Red>ON EXCEPTION SET</Red> GOOD-CALL <Red>TO TRUE</Red> <br />
        <Esp />
        <Red>NOT ON EXCEPCION SET</Red> BAD-CALL <Red>TO TRUE</Red> <br />
        <Red>END-CALL</Red>. <br />
      </div>
      <h5>CALL Y LINKAGE SECTION</h5>
      <p>
        La LINKAGE SECTION se deﬁne en la DATA DIVISION, y describe los datos a
        ser pasados por un programa MAIN. Esta memoria no está reservada por el
        programa MAIN como la WORKING-STORAGE. Los DATA-ITEM no pueden llevar la
        cláusula VALUE, salvo que el NIVEL sea 88.
      </p>

<div className="codigo">
<Red>IDENTIFICATION DIVISION</Red>.  <br />
<Red>PROGRAM-ID</Red>. TOTOPGM.  <br />
<Red>DATA DIVISION</Red>.<Com> — Programa TOTOPGM</Com>    <br />
<Red>WORKING-STORAGE SECTION</Red>.    <br />
01 DATOS-ERROR.     <br />
<Esp/>02 COD-ERR <Red>PIC</Red> 9(3).    <br />
<Esp/>02 PGM-MAIN-ERROR <Red>PIC</Red> X(8).    <br />
<Esp/>02 HORA-ERROR <Red>PIC</Red> X(8).    <br />
<Esp/>02 PROC-NAME-ERROR <Red>PIC</Red> X(40).    <br />
    <br />
Rutina RUTERROR    <br />
<Red>LINKAGE SECTION</Red>.   <br />
01 DATOS-ERROR.    <br />
<Esp/>02 COD-ERROR <Red>PIC</Red> 9(3).    <br />
    <br />
<Red>PROCEDURE DIVISION</Red>.    <br />
<Red>MOVE</Red>..... <Red>TO </Red>DATOS-ERROR    <br />
<Red>MOVE</Red> 'RUTERROR' <Red>TO </Red>RUT-ERROR.    <br />
<Red>CALL </Red>RUT-ERROR <Red>USING</Red> DATOS-ERROR.    <br />
    <br />
<Esp/>02 PGM-MAIN-ERROR <Red>PIC</Red> X(8).    <br />
<Esp/>02 HORA-ERROR <Red>PIC</Red> X(8).    <br />
<Esp/>02 PROCEDURE-NAME-ERROR <Red>PIC</Red> X(40).    <br />
<Red>PROCEDURE DIVISION USING</Red> DATOS-ERROR.    <br />
    <br />
<Com>LINKAGE SECTION y JCL PARAMETERS</Com>    <br />
//STEP01 EXEC PGM=TOTOPGM,PARM=’PARM1,PARM2’    <br />
Programa TOTOPGM    <br />
<Red>LINKAGE SECTION</Red>.    <br />
01 PARM-LIST.    <br />
<Esp/>02 PARM-LENGTH <Red>PIC</Red> 99 BINARY.    <br />
<Esp/>02 PARM1 <Red>PIC</Red> X(8).    <br />
<Esp/>02 PARM2 <Red>PIC</Red> X(6).    <br />
<Red>PROCEDURE DIVISION USING</Red> PARM-LIST.    <br />
<Red>EVALUATE</Red> PARM-LENGTH    <br />
<Red>WHEN</Red> 0    <br />
<Red>PERFORM</Red> NO-HAY-PARAMETRO    <br />
<Esp/><Red>WHEN</Red> 8    <br />
<Esp/><Esp/><Red>MOVE</Red> PARM1 <Red>TO </Red>............    <br />
<Esp/><Red>WHEN</Red> 14    <br />
<Esp/><Esp/><Red>MOVE</Red> PARM1 <Red>TO </Red>............   <br />
<Esp/><Esp/><Red>MOVE</Red> PARM2 <Red>TO </Red>............    <br />
<Esp/><Red>WHEN OTHER </Red>    <br />
<Esp/><Esp/><Red>PERFORM</Red> PARAMETRO-INVALIDA    <br />
<Red>END-EVALUATE</Red>.    <br />
</div>





      <h4>VALUE</h4>
      <li>
        La cláusula VALUE especifica el contenido inicial del DATAITEM, puede
        ser un literal entre comillas, o un valor.
      </li>
      <li>La cláusula VALUE no es válida en LINKAGE SECTION.</li>
      <li>La cláusula VALUE tiene diferentes formatos.</li>
      <br />
      <p>FORMATO 1:</p>
      <ul>
        <li>Literal VALUE 'xxxxx'</li>
        <li>
          Valor VALUE ZEROS o VALUE 1 (cualquier valor numérico dependiendo del
          PICTURE )
        </li>
      </ul>
      <br />
      <p>FORMATO 2:</p>
      <ul>
        <li>88 condition-name VALUE literal-1 THRU literal-2</li>
      </ul>
      <br />
      <p>FORMATO 3:</p>
      <ul>
        <li>VALUE IS NULL / NULLS</li>
      </ul>
      ejemplo:
      <div className="codigo">
        <Red>WORKING-STORAGE SECTION</Red>. <br />
        01. …………… <br />
        <Esp />
        02 NIVEL-SKILL <Red>PIC</Red> 99. <br />
        <Esp />
        <Esp />
        88 TRAINEE <Red>VALUE</Red> 1 <Red>THRU</Red> 3. <br />
        <Esp />
        <Esp />
        88 JUNIOR <Red>VALUE</Red> 4 <Red>THRU</Red> 7. <br />
        <Esp />
        <Esp />
        88 SEMI-SENIOR <Red>VALUE</Red> 8 <Red>THRU</Red> 11. <br />
        <Esp />
        <Esp />
        88 SENIOR <Red>VALUE</Red> 12 <Red>THRU</Red> 15. <br />
        <Esp />
        02 COSTO. <br />
        <Esp />
        <Esp />
        03 PESOS <Red>PIC</Red> 9(05). <br />
        <Esp />
        <Esp />
        03 FILLER <Red>PIC</Red> X <Red>VALUE</Red> '*'. <br />
        <Esp />
        <Esp />
        03 CENTAVOS <Red>PIC</Red> 99. <br />
        <Esp />
        02 FC-CODE-GOOD <Red>PIC</Red> S9(08) BINARY <Red>VALUE</Red>{" "}
        LOW-VALUES. <br />
        <Esp />
        02 PRECIO <Red>PIC</Red> 999V99 <Red>VALUE</Red> 123,45. <br />
        <Esp />
        02 LINEA <Red>PIC</Red>X(132)<Red>VALUE</Red> SPACES. <br />
        <Esp />
        02 SUBRAYADO <Red>PIC</Red> X(132) <Red>VALUE</Red> ALL '_'. <br />
        <Esp />
        77 AEROPUERTO <Red>PIC</Red> X(10) <Red>VALUE</Red> 'AEROPARQUE'. <br />
      </div>
      <h4>Instrucciones Aritméticas</h4>
      <p>
        En COBOL, las instrucciones aritméticas son fundamentales para realizar
        operaciones matemáticas en el programa. Estas instrucciones permiten
        realizar cálculos numéricos, manipular valores y realizar operaciones de
        suma, resta, multiplicación y división.
      </p>
      <ul>
        <li>
          <strong>ADD:</strong> Se utiliza para sumar el valor de una fuente a
          una variable de destino. Sintaxis: ADD source TO identifier. Ejemplo:
          ADD 10 TO total.
        </li>

        <li>
          <strong>SUBTRACT:</strong> Se utiliza para restar el valor de una
          fuente de una variable de destino. Sintaxis: SUBTRACT source FROM
          identifier. Ejemplo: SUBTRACT descuento FROM total.
        </li>

        <li>
          <strong>MULTIPLY:</strong> Se utiliza para multiplicar el valor de una
          fuente por una variable de destino. Sintaxis: MULTIPLY source BY
          identifier. Ejemplo: MULTIPLY precio BY cantidad.
        </li>

        <li>
          <strong>DIVIDE:</strong> Se utiliza para dividir el valor de una
          variable de destino por el valor de una fuente. Sintaxis: DIVIDE
          identifier BY divisor. Ejemplo: DIVIDE total BY cantidad.
        </li>

        <li>
          <strong>COMPUTE:</strong> Se utiliza para realizar cálculos
          aritméticos complejos utilizando una expresión aritmética. Sintaxis:
          COMPUTE identifier = expression. Ejemplo: COMPUTE total = (precio *
          cantidad) - descuento.
        </li>
      </ul>
      <div className="codigo">
        <Red>ADD</Red> numero1 <Red>TO</Red> numero2 <Red>GIVING</Red>{" "}
        resultado. <br />
        <Red>SUBTRACT</Red> descuento <Red>FROM</Red> total <Red>GIVING</Red>{" "}
        resultado. <br />
        <Red>MULTIPLY</Red> precio-unitario <Red>BY</Red> cantidad-comprada{" "}
        <Red>GIVING</Red> total-factura. <br />
        <Red>DIVIDE</Red> dividendo <Red>BY</Red> divisor <Red>GIVING</Red>{" "}
        cociente <Red>REMAINDER</Red> resto. <br />
        <Red>COMPUTE</Red> c = {"(a * 2) - b"}.
      </div>
      <Cuadro data={{ gridTemplateColumns: "1fr 1fr 1fr" }} key={1}>
        <div className="col tCenter">
          <div>Carácter</div>
          <div>+</div>
          <div>-</div>
          <div>*</div>
          <div>/</div>
          <div>**</div>
          <div>=</div>
          <div>()</div>
          <div>=</div>
          <div>{"<"}</div>
          <div>{">"}</div>
          <div>{"<="}</div>
          <div>{">="}</div>
        </div>
        <div className="col tCenter">
          <div>Signiﬁcado</div>
          <div>Suma</div>
          <div>Resta </div>
          <div>Multiplicación </div>
          <div>División </div>
          <div>Potenciación </div>
          <div>Asignación </div>
          <div>Dar Prioridad </div>
          <div>Igual que </div>
          <div>Menor que </div>
          <div>Mayor que </div>
          <div>Menor igual </div>
          <div>Mayor igual </div>
        </div>
        <div className="col tCenter">
          <div>Ejemplo</div>
          <div>A+B</div>
          <div>A-B</div>
          <div>A*B</div>
          <div>A/B</div>
          <div>A**B</div>
          <div>C=A+B</div>
          <div>D=(A+B)*C</div>
          <div>{"A=B"}</div>
          <div>{"A<B"}</div>
          <div>{"A>B"}</div>
          <div>{"A<=B"}</div>
          <div>{"A>=B"}</div>
        </div>
      </Cuadro>
      <h4>Niveles de Jerarquía</h4>
      <p>
        En COBOL, las variables se organizan mediante niveles de jerarquía. El
        nivel 01 se utiliza para las variables principales, y los niveles 02,
        03, etc., se utilizan para las variables secundarias dentro de una
        estructura. Esta jerarquía ayuda a organizar y describir las relaciones
        entre las variables.
      </p>
      <div className="twoColums">
        <div className="codigo">
          01 Cliente. <br />
          <Esp />
          02 NumeroCliente <Red>PIC</Red> 9(5). <br />
          <Esp />
          02 NombreCliente <Red>PIC</Red> X(30). <br />
          01 Cuenta. <br />
          <Esp />
          02 SaldoCuenta <Red>PIC</Red> S9(7)V99.
        </div>
        <p>
          En este ejemplo, hemos definido dos variables principales, Cliente y
          Cuenta, cada una con subvariables dentro de ellas.
        </p>
      </div>
      <h4>Uso de PICTURE</h4>
      <p>
        La cláusula PICTURE indica las características generales de edición de
        un DATA-ITEM. PIC o PICTURE son equivalentes. El máximo STRING de
        caracteres es de 30. Los paréntesis en un STRING de caracteres indican
        repetición. La cláusula PICTURE se utiliza para especificar la forma y
        el contenido de una variable en COBOL. Define el formato de datos que se
        almacenará en la variable y cómo se presentará. La cláusula PICTURE es
        especificada para todos los DATA-ITEM elementales. No es especificada
        para DATA-ITEM grupales, en un INDEX-DATA (USAGE INDEX ) o USAGE IS
        POINTER o en una cláusula RENAMES.
      </p>
      <div className="twoColums">
        <div className="codigo">
          01 FechaNacimiento <Red>PIC</Red> 9(8). <br />
          01 NumeroSeguridadSocial <Red>PIC</Red> X(11). <br />
          01 PrecioProducto <Red>PIC</Red> 9(5)V9(2).
        </div>
        <p>
          En estos ejemplos, hemos utilizado PICTURE para definir el formato de
          variables que almacenan fechas, números de seguridad social y precios
          de productos.
        </p>
      </div>
      <h4>Uso de FILLER</h4>
      <p>
        Es una palabra reservada del COBOL, usada para describir campos que no
        son referenciados en PROCEDURE DIVISION. Si el DATANAME o FILLER como
        cláusula es omitida siguiendo a un LEVELNUMBER, entonces el DATAITEM
        va a ser tratado como un FILLER. En un MOVE CORRESPONDING, ADD
        CORRESPONDING, SUBSTRACT CORRESPONDING el FILLER es ignorado. También en
        el INITIALIZE el FILLER también es ignorado. Se usa para definir
        espacios en un registro que no necesitan un nombre específico ni serán
        referenciados en el programa. Se emplea principalmente para reservar
        espacio en la memoria o para estructurar mejor los datos en archivos o
        bases de datos.
      </p>
      <ul>
        <li>
          Relleno: Se usa para completar espacios en blanco entre campos de
          datos, asegurando que los campos subsiguientes se alineen
          correctamente. Esto es crucial en COBOL, donde el diseño de los
          registros es fijo y la posición de los datos es importante.
        </li>
        <li>
          Espacios reservados: FILLER permite reservar espacio para datos que
          podrían ser necesarios en el futuro, o para campos que son utilizados
          por otros programas o sistemas.
        </li>
        <li>
          Alineación: Ayuda a alinear los campos de datos en posiciones
          específicas dentro de un registro, lo cual es esencial para el
          procesamiento de datos en archivos de formato fijo.
        </li>
      </ul>
      <div className="twoColums" style={{ gridTemplateColumns: "1fr 1fr" }}>
        <div>
          <div className="codigo">
            <Red>DATA DIVISION</Red>. <br />
            <Red>WORKING-STORAGE SECTION</Red>. <br />
            01 REGISTRO. <br />
            <Esp /> 05 NOMBRE <Red>PIC</Red> X(10). <br />
            <Esp /> 05 <Red>FILLER PIC</Red> X(5) <Red>VALUE</Red>{" "}
            <Grey>
              "<Esp />
              <Esp /> "
            </Grey>
            . (Espacios en blanco) <br />
            <Esp /> 05 APELLIDO <Red>PIC</Red> X(15).
          </div>
          <p>
            En estos ejemplos, hemos utilizado PICTURE para definir el formato
            de variables que almacenan fechas, números de seguridad social y
            precios de productos.
          </p>
        </div>
        <div className="codigo">
          01 REG-EMPLEADO. <br />
          <Esp />
          02 COD-EMPLEADO <Red>PIC</Red> 9(05). <br />
          <Esp />
          02 NOMBRE-EMPLEADO <Red>PIC</Red> X(40). <br />
          <Esp />
          02 <Esp />
          <Esp />
          <Esp />
          <Esp />
          <Esp />
          <Esp />
          <Esp />
          <Esp />
          <Esp />
          <Red>PIC</Red> XX. <br />
          <Esp />
          02 DIRECC-EMPLEADO <Red>PIC</Red> X(35). <br />
          <Esp />
          02 FILLER <Red>PIC</Red> X(18). <br />
        </div>
      </div>
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
      <h5>SET TO TRUE</h5>
      <p>
        El valor asociado con la condition-name es localizado en una variable
        condicional de acuerdo a las reglas de la cláusula VALUE.
      </p>
      <div className="codigo">
        <Red>Red</Red> condition-name <Red>TO TRUE</Red> <br />
        01 SKILL-PERS <Red>PIC</Red> X. <br />
        <Esp />
        88 ESPECIALISTA <Red>VALUE</Red> 'E'. <br />
        <Esp />
        88 NO-ESPECIALISTA <Red>VALUE</Red> 'N'. <br />
        <Esp />
        <Com>.............</Com> <br />
        <Esp />
        <Red>Red</Red> ESPECIALISTA <Red>TO TRUE</Red>. <br />
        <Com>IDEM MOVE 'E' TO SKILL-PERS</Com>
      </div>
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
      <h4>Conclusión</h4>
      <p>
        La declaración de variables en COBOL es fundamental para definir la
        estructura de datos en un programa. Comprender las reglas de nombres,
        niveles de jerarquía y el uso de PICTURE es esencial para el desarrollo
        de aplicaciones efectivas en COBOL. En módulos posteriores, exploraremos
        diferentes tipos de datos y cómo realizar operaciones con estas
        variables.
      </p>
      <h3> 3.1.1 Variables Simples </h3>
      <p>
        Las variables simples en COBOL son elementos básicos de almacenamiento
        que contienen un solo valor. Se declaran en la sección DATA DIVISION del
        programa y se utilizan para almacenar información como números,
        caracteres o fechas. Aquí hay una descripción detallada:
      </p>
      <div className="codigo">
        <Red>IDENTIFICATION DIVISION</Red>. <br />
        <Red>PROGRAM-ID</Red>. VariablesSimplesExample. <br />
        <Red>DATA DIVISION</Red>. <br />
        <Red>WORKING-STORAGE SECTION</Red>. <br />
        <Esp /> 01 NUMERO-SIMPLE <Red>PIC</Red> 9(5). <br />
        <Esp /> 01 NOMBRE-SIMPLE <Red>PIC</Red> X(20). <br />
        <Esp /> 01 FECHA-SIMPLE <Red>PIC</Red> 9(8). <br />
        <Red>PROCEDURE DIVISION</Red>. <br />
        <Esp /> <Red>MOVE</Red> 12345 <Red>TO</Red> NUMERO-SIMPLE. <br />
        <Esp /> <Red>MOVE</Red> <Grey>"Ejemplo"</Grey> <Red>TO</Red>{" "}
        NOMBRE-SIMPLE. <br />
        <Esp /> <Red>MOVE</Red> 20231031 <Red>TO</Red> FECHA-SIMPLE. <br />
        <Esp /> <Red>DISPLAY</Red> <Grey>"Número: "</Grey> NUMERO-SIMPLE. <br />
        <Esp /> <Red>DISPLAY</Red> <Grey>"Nombre: "</Grey> NOMBRE-SIMPLE. <br />
        <Esp /> <Red>DISPLAY</Red> <Grey>"Fecha: "</Grey> FECHA-SIMPLE. <br />
        <Red>STOP RUN</Red>.
      </div>
      <p>Descripción de las Variables:</p>
      <ul>
        <li>
          NUMERO-SIMPLE: Una variable numérica simple que puede almacenar hasta
          5 dígitos enteros.
        </li>
        <li>
          NOMBRE-SIMPLE: Una variable alfanumérica simple que puede almacenar
          hasta 20 caracteres.
        </li>
        <li>
          FECHA-SIMPLE: Una variable numérica simple utilizada para representar
          una fecha en formato AAAAMMDD.
        </li>
      </ul>
      <p>Operaciones Comunes con Variables Simples:</p>
      <ol>
        <li>
          Asignación de Valores:
          <div className="codigo">
            <Red>MOVE</Red> 67890 <Red>TO</Red> NUMERO-SIMPLE.
          </div>
        </li>
        <li>
          Visualización de Valores:
          <div className="codigo">
            <Red>DISPLAY</Red> <Grey>"Número: "</Grey> NUMERO-SIMPLE.
          </div>
        </li>
        <li>
          Operaciones Aritméticas:
          <div className="codigo">
            <Red>ADD</Red> 100 <Red>TO</Red> NUMERO-SIMPLE.
          </div>
        </li>
        <li>
          Manipulación de Cadenas:
          <div className="codigo">
            <Red>MOVE</Red> <Grey>"NuevoNombre"</Grey> <Red>TO</Red>{" "}
            NOMBRE-SIMPLE.
          </div>
        </li>
      </ol>
      <h3>3.1.2 Variables Compuestas</h3>
      <p>
        Las variables compuestas en COBOL son estructuras de datos que pueden
        contener múltiples elementos individuales llamados "campos" o
        "subvariables". Estas estructuras permiten agrupar información
        relacionada en una única entidad. Hay varias formas de declarar
        variables compuestas en COBOL, y algunas de las más comunes son los
        registros y las tablas. Declaración de Variables Compuestas:
      </p>
    </section>
  );
};

export { Mod3_1 };
