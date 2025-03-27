import { Esp } from "../espacio";
import Red from "../Colors/Red";
import Grey from "../Colors/Grey";
const Mod5_5 = () => {
  return (
    <section id="5.5">
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
        ORGANIZATION IS RELATIVE. <br />
        <br />
        FD RegistroProducto. <br />
        01 CodigoProducto PIC 9(5). <br />
        01 NombreProducto PIC X(30). <br />
        01 PrecioProducto PIC 9(7)V99. <br />
        <br />
        PROCEDURE DIVISION. <br />
        <Esp />
        OPEN I-O ArchivoDirecto. <br />
        <br />
        <Esp />
        MOVE 3 TO CodigoProducto <br />
        <Esp />
        READ ArchivoDirecto <br />
        <Esp />
        <Esp />
        INVALID KEY <br />
        <Esp />
        <Esp />
        <Esp />
        DISPLAY 'Registro no encontrado' <br />
        <Esp />
        <Esp />
        NOT INVALID KEY <br />
        <Esp />
        <Esp />
        <Esp />
        DISPLAY 'Código de Producto: ' CodigoProducto <br />
        <Esp />
        <Esp />
        <Esp />
        DISPLAY 'Nombre de Producto: ' NombreProducto <br />
        <Esp />
        <Esp />
        <Esp />
        DISPLAY 'Precio de Producto: ' PrecioProducto <br />
        <Esp />
        END-READ. <br />
        <br />
        <Esp />
        CLOSE ArchivoDirecto. <br />
        <Esp />
        STOP RUN.
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
        ORGANIZATION IS RELATIVE. <br />
        <br />
        FD RegistroProducto. <br />
        01 CodigoProducto PIC 9(5). <br />
        01 NombreProducto PIC X(30). <br />
        01 PrecioProducto PIC 9(7)V99. <br />
        <br />
        01 NuevoRegistro. <br />
        <Esp />
        COPY RegistroProducto. <br />
        <br />
        PROCEDURE DIVISION. <br />
        <Esp />
        OPEN OUTPUT ArchivoDirecto. <br />
        <br />
        <Esp />
        MOVE 4 TO CodigoProducto <br />
        <Esp />
        MOVE 'Nuevo Producto' TO NombreProducto <br />
        <Esp />
        MOVE 99.99 TO PrecioProducto <br />
        <br />
        <Esp />
        WRITE NuevoRegistro. <br />
        <br />
        <Esp />
        CLOSE ArchivoDirecto. <br />
        <Esp />
        STOP RUN.
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
        01 PrecioProducto PIC 9(7)V99. <br />
        <br />
        PROCEDURE DIVISION. <br />
        <Esp />
        OPEN I-O ArchivoDirecto. <br />
        <br />
        <Esp />
        MOVE 2 TO CodigoProducto <br />
        <Esp />
        READ ArchivoDirecto <br />
        <Esp />
        <Esp />
        INVALID KEY <br />
        <Esp />
        <Esp />
        <Esp />
        DISPLAY 'Registro no encontrado' <br />
        <Esp />
        <Esp />
        NOT INVALID KEY <br />
        <Esp />
        <Esp />
        <Esp />
        MOVE 'Producto Actualizado' TO NombreProducto <br />
        <Esp />
        <Esp />
        <Esp />
        MOVE 49.99 TO PrecioProducto <br />
        <Esp />
        <Esp />
        <Esp />
        REWRITE RegistroProducto <br />
        <Esp />
        END-READ. <br />
        <br />
        <Esp />
        CLOSE ArchivoDirecto. <br />
        <Esp />
        STOP RUN.
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
    </section>
  );
};

export { Mod5_5 };
