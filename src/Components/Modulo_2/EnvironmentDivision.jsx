import { Esp } from "../espacio";
const EnvironmentDivision = () => {
  return (
    <section>
      <h3>ENVIRONMENT DIVISION</h3>
      <p>
        Una de las divisiones principales en un programa COBOL y se utiliza para
        declarar y definir los recursos y dispositivos de entrada/salida que el
        programa utilizará. Esta división es esencial para configurar la
        interacción del programa con el entorno, como archivos de datos,
        unidades de cinta, impresoras y otros dispositivos de E/S.
        <strong>Declaración de Recursos de E/S</strong>
        Dentro de la ENVIRONMENT DIVISION, se encuentra la sección INPUT-OUTPUT
        SECTION. En esta sección, se declaran los recursos de entrada/salida
        utilizados por el programa. Algunos de los recursos más comunes que se
        pueden declarar en esta sección incluyen:
      </p>
      <ol>
        <li>
          <h4>CONFIGURATION SECTION:</h4> Esta sección contiene la descripción
          del ambiente de ejecución del programa COBOL. Incluye información
          sobre configuraciones de hardware y software, como dispositivos de
          entrada/salida, archivos, terminales y otros recursos necesarios para
          la ejecución del programa.
          <ul>
            <li>
              <strong>OBJECT-COMPUTER:</strong> Describe la computadora en la
              que se ejecutará el programa después de ser compilado. Esto puede
              ser diferente del ambiente de desarrollo y es útil para asegurar
              la portabilidad del programa entre diferentes sistemas.e
              especifica el nombre del fabricante de la computadora y el modelo
              exacto.
              <div className="codigo">
                OBJECT-COMPUTER. computer-name. <br />
                MEMORY-SIZE. size.
              </div>
            </li>
            <li>
              <strong>MEMORY-SIZE:</strong> Opcional. Especifica la cantidad de
              memoria disponible en el sistema de destino.
            </li>
            <li>
              <strong>SOURCE-COMPUTER:</strong> Define el tipo de computadora
              para la cual se está desarrollando el programa COBOL. Esto incluye
              información sobre la arquitectura del sistema, como el tipo de
              procesador y el sistema operativo. Puede especificar el nombre del
              fabricante de la computadora y el modelo exacto.Define el tipo de
              computadora para la cual se está desarrollando el programa COBOL.
              <div className="codigo">SOURCE-COMPUTER. computer-name.</div>
            </li>
            <li>
              <strong>REMARKS:</strong> Se utiliza para incluir comentarios
              sobre el entorno de desarrollo del programa. Puede contener
              información adicional sobre la configuración del sistema,
              requisitos de compilación, etc.
              <div className="codigo">
                REMARKS. "COMENTARIO SOBRE EL PROGRAMA"
              </div>
            </li>

            <li>
              <strong>SPECIAL-NAMES:</strong> Proporciona nombres especiales
              para los caracteres, números o símbolos que se utilizarán en el
              programa. También se utiliza para asignar nombres a los caracteres
              no imprimibles y a los símbolos especiales.
              <ul>
                <li>
                  <strong>DECIMAL-POINT IS COMMA:</strong> Esta línea indica que
                  el carácter de coma (,) se utilizará como el punto decimal en
                  lugar del punto (.). Esto es útil en entornos donde el
                  estándar de notación decimal es diferente al estándar COBOL.
                </li>
                <li>
                  <strong>SYMBOLIC CHARACTER ESPACIO IS 33:</strong> Aquí se
                  define un nombre simbólico para un carácter ASCII específico.
                  En este caso, se define el carácter con código ASCII 33 (que
                  es el signo de exclamación !) y se le asigna el nombre
                  simbólico "ESPACIO". Esto puede ser útil para mejorar la
                  legibilidad y mantenibilidad del código, ya que permite usar
                  nombres significativos en lugar de valores numéricos.
                </li>
                <li>
                  <strong>SYMBOLIC CHARACTER MEDIO ARE 172:</strong> Similar al
                  ejemplo anterior, aquí se define otro nombre simbólico para un
                  carácter ASCII específico. En este caso, se define el carácter
                  con código ASCII 172 y se le asigna el nombre simbólico
                  "MEDIO".
                </li>
                <li>
                  <strong>ALPHABET:</strong> Define el conjunto de caracteres
                  alfanuméricos que se utilizarán en el programa.Define el
                  conjunto de caracteres numéricos que se utilizarán en el
                  programa.
                </li>
                <li>
                  <strong>NUMERIC:</strong> se utiliza para definir el conjunto
                  de caracteres numéricos que se utilizarán en el programa.
                </li>
                <li>
                  <strong>CLASS:</strong> Define clases de caracteres para uso
                  en el programa.Las clases de caracteres definidas con este
                  párrafo pueden luego ser utilizadas para simplificar la
                  declaración de variables y manipulaciones de texto en el
                  programa COBOL.
                </li>
              </ul>
              <div className="codigo">
                SPECIAL-NAMES. <br />
                <Esp />
                DECIMAL-POINT IS COMMA. <br />
                <Esp />
                SYMBOLIC CHARACTER ESPACIO IS 33. <br />
                <Esp />
                SYMBOLIC CHARACTER MEDIO ARE 172. <br />
                <Esp />
                ALPHABET ALFABETO_ESPANOL IS
                "AÁBCDEÉFGHIÍJKLMNÑOÓPQRSTUÚÜVWXYZ". <br />
                <Esp />
                NUMERIC IS NUMEROS_DOLARES IS "0123456789.$". <br />
                <Esp />
                CLASS IS LETRAS IS UPPER-LETTERS LOWER-LETTERS.
              </div>
            </li>
          </ul>
        </li>
        <li>
          <h4>INPUT-OUTPUT SECTION:</h4> Esta sección describe los archivos
          utilizados por el programa COBOL para entrada y salida. Incluye
          información sobre los archivos secuenciales, secuenciales indexados y
          archivos relativos, así como los dispositivos de entrada/salida y
          otros recursos relacionados con la entrada y salida de datos.Uso
          obligatorio si se utilizan archivos externos.
          <div className="codigo">
            FILE-CONTROL. <br />
            <Esp />
            SELECT INPUT-FILE ASSIGN TO "input.dat" <br />
            <Esp />
            <Esp />
            ORGANIZATION IS SEQUENTIAL <br />
            <Esp />
            <Esp />
            ACCESS MODE IS SEQUENTIAL <br />
            <Esp />
            <Esp />
            FILE STATUS IS FS-INPUT. <br /> <br />
            <Esp />
            SELECT OUTPUT-FILE ASSIGN TO "output.dat" <br />
            <Esp />
            <Esp />
            ORGANIZATION IS SEQUENTIAL <br />
            <Esp />
            <Esp />
            ACCESS MODE IS SEQUENTIAL <br />
            <Esp />
            <Esp />
            FILE STATUS IS FS-OUTPUT.
          </div>
          <ul>
            <li>
              <strong>FILE-CONTROL:</strong> Proporciona información detallada
              sobre los archivos utilizados por el programa, como nombres de
              archivos, organización, tipo de acceso y otras características
              necesarias para el manejo de archivos.
              <ul>
                <li>
                  <strong>SELECT:</strong> Especifica el nombre lógico del
                  archivo y establece una conexión entre el nombre lógico y el
                  nombre físico del archivo en el sistema.Este nombre se
                  utilizará en el programa COBOL para referirse al archivo. Es
                  importante tener en cuenta que este nombre no está relacionado
                  directamente con el nombre físico del archivo en el sistema de
                  archivos.
                </li>
                <li>
                  <strong>ORGANIZATION:</strong> Indica la organización del
                  archivo en el sistema de archivos, como secuencial, secuencial
                  indexado o relativo. Puede ser:
                  <ul>
                    <li>
                      <strong>SEQUENTIAL: </strong>
                      En un archivo secuencial, los registros se almacenan uno
                      tras otro en el orden en que se escriben en el archivo.
                      Los registros se leen y escriben secuencialmente, desde el
                      principio hasta el final del archivo. No se pueden acceder
                      directamente a registros específicos sin recorrer
                      previamente todos los registros anteriores. Es adecuado
                      para archivos que se leen o escriben en orden secuencial,
                      como archivos de texto o archivos de registro de
                      transacciones.
                    </li>
                    <li>
                      <strong>RELATIVE: </strong>En un archivo relativo, los
                      registros se almacenan en ubicaciones relativas a un
                      número base. Se puede acceder a registros específicos
                      utilizando un número relativo, que indica la posición del
                      registro en relación con el número base. Los registros no
                      necesariamente se almacenan en orden secuencial en el
                      archivo; pueden estar dispersos. Es útil cuando se
                      necesitan accesos aleatorios a registros específicos en el
                      archivo, pero no se requiere una clave de acceso primaria.
                    </li>
                    <li>
                      <strong>INDEXED:</strong>En un archivo indexado, los
                      registros se organizan en orden secuencial en el archivo
                      principal, pero también hay un archivo de índice asociado
                      que contiene claves de acceso primarias y punteros a los
                      registros correspondientes en el archivo principal.
                      Permite un acceso directo a registros específicos
                      utilizando una clave de acceso primaria. Los registros no
                      tienen que estar en orden secuencial en el archivo
                      principal. Es adecuado cuando se necesitan accesos
                      aleatorios eficientes a registros basados en claves de
                      acceso primarias, como en bases de datos.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>ACCESS MODE:</strong> Define el modo de acceso al
                  archivo, en COBOL se utiliza para especificar cómo se accederá
                  al archivo durante la ejecución del programa
                  <ul>
                    <li>
                      <strong>SEQUENTIAL (Secuencial):</strong>
                      En el modo de acceso secuencial, el programa accede al
                      archivo leyendo o escribiendo registros en orden
                      secuencial, uno después del otro, desde el principio hasta
                      el final del archivo. Este modo de acceso es apropiado
                      para archivos en los que se necesita un procesamiento
                      secuencial de los datos, como archivos de texto o archivos
                      de registro de transacciones.
                    </li>
                    <li>
                      <strong>RANDOM (Aleatorio):</strong>
                      En el modo de acceso aleatorio, el programa puede acceder
                      a registros específicos utilizando un número de registro
                      relativo o una clave de acceso primaria. Este modo de
                      acceso permite saltar directamente a registros específicos
                      en el archivo, sin tener que leer o escribir registros
                      previos. Es útil cuando se necesita un acceso aleatorio
                      eficiente a registros específicos en el archivo, como en
                      aplicaciones de bases de datos.
                    </li>
                    <li>
                      <strong>DYNAMIC (Dinámico):</strong>
                      El modo de acceso dinámico es similar al modo aleatorio,
                      pero el programa tiene la capacidad de agregar, modificar
                      o eliminar registros en cualquier posición dentro del
                      archivo. Permite un acceso aleatorio flexible y dinámico a
                      los datos en el archivo, lo que lo hace adecuado para
                      aplicaciones que requieren un procesamiento interactivo o
                      transaccional.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>FILE STATUS:</strong> Opcional. Define una variable
                  que almacena el código de estado de la operación de E/S en el
                  archivo.El uso de FILE STATUS es útil para manejar errores de
                  E/S de manera efectiva en un programa COBOL. Después de
                  realizar una operación de lectura, escritura u otra operación
                  de E/S en un archivo, se puede verificar el valor de la
                  variable file-status-variable para determinar si la operación
                  fue exitosa o si se produjo algún error. Si se detecta un
                  error, el programa puede tomar medidas apropiadas, como
                  informar al usuario o intentar recuperarse del error.
                </li>
                <li>
                  <strong>PASSWORD:</strong> Opcional. Proporciona una
                  contraseña de acceso al archivo protegido.Proporciona una capa
                  adicional de seguridad para restringir el acceso a archivos
                  sensibles o críticos. Antes de abrir o realizar operaciones en
                  el archivo especificado, el sistema solicitará la contraseña
                  al usuario. Si la contraseña proporcionada no coincide con la
                  especificada en el programa COBOL, el acceso al archivo será
                  denegado y el programa puede tomar medidas apropiadas, como
                  mostrar un mensaje de error o terminar la ejecución. Es
                  importante tener en cuenta que el uso de contraseñas en
                  archivos en COBOL depende del sistema operativo y del entorno
                  en el que se ejecute el programa COBOL. No todos los sistemas
                  admiten el uso de contraseñas para archivos, y la
                  implementación de la seguridad puede variar entre sistemas.
                </li>
                <li>
                  <strong>RECORDING MODE:</strong> Esta declaración se utiliza
                  para especificar el modo de grabación de un archivo, que puede
                  ser "F" (Fixed) o "V" (Variable). El modo de grabación
                  determina si los registros del archivo tienen una longitud
                  fija o variable.
                  <ul>
                    <li>
                      <strong>Fixed (F - Fijo):</strong>
                      En el modo de grabación fijo, todos los registros tienen
                      la misma longitud fija. Cada registro ocupará el mismo
                      número de bytes en el archivo, independientemente de la
                      cantidad de datos reales en el registro. Los campos no
                      utilizados en un registro fijo generalmente se llenan con
                      caracteres de relleno (padding) para alcanzar la longitud
                      fija especificada. Este modo es útil cuando se trabaja con
                      registros que tienen una estructura predefinida y
                      uniforme.
                    </li>
                    <li>
                      <strong>Variable (V - Variable):</strong>
                      En el modo de grabación variable, los registros pueden
                      tener longitudes variables. Cada registro puede ocupar una
                      cantidad diferente de bytes en el archivo, dependiendo de
                      la cantidad de datos reales en el registro. Cada registro
                      generalmente incluye un campo de longitud que indica la
                      longitud del registro. Este modo es útil cuando se trabaja
                      con registros que tienen longitudes variables y se desea
                      minimizar el desperdicio de espacio en el archivo.
                    </li>
                    <li>
                      <strong>Undefined (U - Indefinido):</strong>
                      En el modo de grabación indefinido, no se define ninguna
                      estructura específica para los registros. Los registros
                      pueden tener longitudes y estructuras variables, y pueden
                      incluir cualquier tipo de datos. Este modo proporciona una
                      flexibilidad máxima en la estructura de los registros,
                      pero puede ser más complejo de manejar y procesar.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>I-O-CONTROL: </strong>Especifica las características
                  de los dispositivos de entrada y salida. Se utiliza para
                  proporcionar control adicional sobre la entrada y salida (E/S)
                  de archivos en el programa
                  <ul>
                    <li>
                      RERUN: Esta cláusula indica que se pueden volver a
                      ejecutar registros previamente procesados de un archivo
                      secuencial después de haberse llegado al final del
                      archivo.
                    </li>
                    <li>
                      MERGE: Esta cláusula se utiliza para especificar que el
                      archivo de salida será un archivo de combinación. Es
                      decir, los registros de entrada se combinan o se fusionan
                      en un solo archivo de salida.
                    </li>
                    <li>
                      REVERSED: Indica que la operación de lectura secuencial se
                      realizará en orden inverso.
                    </li>
                    <li>
                      MULTIPLE FILE THREADING: Esta cláusula permite la
                      activación de subprocesos múltiples para realizar E/S en
                      archivos.
                    </li>
                    <li>
                      BLOCK CONTAINS n RECORDS: Se utiliza para especificar el
                      tamaño del bloque de registros en E/S secuencial. El valor
                      n representa la cantidad de registros que se leerán o
                      escribirán en cada operación de E/S.
                    </li>
                    <li>
                      CONCURRENT ACCESS: Permite el acceso simultáneo a un
                      archivo compartido por varios programas.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>ASSIGN: </strong>Especifica la ubicación física del
                  archivo.se utiliza para asociar un archivo lógico definido en
                  el programa con un archivo físico en el sistema de archivos.
                  El uso de ASSIGN es fundamental para establecer la conexión
                  entre el programa COBOL y los archivos que utiliza. Al
                  especificar la asignación entre el archivo lógico y el archivo
                  físico, el programa sabe a qué archivo debe acceder durante la
                  ejecución para leer o escribir datos.
                </li>
                <li>
                  <strong>RECORD FORMAT: </strong>Especifica el formato de los
                  registros del archivo. Se utiliza para especificar el formato
                  de los registros en un archivo.
                  <ul>
                    <li>
                      <strong>FIXED (Fijo):</strong>
                      En el formato de registro fijo, todos los registros tienen
                      la misma longitud fija. Cada registro ocupa el mismo
                      número de caracteres o bytes, independientemente de la
                      cantidad de datos que contenga. Se utiliza cuando los
                      registros tienen una longitud predefinida y uniforme.
                    </li>
                    <li>
                      <strong>VARIABLE (Variable):</strong>
                      En el formato de registro variable, los registros pueden
                      tener longitudes variables. Cada registro puede tener una
                      longitud diferente, dependiendo de la cantidad de datos
                      que contenga. Es útil cuando los registros pueden tener
                      longitudes variables y se desea minimizar el espacio
                      desperdiciado en el archivo.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>ALTERNATE RECORD KEY IS: </strong> se utiliza para
                  especificar campos alternativos que sirven como claves de
                  acceso en archivos indexados. En los archivos indexados,
                  además de la clave de acceso principal definida mediante
                  RECORD KEY IS, se pueden especificar una o más claves de
                  acceso alternativas utilizando ALTERNATE RECORD KEY IS. Estas
                  claves de acceso alternativas proporcionan métodos adicionales
                  para acceder a los registros del archivo de manera eficiente,
                  lo que puede ser útil en diversas situaciones de acceso a
                  datos.
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ol>
    </section>
  );
};

export { EnvironmentDivision };
