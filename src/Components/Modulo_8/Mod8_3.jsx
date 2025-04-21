const Mod8_3 = ({ Cuadro, Red, Grey, Esp, Com }) => {
  return (
    <section id="8.3">
      <h3>8.3 QSAM, VSAM, ESDS, KSDS, RRDS</h3>
      <p>
        Estas son organizaciones físicas utilizadas en sistemas z/OS
        (mainframe):
      </p>
      <h4>QSAM (Queued Sequential Access Method)</h4>
      <p>
        Método secuencial estándar para archivos. Se usa para archivos de texto
        o binarios secuenciales. Es transparente al programador COBOL.
      </p>
      <h4>VSAM (Virtual Storage Access Method)</h4>
      <p>Método avanzado para el manejo de archivos indexados o relativos.</p>
      <p>
        Definidos como Virtual Storage Access Method, es un tipo de fichero que
        trata de mejorar lo que se hace con los ficheros secuenciales y el cual
        soporta que se tenga un mayor número de registros, y que estos de igual
        forma puedan ser procesados en un tiempo más óptimo y con un acceso más
        eficaz. Estos archivos se caracterizan por tener una llave (clave) de
        acceso a cada uno de los registros lo cual permite que se tenga un mejor
        acceso a los archivos,
      </p>
      <h5>Clúster VSAM</h5>
      Los conjuntos de datos lógicos para almacenar registros se conocen como
      clústeres. Simplemente una asociación del índice, un conjunto de
      secuencias, un conjunto de datos. El espacio ocupado por un clúster VSAM
      se divide en áreas contiguas denominadas Intervalos de control (según se
      explica más abajo). Hay dos componentes principales en un clúster VSAM:{" "}
      <br />
      <li>
        <mark>Index</mark> contiene la parte del índice. Los registros de índice
        están presentes en el componente de índice. El uso del componente de
        índice VSAM puede recuperar registros del componente de datos.
      </li>
      <li>
        <mark>Data</mark> contiene la parte de datos. Los registros de datos
        reales están presentes en el componente de datos.
      </li>
      <br />
      Siempre se advertirá sobre ambas zonas bien delimitadas que duplican el
      espacio de almacenamiento:
      <li>
        área de datos: contiene los registros almacenados según orden de ingreso
      </li>
      <li>
        área de índice: contiene los mismos registros del área anterior pero
        ordenados según clave
      </li>
      de acceso.
      <h5>Intervalo de control</h5>
      Los intervalos de control (CI) en VSAM son equivalentes a bloques para
      conjuntos de datos que no son VSAM. En los métodos que no son VSAM, la
      unidad de datos la define el bloque. Este concepto es la cantidad de
      registros físicos que contiene un registro lógico ante cada READ en código
      COBOL. VSAM trabaja con el área de datos lógicos que se conoce como
      Intervalos de control. En este caso ante cada READ en código COBOL, queda
      disponible un intervalo de control o área de datos lógicos. Los intervalos
      de control son la unidad más pequeña de transferencia entre un disco y el
      sistema operativo. Siempre que se recupera un registro directamente del
      almacenamiento, todo el CI que contiene el registro se lee en el búfer de
      entrada y salida de VSAM. Luego, el registro deseado se transfiere al área
      de trabajo desde el búfer VSAM. El intervalo de control consta de: <br />
      <li>Registros lógicos</li>
      <li>Campos de información de control</li>
      <li>Espacio libre</li>
      Cuando se carga un conjunto de datos VSAM, se crean intervalos de control.
      El tamaño del intervalo de control predeterminado es de 4 KB y(1 página de
      memoria Mainframe) y puede extenderse hasta 32 KB.
      <br /> <br />
      <p>
        <u>Tipos de archivos VSAM</u>:
      </p>
      <h5>ESDS (Entry-Sequenced Data Set)</h5>
      Similar a archivos secuenciales, pero con capacidades extendidas. Se trata
      de un fichero VSAM, equivalente al clásico Fichero Secuencial. no está
      indexado. Las claves no están presentes en el conjunto de datos ESDS, por
      lo que pueden contener registros duplicados. ESDS se puede utilizar en
      programas COBOL como cualquier otro archivo. Dentro del JCL
      especificaremos el nombre del archivo y podemos utilizarlo para procesarlo
      dentro del programa. En el programa COBOL, se especifica: <br />
      <li>organización de archivo Sequential</li>
      <li>modo de acceso Sequential</li>
      <h5>KSDS (Key-Sequenced Data Set)</h5>
      Archivo indexado, permite acceso por clave y secuencial. Emplea dos
      subficheros para el tratamiento de los datos. Uno para el almacenamiento
      de los índices, y otro para la información (Registros de datos) asociada a
      cada índice. conjunto de datos secuenciados caracterizados por una clave.
      KSDS; es el más útil y versátil de este tipo de almacenamiento. En el
      programa COBOL, se especifica: <br />
      <li>organización de archivo INDEXED</li>
      <li>modo de acceso SEQUENTIAL/RANDOM/DYNAMIC</li> <br />
      <u>El clúster de KSDS consta de dos componentes</u>: <br />
      <strong>INDICE</strong>: El componente de índice del clúster KSDS contiene
      la lista de valores clave para los registros en el clúster con punteros a
      los registros correspondientes en el componente de datos. El componente de
      índice se refiere a la dirección física de un registro KSDS. Esto
      relaciona la clave de cada registro con la ubicación relativa del registro
      en el conjunto de datos. Cuando se agrega o elimina un registro, este
      índice se actualiza en consecuencia. <br /> <br />
      <strong>DATA</strong>: El componente de datos del clúster KSDS contiene
      los datos reales. Cada registro en el componente de datos de un clúster
      KSDS contiene un campo clave con el mismo número de caracteres y ocurre en
      la misma posición relativa en cada registro.
      <br />
      <br />
      <p>
        <u>Características de un archivo VSAM KSDS</u>:
      </p>
      <li>Los registros siempre se mantienen ordenados por campo clave.</li>
      <li>Los registros se almacenan en orden ascendente.</li>
      <li>Se puede acceder a los registros de forma secuencial o directa.</li>
      <li>Los registros se identifican mediante una clave.</li>
      <li>
        La clave de cada registro es un campo en una posición predefinida dentro
        del registro.
      </li>
      <li>Cada clave debe ser única en el conjunto de datos de KSDS.</li>
      <li>
        Cuando se insertan nuevos registros, el orden lógico de los registros
        depende de la secuencia de clasificación del campo clave.
      </li>
      <li>La longitud de los registros puede ser fija o variable.</li>
      <li>Se puede utilizar en código COBOL como cualquier otro archivo.</li>
      <br />
      <p>
        <u>Estructura de un archivo VSAM KSDS</u>:
      </p>
      Para buscar un registro, se debe armar un valor de clave único. El valor
      clave se busca en el componente de índice. Una vez que se encuentra la
      clave, se recupera la dirección de memoria correspondiente que se refiere
      al componente de datos. A partir de la dirección de la memoria podemos
      obtener los datos reales que se almacenan en el componente de datos.
      <br />
      <h5>RRDS (Relative Record Data Set) </h5>
      Cada registro tiene una posición numérica fija (como RELATIVE). Se trata
      del VSAM más eficiente. Se asigna un número relativo a cada registro, que
      es el que se usará para recuperar la información. Obviamente, si dicha
      asignación no se actualiza correctamente cada vez que borramos registros
      del fichero, entonces irán quedando espacios de memoria sin uso y el
      acceso será cada vez menos eficiente.
      <h5>Linear Data Set (LDS) </h5>
      <p>
        Este tipo de fichero se emplea para almacenar los TABLESPACE de las
        bases de datos DB2.
      </p>
      <br />
      <p>
        📌 COBOL accede a archivos VSAM mediante ORGANIZATION IS INDEXED y
        declarando claves.
      </p>
      <br />
      <p>
        Puede ser raro que veas un desarrollo hecho en archivos VSAM. Esto
        debido a que cuando se implementó no se tenían bien especificadas las
        reglas de las bases de datos relacionales dentro del DB2, pero ahora se
        ha vuelto una práctica más usual que se utilicen las bases de datos
        relacionales con los archivos secuenciales. O que en casos muy
        especiales se utilicen desarrollos con archivos VSAM.
      </p>
      <br />
      <p>
        <u>ventajas/ desventajas que tienen estos archivos</u>:
      </p>
      <li>Estos archivos pueden ser de una longitud fija o variable</li>
      <li>
        Están organizados en bloques de tamaño fijo llamados intervalos de
        control (IC) y a su vez en divisiones más grandes llamadas Áreas de
        Control (AC)
      </li>
      <li>El tamaño de los intervalos se miden en bytes</li>
      <li>
        Las áreas de control se miden en número de pistas o cilindros de disco.
      </li>
      <p>
        La manipulación de ficheros VSAM (“borrar” y “definir”) se realiza
        normalmente a través de la utilidad de IDCAMS. Los programas propios
        pueden acceder a ficheros VSAM mediante sentencias de “data definition”
        (DD) en los JCL o en las regiones online de CICS. DB2 está implementado
        sobre ficheros VSAM usando su estructura de datos.
      </p>
    </section>
  );
};

export { Mod8_3 };
