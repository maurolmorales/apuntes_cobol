import img1 from "./img/display_1.png";
import img2 from "./img/display_2.png";
import img3 from "./img/com3_1.png";
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
        <strong>Archivo</strong>: conjunto de registros. Un archivo se almacena en disco;
        contiene un agrupamiento o lote de datos que definen una clase
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
        <strong>Registro</strong>: conjunto de campos que contienen la información mínima
        indispensable para la identificación de una clase o estructura de datos
        de la misma naturaleza.Contiene los datos mínimos indispensables para la
        identificación de cada Cliente del Total de la cartera de clientes de
        una Entidad financiera o Banco. 
      </p>
      <br />
      <p>
        <strong>Campo</strong>: unidad mínima de datos dentro de un registro. Ejemplo: Cada uno
        de los 28 campos enumerados en el ejemplo del layout de registro.
      </p>
    </section>
  );
};

export { Ape1_1 };
