import { Esp } from "../espacio";
const DataDivision = () => {
  return (
    <section>
      <h3>DATA DIVISION</h3>
      <p>
        Es una de las divisiones fundamentales en un programa COBOL y desempeña
        un papel crítico en la definición de la estructura de datos que el
        programa utilizará. En COBOL, la gestión de datos es esencial, ya que
        este lenguaje se utiliza con frecuencia en aplicaciones empresariales
        donde se manejan grandes volúmenes de información. A continuación, se
        proporciona una explicación detallada de la DATA DIVISION
      </p>
      <div className="codigo">
        DATA DIVISION. <br />
        <Esp />
        FILE SECTION. <br />
        <Esp />
        FD file-name <br />
        <Esp />
        <Esp />
        LABEL RECORDS ARE {"STANDARD | OMITTED"} <br />
        <Esp />
        <Esp />
        RECORDING MODE IS {"F | V | U"} <br />
        <Esp />
        <Esp />
        RECORD CONTAINS n RECORDS <br />
        <Esp />
        <Esp />
        BLOCK CONTAINS n RECORDS <br />
        <Esp />
        <Esp />
        DATA RECORD IS data-record-name <br />
        <Esp />
        <Esp />
        LINAGE IS n <br />
        <Esp />
        <Esp />
        OMITTED RECORDS ARE OMITTED <br />
        <Esp />
        <Esp />
        VALUE OF FILE-ID IS literal <br />
        <Esp />
        01 level-number. <br />
        <Esp />
        <Esp />
        DATA ITEM clause.
      </div>
      <ul>
        <li>
          <strong>FILE SECTION: </strong> Define la estructura de los archivos
          que se utilizarán en el programa.Se utiliza para definir las
          estructuras de los archivos que el programa utilizará durante su
          ejecución.
          <ul>
            <li>
              <strong>FD file-name:</strong> Este es el nombre lógico del
              archivo y es el mismo que se utiliza en el párrafo SELECT de la
              sección FILE-CONTROL. Este párrafo FD indica que se está
              describiendo la estructura de un archivo en particular.
            </li>
            <li>
              <strong>LABEL RECORDS ARE:</strong> Esta cláusula se utiliza para
              especificar si los registros del archivo contienen etiquetas. La
              opción STANDARD indica que los registros tienen etiquetas
              estándar, mientras que OMITTED indica que no hay etiquetas en los
              registros.
            </li>
            <li>
              <strong>RECORDING MODE IS:</strong> Esta cláusula se utiliza para
              especificar el formato de los registros en el archivo, pudiendo
              ser F (fijo), V (variable) o U (indefinido).
            </li>
            <li>
              <strong>RECORD CONTAINS:</strong> Esta cláusula se utiliza para
              especificar el número de registros que contiene un bloque de
              registros. Esto es relevante para archivos secuenciales.
            </li>
            <li>
              <strong>BLOCK CONTAINS:</strong> Esta cláusula se utiliza para
              especificar el número de bloques de registros en un bloque de
              bloques. Esto es relevante para archivos secuenciales.
            </li>
            <li>
              <strong>DATA RECORD IS:</strong> Esta cláusula se utiliza para
              especificar el nombre del nivel de datos que representa un
              registro en el archivo.
            </li>
            <li>
              <strong>LINAGE IS:</strong> Esta cláusula se utiliza para
              especificar el número de líneas entre los registros. Es útil para
              formatear la salida de impresión.
            </li>
            <li>
              <strong>OMITTED RECORDS ARE:</strong> Esta cláusula se utiliza
              para especificar cómo se manejarán los registros omitidos durante
              la operación de entrada. La opción OMITTED indica que los
              registros omitidos no se devolverán como registros de datos.
            </li>
            <li>
              <strong>VALUE OF FILE-ID IS:</strong> Esta cláusula se utiliza
              para asignar un valor literal al identificador del archivo.
            </li>
            <li>
              <strong>01 level-number:</strong> Esto define el esquema de datos
              para un registro dentro del archivo. Los campos de datos
              individuales se definen dentro de este nivel usando cláusulas como
              PIC, USAGE, etc.
            </li>
          </ul>
        </li>
        <li>
          <strong>WORKING-STORAGE SECTION: </strong> Almacena las variables que
          se utilizan durante la ejecución del programa.Se utiliza para definir
          variables y áreas de trabajo que se utilizarán durante la ejecución
          del programa.se utiliza para declarar variables y áreas de trabajo que
          se necesitan durante la ejecución del programa. Estas variables pueden
          ser temporales, acumuladores, contadores, buffers de datos, etc. Las
          variables declaradas en esta sección no retienen su valor entre
          diferentes ejecuciones del programa; se inicializan cada vez que se
          ejecuta el programa.
          <div className="codigo">
            DATA DIVISION. <br />
            <Esp />
            WORKING-STORAGE SECTION. <br />
            <Esp />
            01 WS-COUNTER PIC 9(3) VALUE ZEROES. <br />
            <Esp />
            01 WS-NAME PIC X(20) VALUE 'John Doe'. <br />
          </div>
          <ul>
            <li>
              <strong>01 level-number:</strong> Esto define una entrada en la
              sección de almacenamiento de trabajo. Puedes usar cualquier nivel
              de número dentro de esta sección, siendo 01 el nivel más alto y 77
              el nivel más bajo, que generalmente se usa para definir variables
              elementales. Puedes utilizar múltiples niveles 01 dentro de
              WORKING-STORAGE SECTION.
            </li>
            <li>
              <strong>DATA ITEM clause:</strong> Dentro de cada nivel, puedes
              usar cláusulas como PIC, USAGE, VALUE, REDEFINES, etc., para
              definir las características de la variable o área de trabajo.
              Algunas de las cláusulas más comunes incluyen:
              <ul>
                <li>
                  <strong>PIC:</strong> Define el formato y el tipo de datos de
                  la variable.
                </li>
                <li>
                  <strong>USAGE:</strong> Especifica cómo se almacenará la
                  variable en la memoria (por ejemplo, USAGE IS COMPUTATIONAL
                  para almacenar la variable como un valor numérico).
                </li>
                <li>
                  <strong>REDEFINES:</strong> Permite que una variable comparta
                  almacenamiento con otra variable.
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <strong>LINKAGE SECTION: </strong> Se utiliza para la comunicación
          entre programas COBOL y otros lenguajes de programación. También Para
          definir variables que son compartidas entre programas llamadores y
          programas subordinados cuando se realiza una llamada a un programa
          mediante un procedimiento (CALL).
          <ul>
            <li>
              <strong>01 level-number:</strong> Al igual que en la sección
              WORKING-STORAGE, defines entradas en la sección LINKAGE SECTION.
              Puedes utilizar cualquier nivel de número dentro de esta sección.
            </li>
            <li>
              <strong>DATA ITEM clause: </strong>Al igual que en la
              WORKING-STORAGE SECTION, dentro de cada nivel puedes usar
              cláusulas como PIC, USAGE, VALUE, REDEFINES, etc., para definir
              las características de la variable o área de enlace.
            </li>
          </ul>
        </li>
        <li>
          <strong>LOCAL-STORAGE SECTION: </strong> Almacena variables que solo
          son accesibles dentro de un párrafo o una sección.se utiliza para
          definir variables locales que son específicas de un programa o
          subrutina en particular y que no necesitan ser compartidas entre
          programas llamadores y programas subordinados. Estas variables son
          locales al programa o subrutina en el que se definen y no se conservan
          entre diferentes llamadas al programa.
          <ul>
            <li>
              <strong>01 level-number: </strong>Al igual que en las secciones
              anteriores, defines entradas en la sección LOCAL-STORAGE SECTION.
              Puedes utilizar cualquier nivel de número dentro de esta sección.
            </li>
            <li>
              <strong>DATA ITEM clause:</strong> Dentro de cada nivel, puedes
              usar cláusulas como PIC, USAGE, VALUE, REDEFINES, etc., para
              definir las características de la variable o área de
              almacenamiento local.
            </li>
          </ul>
        </li>
      </ul>
    </section>
  );
};

export { DataDivision };
