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
        SELECT ArchivoSecuencial ASSIGN TO 'datos.dat' <br />
        ORGANIZATION IS SEQUENTIAL. <br /> <br />
        FD RegistroCliente. <br />
        01 NumeroCliente PIC 9(5). <br />
        01 NombreCliente PIC X(30). <br />
        01 DireccionCliente PIC X(50). <br /> <br />
        01 RegistroLeido. <br />
        <Esp />
        COPY RegistroCliente. <br />
        <br />
        PROCEDURE DIVISION. <br />
        <Esp />
        OPEN INPUT ArchivoSecuencial. <br />
        <br />
        <Esp />
        PERFORM UNTIL EOF <br />
        <Esp />
        <Esp />
        READ ArchivoSecuencial <br />
        <Esp />
        <Esp />
        <Esp />
        AT END <br />
        <Esp />
        <Esp />
        <Esp />
        <Esp /> MOVE 'Y' TO EOF <br />
        <Esp />
        <Esp />
        <Esp />
        NOT AT END <br />
        <Esp />
        <Esp />
        <Esp />
        <Esp />
        DISPLAY 'Número de Cliente: ' NumeroCliente <br />
        <Esp />
        <Esp />
        <Esp />
        <Esp />
        DISPLAY 'Nombre del Cliente: ' NombreCliente <br />
        <Esp />
        <Esp />
        <Esp />
        <Esp />
        DISPLAY 'Dirección del Cliente: ' DireccionCliente <br />
        <Esp />
        <Esp />
        END-READ <br />
        END-PERFORM. <br />
        <br />
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
        <Esp />
        ORGANIZATION IS SEQUENTIAL. <br />
        <br />
        FD RegistroCliente. <br />
        01 NumeroCliente PIC 9(5). <br />
        01 NombreCliente PIC X(30). <br />
        01 DireccionCliente PIC X(50). <br />
        <br />
        01 NuevoRegistro. <br />
        <Esp />
        COPY RegistroCliente. <br />
        <br />
        PROCEDURE DIVISION. <br />
        <Esp />
        OPEN OUTPUT ArchivoSecuencial. <br />
        <br />
        <Esp />
        MOVE 12345 TO NumeroCliente <br />
        <Esp />
        MOVE 'Juan Pérez' TO NombreCliente <br />
        <Esp />
        MOVE '123 Main St.' TO DireccionCliente <br />
        <br />
        <Esp />
        WRITE NuevoRegistro. <br />
        <br />
        <Esp />
        MOVE 54321 TO NumeroCliente <br />
        <Esp />
        MOVE 'María Rodríguez' TO NombreCliente <br />
        <Esp />
        MOVE '456 Elm St.' TO DireccionCliente <br />
        <br />
        <Esp />
        WRITE NuevoRegistro. <br />
        <br />
        <Esp />
        CLOSE ArchivoSecuencial. <br />
        <Esp />
        STOP RUN.
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
