const Mod8_2 = ({ Cuadro, Red, Grey, Esp, Com }) => {
  return (
    <section id="8.2">
      <h3>8.2 Tipos de Acceso</h3>
      <p>
        El modo de acceso define cómo un programa leerá o escribirá registros:
      </p>

      <h4>SEQUENTIAL</h4>
      <p>
        Los registros se leen o escriben uno por uno, en el orden en que están
        almacenados. Solo se puede ir hacia adelante.
      </p>

      <div className="codigo">
        <Red>ACCESS MODE IS SEQUENTIAL</Red>
      </div>
      <h4>RANDOM</h4>
      <p>
        El acceso a registros se hace directamente, sin seguir un orden. Se
        utiliza con archivos RELATIVE o INDEXED.
      </p>

      <div className="codigo">
        <Red>ACCESS MODE IS RANDOM</Red>
      </div>
      <h4>DYNAMIC</h4>
      <p>
        Permite alternar entre acceso secuencial y acceso directo durante la
        ejecución del programa.
      </p>

      <div className="codigo">
        <Red>ACCESS MODE IS DYNAMIC</Red>
      </div>
      <h4>Paso a paso para manejo de archivos en COBOL</h4>
      <ol>
        <li>Declarar los archivos en FILE-CONTROL (ENVIRONMENT DIVISION)</li>
        <div className="twoColums">
          <div className="codigo">
            <Red>ENVIRONMENT DIVISION</Red>. <br />
            <Red>INPUT-OUTPUT SECTION</Red>. <br />
            <Red>FILE-CONTROL</Red>. <br />
            <Esp />
            <Esp /> <Red>SELECT</Red> archivo-logico <br />
            <Esp />
            <Esp />
            <Esp />
            <Red>ASSIGN TO </Red>
            <Grey>'NOMBRE.ARCHIVO'</Grey> <br />
            <Esp />
            <Esp />
            <Esp />
            <Red>ORGANIZATION IS</Red>{" "}
            <Com>{"{SEQUENTIAL | RELATIVE | INDEXED}"}</Com> <br />
            <Esp />
            <Esp />
            <Esp />
            <Red>ACCESS MODE IS</Red>{" "}
            <Com>{"{SEQUENTIAL | RANDOM | DYNAMIC}"}</Com> <br />
            <Esp />
            <Esp />
            <Esp />
            <Red>OPTIONAL</Red> <br />
            <Esp />
            <Esp />
            <Esp />
            <Com>[</Com>
            <Red>RECORD KEY IS</Red> clave-principal<Com>]</Com> <br />
            <Esp />
            <Esp />
            <Esp />
            <Com>[</Com>
            <Red>ALTERNATE RECORD KEY IS</Red> clave-secundaria WITH DUPLICATES
            <Com>]</Com> <br />
            <Esp />
            <Esp />
            <Esp />
            <Com>[</Com>
            <Red>RELATIVE KEY IS</Red> clave-relativa<Com>]</Com>. <br />
          </div>
          <div style={{ paddingLeft: "1rem" }}>
            <ul>
              <li>
                <mark>ORGANIZATION</mark>: tipo de estructura del archivo.
              </li>
              <li>
                <mark>ACCESS MODE</mark>: cómo se accederá a los registros.
              </li>
              <li>
                <mark>RECORD KEY</mark>: clave primaria (para archivos
                indexados).
              </li>
              <li>
                <mark>RELATIVE KEY</mark>: para archivos relativos.
              </li>
              <li>
                <mark>OPTIONAL</mark>: Si el archivo NO EXISTE en el sistema El programa no termina con error automáticamente crea el archivo. Para versiones nuevas de Cobol.
              </li>
            </ul>
          </div>
        </div>
        <li>
          Definir la estructura del archivo en FILE SECTION (DATA DIVISION)
        </li>
        <div className="codigo">
          <Red>DATA DIVISION</Red>. <br />
          <Red>FILE SECTION</Red>. <br />
          <Red>FD</Red> archivo-logico. <br />
          01 registro. <br />
          05 campo-1 <Red>PIC</Red> <Com>...</Com> <br />
          05 campo-2 <Red>PIC</Red> <Com>...</Com> <br />
          <Com>...</Com> <br />
        </div>
        <p>📌 Para archivos RELATIVE también puede usarse:</p>
        <div className="codigo">
          <Red>RELATIVE KEY IS</Red> clave-relativa.
        </div>
        <p>📌 Para archivos INDEXADOS:</p>
        Se define la clave dentro del registro.
        <br /><br /> <br />
        <li>Abrir el archivo (PROCEDURE DIVISION)</li>
        
          <div className="codigo">
            <Red>OPEN</Red> <Com>{"{INPUT | OUTPUT | I-O | EXTEND}"}</Com>{" "}
            archivo-logico
          </div>
          <div>
            <ul>
              <li>
                <mark>INPUT</mark>: solo lectura. Si el archivo no existe producirá un error.
              </li>
              <li>
                <mark>OUTPUT</mark>: solo escritura (crea o sobreescribe). Si el archivo existe lo reescribe. Si no existe el archivo, lo crea.
              </li>
              <li>
                <mark>I-O</mark>: Lectura y escritura (para archivos indexados o
                relativos). Si el archivo no existe producirá un error.
              </li>
              <li>
                <mark>EXTEND</mark>: Agregar al final (solo secuenciales). Si existe el achivo lo abre. Si no existe el archivo, lo crea. En ambos casos añade los archivos al final. 
              </li>
            </ul>
          </div>

        <li>Leer o escribir registros</li>
        <h5>🟩 Para archivos secuenciales</h5>
        <div className="codigo">
          <Red>READ</Red> archivo-logico <br />
          <Esp /> <Red>AT END</Red> <br />
          <Esp />
          <Esp /> <Red>SET</Red> fin-de-archivo <Red>TO TRUE</Red> <br />
          <Red>END-READ</Red>. <br />
        </div>
        <div className="codigo">
          <Red>WRITE</Red> registro.
        </div>
        <h5> Para archivos indexados o relativos</h5>
        <ul>
          <li>📖 Lectura</li>
        </ul>
        <div className="codigo">
          <Red>READ</Red> archivo-logico <br />
          <Esp /> <Com>[</Com>
          <Red>RECORD KEY IS</Red> campo-clave<Com>]</Com> <br />
          <Esp /> <Com>{"{NEXT | INVALID KEY ...}"}</Com> <br />
          <Red>END-READ</Red>. <br />
        </div>
        <ul>
          <li>✍ Escritura</li>
        </ul>
        <div className="codigo">
          <Red>WRITE</Red> registro <br />
          <Com>[</Com>
          <Red>INVALID KEY</Red> ...<Com>]</Com>.
        </div>
        <ul>
          <li>🔁 Reescritura</li>
        </ul>
        <div className="codigo">
          <Red>REWRITE</Red> registro <br />
          <Com>[</Com>
          <Red>INVALID KEY</Red> ...<Com>]</Com>.
        </div>
        <ul>
          <li>❌ Eliminación</li>
        </ul>
        <div className="codigo">
          <Red>DELETE</Red> archivo-logico <br />
          <Com>[</Com>
          <Red>INVALID KEY</Red> ...<Com>]</Com>.
        </div> <br /><br />
        <li>Cerrar el archivo</li>
        <div className="codigo">
          <Red>CLOSE</Red> archivo-logico.
        </div>
      </ol>
    </section>
  );
};

export { Mod8_2 };
