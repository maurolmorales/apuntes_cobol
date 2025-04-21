import img1 from "./img/display_1.png";
import img2 from "./img/display_2.png";
import img3 from "./img/com3_1.png";
import layoutFijo from "./img/layoutFijo.png";
const Mod8_1 = ({ Cuadro, Red, Grey, Esp, Com }) => {
  return (
    <section id="8.1">
      
      <h3>8.1 Organización de Archivos</h3>
      <p>El manejo de archivos en COBOL es uno de los pilares fundamentales del lenguaje, dado que fue diseñado para el procesamiento masivo de datos. COBOL permite trabajar con distintos tipos de archivos, estructuras de acceso y organizaciones físicas. Este módulo cubre todo lo relacionado con los archivos en COBOL.</p>

      <h4>Almacenamiento de Datos en Mainframe</h4>
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
      <h5>CONCEPTO DE ARCHIVO - REGISTRO - CAMPO</h5>
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
<br /><br />


<p>En COBOL, la organización de un archivo describe cómo se almacenan y acceden los registros:</p>

<h4>SEQUENTIAL</h4>
<p>Los registros se almacenan uno tras otro en el orden en que fueron escritos. El acceso se realiza de forma secuencial, desde el principio hasta el final.</p><p>Un archivo secuencial es aquel que consta de registros que se almacena y se accede a
ellos de modo secuencial (de principio a fin), es decir que si quieres hacer la lectura del
registro ocho, tienes que hacer las siete lecturas de los registros, para llegar</p>
<br />
<p>
  Recomendado para:
</p>
<li>El tamaño de memoria fuera mínimo</li>
<li>El archivo fuera fácilmente editable</li>
<br />
<p>Características: </p>
<li>
  Un nuevo registro no se puede insertar ni en medio ni al principio del archivo,
  este siempre se insertará al final del archivo.
</li>

<li>
  Después de especificar el tamaño de un registro en un archivo secuencial, no
  es posible reducir o alargar un registro.
</li>

<li>El orden de los registros, tal y como se insertan no puede ser cambiado.</li>
<li>
  Es posible la actualización de un registro, pero esto solamente es posible “a
  manita” a través de la opción del TSO,
  de edición. Se puede tambiénsobrescribir un registro, siempre y cuando la nueva longitud de registro sea la
  misma.
</li>
<li>
  Los archivos secuenciales para la escritura de registros de salida son una
  buena opción, teniendo en cuenta, que no requieren de más especificaciones
  que el tamaño del registro sea el tamaño del archivo.
</li>
<div className="twoColums">
  <div className="codigo">
<Red>FILE-CONTROL</Red>  <br />
<Esp/><Red>SELECT</Red> ENTRADA <Red>ASSIGN TO</Red> DDENTRA  <br />
<Esp/><Red>ORGANIZATION IS SEQUENTIAL</Red>  <br />
<Esp/><Red>ACCESS MODE IS SEQUENTIAL</Red>   <br />
<Esp/><Red>FILE STATUS IS</Red> WS-FS-ENTRADA.  <br />
  </div>
  <div>
    <p>
<li>ENTRADA: Archivo que se va a tomar de entrada, el cual deberá de ser secuencial</li>
<li>DDENTRA: Dataset Definition que se va a declarar en JCL de ejecución</li>
<li>ORGANIZATION: Se especifica que su organización es secuencial</li>
<li>ACCESS MODE: El modo de acceso, el cual se especifica que es secuencial</li>
<li>FILE STATUS: El estatus del archivo el cual deberá de comenzar con 00.</li>
    </p>
  </div>
</div>


<p>
Mientras que en el JCL nosotros podemos encontrarlo como se muestra en el ejemplo a
continuación:
</p>
<div className="twoColums">
  <div className="codigo">
//DDENTRA <Red>DD</Red> DSN=MOVDELL.R08.I1OUP10.SORTINYU,  <br/>
//DISP=(OLD,KEEP,KEEP)
  </div>
  <div>
    <p><li>DDENTRA: Archivo que se va utilizar para entrada del proceso.</li></p>
  </div>
</div>
<p>También vamos a mencionar algunos de los inconvenientes que tienen estos archivos:</p>
<li>A tamaño grande la lectura se ralentiza.</li>
<li>El acceso a los archivos es puramente secuencial.</li>
<p>
  Por lo cual dependiendo del tamaño de información que vas a procesar, si esta información
  aumenta o si es constante, o dependiendo de que tantos reportes o movimiento de
  información vas a realizar con ella, son puntos que debes de tomar en cuenta para validar si
  es viable este tipo de archivos.
</p>+









<h4>RELATIVE</h4>
<p>Cada registro tiene un número relativo. Se puede acceder a cualquier registro directamente mediante su número.</p>

<div className="codigo">
  <Red>ORGANIZATION IS RELATIVE</Red> <br />
  <Red>ACCESS MODE IS RANDOM</Red> <br />
</div>
<h4>INDEXED</h4>
<p>Se utiliza una clave (KEY) para acceder a los registros. Los archivos INDEXED permiten búsqueda directa por clave y también recorrido secuencial.</p>

<div className="codigo">
  <Red>ORGANIZATION IS INDEXED</Red>  <br />
  <Red>RECORD KEY IS</Red> ID-CLIENTE  <br />
  <Red>ACCESS MODE IS DYNAMIC</Red>  <br />

</div>

    </section>
  );
};

export { Mod8_1 };
