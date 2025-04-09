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
        minimizar el impacto en el rendimiento del programa.
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
        Es una instrucción utilizada para leer datos desde la entrada estándar
        (generalmente el teclado) y almacenarlos en una variable. Esta
        instrucción permite la interacción del usuario con el programa, ya que
        le permite proporcionar datos durante la ejecución del programa. Es
        importante validar los datos introducidos por el usuario para asegurarse
        de que sean correctos antes de utilizarlos en el programa. Se pueden
        utilizar condiciones y estructuras de control para manejar diferentes
        situaciones de entrada de datos por parte del usuario.
      </p>
      <div className="codigo">
        <Red>DISPLAY</Red> <Grey>"Por favor, introduzca su nombre: "</Grey>.{" "}
        <br />
        <Red>ACCEPT</Red> nombre-alumno. <br />
        <Red>DISPLAY</Red> <Grey>"¡Hola, "</Grey> nombre-alumno <Grey>"!"</Grey>{" "}
        <br />
      </div>

      <h4>El uso de MOVE</h4>
      <p>
        Es una instrucción fundamental que se utiliza para asignar valores a
        variables. Esta instrucción copia datos desde una fuente (como una
        constante, una variable o una expresión) a un destino (una variable) en
        el programa COBOL. MOVE puede utilizarse para asignar valores entre
        diferentes tipos de datos, siempre y cuando la conversión sea válida
        según las reglas de COBOL. También se pueden realizar operaciones
        aritméticas o lógicas en la fuente antes de asignar el valor utilizando
        MOVE.
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
<h4>VALUE</h4>
<li>La cláusula VALUE especifica el contenido inicial del DATAITEM, puede ser un literal entre comillas, o un valor.</li>
<li>La cláusula VALUE no es válida en LINKAGE SECTION.</li>
<li>La cláusula VALUE tiene diferentes formatos.</li>
<br />
<p>FORMATO 1:</p>
<ul>
  <li>Literal VALUE 'xxxxx'</li>
  <li>Valor VALUE ZEROS o VALUE 1 (cualquier valor numérico dependiendo del PICTURE )</li>
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
<Red>WORKING-STORAGE SECTION</Red>.  <br />
01. ……………  <br />
<Esp/>02 NIVEL-SKILL <Red>PIC</Red> 99.  <br />
<Esp/><Esp/>88 TRAINEE <Red>VALUE</Red> 1 <Red>THRU</Red> 3.  <br />
<Esp/><Esp/>88 JUNIOR <Red>VALUE</Red> 4 <Red>THRU</Red> 7.  <br />
<Esp/><Esp/>88 SEMI-SENIOR <Red>VALUE</Red> 8 <Red>THRU</Red> 11.  <br />
<Esp/><Esp/>88 SENIOR <Red>VALUE</Red> 12 <Red>THRU</Red> 15.  <br />
<Esp/>02 COSTO.  <br />
<Esp/><Esp/>03 PESOS <Red>PIC</Red> 9(05).  <br />
<Esp/><Esp/>03 FILLER <Red>PIC</Red> X <Red>VALUE</Red> '*'.  <br />
<Esp/><Esp/>03 CENTAVOS <Red>PIC</Red> 99.  <br />
<Esp/>02 FC-CODE-GOOD <Red>PIC</Red> S9(08) BINARY <Red>VALUE</Red> LOW-VALUES.  <br />
<Esp/>02 PRECIO <Red>PIC</Red> 999V99 <Red>VALUE</Red> 123,45.  <br />
<Esp/>02 LINEA <Red>PIC</Red>X(132)<Red>VALUE</Red> SPACES.  <br />
<Esp/>02 SUBRAYADO <Red>PIC</Red> X(132) <Red>VALUE</Red> ALL '_'.  <br />
<Esp/>77 AEROPUERTO <Red>PIC</Red> X(10) <Red>VALUE</Red> 'AEROPARQUE'.  <br />
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
