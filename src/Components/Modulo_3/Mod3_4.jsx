import { Esp } from "../espacio";
import Red from "../Colors/Red";
import Grey from "../Colors/Grey";
const Mod3_4 = () => {
  return (
    <section id="3.4">
      <h3>3.4. Tipos de Datos Alfanuméricos en COBOL</h3>
      <p>
        Los tipos de datos alfanuméricos en COBOL se utilizan para representar
        caracteres, texto y cadenas de caracteres. Estos tipos de datos son
        fundamentales para almacenar información de texto, nombres,
        descripciones y otros datos no numéricos.
      </p>
      <h4>Alphanumeric (PIC X):</h4>
      <p>
        El tipo de dato ALPHANUMERIC se utiliza para representar cadenas de
        caracteres alfanuméricos. Puede contener letras, números y caracteres
        especiales. La declaración de una variable ALPHANUMERIC se realiza con
        la cláusula PIC seguida de una especificación de tamaño, que indica la
        cantidad máxima de caracteres que puede contener la variable.
      </p>
      <div className="twoColums">
        <div className="codigo">
          01 Ejemplo <Red>PIC</Red> XXXX. <br />
          01 NombreCliente <Red>PIC</Red> X(30). <br />
          01 DireccionCliente <Red>PIC</Red> X(50). <br />
          01 DescripcionProducto <Red>PIC</Red> X(100).
        </div>
        <p>
          En el primer ejemplo, NombreCliente puede contener hasta 30 caracteres
          alfanuméricos. En el segundo ejemplo, DireccionCliente puede contener
          hasta 50 caracteres, y en el tercer ejemplo, DescripcionProducto puede
          contener hasta 100 caracteres.
        </p>
      </div>

      <h4>Alphabetic (PIC A):</h4>
      <p>
        Los tipos de datos alfabéticos permiten almacenar y manipular cadenas de
        caracteres. Los campos definidos con PIC A solo pueden contener
        caracteres del alfabeto (A-Z, a-z) y espacios en blanco. Históricamente,
        PIC A se utilizaba para definir campos que solo contenían letras y
        espacios, mientras que PIC X permitía una mayor flexibilidad. En la
        actualidad, PIC X es el formato más utilizado. Solo admite letras y
        espacios. No permite caracteres especiales ni números. Puede ser menos
        flexible que PIC X. Está en desuso en muchas implementaciones modernas de
        COBOL.
      </p>
      <div className="codigo">
        <Red>DATA DIVISION</Red>. <br />
        <Red>WORKING-STORAGE SECTION</Red>. <br />
        01 NOMBRE <Red>PIC</Red> A(10). <br />
        <Red>PROCEDURE DIVISION</Red>. <br />
        <Red>BEGIN</Red>. <br />
        <Esp />
        <Red>MOVE</Red> <Grey>"PROGRAMAR "</Grey> <Red>TO</Red> NOMBRE. <br />
        <Esp />
        <Red>DISPLAY</Red> <Grey>"Contenido: "</Grey> NOMBRE. <br />
        <Esp />
        <Red>STOP RUN</Red>.
      </div>

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
      <div className="codigo">
        01 FECHA-DE-NACIMIENTO <Red>PIC</Red> 9(6) COMP-3.
      </div>
      <h4>Carácter especial (PIC X(n) SPECIAL CHARACTER):</h4>
      <p>
        Se utiliza para almacenar caracteres especiales como símbolos o
        caracteres extendidos. Ejemplo: PIC X(5) SPECIAL CHARACTER define una
        variable de caracteres especiales de longitud 5.
      </p>

      <h4>Inicializar Variables</h4>

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
          <div className="codigo">
            <Red>SPECIAL-NAMES</Red>. <br />
            <Esp />
            <Red>SYMBOLIC CHARACTERS EURO IS X</Red>
            <Grey>'20AC'</Grey>.
          </div>
        </li>
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
        01 TelefonoClientes <Red>OCCURS</Red> 10 <Red>TIMES</Red>. <br />
        <Esp />
        02 NumeroTelefono <Red>PIC</Red> 9(10).
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
        02 CodigoProducto <Red>PIC</Red> X(10). <br />
        <Esp />
        02 PrecioProducto <Red>PIC</Red> 9(5)V99. <br />
        01 InformacionAdicional <Red>REDEFINES</Red> DetalleProducto. <br />
        <Esp />
        02 CodigoBarra <Red>PIC</Red> X(12).
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
          <Esp /> 05 NOMBRE <Red>PIC</Red> X(30). <br />
          <Esp /> 05 APELLIDO <Red>PIC</Red> X(30). <br />
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
          05 NOMBRE-REGISTRO <Red>OCCURS</Red> 100 <Red>TIMES</Red>. <br />
          <Esp />
          <Esp />
          10 NOMBRE <Red>PIC</Red> X(30). <br />
          <Esp />
          <Esp />
          10 APELLIDO <Red>PIC</Red> X(30). <br />
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
          <Red>IDENTIFICATION DIVISION</Red>. <br />
          <Red>PROGRAM-ID</Red>. <Red>EJEMPLO-TABLA</Red>. <br /> <br />
          <Red>DATA DIVISION</Red>. <br />
          <Red>WORKING-STORAGE SECTION</Red>. <br />
          01 NOMBRE-REGISTRO. <br />
          <Esp />
          05 NOMBRE <Red>PIC</Red> X(30). <br />
          <Esp />
          05 APELLIDO <Red>PIC</Red> X(30). <br /> <br />
          01 TABLA-NOMBRES. <br />
          <Esp />
          05 NOMBRE-REGISTRO <Red>OCCURS</Red> 100 <Red>TIMES</Red>. <br />
          <Esp />
          <Esp />
          10 NOMBRE <Red>PIC</Red> X(30). <br />
          <Esp />
          <Esp />
          10 APELLIDO <Red>PIC</Red> X(30). <br /> <br />
          <Red>PROCEDURE DIVISION</Red>. <br />
          <Esp />
          <Red>PERFORM</Red> VACIAR-TABLA <br />
          <Esp />
          <Red>PERFORM</Red> LLENAR-TABLA <br />
          <Esp />
          <Red>PERFORM</Red> MOSTRAR-TABLA <br />
          <Esp />
          <Red>STOP RUN</Red>. <br /> <br />
          VACIAR-TABLA. <br />
          <Esp />
          <Red>INITIALIZE</Red> TABLA-NOMBRES. <br /> <br />
          LLENAR-TABLA. <br />
          <Esp />
          <Red>MOVE</Red> <Grey>'Juan'</Grey> <Red>TO</Red> NOMBRE-REGISTRO(1).
          // Asigna 'Juan' al primer elemento <br />
          <Esp />
          <Red>MOVE</Red> <Grey>'Perez'</Grey> <Red>TO</Red> APELLIDO(1). //
          Asigna 'Perez' al primer elemento <br />
          <Esp />
          <Red>MOVE</Red> <Grey>'Maria'</Grey> <Red>TO</Red> NOMBRE-REGISTRO(2).
          // Asigna 'Maria' al segundo elemento <br />
          <Esp />
          <Red>MOVE</Red> <Grey>'Gomez'</Grey> <Red>TO</Red> APELLIDO(2). //
          Asigna 'Gomez' al segundo elemento <br />
          ... // Continuar llenando la tabla <br /> <br />
          MOSTRAR-TABLA. <br />
          <Esp />
          <Red>DISPLAY</Red> <Grey>'Tabla de nombres:'</Grey> <br />
          <Esp />
          <Red>PERFORM</Red> <Red>VARYING</Red> I <Red>FROM</Red> 1{" "}
          <Red>BY</Red> 1 <Red>UNTIL</Red> I {"> "}100 <br />
          <Esp />
          <Esp />
          <Red>DISPLAY</Red> <Grey>'Nombre: '</Grey> NOMBRE-REGISTRO(I) <br />
          <Esp />
          <Esp />
          <Red>DISPLAY</Red> <Grey>'Apellido: '</Grey> APELLIDO(I) <br />
          <Esp />
          <Red>END-PERFORM</Red>. <br />
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
          01 NUM-COMP <Red>PIC</Red> 9(5)V9(2) COMP <Red>VALUE</Red> 12345,67.
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
          01 NUM-COMP3 <Red>PIC</Red> S9(5)V9(2) COMP-3 <Red>VALUE</Red>{" "}
          12345,67.
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
        01 NUM-EDIT <Red>PIC</Red> Z.ZZZ.ZZ9,99- <Red>VALUE</Red> -12345.67.{" "}
        <br />
        01 NUM-EDIT2 <Red>PIC</Red> -.---.--9,99 <Red>VALUE</Red> -12345.67
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
    </section>
  );
};

export { Mod3_4 };
