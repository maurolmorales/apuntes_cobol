import { Esp } from "../espacio";
import Red from "../Colors/Red";
import Grey from "../Colors/Grey";
const Mod5_3 = () => {
  return (
    <section id="5.3">
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
        <Red>SELECT</Red> ArchivoSecuencial <Red>ASSIGN TO</Red> <Grey>'datos.dat'</Grey> <br />
        <Red>ORGANIZATION IS SEQUENTIAL</Red>. <br /> <br />
        <Red>FD</Red> RegistroCliente. <br />
        01 NumeroCliente <Red>PIC</Red> 9(5). <br />
        01 NombreCliente <Red>PIC</Red> X(30). <br />
        01 DireccionCliente <Red>PIC</Red> X(50). <br /> <br />
        01 RegistroLeido. <br />
        <Esp />
        <Red>COPY</Red> RegistroCliente. <br />
        <br />
        <Red>PROCEDURE DIVISION</Red>. <br />
        <Esp />
        <Red>OPEN INPUT</Red> ArchivoSecuencial. <br />
        <br />
        <Esp />
        <Red>PERFORM UNTIL EOF</Red> <br />
        <Esp />
        <Esp />
        <Red>READ</Red> ArchivoSecuencial <br />
        <Esp />
        <Esp />
        <Esp />
        <Red>AT END</Red> <br />
        <Esp />
        <Esp />
        <Esp />
        <Esp /> <Red>MOVE</Red> <Grey>'Y'</Grey> <Red>TO EOF</Red> <br />
        <Esp />
        <Esp />
        <Esp />
        <Red>NOT AT END</Red> <br />
        <Esp />
        <Esp />
        <Esp />
        <Esp />
        <Red>DISPLAY</Red> <Grey>'Número de Cliente: '</Grey> NumeroCliente <br />
        <Esp />
        <Esp />
        <Esp />
        <Esp />
        <Red>DISPLAY</Red> <Grey>'Nombre del Cliente: '</Grey> NombreCliente <br />
        <Esp />
        <Esp />
        <Esp />
        <Esp />
        <Red>DISPLAY</Red> <Grey>'Dirección del Cliente: '</Grey> DireccionCliente <br />
        <Esp />
        <Esp />
        <Red>END-READ</Red> <br />
        <Red>END-PERFORM</Red>. <br />
        <br />
        <Red>CLOSE</Red> ArchivoSecuencial. <br />
        <Red>STOP RUN</Red>.
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
        <Red>SELECT</Red> ArchivoSecuencial <Red>ASSIGN TO</Red> <Grey>'datos.dat'</Grey> <br />
        <Esp />
        <Red>ORGANIZATION IS SEQUENTIAL</Red>. <br />
        <br />
        <Red>FD</Red> RegistroCliente. <br />
        01 NumeroCliente <Red>PIC</Red> 9(5). <br />
        01 NombreCliente <Red>PIC</Red> X(30). <br />
        01 DireccionCliente <Red>PIC</Red> X(50). <br />
        <br />
        01 NuevoRegistro. <br />
        <Esp />
        <Red>COPY</Red> RegistroCliente. <br />
        <br />
        <Red>PROCEDURE DIVISION</Red>. <br />
        <Esp />
        <Red>OPEN OUTPUT</Red> ArchivoSecuencial. <br />
        <br />
        <Esp />
        <Red>MOVE</Red> 12345 <Red>TO</Red> NumeroCliente <br />
        <Esp />
        <Red>MOVE</Red> <Grey>'Juan Pérez'</Grey> <Red>TO</Red> NombreCliente <br />
        <Esp />
        <Red>MOVE</Red> <Grey>'123 Main St.'</Grey> <Red>TO</Red> DireccionCliente <br />
        <br />
        <Esp />
        <Red>WRITE</Red> NuevoRegistro. <br />
        <br />
        <Esp />
        <Red>MOVE</Red> 54321 <Red>TO</Red> NumeroCliente <br />
        <Esp />
        <Red>MOVE</Red> <Grey>'María Rodríguez'</Grey> <Red>TO</Red> NombreCliente <br />
        <Esp />
        <Red>MOVE</Red> <Grey>'456 Elm St.'</Grey> <Red>TO</Red> DireccionCliente <br />
        <br />
        <Esp />
        <Red>WRITE</Red> NuevoRegistro. <br />
        <br />
        <Esp />
        <Red>CLOSE</Red> ArchivoSecuencial. <br />
        <Esp />
        <Red>STOP RUN</Red>.
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
    </section>
  );
};

export { Mod5_3 };
