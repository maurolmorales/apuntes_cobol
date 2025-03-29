import img1 from "./img/display_1.png";
import img2 from "./img/display_2.png";
import img3 from "./img/com3_1.png";
import Cuadro from "../Cuadro";
import layoutFijo from "./img/layoutFijo.png";

const Ape1_1 = () => {
  return (
    <section id="ape1_1">
      <h3>Almacenamiento de Datos en Mainframe</h3>
      <p>
        Los datos en un mainframe IBM pueden almacenarse en diferentes formatos
        según su uso.
      </p>
      <h4>Zoneado (Zoned Decimal) o Display (EBCDIC)</h4>
      <p>
        Este formato se usa en COBOL cuando defines una variable numérica con
        USAGE DISPLAY. Se almacena como caracteres legibles en EBCDIC.
      </p>
      <p>El byte se divide en zona y dígito propiamente dicho</p>
      <p>Para valores positivos: </p>
      <img src={img1} alt="imagen ejemplo" style={{ width: "40%" }} />
      <br />
      <p>Para valores negativos: </p>
      <img src={img2} alt="imagen ejemplo" style={{ width: "40%" }} />
      <h4>Empaquetado (Packed Decimal - COMP-3)</h4>
      <p>
        El packed decimal (también conocido como COMP-3) es un formato más
        compacto para almacenar números decimales.
      </p>
      <ul>
        <li>Cada dígito usa 4 bits en lugar de 8.</li>
        <li>
          El último nibble almacena el signo (C para positivo, D para negativo).
        </li>
        <li>Ocupa menos espacio en comparación con DISPLAY.</li>
        <li>
          COMP-3 se usa mucho en cálculos financieros en COBOL porque es más
          eficiente en operaciones aritméticas.
        </li>
      </ul>
      <img src={img3} alt="imagen ejemplo" style={{ width: "40%" }} />
      <h4>
        ALMACENAMIENTO DE UN REGISTRO DE LARGO FIJO EN MEMORIA DE PROGRAMA.
      </h4>
      <p>(ejemplo) LAYOUT REGISTRO: largo de registro 25 bytes. </p>
      <img src={layoutFijo} alt="imagen ejemplo" style={{ width: "60%" }} />
      <br />
      <h4>¿Qué es un archivo?</h4>
      <p>
        Un archivo o fichero de datos es un conjunto o colección de registros
        que contienen los datos referidos a una estructura definida previamente
        y que son almacenados en el Mainframe con un nombre determinado; el cual
        responde a la naturaleza de los datos que contiene (ejemplo: archivo de
        personas).
      </p>
      <h5>CONCEPTO DE ARCHIVO – REGISTRO - CAMPO</h5>
      <p>
        <strong>Archivo</strong>: conjunto de registros. Un archivo se almacena
        en disco; contiene un agrupamiento o lote de datos que definen una clase
        específica o estructura de datos de la misma naturaleza. Ejemplo:
        ARCHIVO MAESTRO DE CLIENTES Almacena los datos mínimos indispensables
        para la identificación exacta y precisa de todos los Clientes de una
        Entidad financiera o Banco. Los datos se agrupan en forma estructurada e
        independiente para cada Cliente. El archivo representa el “lote de
        datos” que ingresan o que resultan de la salida de procesos batch que
        cumplen funciones específicas, codificadas en los programas COBOL del
        usuario.
      </p>
      <br />
      <p>
        <strong>Registro</strong>: conjunto de campos que contienen la
        información mínima indispensable para la identificación de una clase o
        estructura de datos de la misma naturaleza.Contiene los datos mínimos
        indispensables para la identificación de cada Cliente del Total de la
        cartera de clientes de una Entidad financiera o Banco.
      </p>
      <br />
      <p>
        <strong>Campo</strong>: unidad mínima de datos dentro de un registro.
        Ejemplo: Cada uno de los 28 campos enumerados en el ejemplo del layout
        de registro.
      </p>
      <h4>ARCHIVOS QSAM, SECUENCIALES o PLANOS</h4>
      <p>
        Los archivos planos se llaman a todos aquellos archivos de datos que
        contienen rutas de registro sin relaciones estructurales. Para
        interpretar este tipo de archivo se requiere conocimiento de elementos
        adicionales como, por ejemplo, las propiedades de formato o estructura
        de datos del archivo.
      </p>
      <ul>
        <li>
          Archivo PDS (Partitioned Data Set)(particionado o biblioteca de
          datos): es un tipo de archivo en mainframes IBM que actúa como un
          contenedor de múltiples miembros, similar a un directorio o carpeta en
          sistemas operativos modernos.
          <ul>
            <li>
              Se compone de múltiples miembros, cada uno de los cuales se trata
              como un archivo separado dentro del PDS.
            </li>
            <li>
              Se utiliza para almacenar programas fuente en COBOL, JCL, macros,
              o scripts de ensamblador.
            </li>
            <li>
              Facilita la organización y gestión de archivos relacionados.
            </li>
            <li>
              Puede contener programas compilados y versiones de código fuente
              en un solo dataset.
            </li>
          </ul>
        </li>
        <li>
          {" "}
          Archivo QSAM (Queued Sequential Access Method): es un tipo de archivo
          secuencial en mainframe, similar a un archivo de texto en otros
          sistemas.
          <ul>
            <li>
              Se accede de manera secuencial, de principio a fin, sin acceso
            </li>
            <li>
              aleatorio. Es el tipo de archivo más común para procesar grandes
            </li>
            <li>
              volúmenes de datos en COBOL. Se puede usar para almacenar
              registros
            </li>
            <li>de datos estructurados, como nóminas, reportes, etc.</li>
          </ul>
        </li>
      </ul>
      <h4>
        DIFERENCIA ENTRE ARCHIVOS SECUENCIALES, INDEXADOS Y RELATIVOS EN COBOL
      </h4>
      <p>
        Los archivos son la colección de registros relacionados con una entidad
        en particular. Mediante el manejo de archivos, podemos almacenar estos
        registros en un orden organizado. Estos registros se almacenan en cinta
        magnética o en un disco duro. Los archivos se clasifican además en 3
        tipos:
      </p>
      <ul>
        <li>​Organización secuencial de archivos.</li>
        <li>​Organización relativa de archivos.</li>
        <li>​Organización de archivos indexados.</li>
      </ul>
      Ventajas del manejo de archivos: ​
      <ul>
        <li>
          Tienen almacenamiento ilimitado y, por lo tanto, almacenan un gran
          volumen de datos.
        </li>
        <li>Almacenan los datos de forma permanente en el dispositivo.</li>
        <li>​Reducen la reedición de datos.</li>
      </ul>
      <p>
        La organización de archivos secuenciales almacena los datos en orden
        secuencial. Podemos acceder a los datos de forma secuencial y los datos
        se pueden almacenar solo al final del archivo; o sea a continuación del
        último registro de datos.
      </p>
      <p>
        La organización de archivos indexados almacena el registro
        secuencialmente dependiendo del valor de RECORD-KEY (generalmente en
        orden ascendente). Una CLAVE DE REGISTRO en un archivo indexado es una
        variable que debe ser parte del registro / datos. En el caso de archivos
        indexados, se crean dos tipos de archivos:
      </p>
      <ul>
        <li>Archivo de datos: consta de los registros en orden secuencial.</li>
        <li>
          Archivo de índice: Consiste en RECORD-KEY y la dirección de RECORD-KEY
          en el archivo de datos.
        </li>
      </ul>
      <p>
        Se puede acceder al archivo indexado de forma secuencial al igual que la
        organización de archivos secuenciales, así como de forma aleatoria solo
        si se conoce la CLAVE DE REGISTRO. La organización de archivos relativa
        almacena el registro sobre la base de su dirección relativa.
      </p>{" "}
      <p>
        Cada registro se identifica por su Número de registro relativo, un
        Número de registro relativo es la posición del registro desde el
        principio del archivo. Se puede acceder a estos registros de forma
        secuencial al igual que la organización de archivos secuenciales, así
        como de forma aleatoria, para acceder a los archivos de forma aleatoria,
        el usuario debe especificar el número de registro relativo.
      </p>


      <Cuadro data={{gridTemplateColumns:" 1fr 5fr"}} key={2}>
      <div className="col tCenter">
          <div>Carácter</div>
          <div>
            <strong>Z</strong>
          </div>
      </div>
      <div className="col tCenter">
          <div>Carácter</div>
          <div>
            <strong>Z</strong>
          </div>
      </div>
      </Cuadro>
    </section>
  );
};

export { Ape1_1 };
