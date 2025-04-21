const Mod3_3 = ({ Cuadro, Red, Grey, Esp, Com }) => {
  return (
    <section id="3.3">
      <h3>3.3 DATA DIVISION</h3>
      <p>
        La DATA DIVISION es una de las divisiones más importantes en COBOL. Aquí
        se declaran todas las variables, estructuras, archivos, constantes y
        áreas de comunicación que el programa utilizará durante su ejecución.
        Permite definir y estructurar la memoria de trabajo del programa: datos
        internos, externos, temporales y parámetros recibidos o retornados de
        subprogramas.
      </p>



      <h4>FILE SECTION: </h4> Define la estructura de los archivos que se
      utilizarán en el programa.Se utiliza para definir las estructuras de los
      archivos que el programa utilizará durante su ejecución. Las áreas de
      datos en la FILE SECTION no están disponibles hasta que los archivos no
      son abiertos en PROCEDURE DIVISION. Esta SECTION solo COBOL BATCH.
      <ul>
        <li>
          <mark>FD file-name:</mark> Este es el nombre lógico del archivo y
          es el mismo que se utiliza en el párrafo SELECT de la sección
          FILE-CONTROL. Este párrafo FD indica que se está describiendo la
          estructura de un archivo en particular.
        </li>
        <li>
          <mark>LABEL RECORDS ARE:</mark> Esta cláusula se utiliza para
          especificar si los registros del archivo contienen etiquetas. La
          opción STANDARD indica que los registros tienen etiquetas estándar,
          mientras que OMITTED indica que no hay etiquetas en los registros.
        </li>
        <li>
          <mark>RECORDING MODE IS:</mark> Esta cláusula se utiliza para
          especificar el formato de los registros en el archivo, pudiendo ser F
          (fijo), V (variable) o U (indefinido).
        </li>
        <li>
          <mark>RECORD CONTAINS:</mark> Esta cláusula se utiliza para
          especificar el número de registros que contiene un bloque de
          registros. Esto es relevante para archivos secuenciales.
        </li>
        <li>
          <mark>BLOCK CONTAINS:</mark> Esta cláusula se utiliza para
          especificar el número de bloques de registros en un bloque de bloques.
          Esto es relevante para archivos secuenciales.
        </li>
        <li>
          <mark>DATA RECORD IS:</mark> Esta cláusula se utiliza para
          especificar el nombre del nivel de datos que representa un registro en
          el archivo.
        </li>
        <li>
          <mark>LINAGE IS:</mark> Esta cláusula se utiliza para especificar
          el número de líneas entre los registros. Es útil para formatear la
          salida de impresión.
        </li>
        <li>
          <mark>OMITTED RECORDS ARE:</mark> Esta cláusula se utiliza para
          especificar cómo se manejarán los registros omitidos durante la
          operación de entrada. La opción OMITTED indica que los registros
          omitidos no se devolverán como registros de datos.
        </li>
        <li>
          <mark>VALUE OF FILE-ID IS:</mark> Esta cláusula se utiliza para
          asignar un valor literal al identificador del archivo.
        </li>
        <li>
          <mark>01 level-number:</mark> Esto define el esquema de datos para
          un registro dentro del archivo. Los campos de datos individuales se
          definen dentro de este nivel usando cláusulas como PIC, USAGE, etc.
        </li>
      </ul>


      <h4>WORKING-STORAGE SECTION: </h4> Almacena las variables que se utilizan
      durante la ejecución del programa.Se utiliza para definir variables y
      áreas de trabajo que se utilizarán durante la ejecución del programa.se
      utiliza para declarar variables y áreas de trabajo que se necesitan
      durante la ejecución del programa. Estas variables pueden ser temporales,
      acumuladores, contadores, buffers de datos, etc. Las variables declaradas
      en esta sección no retienen su valor entre diferentes ejecuciones del
      programa; se inicializan cada vez que se ejecuta el programa.
      <div className="codigo">
        <Red>DATA DIVISION</Red>. <br />
        <Esp />
        <Red>WORKING-STORAGE SECTION</Red>. <br />
        <Esp />
        01 WS-COUNTER <Red>PIC</Red> 9(3) <Red>VALUE ZEROES</Red>. <br />
        <Esp />
        01 WS-NAME <Red>PIC</Red> X(20) <Red>VALUE</Red> <Grey>'John Doe'</Grey>
        . <br />
      </div>
      <h5>DATA ITEM:</h5> Se describen los campos de un registro, las variables
      a ser usadas por el programa para la ejecución del mismo. Todos los DATA
      ITEMS deben finalizar con un punto. Y a su vez poseen distintos formatos.
      Dentro de cada nivel, puedes usar cláusulas como PIC, USAGE, VALUE,
      REDEFINES, etc., para definir las características de la variable o área de
      trabajo. Algunas de las cláusulas más comunes incluyen:
      {/* <strong>USAGE:</strong> Especifica cómo se almacenará la variable
          en la memoria (por ejemplo, USAGE IS COMPUTATIONAL para almacenar
          la variable como un valor numérico).
          <strong>REDEFINES:</strong> Permite que una variable comparta
            almacenamiento con otra variable. */}
      <h5>Data Item - Formato 1:</h5>
      <ul>
        <li>Level-number_data-name-1</li>
        <li>redefines-clause</li>
        <li>blank-when-zero-clause</li>
        <li>external-clause</li>
        <li>FILLER</li>
        <li>global-clause</li>
        <li>justified-clause</li>
        <li>occurs-clause</li>
        <li>picture-clause</li>
        <li>sign-clause</li>
      </ul>
      <p>
        Las cláusulas se pueden escribir en cualquier orden con 2 excepciones
      </p>
      <li>
        Si el data-name o FILLER es especificado este debe estar precedido por
        el level-number
      </li>
      <li>
        Cuando la cláusula REDEFINES es especificada, debe estar precedida por
        data-name o FILLER
      </li>
      <p>
        Los niveles en FORMATO 1 pueden ser 01 al 49 o 77 (ver ejemplos en
        Mainframe)
      </p>
      <h5>Data Item - Identificadores:</h5>
      Los identificadores son nombres creados por el programador. Para formar un
      identificador hay que tener en cuenta las siguientes reglas:
      <li>
        Un identificador consta de un máximo de 30 caracteres. Estos caracteres
        pueden ser solamente letras, dígitos y el guión.
      </li>
      <li>No deben empezar ni terminar en un guión.</li>
      <li>
        Un identificador definido por el usuario no puede tener el mismo nombre
        que una palabra reservada.
      </li>
      <li>
        Un identificador debe contener obligatoriamente al menos una letra,
        excepto cuando se trate de un nombre de párrafo o de sección.
      </li>
      <li>
        Cualquier identificador utilizado en la PROCEDURE DIVISION debe estar
        previamente definido en la ENVIRONMENT DIVISION o en la DATA DIVISION.
      </li>


      <h4>LINKAGE SECTION: </h4> Se utiliza para la comunicación entre programas
      COBOL y otros lenguajes de programación. También Para definir variables
      que son compartidas entre programas llamadores y programas subordinados
      cuando se realiza una llamada a un programa mediante un procedimiento
      (CALL).
      <ul>
        <li>
          <mark>01 level-number:</mark> Al igual que en la sección
          WORKING-STORAGE, defines entradas en la sección LINKAGE SECTION.
          Puedes utilizar cualquier nivel de número dentro de esta sección.
        </li>
        <li>
          <mark>DATA ITEM clause: </mark>Al igual que en la WORKING-STORAGE
          SECTION, dentro de cada nivel puedes usar cláusulas como PIC, USAGE,
          VALUE, REDEFINES, etc., para definir las características de la
          variable o área de enlace.
        </li>
      </ul>
      <h4>LOCAL-STORAGE SECTION: </h4> Almacena variables que solo son
      accesibles dentro de un párrafo o una sección.se utiliza para definir
      variables locales que son específicas de un programa o subrutina en
      particular y que no necesitan ser compartidas entre programas llamadores y
      programas subordinados. Estas variables son locales al programa o
      subrutina en el que se definen y no se conservan entre diferentes llamadas
      al programa.
      <ul>
        <li>
          <mark>01 level-number: </mark>Al igual que en las secciones
          anteriores, defines entradas en la sección LOCAL-STORAGE SECTION.
          Puedes utilizar cualquier nivel de número dentro de esta sección.
        </li>
        <li>
          <mark>DATA ITEM clause:</mark> Dentro de cada nivel, puedes usar
          cláusulas como PIC, USAGE, VALUE, REDEFINES, etc., para definir las
          características de la variable o área de almacenamiento local.
        </li>
      </ul>
      <br />
      <div className="codigo">
<Red>DATA DIVISION</Red>.   <br />
<Esp/><Red>FILE SECTION</Red>.   <br />
<Esp/><Esp/><Red>FD</Red> ARCHIVO-ENTRADA   <br />
<Esp/><Esp/><Esp/><Red>RECORDING MODE IS</Red> F   <br />
<Esp/><Esp/><Esp/><Red>BLOCK CONTAINS</Red> 0 <Red>RECORDS</Red>   <br />
<Esp/><Esp/><Esp/><Red>LABEL RECORDS ARE STANDARD</Red>   <br />
<Esp/><Esp/><Esp/><Red>DATA RECORD IS</Red> REG-ENTRADA.   <br />
<Esp/><Esp/>01 REG-ENTRADA.   <br />
<Esp/><Esp/><Esp/>05 CAMPO1   <Red>PIC</Red> X(10).   <br />
<Esp/><Esp/><Esp/>05 CAMPO2   <Red>PIC</Red> 9(5).   <br />
<Esp/><Esp/><Red>FD</Red> ARCHIVO-SALIDA   <br />
<Esp/><Esp/><Esp/><Red>RECORDING MODE IS</Red> F   <br />
<Esp/><Esp/><Esp/><Red>BLOCK CONTAINS</Red> 0 <Red>RECORDS</Red>   <br />
<Esp/><Esp/><Esp/><Red>LABEL RECORDS ARE STANDARD</Red>   <br />
<Esp/><Esp/><Esp/><Red>DATA RECORD IS</Red> REG-SALIDA.   <br />
<Esp/><Esp/>01 REG-SALIDA.   <br />
<Esp/><Esp/><Esp/>05 RESULTADO   <Red>PIC</Red> X(20).   <br />
<Esp/><Red>WORKING-STORAGE SECTION</Red>.   <br />
<Esp/><Esp/>01 WS-FLAG         <Red>PIC</Red> X     <Red>VALUE SPACE</Red>.   <br />
<Esp/><Esp/>01 WS-CONTADOR     <Red>PIC</Red> 9(4)  <Red>VALUE ZERO</Red>.   <br />
<Esp/><Esp/>01 WS-NOMBRE       <Red>PIC</Red> X(20) <Red>VALUE SPACES</Red>.   <br />
<Esp/><Esp/>01 WS-FECHA.   <br />
<Esp/><Esp/><Esp/>05 WS-ANIO     <Red>PIC</Red> 9(4).   <br />
<Esp/><Esp/><Esp/>05 WS-MES      <Red>PIC</Red> 99.   <br />
<Esp/><Esp/><Esp/>05 WS-DIA      <Red>PIC</Red> 99.   <br />
<Esp/><Esp/>01 WS-FILE-STATUS.   <br />
<Esp/><Esp/><Esp/>05 FS-ENTRADA  <Red>PIC</Red> XX.   <br />
<Esp/><Esp/><Esp/>05 FS-SALIDA   <Red>PIC</Red> XX.   <br />
<Esp/><Red>LOCAL-STORAGE SECTION</Red>.   <br />
<Esp/><Esp/>01 LS-TEMP-CALCULO   <Red>PIC</Red> 9(5) <Red>VALUE</Red> 0.   <br />
<Esp/><Red>LINKAGE SECTION</Red>.   <br />
<Esp/><Esp/>01 PARM-LIST.   <br />
<Esp/><Esp/><Esp/>05 PARM1-LENGTH <Red>PIC</Red> 9(4) <Red>COMP</Red>.   <br />
<Esp/><Esp/><Esp/>05 PARM1        <Red>PIC</Red> X(10).   <br />
<Esp/><Esp/><Esp/>05 PARM2        <Red>PIC</Red> X(10).   <br />
      </div>
      <br /><br />
      <h4>
        Uso de Variables
      </h4>
      <p>
        En COBOL, la declaración de variables es una parte fundamental para
        definir la estructura de datos que se utilizará en un programa. Las
        variables en COBOL se utilizan para almacenar información, realizar
        cálculos y representar datos de entrada y salida. Por convención se
        antepone <strong>wsv_</strong> para las variables y
        <strong>wsc_</strong> para las constantes Aquí se describen los aspectos
        clave de la declaración de variables en COBOL:
      </p>
      <h5>Nombres de Variables en COBOL</h5>
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
      <h5>Variables Simples:</h5>
      <p>Son elementos básicos de almacenamiento que contienen un solo valor. Se declaran en la sección DATA DIVISION del programa y se utilizan para almacenar información como números, caracteres o fechas. </p>
      <h5>Variables Compuestas:</h5>
      Son estructuras de datos que pueden contener múltiples elementos individuales llamados "campos" o "subvariables". Estas estructuras permiten agrupar información relacionada en una única entidad. Hay varias formas de declarar variables compuestas en COBOL, y algunas de las más comunes son los registros y las tablas. 




      <h4>Niveles de Jerarquía en COBOL</h4>
      <p>
        En COBOL, las variables se organizan jerárquicamente mediante niveles
        numéricos. Cada nivel tiene un propósito específico en la estructura de
        datos del programa. El uso adecuado de los niveles de jerarquía es
        esencial para organizar y describir la relación entre las variables en
        un programa COBOL.
      </p>
      <h5>Level Numbers</h5>
      <li>
        Los niveles 01 y 77 deben comenzar en margen A y debe estar seguidos por
        un blanco y los mismos están asociados a un data-name o FILLER.
      </li>
      <li>
        Los niveles 02 al 49 deben comenzar en margen A o B, y deben estar
        seguidos por un blanco y los mismos están asociados a un data-name o
        FILLER.
      </li>
      <li>
        Lo niveles 66 o 88, pueden empezar en margen A o B deben estar seguidos
        por un blanco y junto con el nivel 77 son llamados niveles especiales.
      </li>
<li>
  LEVEL 66, contiene una cláusula RENAMES. Reagrupa ítems previamente definidos.
</li>
  <li>No puede ser RENAME de otro nivel 66, 01, 77 o 88.</li>
<li>
  LEVEL 77, no puede ser subdivido y el data-name debe ser único como variable, dado
  que no puede ser calificado.
</li>
<li>LEVEL 88, establece un condition-name asociado a una cláusula VALUE.</li>

<div className="codigo">
  77 CONTADOR <Red>PIC</Red> 9(06) <Red>COMP VALUE ZEROS</Red>.  <br/>
  01 REG-EMPLEADO.  <br/>
  <Esp/>05 TIPO-EMPLEADO <Red>PIC</Red> X.  <br/>
  <Esp/><Esp/>88 EXPERTO <Red>VALUE</Red> 'E'.  <br/>
  <Esp/><Esp/>88 NO-EXPERTO <Red>VALUE</Red> 'N'.  <br/>
  <Esp/>05 DIRECCION.  <br/>
  <Esp/><Esp/>10 CALLE <Red>PIC</Red> X(15).  <br/>
  <Esp/><Esp/>10 NUMERO <Red>PIC</Red> X(05).  <br/>
  <Esp/><Esp/>10 CIUDAD <Red>PIC</Red> X(15).  <br/>
  <Esp/><Esp/>10 PROVINCIA <Red>PIC</Red> XX.  <br/>
  66 CIUDAD-PROVINCIA <Red>RENAMES</Red> CIUDAD <Red>THRU</Red> PROVINCIA.  <br/>
</div>


      <h5>Level Indicators</h5>
      <li>
        Cuando un dato no puede subdividirse en más de un dato se llama ítem
        elemental. En caso contrario es un ítem grupal.
      </li>
      <li>
        Los niveles 01 al 49 pueden ser de un ítem elemental o grupal. Y los
        niveles de ítem deben estar en orden creciente pero no consecutivo.
      </li>
      <li>Los niveles 66, 77 y 88 son para ítem elementales.</li>

<h5>Data Name: </h5>

<li>Identifican un dato a ser descripto.</li>
<li>
  Si el DATA-NAME identifica un DATA-ITEM a ser usados en un programa. Entonces el DATA-NAME debe
  ser la primera palabra seguida del LEVEL-NUMBER
</li>
<li>
  Un DATA-NAME no puede ser usado como nombre de párrafo o nombre de sección en la PROCEDURE
  DIVISION
</li>
<li>Con calificación un DATA-NAME puede ser no único.</li>

<div className="codigo">
  01 REG-EMPLEADO.  <br />
  <Esp/>02 COD-EMPLEADO <Red>PIC</Red> 9(05).  <br />
  <Esp/>02 NOMBRE-EMPLEADO <Red>PIC</Red> X(40).  <br />
  <Com>..........................</Com>  <br />
  01 PROYECTO.  <br />
  <Esp/>02 COD-PROYECTO <Red>PIC</Red> 9(03).  <br />
  <Esp/>02 NOMBRE-PROYECTO <Red>PIC</Red> X(25).  <br />
  <Esp/>02 CODEMPLEADO <Red>PIC</Red> 9(05).  <br />
  <Com>..........................</Com>  <br />
  <Red>PROCEDURE DIVISION</Red>.  <br />
  <Esp/><Red>MOVE</Red> COD-EMPLEADO <Red>IN</Red> PROYECTO <Red>TO</Red> <Com>(IN o OF son equivalentes )</Com>  <br />
  <Com>..........................</Com>  <br />
  
</div>

      <h4>Nivel 01 (Nivel Principal)</h4>
      <ul>
        <li>
          El nivel 01 se utiliza para definir las variables principales o
          registros.
        </li>
        <li>
          Las variables declaradas a nivel 01 son las más grandes y representan
          estructuras de datos completas.
        </li>
        <li>
          Pueden contener variables de nivel inferior y otras estructuras de
          datos.
        </li>
        <li>
          Se utilizan para organizar y describir datos a un alto nivel de
          abstracción.
        </li>
      </ul>
      <div className="twoColums">
        <div className="codigo">
          01 Cliente. <br />
          <Esp />
          02 Nombre <Red>PIC</Red> X(30). <br />
          <Esp />
          02 Edad <Red>PIC</Red> 99. <br />
          <Esp />
          02 Direccion. <br />
          <Esp />
          <Esp />
          03 Calle <Red>PIC</Red> X(50). <br />
          <Esp />
          <Esp />
          03 Ciudad <Red>PIC</Red> X(20).
        </div>
        <p>
          En este ejemplo, Cliente es una variable a nivel 01 que contiene datos
          de un cliente, como nombre, edad y dirección. A su vez, Direccion es
          una estructura de datos dentro de Cliente.
        </p>
      </div>
      <h4>Nivel 02, 03, 04, etc. (Niveles Inferiores)</h4>
      <ul>
        <li>
          Los niveles 02, 03, 04, etc., se utilizan para definir variables
          secundarias dentro de una estructura.
        </li>
        <li>
          Estas variables se utilizan para representar campos individuales o
          subestructuras dentro de la variable de nivel superior.
        </li>
        <li>
          Los niveles más bajos indican una relación de anidamiento dentro de la
          estructura de datos.
        </li>
      </ul>
      <div className="twoColums">
        <div className="codigo">
          01 Empleado. <br />
          <Esp />
          02 Nombre <Red>PIC</Red> X(30). <br />
          <Esp />
          02 Edad <Red>PIC</Red> 99. <br />
          <Esp />
          02 Departamento. <br />
          <Esp />
          <Esp />
          03 NombreDepto <Red>PIC</Red> X(20). <br />
          <Esp />
          <Esp />
          03 UbicacionDepto <Red>PIC</Red> X(30). <br />
          <Esp />
          02 Salario <Red>PIC</Red> 9(7)V99.
        </div>
        <p>
          En este ejemplo, las variables Nombre, Edad, Departamento, y Salario
          son de nivel 02 dentro de la variable Empleado. A su vez, NombreDepto
          y UbicacionDepto son de nivel 03 dentro de Departamento.
        </p>
      </div>
      <h4>Uso del 77</h4>
      <p>
        cuando se utiliza el nivel de número 77, se está definiendo una variable
        de nivel elemental. Esta variable no se subdivide en ninguna otra parte
        de la estructura de datos y no forma parte de ningún registro. Es una
        variable independiente y no tiene componentes adicionales.
      </p>
      <div className="codigo">
        77 VARIABLE-EJEMPLO <Red>PIC</Red> X(10).
      </div>
      <h4>Uso del 88</h4>
      <p>
        El nivel 88 en COBOL se utiliza para definir condiciones simbólicas o
        alias para valores específicos de una variable. Proporciona una forma
        legible y fácil de entender para verificar si una variable tiene un
        valor particular. Se puede utilizar en conjunción con variables
        alfanuméricas y numéricas.
      </p>
      <p>
        Supongamos que tenemos una variable ESTADO-CIVIL que puede tomar valores
        como 'S' para soltero, 'C' para casado, 'D' para divorciado y 'V' para
        viudo. Podemos definir condiciones simbólicas utilizando el nivel 88
        para estos valores específicos de la siguiente manera:
      </p>
      <div className="twoColums">
        <div className="codigo">
          01 ESTADO-CIVIL <Red>PIC</Red> X. <br />
          <Esp />
          88 SOLTERO VALUE <Grey>'S'</Grey>. <br />
          <Esp />
          88 CASADO VALUE <Grey>'C'</Grey>. <br />
          <Esp />
          88 DIVORCIADO VALUE <Grey>'D'</Grey>. <br />
          <Esp />
          88 VIUDO VALUE <Grey>'V'</Grey>. <br />
        </div>
        <p>
          Ahora, podemos utilizar estas condiciones simbólicas para verificar el
          estado civil de una persona de una manera más legible en nuestro
          programa. Por ejemplo:
        </p>
      </div>
      <div className="twoColums">
        <div className="codigo">
          <Red>IF</Red> SOLTERO <br />
          <Esp /> <Red>DISPLAY</Red> <Grey>'La persona está soltera.'</Grey>{" "}
          <br />
          <Red>ELSE IF</Red> CASADO <br />
          <Esp /> <Red>DISPLAY</Red> <Grey>'La persona está casada.'</Grey>{" "}
          <br />
          <Red>ELSE IF</Red> DIVORCIADO <br />
          <Esp /> <Red>DISPLAY</Red> <Grey>'La persona está divorciada.'</Grey>{" "}
          <br />
          <Red>ELSE IF</Red> VIUDO <br />
          <Esp /> <Red>DISPLAY</Red> <Grey>'La persona está viuda.'</Grey>{" "}
          <br />
          <Red>END-IF</Red>. <br />
        </div>
        <p>
          Aquí, SOLTERO, CASADO, DIVORCIADO y VIUDO actúan como condiciones
          simbólicas que se evalúan como verdaderas si la variable ESTADO-CIVIL
          tiene los valores correspondientes. Esto hace que el código sea más
          legible y fácil de entender en comparación con el uso directo de
          valores de variables en las condiciones.
        </p>
      </div>
      <h5>Caso particular</h5>    
      <p>Un campo declarado con nivel 77 no puede tener subniveles estructurales como lo haría un campo de nivel 01 (es decir, no puede tener por debajo 02, 03, etc.).
PERO... las condiciones de nivel 88 no son realmente subcampos en cuanto a estructura de datos. Las condiciones de nivel 88 no crean campos nuevos ni subniveles, sino que son etiquetas simbólicas asociadas al contenido de un campo ya definido.

Por eso, sí se pueden usar condiciones 88 asociadas a un campo 77
</p>

<div className="twoColums">
  <div className="codigo">
  77  MI-CAMPO. <br />
  <Esp/>  02  SUBCAMPO.      

    </div>
    <div>
    ❌ Esto es inválido
    </div> 
  <div className="codigo">
  77  WS-STATUS-SUC           <Red>PIC</Red> X. <br />
  <Esp/>  88  WS-FIN-SUC          <Red>VALUE</Red> 'Y'. <br />
  <Esp/>  88  WS-NO-FIN-SUC       <Red>VALUE</Red> 'N'.  

    </div>
    <div>
    ✅ Esto es perfectamente válido
    </div> 
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



      <h4>Uso de Niveles de Jerarquía</h4>
      <ul>
        <li>
          Los niveles de jerarquía ayudan a organizar y describir la relación
          entre las variables y campos de datos en un programa COBOL.
        </li>
        <li>
          Se utilizan para representar estructuras de datos complejas y
          anidadas, lo que facilita la manipulación de información detallada en
          aplicaciones empresariales.
        </li>
        <li>
          Los niveles más bajos se utilizan para definir campos individuales o
          subestructuras, mientras que los niveles superiores representan
          estructuras de datos más amplias.
        </li>
      </ul>











      <h4>Uso de VALUE</h4>
      <li>
        La cláusula VALUE especifica el contenido inicial del DATA-ITEM, puede
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
        02 FC-CODE-GOOD <Red>PIC</Red> S9(08) <Red>BINARY VALUE</Red>{" "}
        LOW-VALUES. <br />
        <Esp />
        02 PRECIO <Red>PIC</Red> 999V99 <Red>VALUE</Red> 123,45. <br />
        <Esp />
        02 LINEA <Red>PIC</Red> X(132)<Red>VALUE SPACES </Red> . <br />
        <Esp />
        02 SUBRAYADO <Red>PIC</Red> X(132) <Red>VALUE ALL</Red> <Grey>'_'</Grey>. <br />
        <Esp />
        77 AEROPUERTO <Red>PIC</Red> X(10) <Red>VALUE</Red> <Grey>'AEROPARQUE'</Grey>. <br />
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

      <h5>Constantes Figurativas</h5>
      <p>
        Son constantes predefinidas de COBOL que pueden usarse en cualquier
        parte de la WORKING STORAGE SECTION o de la PROCEDURE DIVISION para
        darle valor a un campo. Son palabras reservadas que tienen un valor
        constante.
      </p>

      <ul>
        <li>
          <strong>SPACE o SPACES</strong>: Se refiere al carácter espacio en
          blanco. Asigna espacios a un campo no numérico. Puede ser utilizado
          para inicializar variables alfanuméricas con espacios en blanco. Por
          ejemplo, MOVE SPACES TO NOMBRE asigna espacios en blanco a la variable
          NOMBRE.
        </li>

        <li>
          <strong>ZERO, ZEROS o ZEROES</strong>: Se refieren al número cero.
          Pueden ser utilizados para inicializar variables numéricas con ceros.
          Por ejemplo, MOVE ZEROS TO NUMERO asigna ceros a la variable NUMERO.
        </li>

        <li>
          <strong>QUOTE o QUOTES</strong>: Se refiere al carácter de comillas
          simples ('), también conocido como apóstrofe. Se utiliza para
          delimitar literales alfanuméricos en COBOL. Por ejemplo, MOVE 'TEXTO'
          TO NOMBRE asigna el literal 'TEXTO' a la variable NOMBRE.
        </li>

        <li>
          <strong>HIGH-VALUE o HIGH-VALUES</strong>: se refiere al valor más
          alto posible en el conjunto de caracteres utilizado por el sistema. En
          EBCDIC, es el carácter hexadecimal X'FF', y en ASCII, es el carácter
          hexadecimal X'7F'. Puede ser utilizado para inicializar variables
          alfanuméricas con el valor más alto posible. Por ejemplo, MOVE
          HIGH-VALUES TO CADENA asigna el valor más alto posible a la variable
          CADENA.
        </li>

        <li>
          <strong>LOW-VALUE o LOW-VALUES</strong>: Se refiere al valor más bajo
          posible en el conjunto de caracteres utilizado por el sistema. En
          EBCDIC, es el carácter hexadecimal X'00', y en ASCII, es el carácter
          hexadecimal X'00'. Puede ser utilizado para inicializar variables
          alfanuméricas con el valor más bajo posible. Por ejemplo, MOVE
          LOW-VALUES TO CADENA asigna el valor más bajo posible a la variable
          CADENA.
        </li>

        <li>
          <strong>ALL</strong> "literal": Representa una repetición del literal
          especificado. Se usa para llenar un campo con un valor repetido.
        </li>

        <li>
          <strong>SYMBOLIC CHARACTERS</strong>: Definidos en la cláusula
          SPECIAL-NAMES, permiten asignar nombres a caracteres especiales.
        </li>
          <div className="codigo">
            <Red>SPECIAL-NAMES</Red>. <br />
            <Esp />
            <Red>SYMBOLIC CHARACTERS EURO IS X</Red>
            <Grey>'20AC'</Grey>.
          </div>
      </ul>
      <br />

      <p>Ejemplo de uso de constantes figurativas en COBOL:</p>
      <div className="codigo">
        <Red>DATA DIVISION</Red>. <br />
        <Red>WORKING-STORAGE SECTION</Red>. <br />
        01 NOMBRE <Red>PIC</Red> X(20). <br />
        01 MONTO <Red>PIC</Red> 9(5)V99. <br />
        01 DELIMITADOR <Red>PIC</Red> X. <br />
        01 FIN-REGISTRO <Red>PIC</Red> X(1). <br />
        <Red>PROCEDURE DIVISION</Red>. <br />
        <Red>BEGIN</Red>. <br />
        <Esp />
        <Red>MOVE SPACES TO</Red> NOMBRE. <br />
        <Esp />
        <Red>MOVE ZEROS TO</Red> MONTO. <br />
        <Esp />
        <Red>MOVE QUOTE TO</Red> DELIMITADOR. <br />
        <Esp />
        <Red>MOVE HIGH-VALUES TO</Red> FIN-REGISTRO. <br />
        <Esp />
        <Red>DISPLAY</Red> <Grey>"Nombre: "</Grey> NOMBRE. <br />
        <Esp />
        <Red>DISPLAY</Red> <Grey>"Monto: "</Grey> MONTO. <br />
        <Esp />
        <Red>DISPLAY</Red> <Grey>"Delimitador: "</Grey> DELIMITADOR. <br />
        <Esp />
        <Red>DISPLAY</Red> <Grey>"Fin Registro: "</Grey> FIN-REGISTRO. <br />
        <Esp />
        <Red>STOP RUN</Red>.
      </div>

      <h4>Uso de CONSTANT</h4>
      <p>
        (COBOL 2002). Es una palabra reservada que se utiliza para definir
        constantes, es decir, valores que no cambian durante la ejecución del
        programa y que se utilizan para representar valores fijos y
        predefinidos. Las constantes proporcionan una forma de asignar un nombre
        significativo a un valor específico, lo que hace que el código sea más
        legible y mantenible.
      </p>
      <div className="codigo">
        <Red>DATA DIVISION</Red>. <br />
        <Red>WORKING-STORAGE SECTION</Red>. <br />
        01 PI <Red>CONSTANT</Red> 3.14159. <br />
      </div>
      <p>
        Las constantes se definen una sola vez y su valor no cambia durante la
        ejecución del programa. Una vez que se define una constante, se puede
        utilizar en cualquier lugar del programa donde se necesite su valor. Las
        constantes pueden ser de cualquier tipo de datos admitido en COBOL,
        incluyendo numéricos, alfanuméricos, alfanuméricos de tamaño variable,
        etc. Mejoran la legibilidad del código al proporcionar nombres
        descriptivos para valores fijos y predefinidos. Facilitan el
        mantenimiento del código al permitir cambios en los valores simplemente
        modificando la definición de la constante en lugar de buscar y cambiar
        cada instancia del valor en el código.
      </p>


<br /><br />
      <h4>Uso de FILLER</h4>
      <p>
        Es una palabra reservada del COBOL, usada para describir campos que no
        son referenciados en PROCEDURE DIVISION. Si el DATANAME o FILLER como
        cláusula es omitida siguiendo a un LEVEL NUMBER, entonces el DATA ITEM
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



      <h5>SCREEN SECTION (opcional)</h5>
      <p>
        Se usa en entornos donde COBOL maneja interfaces de usuario (pantalla),
        por ejemplo en aplicaciones en terminal. Permite definir la presentación
        de datos al usuario.
      </p>

      <br />
      <p>
        ✅ <u>Buenas prácticas</u>:
      </p>
      <li>Usar nombres descriptivos en todas las variables.</li>
      <li>
        Evitar declarar variables innecesarias en WORKING-STORAGE si sólo se
        usan de manera temporal (preferir LOCAL-STORAGE).
      </li>
      <li>
        Dividir la declaración de datos en estructuras claras usando niveles
        (01, 05, 10…).
      </li>

      <h4>Uso de REDEFINES</h4>
      <p>
      La cláusula <mark>REDEFINES</mark> permite reutilizar el mismo espacio de memoria para representar los mismos datos de diferentes maneras. Es útil cuando se necesita interpretar un área de datos con distintos formatos según ciertas condiciones.
      </p>
<li><mark>REDEFINES</mark> no puede ser usado junto a <mark>OCCURS</mark>.</li>
<li>Solo una de las estructuras redefinidas debe ser utilizada a la vez para evitar inconsistencias.</li>
<li>Muy útil para conversiones de datos, compatibilidad entre formatos antiguos y nuevos, o entrada/salida con distintos tipos de registros.</li>
<div className="twoColums">
  <div className="codigo">
  01 AREA-DATOS.  <br />
  <Esp/> 05 FECHA-ALF   <Red>PIC</Red> X(8).  <br />
  <Esp/> 05 FECHA-NUM   <Red>REDEFINES</Red> FECHA-ALF.  <br />
  <Esp/><Esp/><Esp/>    10 ANIO     <Red>PIC</Red> 9(4).  <br />
  <Esp/><Esp/><Esp/>    10 MES      <Red>PIC</Red> 9(2).  <br />
  <Esp/><Esp/><Esp/>    10 DIA      <Red>PIC</Red> 9(2).  <br />

  </div>
  <div>
  <p>En este ejemplo:</p>

<li>FECHA-ALF y FECHA-NUM ocupan el mismo espacio de memoria.</li>
<li>Se puede usar FECHA-ALF para trabajar con la fecha como una cadena ("20250419"), o usar FECHA-NUM para tratarla como campos separados de año, mes y día.</li>


  </div>
</div>
    </section>
  );
};

export { Mod3_3 };
