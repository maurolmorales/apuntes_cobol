import { Esp } from "../espacio";
const Modulo5 = () => {

  return (
    <article id="modulo-5">
      <div className="h2-topBar">
        <h2> Módulo 5: Manejo de Archivos</h2>

        <a href="#indice">al Indice</a>
      </div>
      <h3>5.1. Organización de Archivos en COBOL</h3>
      <p>
        La organización de archivos es una parte fundamental en la programación
        COBOL, especialmente en aplicaciones empresariales donde se requiere la
        gestión de datos persistentes. COBOL proporciona una variedad de formas
        de organizar archivos para almacenar y recuperar datos.
      </p>
      <h4>Archivos Secuenciales</h4>
      <p>
        Los archivos secuenciales son la forma más simple de organizar archivos
        en COBOL. Los registros se almacenan en secuencia, uno detrás del otro.
        Estos archivos son fáciles de usar y son adecuados para aplicaciones
        donde los datos se leen y escriben en un orden lineal.
      </p>
      <div className="codigo">
      SELECT ArchivoSecuencial ASSIGN TO 'datos.dat' <br />
      ORGANIZATION IS SEQUENTIAL.
      </div>
      <h4>Archivos de Acceso Aleatorio</h4>
      <p>
        Los archivos de acceso aleatorio permiten acceder a registros
        específicos mediante una clave única. Estos archivos son útiles cuando
        se necesita recuperar registros de manera eficiente en función de un
        valor clave.
      </p>
      <div className="codigo">
      SELECT ArchivoAleatorio ASSIGN TO 'datos.dat' <br />
      <Esp/>ORGANIZATION IS INDEXED <br />
      <Esp/>ACCESS MODE IS DYNAMIC <br />
      <Esp/>RECORD KEY IS ClaveRegistro.
      </div>
      <h4>Archivos de Acceso Directo</h4>
      <p>
        Los archivos de acceso directo son similares a los archivos de acceso
        aleatorio pero permiten un acceso más rápido a los registros. Se
        organizan en bloques y se accede a los bloques en lugar de a registros
        individuales.
      </p>
      <div className="codigo">
      SELECT ArchivoDirecto ASSIGN TO 'datos.dat' <br />
      ORGANIZATION IS RELATIVE.
      </div>
      <h4>Archivos de Acceso Dinámico</h4>
      <p>
        Los archivos de acceso dinámico permiten el acceso a registros en
        función de su posición en el archivo. Esto significa que puedes acceder
        a registros por número de registro en lugar de una clave única.
      </p>
      <div className="codigo">
        SELECT ArchivoDinamico ASSIGN TO 'datos.dat' <br />
        ORGANIZATION IS LINE SEQUENTIAL <br />
        ACCESS MODE IS DYNAMIC.
      </div>
      <h4>Conclusión</h4>
      <p>
        La organización de archivos es esencial en COBOL para gestionar datos de
        manera eficiente en aplicaciones empresariales. La elección de la
        organización de archivos adecuada depende de las necesidades específicas
        de la aplicación y la forma en que se acceden y actualizan los datos.
        Comprender cómo declarar y utilizar diferentes tipos de archivos en
        COBOL es crucial para desarrollar aplicaciones que manipulan datos de
        manera efectiva y precisa. Estas organizaciones de archivos son un
        componente clave en la gestión de datos en COBOL.
      </p>
      <h3>5.2. Declaración de Archivos (FILE SECTION) en COBOL</h3>
      <p>
        La sección de archivo (FILE SECTION) en COBOL es una parte fundamental
        en la definición de archivos y se utiliza para declarar y describir los
        archivos que un programa COBOL va a utilizar. Aquí es donde se
        establecen las características de los archivos, como su nombre,
        organización, clave principal y otros atributos importantes.{" "}
      </p>
      <h4>SELECT</h4>
      <p>
        La declaración SELECT se utiliza para especificar el nombre del archivo
        y sus atributos. Aquí se declara el nombre del archivo y se asigna a un
        archivo físico en el sistema. También se establece la organización del
        archivo, que puede ser SEQUENTIAL, INDEXED o RELATIVE, según el tipo de
        archivo.
      </p>
      <div className="codigo">
      SELECT ArchivoSecuencial ASSIGN TO 'datos.dat' <br />
      ORGANIZATION IS SEQUENTIAL.
      </div>
      <h4>FD (File Description)</h4>
      <p>
        La declaración FD se utiliza para describir la estructura de los
        registros en el archivo. Aquí se definen los campos que componen cada
        registro, junto con sus atributos, como la longitud y el tipo de datos.
        También se establece la clave principal si el archivo es de acceso
        aleatorio o indexado.
      </p>
      <div className="codigo">
          FD RegistroCliente. <br />
          01 NumeroCliente PIC 9(5). <br />
          01 NombreCliente PIC X(30). <br />
          01 DireccionCliente PIC X(50).
      </div>
      <h4>01-Level Record</h4>
      <p>
        En la sección FD, se declaran los registros utilizando nivel 01, lo que
        indica un registro principal. Cada campo del registro se declara bajo
        este nivel. Los nombres de los campos y sus descripciones se definen
        aquí.
      </p>
      <h4>Data Types</h4>
      <p>
        Los tipos de datos utilizados en los campos de los registros pueden
        incluir datos numéricos (como PIC 9(5)), datos alfanuméricos (como PIC
        X(30)), datos de punto flotante (como PIC 9(5)V99), y otros tipos de
        datos compatibles con COBOL.
      </p>
      <h4>KEY IS</h4>
      <p>
        Si el archivo es de acceso aleatorio o indexado, se utiliza la cláusula
        KEY IS para especificar la clave principal que se utilizará para acceder
        a los registros.
      </p>
      <div className="codigo">
FD ArchivoAleatorio. <br />
01 Registro. <br />
   <Esp/>02 NumeroEmpleado PIC 9(5). <br />
   <Esp/>02 NombreEmpleado PIC X(30). <br />
   <Esp/>02 Departamento PIC X(10). <br />
   <Esp/>02 Salario PIC 9(7)V99. <br />
   <Esp/>02 KEY IS NumeroEmpleado.
      </div>
      <h4>Conclusión</h4>
      <p>
        La sección de archivo (FILE SECTION) es esencial para declarar y
        describir archivos en COBOL. Aquí se establecen los atributos clave de
        los archivos, como el nombre, la organización, la estructura de los
        registros y la clave principal. Comprender cómo declarar y describir
        archivos en COBOL es crucial para el desarrollo de aplicaciones que
        manejan datos de manera efectiva y precisa, especialmente en
        aplicaciones empresariales que requieren la gestión de archivos de
        datos.
      </p>
      <h3>5.3. Lectura y Escritura de Archivos Secuenciales en COBOL</h3>
      <p>
        Los archivos secuenciales son una de las organizaciones de archivos más
        simples en COBOL y se utilizan para leer y escribir registros en un
        orden lineal. En este módulo, exploraremos cómo realizar operaciones de
        lectura y escritura en archivos secuenciales en COBOL.
      </p>
      <h4>Lectura de Archivos Secuenciales</h4>
      <p>
        La lectura de archivos secuenciales implica recuperar registros uno tras
        otro en el orden en que se encuentran en el archivo. Para ello, se
        utiliza la sentencia READ.
      </p>
      <div className="codigo">
SELECT ArchivoSecuencial ASSIGN TO 'datos.dat' <br />
ORGANIZATION IS SEQUENTIAL. <br /> <br />
FD RegistroCliente. <br />
01 NumeroCliente PIC 9(5). <br />
01 NombreCliente PIC X(30). <br />
01 DireccionCliente PIC X(50). <br /> <br />
01 RegistroLeido. <br />
<Esp/>COPY RegistroCliente. <br /><br />
PROCEDURE DIVISION. <br />
<Esp/>OPEN INPUT ArchivoSecuencial. <br /><br />
<Esp/>PERFORM UNTIL EOF <br />
<Esp/><Esp/>READ ArchivoSecuencial <br />
<Esp/><Esp/><Esp/>AT END <br />
<Esp/><Esp/><Esp/><Esp/>    MOVE 'Y' TO EOF <br />
<Esp/><Esp/><Esp/>NOT AT END <br />
<Esp/><Esp/><Esp/><Esp/>DISPLAY 'Número de Cliente: ' NumeroCliente <br />
<Esp/><Esp/><Esp/><Esp/>DISPLAY 'Nombre del Cliente: ' NombreCliente <br />
<Esp/><Esp/><Esp/><Esp/>DISPLAY 'Dirección del Cliente: ' DireccionCliente <br />
<Esp/><Esp/>END-READ <br />
END-PERFORM. <br /><br />
CLOSE ArchivoSecuencial. <br />
STOP RUN.
      </div>
      <p>
        En este ejemplo, se abre el archivo secuencial y se lee registro por
        registro hasta que se llega al final del archivo (EOF).
      </p>
      <h4>Escritura en Archivos Secuenciales</h4>
      <p>
        La escritura en archivos secuenciales implica agregar nuevos registros
        al final del archivo existente. Para ello, se utiliza la sentencia
        WRITE.
      </p>
      <div className="codigo">
SELECT ArchivoSecuencial ASSIGN TO 'datos.dat' <br />
<Esp/>ORGANIZATION IS SEQUENTIAL. <br /><br />
FD RegistroCliente. <br />
01 NumeroCliente PIC 9(5). <br />
01 NombreCliente PIC X(30). <br />
01 DireccionCliente PIC X(50). <br /><br />
01 NuevoRegistro. <br />
<Esp/>COPY RegistroCliente. <br /><br />
PROCEDURE DIVISION. <br />
<Esp/>OPEN OUTPUT ArchivoSecuencial. <br /><br />
<Esp/>MOVE 12345 TO NumeroCliente <br />
<Esp/>MOVE 'Juan Pérez' TO NombreCliente <br />
<Esp/>MOVE '123 Main St.' TO DireccionCliente <br /><br />
<Esp/>WRITE NuevoRegistro. <br /><br />
<Esp/>MOVE 54321 TO NumeroCliente <br />
<Esp/>MOVE 'María Rodríguez' TO NombreCliente <br />
<Esp/>MOVE '456 Elm St.' TO DireccionCliente <br /><br />
<Esp/>WRITE NuevoRegistro. <br /><br />
<Esp/>CLOSE ArchivoSecuencial. <br />
<Esp/>STOP RUN.
      </div>
      <p>
        En este ejemplo, se abre el archivo secuencial y se escriben nuevos
        registros en él utilizando la sentencia WRITE.
      </p>
      <h4>Conclusión</h4>
      <p>
        La lectura y escritura en archivos secuenciales son operaciones comunes
        en COBOL cuando se necesita procesar datos en un orden lineal. Estas
        operaciones son fundamentales para la manipulación de datos en
        aplicaciones empresariales y otros escenarios en los que se requiere una
        gestión ordenada de datos. Comprender cómo realizar estas operaciones en
        archivos secuenciales es esencial para desarrollar aplicaciones COBOL
        efectivas.
      </p>
      <h3>5.4. Acceso a Archivos Indexados en COBOL</h3>
      <p>
        Los archivos indexados son una forma eficiente de acceder a registros
        específicos utilizando una clave única. En COBOL, se pueden realizar
        operaciones de lectura, escritura y modificación en archivos indexados.
      </p>
      <h4>Lectura de Archivos Indexados</h4>
      <p>
        La lectura de archivos indexados implica recuperar registros en función
        de una clave única. Para ello, se utiliza la sentencia READ con la
        opción KEY IS.
      </p>
      <div className="codigo">
ORGANIZATION IS INDEXED
SELECT ArchivoAleatorio ASSIGN TO 'datos.dat' <br />
ACCESS MODE IS DYNAMIC <br />
RECORD KEY IS ClaveRegistro. <br />
FD RegistroEmpleado. <br />
01 NumeroEmpleado PIC 9(5). <br /><br />
01 NombreEmpleado PIC X(30). <br />
01 DepartamentoEmpleado PIC X(10). <br />
01 SalarioEmpleado PIC 9(7)V99. <br />
01 RegistroLeido. <br />
<Esp/>COPY RegistroEmpleado. <br /><br />
PROCEDURE DIVISION. <br />
<Esp/>OPEN I-O ArchivoAleatorio. <br /><br />
<Esp/>MOVE 12345 TO NumeroEmpleado <br />
<Esp/>READ ArchivoAleatorio <br /><br />
<Esp/><Esp/>INVALID KEY <br />
<Esp/><Esp/><Esp/>DISPLAY 'Registro no encontrado' <br />
<Esp/><Esp/>NOT INVALID KEY <br />
<Esp/><Esp/><Esp/>DISPLAY 'Número de Empleado: ' NumeroEmpleado <br />
<Esp/><Esp/><Esp/>DISPLAY 'Nombre de Empleado: ' NombreEmpleado <br />
<Esp/><Esp/><Esp/>DISPLAY 'Departamento de Empleado: ' DepartamentoEmpleado <br />
<Esp/><Esp/><Esp/>DISPLAY 'Salario de Empleado: ' SalarioEmpleado <br />
<Esp/>END-READ. <br /><br />
<Esp/>CLOSE ArchivoAleatorio.
<Esp/>STOP RUN.
      </div>
      <p>
        En este ejemplo, se abre el archivo indexado y se utiliza la clave
        principal para buscar y recuperar un registro específico.
      </p>
      <h4>Escritura en Archivos Indexados</h4>
      <p>
        La escritura en archivos indexados implica agregar nuevos registros al
        archivo utilizando una clave única. Para ello, se utiliza la sentencia
        WRITE con la opción KEY IS.
      </p>
      <div className="codigo">
SELECT ArchivoAleatorio ASSIGN TO 'datos.dat'<br />
ORGANIZATION IS INDEXED<br />
ACCESS MODE IS DYNAMIC<br />
RECORD KEY IS ClaveRegistro.<br /><br />
FD RegistroEmpleado.<br />
01 NumeroEmpleado PIC 9(5).<br />
01 NombreEmpleado PIC X(30).<br />
01 DepartamentoEmpleado PIC X(10).<br />
01 SalarioEmpleado PIC 9(7)V99.<br /><br />
01 NuevoRegistro.<br />
<Esp/>COPY RegistroEmpleado.<br /><br />
PROCEDURE DIVISION.<br />
<Esp/>OPEN I-O ArchivoAleatorio.<br /><br />
<Esp/>MOVE 54321 TO NumeroEmpleado<br />
<Esp/>MOVE 'María Rodríguez' TO NombreEmpleado<br />
<Esp/>MOVE 'Ventas' TO DepartamentoEmpleado<br />
<Esp/>MOVE 5000.75 TO SalarioEmpleado<br /><br />
<Esp/>WRITE NuevoRegistro.<br /><br />
<Esp/>CLOSE ArchivoAleatorio.<br />
<Esp/>STOP RUN.
      </div>
      <p>
        En este ejemplo, se abre el archivo indexado y se agrega un nuevo
        registro utilizando una clave única.
      </p>
      <h4>Modificación en Archivos Indexados</h4>
      <p>
        También es posible modificar registros en archivos indexados utilizando
        la sentencia REWRITE.
      </p>
      <div className="codigo">
SELECT ArchivoAleatorio ASSIGN TO 'datos.dat' <br />
ORGANIZATION IS INDEXED <br />
ACCESS MODE IS DYNAMIC <br />
RECORD KEY IS ClaveRegistro. <br /><br />
FD RegistroEmpleado. <br />
01 NumeroEmpleado PIC 9(5). <br />
01 NombreEmpleado PIC X(30). <br />
01 DepartamentoEmpleado PIC X(10). <br />
01 SalarioEmpleado PIC 9(7)V99. <br /><br />
PROCEDURE DIVISION. <br />
<Esp/>OPEN I-O ArchivoAleatorio. <br /><br />
<Esp/>MOVE 12345 TO NumeroEmpleado <br />
<Esp/>READ ArchivoAleatorio <br />
<Esp/><Esp/>INVALID KEY <br />
<Esp/><Esp/><Esp/>DISPLAY 'Registro no encontrado' <br />
<Esp/><Esp/>NOT INVALID KEY <br />
<Esp/><Esp/><Esp/>MOVE 'Juan Pérez' TO NombreEmpleado <br />
<Esp/><Esp/><Esp/>MOVE 'Recursos Humanos' TO DepartamentoEmpleado <br />
<Esp/><Esp/><Esp/>MOVE 6000.00 TO SalarioEmpleado <br />
<Esp/><Esp/><Esp/>REWRITE RegistroEmpleado <br />
<Esp/>END-READ. <br /><br />
<Esp/>CLOSE ArchivoAleatorio. <br />
<Esp/>STOP RUN. <br />
      </div>
      <p>
        En este ejemplo, se abre el archivo indexado, se busca un registro
        específico por clave y se modifica utilizando la sentencia REWRITE.
      </p>
      <h4>Conclusión</h4>
      <p>
        Los archivos indexados son una forma eficiente de acceder a registros en
        COBOL, especialmente cuando se necesita recuperar o modificar registros
        en función de una clave única. Comprender cómo realizar operaciones de
        lectura, escritura y modificación en archivos indexados es esencial para
        el desarrollo de aplicaciones COBOL que manejan datos de manera efectiva
        y precisa, particularmente en aplicaciones empresariales donde la
        gestión de registros es fundamental.
      </p>

      <h3>5.5. Acceso a Archivos Directos (VSAM) en COBOL</h3>
      <p>
        os archivos directos, como los archivos VSAM (Virtual Storage Access
        Method), son una forma eficiente de acceder a registros en COBOL. Estos
        archivos permiten acceder directamente a registros utilizando un número
        relativo de registro en lugar de una clave única. A continuación,
        exploraremos cómo se realiza el acceso a archivos VSAM en COBOL.
      </p>
      <h4>Lectura de Archivos VSAM</h4>
      <p>
        La lectura de archivos VSAM implica recuperar registros utilizando un
        número relativo de registro. Para ello, se utiliza la sentencia READ en
        COBOL.
      </p>
      <div className="codigo">
SELECT ArchivoDirecto ASSIGN TO 'datos.dat' <br />
ORGANIZATION IS RELATIVE. <br /><br />
FD RegistroProducto. <br />
01 CodigoProducto PIC 9(5). <br />
01 NombreProducto PIC X(30). <br />
01 PrecioProducto PIC 9(7)V99. <br /><br />
PROCEDURE DIVISION. <br />
<Esp/>OPEN I-O ArchivoDirecto. <br /><br />
<Esp/>MOVE 3 TO CodigoProducto <br />
<Esp/>READ ArchivoDirecto <br />
<Esp/><Esp/>INVALID KEY <br />
<Esp/><Esp/><Esp/>DISPLAY 'Registro no encontrado' <br />
<Esp/><Esp/>NOT INVALID KEY <br />
<Esp/><Esp/><Esp/>DISPLAY 'Código de Producto: ' CodigoProducto <br />
<Esp/><Esp/><Esp/>DISPLAY 'Nombre de Producto: ' NombreProducto <br />
<Esp/><Esp/><Esp/>DISPLAY 'Precio de Producto: ' PrecioProducto <br />
<Esp/>END-READ. <br /><br />
<Esp/>CLOSE ArchivoDirecto. <br />
<Esp/>STOP RUN.
      </div>
      <p>
        En este ejemplo, se abre el archivo VSAM y se utiliza el número relativo
        de registro (en este caso, 3) para recuperar un registro específico.
      </p>
      <h4>Escritura en Archivos VSAM</h4>
      <p>
        La escritura en archivos VSAM implica agregar nuevos registros al
        archivo utilizando un número relativo de registro. Para ello, se utiliza
        la sentencia WRITE en COBOL.
      </p>
      <div className="codigo">
SELECT ArchivoDirecto ASSIGN TO 'datos.dat' <br />
ORGANIZATION IS RELATIVE. <br /><br />
FD RegistroProducto. <br />
01 CodigoProducto PIC 9(5). <br />
01 NombreProducto PIC X(30). <br />
01 PrecioProducto PIC 9(7)V99. <br /><br />
01 NuevoRegistro. <br />
<Esp/>COPY RegistroProducto. <br /><br />
PROCEDURE DIVISION. <br />
<Esp/>OPEN OUTPUT ArchivoDirecto. <br /><br />
<Esp/>MOVE 4 TO CodigoProducto <br />
<Esp/>MOVE 'Nuevo Producto' TO NombreProducto <br />
<Esp/>MOVE 99.99 TO PrecioProducto <br /><br />
<Esp/>WRITE NuevoRegistro. <br /><br />
<Esp/>CLOSE ArchivoDirecto. <br />
<Esp/>STOP RUN.
      </div>
      <p>
        En este ejemplo, se abre el archivo VSAM y se utiliza un número relativo
        de registro (en este caso, 4) para agregar un nuevo registro al archivo.
      </p>
      <h4>Modificación en Archivos VSAM</h4>
      <p>
        La modificación en archivos VSAM implica actualizar registros utilizando
        la sentencia REWRITE en COBOL.
      </p>
      <div className="codigo">
SELECT ArchivoDirecto ASSIGN TO 'datos.dat' <br />
ORGANIZATION IS RELATIVE. <br />
 <br />
FD RegistroProducto. <br />
01 CodigoProducto PIC 9(5). <br />
01 NombreProducto PIC X(30). <br />
01 PrecioProducto PIC 9(7)V99. <br /><br />
PROCEDURE DIVISION. <br />
<Esp/>OPEN I-O ArchivoDirecto. <br /><br />
<Esp/>MOVE 2 TO CodigoProducto <br />
<Esp/>READ ArchivoDirecto <br />
<Esp/><Esp/>INVALID KEY <br />
<Esp/><Esp/><Esp/>DISPLAY 'Registro no encontrado' <br />
<Esp/><Esp/>NOT INVALID KEY <br />
<Esp/><Esp/><Esp/>MOVE 'Producto Actualizado' TO NombreProducto <br />
<Esp/><Esp/><Esp/>MOVE 49.99 TO PrecioProducto <br />
<Esp/><Esp/><Esp/>REWRITE RegistroProducto <br />
<Esp/>END-READ. <br /><br />
<Esp/>CLOSE ArchivoDirecto. <br />
<Esp/>STOP RUN.
      </div>
      <p>
        En este ejemplo, se abre el archivo VSAM y se utiliza un número relativo
        de registro (en este caso, 2) para buscar un registro y modificarlo
        utilizando la sentencia REWRITE.
      </p>
      <h4>Conclusión</h4>
      <p>
        Los archivos VSAM son una forma eficiente de acceder a registros en
        COBOL cuando se necesita recuperar, escribir o modificar registros
        utilizando un número relativo de registro en lugar de una clave única.
        Comprender cómo realizar operaciones de lectura, escritura y
        modificación en archivos VSAM es esencial para el desarrollo de
        aplicaciones COBOL que gestionan datos de manera eficiente y precisa,
        particularmente en aplicaciones empresariales donde se requiere acceso
        directo a registros.
      </p>
    </article>
  );
};
export { Modulo5 };
