const Mod2_4 = ({ Cuadro, Red, Grey, Esp, Com }) => {
  return (
    <section id="2.4">
      <h3>DATA DIVISION</h3>
      <p>
        Es una de las divisiones fundamentales en un programa COBOL y desempeña
        un papel crítico en la definición de la estructura de datos que el
        programa utilizará. En COBOL, la gestión de datos es esencial, ya que
        este lenguaje se utiliza con frecuencia en aplicaciones empresariales
        donde se manejan grandes volúmenes de información. A continuación, se
        proporciona una explicación detallada de la DATA DIVISION
      </p>
      <h4>FILE SECTION: </h4> Define la estructura de los archivos que se
      utilizarán en el programa.Se utiliza para definir las estructuras de los
      archivos que el programa utilizará durante su ejecución. Las áreas de
      datos en la FILE SECTION no están disponibles hasta que los archivos no
      son abiertos en PROCEDURE DIVISION. Esta SECTION solo COBOL BATCH.
      <ul>
        <li>
          <strong>FD file-name:</strong> Este es el nombre lógico del archivo y
          es el mismo que se utiliza en el párrafo SELECT de la sección
          FILE-CONTROL. Este párrafo FD indica que se está describiendo la
          estructura de un archivo en particular.
        </li>
        <li>
          <strong>LABEL RECORDS ARE:</strong> Esta cláusula se utiliza para
          especificar si los registros del archivo contienen etiquetas. La
          opción STANDARD indica que los registros tienen etiquetas estándar,
          mientras que OMITTED indica que no hay etiquetas en los registros.
        </li>
        <li>
          <strong>RECORDING MODE IS:</strong> Esta cláusula se utiliza para
          especificar el formato de los registros en el archivo, pudiendo ser F
          (fijo), V (variable) o U (indefinido).
        </li>
        <li>
          <strong>RECORD CONTAINS:</strong> Esta cláusula se utiliza para
          especificar el número de registros que contiene un bloque de
          registros. Esto es relevante para archivos secuenciales.
        </li>
        <li>
          <strong>BLOCK CONTAINS:</strong> Esta cláusula se utiliza para
          especificar el número de bloques de registros en un bloque de bloques.
          Esto es relevante para archivos secuenciales.
        </li>
        <li>
          <strong>DATA RECORD IS:</strong> Esta cláusula se utiliza para
          especificar el nombre del nivel de datos que representa un registro en
          el archivo.
        </li>
        <li>
          <strong>LINAGE IS:</strong> Esta cláusula se utiliza para especificar
          el número de líneas entre los registros. Es útil para formatear la
          salida de impresión.
        </li>
        <li>
          <strong>OMITTED RECORDS ARE:</strong> Esta cláusula se utiliza para
          especificar cómo se manejarán los registros omitidos durante la
          operación de entrada. La opción OMITTED indica que los registros
          omitidos no se devolverán como registros de datos.
        </li>
        <li>
          <strong>VALUE OF FILE-ID IS:</strong> Esta cláusula se utiliza para
          asignar un valor literal al identificador del archivo.
        </li>
        <li>
          <strong>01 level-number:</strong> Esto define el esquema de datos para
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
          <strong>01 level-number:</strong> Al igual que en la sección
          WORKING-STORAGE, defines entradas en la sección LINKAGE SECTION.
          Puedes utilizar cualquier nivel de número dentro de esta sección.
        </li>
        <li>
          <strong>DATA ITEM clause: </strong>Al igual que en la WORKING-STORAGE
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
          <strong>01 level-number: </strong>Al igual que en las secciones
          anteriores, defines entradas en la sección LOCAL-STORAGE SECTION.
          Puedes utilizar cualquier nivel de número dentro de esta sección.
        </li>
        <li>
          <strong>DATA ITEM clause:</strong> Dentro de cada nivel, puedes usar
          cláusulas como PIC, USAGE, VALUE, REDEFINES, etc., para definir las
          características de la variable o área de almacenamiento local.
        </li>
      </ul>
      <br />
      <div className="codigo">
        <Red>DATA DIVISION</Red>. <br />
        <Esp />
        <Red>FILE SECTION</Red>. <br />
        <Esp />
        <Red>FD</Red> file-name <br />
        <Esp />
        <Esp />
        <Red>LABEL RECORDS ARE</Red> {"STANDARD | OMITTED"} <br />
        <Esp />
        <Esp />
        <Red>RECORDING MODE IS</Red> {"F | V | U"} <br />
        <Esp />
        <Esp />
        <Red>RECORD CONTAINS n RECORDS</Red> <br />
        <Esp />
        <Esp />
        <Red>BLOCK CONTAINS</Red> n <Red>RECORDS</Red> <br />
        <Esp />
        <Esp />
        <Red>DATA RECORD IS</Red> data-record-name <br />
        <Esp />
        <Esp />
        <Red>LINAGE IS</Red> n <br />
        <Esp />
        <Esp />
        <Red>OMITTED RECORDS ARE OMITTED</Red> <br />
        <Esp />
        <Esp />
        <Red>VALUE OF</Red> FILE-ID <Red>IS</Red> literal <br />
        <Esp />
        01 level-number. <br />
        <Esp />
        <Esp />
        <Red>DATA ITEM</Red> clause.
      </div>
    </section>
  );
};

export { Mod2_4 };
