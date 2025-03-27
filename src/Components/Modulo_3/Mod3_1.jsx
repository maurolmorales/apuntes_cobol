import { Esp } from "../espacio";
import Red from "../Colors/Red";
import Grey from "../Colors/Grey";
const Mod3_1 = () => {
  return (
    <section id="Mod3_1">
      <h3>Declaración de Variables en COBOL</h3>
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
      <div className="codigo">
        01 NumeroCliente <Red>PIC</Red>
        <Grey> 9(5)</Grey>. <br />
        01 NombreCliente <Red>PIC</Red> <Grey>X(30)</Grey>. <br />
        01 SaldoCuenta <Red>PIC</Red> <Grey>S9(7)V99</Grey>.
      </div>
      <p>
        En el ejemplo anterior, hemos declarado tres variables: NumeroCliente,
        NombreCliente y SaldoCuenta. Estos nombres siguen las reglas de nombres
        de variables en COBOL.
      </p>
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
        DISPLAY '¡Hola, mundo!'. <br />
        DISPLAY 'El valor de X es: ' X. <br />
        DISPLAY 'El resultado de la suma es: ' NUM1 + NUM2. <br />
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
        WRITE DETAIL-RECORD-1 WITH NOT ADVANCING. <br />
        WRITE DETAIL-RECORD-2 WITH NOT ADVANCING. <br />
        WRITE DETAIL-RECORD-3. <br />
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
        FILE-CONTROL. <br />
        <Esp />
        SELECT archivo ASSIGN TO "datos.txt" <br />
        <Esp />
        <Esp />
        ORGANIZATION IS SEQUENTIAL <br />
        <Esp />
        <Esp />
        FILE STATUS archivo-status UPON I-O. <br /> <br />
        DATA DIVISION. <br />
        WORKING-STORAGE SECTION. <br />
        01 archivo-status PIC X(02). <br />
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
        DISPLAY "Por favor, introduzca su nombre: ". <br />
        ACCEPT nombre-alumno. <br />
        DISPLAY "¡Hola, " nombre-alumno "!" <br />
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
      <div className="codigo">
        MOVE numero1 TO numero2. <br />
        DISPLAY "El valor de numero2 es: " numero2. <br />
      </div>
      <p>
        En este ejemplo, la instrucción MOVE numero1 TO numero2 copia el valor
        de la variable numero1 (que es 10) en la variable numero2. Luego, se
        muestra el valor de numero2.
      </p>
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
        ADD numero1 TO numero2 GIVING resultado. <br />
        SUBTRACT descuento FROM total GIVING resultado. <br />
        MULTIPLY precio-unitario BY cantidad-comprada GIVING total-factura.{" "}
        <br />
        DIVIDE dividendo BY divisor GIVING cociente REMAINDER resto. <br />
        COMPUTE c = {"(a * 2) - b"}.
      </div>
      <h4>Niveles de Jerarquía</h4>
      <p>
        En COBOL, las variables se organizan mediante niveles de jerarquía. El
        nivel 01 se utiliza para las variables principales, y los niveles 02,
        03, etc., se utilizan para las variables secundarias dentro de una
        estructura. Esta jerarquía ayuda a organizar y describir las relaciones
        entre las variables.
      </p>
      <div className="codigo">
        01 Cliente. <br />
        <Esp />
        02 NumeroCliente PIC 9(5). <br />
        <Esp />
        02 NombreCliente PIC X(30). <br />
        01 Cuenta. <br />
        <Esp />
        02 SaldoCuenta PIC S9(7)V99.
      </div>
      <p>
        En este ejemplo, hemos definido dos variables principales, Cliente y
        Cuenta, cada una con subvariables dentro de ellas.
      </p>
      <h4>Uso de PICTURE</h4>
      <p>
        La cláusula PICTURE se utiliza para especificar la forma y el contenido
        de una variable en COBOL. Define el formato de datos que se almacenará
        en la variable y cómo se presentará.
      </p>
      <div className="codigo">
        01 FechaNacimiento PIC 9(8). <br />
        01 NumeroSeguridadSocial PIC X(11). <br />
        01 PrecioProducto PIC 9(5)V9(2).
      </div>
      <p>
        En estos ejemplos, hemos utilizado PICTURE para definir el formato de
        variables que almacenan fechas, números de seguridad social y precios de
        productos.
      </p>
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
        IDENTIFICATION DIVISION. <br />
        PROGRAM-ID. VariablesSimplesExample. <br />
        DATA DIVISION. <br />
        WORKING-STORAGE SECTION. <br />
        <Esp /> 01 NUMERO-SIMPLE PIC 9(5). <br />
        <Esp /> 01 NOMBRE-SIMPLE PIC X(20). <br />
        <Esp /> 01 FECHA-SIMPLE PIC 9(8). <br />
        PROCEDURE DIVISION. <br />
        <Esp /> MOVE 12345 TO NUMERO-SIMPLE. <br />
        <Esp /> MOVE "Ejemplo" TO NOMBRE-SIMPLE. <br />
        <Esp /> MOVE 20231031 TO FECHA-SIMPLE. <br />
        <Esp /> DISPLAY "Número: " NUMERO-SIMPLE. <br />
        <Esp /> DISPLAY "Nombre: " NOMBRE-SIMPLE. <br />
        <Esp /> DISPLAY "Fecha: " FECHA-SIMPLE. <br />
        STOP RUN.
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
          <div className="codigo">MOVE 67890 TO NUMERO-SIMPLE.</div>
        </li>
        <li>
          Visualización de Valores:
          <div className="codigo">DISPLAY "Número: " NUMERO-SIMPLE.</div>
        </li>
        <li>
          Operaciones Aritméticas:
          <div className="codigo">ADD 100 TO NUMERO-SIMPLE.</div>
        </li>
        <li>
          Manipulación de Cadenas:
          <div className="codigo">MOVE "NuevoNombre" TO NOMBRE-SIMPLE.</div>
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
