import { Esp } from "../espacio";
import { DeclaracionVariables } from "./DeclaracionVariables";
import { VariablesSimples } from "./VariablesSimples";
const Modulo3 = () => {
  return (
    <article id="modulo-3">
      <div className="h2-topBar">
        <h2> Módulo 3: Variables y Tipos de Datos en COBOL </h2>

        <a href="#indice">al Indice</a>
      </div>

      <DeclaracionVariables />
      <VariablesSimples />

      <h3>3.1.2 Variables Compuestas</h3>
      <p>
        Las variables compuestas en COBOL son estructuras de datos que pueden
        contener múltiples elementos individuales llamados "campos" o
        "subvariables". Estas estructuras permiten agrupar información
        relacionada en una única entidad. Hay varias formas de declarar
        variables compuestas en COBOL, y algunas de las más comunes son los
        registros y las tablas. Declaración de Variables Compuestas:
      </p>
      <h3>3.2. Niveles de Jerarquía en COBOL</h3>
      <p>
        En COBOL, las variables se organizan jerárquicamente mediante niveles
        numéricos. Cada nivel tiene un propósito específico en la estructura de
        datos del programa. El uso adecuado de los niveles de jerarquía es
        esencial para organizar y describir la relación entre las variables en
        un programa COBOL.
      </p>
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
      <div className="codigo">
        01 Cliente. <br />
        <Esp />
        02 Nombre PIC X(30). <br />
        <Esp />
        02 Edad PIC 99. <br />
        <Esp />
        02 Direccion. <br />
        <Esp />
        <Esp />
        03 Calle PIC X(50). <br />
        <Esp />
        <Esp />
        03 Ciudad PIC X(20).
      </div>
      <p>
        En este ejemplo, Cliente es una variable a nivel 01 que contiene datos
        de un cliente, como nombre, edad y dirección. A su vez, Direccion es una
        estructura de datos dentro de Cliente.
      </p>
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
      <div className="codigo">
        01 Empleado. <br />
        <Esp />
        02 Nombre PIC X(30). <br />
        <Esp />
        02 Edad PIC 99. <br />
        <Esp />
        02 Departamento. <br />
        <Esp />
        <Esp />
        03 NombreDepto PIC X(20). <br />
        <Esp />
        <Esp />
        03 UbicacionDepto PIC X(30). <br />
        <Esp />
        02 Salario PIC 9(7)V99.
      </div>
      <p>
        En este ejemplo, las variables Nombre, Edad, Departamento, y Salario son
        de nivel 02 dentro de la variable Empleado. A su vez, NombreDepto y
        UbicacionDepto son de nivel 03 dentro de Departamento.
      </p>
      <h4>Uso del 77</h4>
      <p>
        cuando se utiliza el nivel de número 77, se está definiendo una variable
        de nivel elemental. Esta variable no se subdivide en ninguna otra parte
        de la estructura de datos y no forma parte de ningún registro. Es una
        variable independiente y no tiene componentes adicionales.
      </p>
      <div className="codigo">77 VARIABLE-EJEMPLO PIC X(10).</div>
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
      <div className="codigo">
        01 ESTADO-CIVIL PIC X. <br />
        <Esp />
        88 SOLTERO VALUE 'S'. <br />
        <Esp />
        88 CASADO VALUE 'C'. <br />
        <Esp />
        88 DIVORCIADO VALUE 'D'. <br />
        <Esp />
        88 VIUDO VALUE 'V'. <br />
      </div>
      <p>
        Ahora, podemos utilizar estas condiciones simbólicas para verificar el
        estado civil de una persona de una manera más legible en nuestro
        programa. Por ejemplo:
      </p>
      <div className="codigo">
        IF SOLTERO <br />
        <Esp /> DISPLAY 'La persona está soltera.' <br />
        ELSE IF CASADO <br />
        <Esp /> DISPLAY 'La persona está casada.' <br />
        ELSE IF DIVORCIADO <br />
        <Esp /> DISPLAY 'La persona está divorciada.' <br />
        ELSE IF VIUDO <br />
        <Esp /> DISPLAY 'La persona está viuda.' <br />
        END-IF. <br />
      </div>
      <p>
        Aquí, SOLTERO, CASADO, DIVORCIADO y VIUDO actúan como condiciones
        simbólicas que se evalúan como verdaderas si la variable ESTADO-CIVIL
        tiene los valores correspondientes. Esto hace que el código sea más
        legible y fácil de entender en comparación con el uso directo de valores
        de variables en las condiciones.
      </p>
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
      <h4>Conclusión</h4>
      <p>
        El uso de niveles de jerarquía en COBOL es esencial para la organización
        y descripción de datos en programas. Esto permite representar
        estructuras de datos complejas y anidadas de manera clara y eficiente.
        La comprensión de los niveles de jerarquía es fundamental para
        desarrollar aplicaciones COBOL efectivas en entornos empresariales.
      </p>
      <h3>3.3. Tipos de Datos Numéricos en COBOL</h3>
      <p>
        En COBOL, se utilizan varios tipos de datos numéricos para representar
        valores numéricos, ya sean enteros o decimales. Estos tipos de datos
        numéricos son fundamentales para realizar cálculos matemáticos y
        manipular datos financieros en aplicaciones empresariales.{" "}
      </p>
      <h4>INTEGER (PIC 9):</h4>
      <p>
        El tipo de dato INTEGER se utiliza para representar números enteros en
        COBOL. Estos números no tienen parte decimal y pueden ser positivos o
        negativos. La declaración de una variable INTEGER se realiza con la
        cláusula PIC seguida de una especificación de tamaño, que indica la
        cantidad de dígitos que puede contener la variable.
      </p>
      <div className="codigo">
        01 EdadCliente PIC 99. <br />
        01 CantidadProductos PIC S9(5).
      </div>
      <p>
        En el primer ejemplo, EdadCliente puede contener números enteros
        positivos de hasta dos dígitos. En el segundo ejemplo, CantidadProductos
        puede contener números enteros positivos o negativos de hasta cinco
        dígitos.
      </p>
      <h4>DECIMAL (PIC 9(3)V9(2)): </h4>
      <p>
        El tipo de dato DECIMAL se utiliza para representar números decimales en
        COBOL. Este tipo de dato se utiliza comúnmente en aplicaciones
        financieras para manejar valores con decimales. La declaración de una
        variable DECIMAL se realiza con la cláusula PIC seguida de una
        especificación que incluye una parte entera y una parte decimal.
      </p>
      <div className="codigo">
        01 PrecioProducto PIC S9(5)V99. <br />
        01 SaldoCuentaBancaria PIC 9(7)V999.
      </div>
      <p>
        En el primer ejemplo, PrecioProducto puede contener un valor decimal con
        una parte entera de hasta cinco dígitos y dos dígitos decimales. En el
        segundo ejemplo, SaldoCuentaBancaria puede contener un valor decimal con
        una parte entera de hasta siete dígitos y tres dígitos decimales.
        <strong>
          La " V " indica la parte decimal. El signo " S " indica que la
          variable puede contener valores negativos.
        </strong>
      </p>
      <h4>Numérico empaquetado (PIC S9(n) COMP-3):</h4>
      <p>
        Se utiliza para almacenar números de manera comprimida para ahorrar
        espacio de almacenamiento. Es especialmente útil para grandes volúmenes
        de datos numéricos.
      </p>
      <h4>Uso de Cláusulas USAGE</h4>
      <p>
        En COBOL, se pueden utilizar cláusulas USAGE para especificar cómo se
        almacenan los valores numéricos en la memoria. Las cláusulas USAGE son
        opcionales y se utilizan para optimizar el uso de memoria. Algunas
        cláusulas USAGE comunes son:
      </p>
      <ul>
        <li>
          USAGE IS DISPLAY: Se utiliza para almacenar valores numéricos de
          manera legible para los humanos. Es la opción predeterminada.
        </li>
        <li>
          USAGE IS COMPUTATIONAL: Se utiliza para almacenar valores numéricos en
          una forma más eficiente para cálculos. Puede haber diferentes
          cláusulas COMPUTATIONAL según el tipo de dato (por ejemplo,
          COMPUTATIONAL-3 para enteros largos).
        </li>
      </ul>
      <div className="codigo">
        01 TotalVentas PIC 9(9) USAGE IS COMPUTATIONAL-3.
      </div>
      <p>
        En este ejemplo, TotalVentas se almacena de manera eficiente para
        cálculos utilizando la cláusula COMPUTATIONAL-3.
      </p>
      <h4>Conclusión</h4>
      <p>
        Los tipos de datos numéricos en COBOL son esenciales para el manejo de
        valores numéricos, tanto enteros como decimales. La elección del tipo de
        dato y la cláusula USAGE adecuados es fundamental para garantizar el
        almacenamiento eficiente y el procesamiento preciso de datos en
        aplicaciones empresariales. Estos tipos de datos son ampliamente
        utilizados en aplicaciones financieras y de procesamiento de datos
        masivos en COBOL.
      </p>
      <h3>3.4. Tipos de Datos Alfanuméricos en COBOL</h3>
      <p>
        Los tipos de datos alfanuméricos en COBOL se utilizan para representar
        caracteres, texto y cadenas de caracteres. Estos tipos de datos son
        fundamentales para almacenar información de texto, nombres,
        descripciones y otros datos no numéricos.{" "}
      </p>
      <h4>ALPHANUMERIC (PIC X):</h4>
      <p>
        El tipo de dato ALPHANUMERIC se utiliza para representar cadenas de
        caracteres alfanuméricos. Puede contener letras, números y caracteres
        especiales. La declaración de una variable ALPHANUMERIC se realiza con
        la cláusula PIC seguida de una especificación de tamaño, que indica la
        cantidad máxima de caracteres que puede contener la variable.
      </p>
      <div className="codigo">
        01 NombreCliente PIC X(30). <br />
        01 DireccionCliente PIC X(50). <br />
        01 DescripcionProducto PIC X(100).
      </div>
      <p>
        En el primer ejemplo, NombreCliente puede contener hasta 30 caracteres
        alfanuméricos. En el segundo ejemplo, DireccionCliente puede contener
        hasta 50 caracteres, y en el tercer ejemplo, DescripcionProducto puede
        contener hasta 100 caracteres.
      </p>
      <h4>Fecha (PIC 9(6) COMP-3):</h4>
      <p>
        Se utiliza para almacenar fechas en formato YYMMDD. Cada parte
        representa el año, el mes y el día.En este caso, la variable
        FECHA-DE-NACIMIENTO puede utilizarse para almacenar una fecha en formato
        YYMMDD (año, mes, día). Cada parte de la fecha (año, mes, día) se
        representa mediante 2 dígitos numéricos, por lo que la longitud total de
        la variable es de 6 dígitos. Además, al utilizar COMP-3, la variable se
        almacena de manera comprimida para ahorrar espacio de almacenamiento.
      </p>
      <div className="codigo">01 FECHA-DE-NACIMIENTO PIC 9(6) COMP-3.</div>
      <h4>Carácter especial (PIC X(n) SPECIAL CHARACTER):</h4>
      <p>
        Se utiliza para almacenar caracteres especiales como símbolos o
        caracteres extendidos. Ejemplo: PIC X(5) SPECIAL CHARACTER define una
        variable de caracteres especiales de longitud 5.
      </p>
      <h4>Inicializar Variables</h4>
      <ul>
        <li>
          <strong>SPACE o SPACES</strong>: Se refiere al carácter espacio en
          blanco. Puede ser utilizado para inicializar variables alfanuméricas
          con espacios en blanco. Por ejemplo, MOVE SPACES TO NOMBRE asigna
          espacios en blanco a la variable NOMBRE.
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
      </ul>

      <p>
        En el primer ejemplo, MensajeBienvenida puede contener un mensaje de
        bienvenida con hasta 40 caracteres legibles. En el segundo ejemplo,
        ErrorMensaje puede contener un mensaje de error con hasta 80 caracteres
        legibles.
      </p>
      <h4>Uso de OCCURS y REDEFINES</h4>
      <p>
        En COBOL, se pueden utilizar cláusulas como OCCURS y REDEFINES para
        manejar arreglos y reorganizar datos de manera eficiente.
      </p>
      <ul>
        <li>
          OCCURS: Se utiliza para declarar arreglos de variables. Permite
          especificar el número de elementos y la estructura de cada elemento
          dentro del arreglo.
        </li>
      </ul>
      <div className="codigo">
        01 TelefonoClientes OCCURS 10 TIMES. <br />
        <Esp />
        02 NumeroTelefono PIC 9(10).
      </div>
      <p>
        En este ejemplo, TelefonoClientes es un arreglo de 10 elementos, cada
        uno de los cuales contiene un número de teléfono de hasta 10 dígitos.
      </p>
      <ul>
        <li>
          REDEFINES: Se utiliza para reorganizar datos y asignar diferentes
          interpretaciones a la misma área de almacenamiento.
        </li>
      </ul>
      <div className="codigo">
        01 DetalleProducto. <br />
        <Esp />
        02 CodigoProducto PIC X(10). <br />
        <Esp />
        02 PrecioProducto PIC 9(5)V99. <br />
        01 InformacionAdicional REDEFINES DetalleProducto. <br />
        <Esp />
        02 CodigoBarra PIC X(12).
      </div>
      <p>
        En este ejemplo, InformacionAdicional reorganiza los datos de
        DetalleProducto y utiliza CodigoBarra para representar una
        interpretación diferente de los mismos datos.
      </p>
      <h4>Generar una tabla con OCCURS</h4>
      <ol>
        <li>
          <strong>Definir la estructura del elemento de la tabla:</strong>
          <p>
            Decide qué tipo de datos contendrá cada elemento de la tabla y
            define la estructura correspondiente utilizando la cláusula 01
            LEVEL. Por ejemplo, si deseas crear una tabla de nombres, cada
            elemento podría ser una cadena de caracteres. Aquí tienes un ejemplo
            de cómo podrías definir la estructura del elemento:
          </p>
        </li>
        <div className="codigo">
          01 NOMBRE-REGISTRO. <br />
          <Esp /> 05 NOMBRE PIC X(30). <br />
          <Esp />
          05 APELLIDO PIC X(30). <br />
        </div>

        <li>
          <strong>Declarar la tabla utilizando la cláusula OCCURS:</strong>
          Después de definir la estructura del elemento de la tabla, puedes
          declarar la tabla utilizando la cláusula OCCURS. Especifica cuántos
          elementos contendrá la tabla y cuál será el nivel de repetición de
          cada elemento. Por ejemplo, para declarar una tabla de nombres con
          capacidad para 100 elementos, puedes hacer lo siguiente:
        </li>
        <div className="codigo">
          01 TABLA-NOMBRES. <br />
          <Esp />
          05 NOMBRE-REGISTRO OCCURS 100 TIMES. <br />
          <Esp />
          <Esp />
          10 NOMBRE PIC X(30). <br />
          <Esp />
          <Esp />
          10 APELLIDO PIC X(30). <br />
        </div>
        <li>
          <strong>Acceder y manipular la tabla:</strong>
          Una vez que hayas definido la tabla, puedes acceder y manipular sus
          elementos de la misma manera que lo harías con cualquier otra variable
          en COBOL. Puedes acceder a elementos específicos de la tabla
          utilizando índices y realizar operaciones con ellos según sea
          necesario en tu programa.
        </li>
        <div className="codigo">
          IDENTIFICATION DIVISION. <br />
          PROGRAM-ID. EJEMPLO-TABLA. <br /> <br />
          DATA DIVISION. <br />
          WORKING-STORAGE SECTION. <br />
          01 NOMBRE-REGISTRO. <br />
          <Esp />
          05 NOMBRE PIC X(30). <br />
          <Esp />
          05 APELLIDO PIC X(30). <br /> <br />
          01 TABLA-NOMBRES. <br />
          <Esp />
          05 NOMBRE-REGISTRO OCCURS 100 TIMES. <br />
          <Esp />
          <Esp />
          10 NOMBRE PIC X(30). <br />
          <Esp />
          <Esp />
          10 APELLIDO PIC X(30). <br /> <br />
          PROCEDURE DIVISION. <br />
          <Esp />
          PERFORM VACIAR-TABLA <br />
          <Esp />
          PERFORM LLENAR-TABLA <br />
          <Esp />
          PERFORM MOSTRAR-TABLA <br />
          <Esp />
          STOP RUN. <br /> <br />
          VACIAR-TABLA. <br />
          <Esp />
          INITIALIZE TABLA-NOMBRES. <br /> <br />
          LLENAR-TABLA. <br />
          <Esp />
          MOVE 'Juan' TO NOMBRE-REGISTRO(1). // Asigna 'Juan' al primer elemento{" "}
          <br />
          <Esp />
          MOVE 'Perez' TO APELLIDO(1). // Asigna 'Perez' al primer elemento{" "}
          <br />
          <Esp />
          MOVE 'Maria' TO NOMBRE-REGISTRO(2). // Asigna 'Maria' al segundo
          elemento <br />
          <Esp />
          MOVE 'Gomez' TO APELLIDO(2). // Asigna 'Gomez' al segundo elemento{" "}
          <br />
          ... // Continuar llenando la tabla <br /> <br />
          MOSTRAR-TABLA. <br />
          <Esp />
          DISPLAY 'Tabla de nombres:' <br />
          <Esp />
          PERFORM VARYING I FROM 1 BY 1 UNTIL I {"> "}100 <br />
          <Esp />
          <Esp />
          DISPLAY 'Nombre: ' NOMBRE-REGISTRO(I) <br />
          <Esp />
          <Esp />
          DISPLAY 'Apellido: ' APELLIDO(I) <br />
          <Esp />
          END-PERFORM. <br />
          <br />
        </div>
      </ol>
      <h4>El Uso de JUST</h4>
      <p>
        La palabra reservada JUST en COBOL se utiliza en combinación con ciertas
        cláusulas para especificar cómo se debe justificar el contenido de una
        variable alfanumérica dentro de un campo de longitud fija.
      </p>
      <ul>
        <li>
          <strong>JUST LEFT</strong>: se utiliza para justificar el contenido de
          una variable alfanumérica hacia la izquierda dentro de un campo de
          longitud fija. Los espacios en blanco se añaden a la derecha del
          contenido si es necesario. Por ejemplo: JUST LEFT en una asignación
          MOVE asegura que el contenido se coloque en el lado izquierdo del
          campo.
        </li>
        <li>
          <strong>JUST RIGHT</strong>: se utiliza para justificar el contenido
          de una variable alfanumérica hacia la derecha dentro de un campo de
          longitud fija. Los espacios en blanco se añaden a la izquierda del
          contenido si es necesario. Por ejemplo: JUST RIGHT en una asignación
          MOVE asegura que el contenido se coloque en el lado derecho del campo.
        </li>
        <li>
          <strong>JUST CENTER</strong>: se utiliza para justificar el contenido
          de una variable alfanumérica en el centro dentro de un campo de
          longitud fija. Los espacios en blanco se añaden a ambos lados del
          contenido si es necesario. Por ejemplo: JUST CENTER en una asignación
          MOVE asegura que el contenido se coloque en el centro del campo.
        </li>
        <li>
          <strong>JUST SPACE</strong>: se utiliza para reemplazar los caracteres
          no alfanuméricos con espacios en blanco dentro de un campo de longitud
          fija. Por ejemplo: JUST SPACE en una asignación MOVE asegura que los
          caracteres no alfanuméricos se reemplacen con espacios en blanco.
        </li>
        <li>
          <strong>JUST ZERO o JUST ZEROS</strong>: se utiliza para reemplazar
          los caracteres no numéricos con ceros dentro de un campo de longitud
          fija. Por ejemplo: JUST ZERO en una asignación MOVE asegura que los
          caracteres no numéricos se reemplacen con ceros.
        </li>
      </ul>
      <h4>COMP y COMP-3</h4>
      <p>
        En COBOL, COMP y COMP-3 son dos tipos de datos utilizados para
        representar números en formato binario. Ambos son utilizados para
        almacenar datos numéricos de manera eficiente en la memoria y ocupan
        menos espacio que sus equivalentes alfanuméricos.
      </p>
      <ul>
        <li>
          <strong>COMP:</strong>
          También conocido como BINARY, se utiliza para almacenar números
          enteros en formato binario de 2 bytes (para números de hasta 4
          dígitos) o 4 bytes (para números de hasta 9 dígitos). Este formato es
          más eficiente en términos de espacio de almacenamiento y es útil
          cuando se necesita un rendimiento óptimo en el acceso a los datos
          numéricos. Los datos almacenados en formato COMP no son legibles para
          los humanos directamente, ya que están en formato binario. Por
          ejemplo, COMP PIC 9(4) se utilizaría para almacenar un número entero
          de hasta 4 dígitos en formato binario.
        </li>
        <div className="codigo">
          01 NUM-COMP PIC 9(5)V9(2) COMP VALUE 12345,67.
        </div>
        <li>
          <strong>COMP-3:</strong>
          También conocido como PACKED-DECIMAL o PACKED, se utiliza para
          almacenar números decimales en formato binario comprimido. Este
          formato es especialmente útil para almacenar números decimales, ya que
          optimiza el uso de espacio de almacenamiento al comprimir los dígitos
          decimales. En el formato COMP-3, cada dígito decimal se almacena en 4
          bits, lo que significa que cada par de dígitos decimales se almacena
          en un byte. El último dígito decimal se almacena con un signo de
          paridad en el último nibble del último byte, lo que indica si el
          número es positivo o negativo. Por ejemplo, COMP-3 PIC S9(5)V99 se
          utilizaría para almacenar un número decimal de 5 dígitos enteros y 2
          dígitos decimales en formato binario comprimido.
        </li>
        <div className="codigo">
          01 NUM-COMP3 PIC S9(5)V9(2) COMP-3 VALUE 12345,67.
        </div>
      </ul>
      <h4>Variables de Edición</h4>
      <p>
        En COBOL, las variables de edición son variables numéricas o
        alfanuméricas que se utilizan para fines de presentación y visualización
        en informes o pantallas de usuario. Estas variables se utilizan para
        formatear los datos de una manera legible y comprensible para los
        usuarios finales.
      </p>

      <ul>
        <li>
          <strong>Formato de Visualización: </strong>
          Las variables de edición se utilizan para dar formato a los datos
          antes de ser mostrados en informes o pantallas de usuario. Esto puede
          incluir la adición de signos de moneda, separadores de miles, puntos
          decimales, y otros caracteres de formato.
        </li>

        <li>
          <strong>Tipos de Variables de Edición: </strong>
          Las variables de edición pueden ser numéricas o alfanuméricas,
          dependiendo del tipo de datos que se esté formateando. Para datos
          numéricos, se pueden utilizar variables de edición numéricas como Z,
          ZZZZZ, 999.99, etc. Para datos alfanuméricos, se pueden utilizar
          variables de edición alfanuméricas como X, XX, XXX-XX, etc.
        </li>

        <li>
          <strong>Uso de Cláusulas de Edición: </strong>
          En COBOL, se utilizan cláusulas de edición para definir cómo se deben
          formatear los datos en las variables de edición. Algunas cláusulas de
          edición comunes incluyen PIC, USAGE, JUST, SIGN, EDIT, REDEFINES,
          entre otras.
        </li>

        <li>
          <strong>Manipulación de Datos: </strong>
          Las variables de edición permiten la manipulación de los datos antes
          de ser presentados. Esto puede incluir la adición o eliminación de
          caracteres, la especificación de la posición del punto decimal, la
          configuración del signo, entre otros.
        </li>

        <li>
          <strong>Presentación de Información: </strong>
          Las variables de edición se utilizan principalmente para presentar
          información de una manera formateada y legible para los usuarios
          finales. Esto es especialmente útil en informes financieros, extractos
          bancarios, facturas, y otras aplicaciones donde la presentación de
          datos es crítica.
        </li>
      </ul>
      <div className="codigo">
        01 NUM-EDIT PIC Z.ZZZ.ZZ9,99- VALUE -12345.67. <br />
        01 NUM-EDIT2 PIC -.---.--9,99 VALUE -12345.67
      </div>
      <h4>El uso de la Cláusula USAGE</h4>
      <p>
        Se utiliza en la definición de variables para indicar el formato de
        almacenamiento interno de los datos. Permite al programador especificar
        si una variable se almacenará como datos numéricos, alfanuméricos, o en
        otros formatos especiales como los decimales empaquetados. Los tipos
        comunes de USAGE incluyen:
      </p>
      <ul>
        <li>
          USAGE IS DISPLAY: Se utiliza para variables alfanuméricas. Los datos
          se almacenan como caracteres ASCII y se pueden mostrar en informes o
          pantallas.
        </li>
        <li>
          USAGE IS BINARY: Se utiliza para variables numéricas enteras. Los
          datos se almacenan en formato binario y se pueden utilizar para
          cálculos aritméticos.
        </li>
        <li>
          USAGE IS COMP: Similar a USAGE IS BINARY, pero se utiliza para números
          enteros. Los datos se almacenan de manera más eficiente en formato
          binario.
        </li>
        <li>
          USAGE IS COMP-3 o USAGE IS PACKED-DECIMAL: Se utiliza para variables
          numéricas decimales empaquetadas. Los datos se almacenan en formato
          comprimido, ahorrando espacio de almacenamiento. Otros tipos menos
          comunes incluyen USAGE IS POINTER, USAGE IS INDEX, etc.
        </li>
      </ul>
      <div className="codigo">
        01 NUMERO-DIAS USAGE IS BINARY. <br />
        01 SALDO-CUENTA USAGE IS COMP. <br />
        01 NUMERO-CLIENTE USAGE IS DISPLAY. <br />
        01 MONTO-PAGAR USAGE IS COMP-3. <br />
      </div>
      <p>
        La elección del tipo correcto de USAGE puede tener un impacto en el
        rendimiento y el uso de memoria de un programa COBOL. Es importante
        seleccionar el tipo adecuado de USAGE según el tipo de datos que se está
        manejando y los requisitos de rendimiento del programa.
      </p>

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
        DATA DIVISION. <br />
        WORKING-STORAGE SECTION. <br />
        01 PI CONSTANT 3.14159. <br />
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
      <h4>Uso de ROUNDED</h4>
      <p>
        es una palabra reservada que se utiliza en operaciones aritméticas para
        especificar que el resultado debe ser redondeado al valor entero más
        cercano después de realizar la operación. Esta palabra clave se utiliza
        comúnmente en combinación con operaciones aritméticas que podrían
        resultar en un valor con decimales para asegurarse de que el resultado
        final sea un valor entero. ROUNDED se coloca al final de una operación
        aritmética para indicar que el resultado debe ser redondeado al valor
        entero más cercano. Esto se aplica principalmente a las operaciones de
        división, multiplicación y suma que podrían producir un resultado con
        decimales. Si el valor decimal es exactamente 0.5, el resultado se
        redondeará al entero más cercano siguiendo las reglas de redondeo
        estándar (generalmente redondeo hacia el entero más cercano). Es
        importante tener en cuenta que ROUNDED puede afectar la precisión de los
        cálculos, especialmente en operaciones que involucran valores decimales
        significativos. Debes evaluar cuidadosamente si es necesario utilizar
        ROUNDED en tus operaciones aritméticas, considerando las implicaciones
        de redondeo en tus resultados.
      </p>
      <div className="codigo">
        COMPUTE RESULTADO = DIVIDENDO / DIVISOR ROUNDED.
      </div>
      <h4>Conclusión</h4>
      <p>
        Los tipos de datos alfanuméricos en COBOL son esenciales para
        representar texto y caracteres en aplicaciones empresariales. La
        elección del tipo de dato y la especificación de tamaño adecuados son
        fundamentales para garantizar el almacenamiento eficiente de datos de
        texto. Además, las cláusulas como OCCURS y REDEFINES permiten manejar
        estructuras de datos más complejas y reorganizar datos según sea
        necesario en un programa COBOL. Estos tipos de datos son ampliamente
        utilizados en aplicaciones que involucran nombres, descripciones,
        mensajes y otros datos de texto.
      </p>
      <h3>3.5. Manipulación de Datos en COBOL</h3>
      <p>
        La manipulación de datos en COBOL es esencial para realizar cálculos,
        procesar información y transformar los datos según las necesidades de
        una aplicación. COBOL proporciona una variedad de operaciones que
        permiten realizar estas tareas de manera eficiente.
      </p>
      <h4>Operaciones Aritméticas</h4>
      <p>
        COBOL permite realizar operaciones aritméticas en variables numéricas.
        Puedes realizar sumas, restas, multiplicaciones y divisiones utilizando
        operadores aritméticos como +, -, * y /. Estas operaciones son
        fundamentales para realizar cálculos financieros y matemáticos.
      </p>
      <div className="codigo">
        01 SaldoFinal PIC S9(7)V99. <br />
        01 Interes PIC 9(5)V99 VALUE 3.25. <br /> <br />
        MOVE SaldoInicial TO SaldoFinal. <br />
        COMPUTE SaldoFinal = SaldoFinal + Deposito - Interes.
      </div>
      <p>
        En este ejemplo, se realiza una serie de operaciones aritméticas para
        calcular el saldo final.
      </p>
      <h4>Concatenación de Cadenas</h4>
      <p>
        Para unir cadenas de texto en COBOL, se utiliza la operación
        CONCATENATE. Esta operación permite combinar cadenas de caracteres y
        crear una cadena más larga.
      </p>
      <div className="codigo">
        01 Nombre PIC X(20) VALUE 'Juan'. <br />
        01 Apellido PIC X(20) VALUE 'Pérez'. <br />
        <br />
        01 NombreCompleto PIC X(40). <br />
        <br />
        MOVE SPACES TO NombreCompleto. <br />
        CONCATENATE Nombre ' ' Apellido INTO NombreCompleto.
      </div>
      <p>
        En este ejemplo, se concatena el nombre y el apellido para crear un
        nombre completo.
      </p>
      <h4>Comparación de Datos</h4>
      <p>
        COBOL proporciona operadores de comparación que permiten comparar
        valores y tomar decisiones en función de los resultados. Algunos
        operadores comunes son IF, EQUAL TO, NOT EQUAL TO, LESS THAN, GREATER
        THAN, LESS OR EQUAL TO, y GREATER OR EQUAL TO.
      </p>
      <div className="codigo">
        01 Edad PIC 99 VALUE 25. <br /> <br />
        IF Edad LESS THAN 18 <br />
        <Esp />
        DISPLAY 'Menor de edad' <br />
        ELSE <br />
        <Esp />
        DISPLAY 'Mayor de edad' <br />
        END-IF.
      </div>
      <p>
        En este ejemplo, se compara la edad y se muestra un mensaje en función
        del resultado.
      </p>
      <h4>Tratamiento de Fechas y Horas</h4>
      <p>
        En aplicaciones empresariales, a menudo es necesario trabajar con fechas
        y horas. COBOL permite manipular y calcular fechas y horas utilizando
        funciones y operaciones específicas.
      </p>
      <div className="codigo">
        01 FechaActual. <br />
        <Esp />
        02 Dia PIC 99. <br />
        <Esp />
        02 Mes PIC 99. <br />
        <Esp />
        02 Anio PIC 9999. <br />
        <br />
        MOVE 05 TO Dia. <br />
        MOVE 10 TO Mes. <br />
        MOVE 2023 TO Anio. <br />
        <br />
        ADD 1 TO Dia GIVING Dia. <br /> <br />
        IF Dia {">"} 31 <br />
        <Esp />
        MOVE 1 TO Dia <br />
        <Esp />
        ADD 1 TO Mes GIVING Mes. <br /> <br />
        DISPLAY 'Fecha después de sumar un día: ' Dia '/' Mes '/' Anio. <br />
      </div>
      <p>
        En este ejemplo, se suma un día a una fecha y se maneja adecuadamente el
        desbordamiento de los valores de día y mes.
      </p>
      <h4>Conclusión</h4>
      <p>
        La manipulación de datos es una parte fundamental de la programación en
        COBOL. Estas operaciones permiten realizar cálculos, unir cadenas de
        texto, tomar decisiones y trabajar con fechas y horas, entre otras
        tareas. Comprender cómo utilizar estas operaciones es esencial para
        desarrollar aplicaciones efectivas en COBOL, especialmente en el
        contexto de aplicaciones empresariales que requieren una manipulación
        precisa de datos.
      </p>
    </article>
  );
};

export { Modulo3 };
