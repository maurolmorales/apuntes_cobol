const Mod5_5 = ({ Cuadro, Red, Grey, Esp, Com }) => {
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
        <Red>SELECT </Red>ArchivoDirecto <Red>ASSIGN<Red> TO </Red></Red><Grey>'datos.dat'</Grey> <br />
        <Red>ORGANIZATION IS RELATIVE</Red>. <br />
        <br />
        <Red>FD </Red>RegistroProducto. <br />
        01 CodigoProducto<Red> PIC </Red>9(5). <br />
        01 NombreProducto<Red> PIC </Red>X(30). <br />
        01 PrecioProducto<Red> PIC </Red>9(7)V99. <br />
        <br />
        <Red>PROCEDURE DIVISION</Red>. <br />
        <Esp />
        <Red>OPEN I-O </Red>ArchivoDirecto. <br />
        <br />
        <Esp />
        <Red>MOVE </Red>3<Red> TO </Red>CodigoProducto <br />
        <Esp />
        <Red>READ </Red>ArchivoDirecto <br />
        <Esp />
        <Esp />
        <Red>INVALID KEY</Red> <br />
        <Esp />
        <Esp />
        <Esp />
        <Red>DISPLAY </Red>'Registro no encontrado' <br />
        <Esp />
        <Esp />
        <Red>NOT INVALID KEY </Red><br />
        <Esp />
        <Esp />
        <Esp />
        <Red>DISPLAY </Red><Grey>'Código de Producto: '</Grey> CodigoProducto <br />
        <Esp />
        <Esp />
        <Esp />
        <Red>DISPLAY </Red><Grey>'Nombre de Producto: '</Grey> NombreProducto <br />
        <Esp />
        <Esp />
        <Esp />
        <Red>DISPLAY </Red><Grey>'Precio de Producto: '</Grey> PrecioProducto <br />
        <Esp />
        <Red>END-READ</Red>. <br />
        <br />
        <Esp />
        <Red>CLOSE </Red>ArchivoDirecto. <br />
        <Esp />
        <Red>STOP RUN</Red>.
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
        <Red>SELECT </Red>ArchivoDirecto <Red>ASSIGN<Red> TO </Red></Red><Grey>'datos.dat'</Grey> <br />
        <Red>ORGANIZATION IS RELATIVE</Red>. <br />
        <br />
        <Red>FD </Red>RegistroProducto. <br />
        01 CodigoProducto<Red> PIC </Red>9(5). <br />
        01 NombreProducto<Red> PIC </Red>X(30). <br />
        01 PrecioProducto<Red> PIC </Red>9(7)V99. <br />
        <br />
        01 NuevoRegistro. <br />
        <Esp />
        <Red>COPY</Red> RegistroProducto. <br />
        <br />
        <Red>PROCEDURE DIVISION</Red>. <br />
        <Esp />
        <Red>OPEN OUTPUT </Red>ArchivoDirecto. <br />
        <br />
        <Esp />
        <Red>MOVE </Red>4<Red> TO </Red>CodigoProducto <br />
        <Esp />
        <Red>MOVE </Red>'Nuevo Producto'<Red> TO </Red>NombreProducto <br />
        <Esp />
        <Red>MOVE </Red>99.99<Red> TO </Red>PrecioProducto <br />
        <br />
        <Esp />
        <Red>WRITE </Red>NuevoRegistro. <br />
        <br />
        <Esp />
        <Red>CLOSE </Red>ArchivoDirecto. <br />
        <Esp />
        <Red>STOP RUN</Red>.
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
        <Red>SELECT </Red>ArchivoDirecto <Red>ASSIGN<Red> TO </Red></Red><Grey>'datos.dat'</Grey> <br />
        <Red>ORGANIZATION IS RELATIVE</Red>. <br />
        <br />
        <Red>FD </Red>RegistroProducto. <br />
        01 CodigoProducto<Red> PIC </Red>9(5). <br />
        01 NombreProducto<Red> PIC </Red>X(30). <br />
        01 PrecioProducto<Red> PIC </Red>9(7)V99. <br />
        <br />
        <Red>PROCEDURE DIVISION</Red>. <br />
        <Esp />
        <Red>OPEN I-O </Red>ArchivoDirecto. <br />
        <br />
        <Esp />
        <Red>MOVE </Red>2<Red> TO </Red>CodigoProducto <br />
        <Esp />
        <Red>READ </Red>ArchivoDirecto <br />
        <Esp />
        <Esp />
        <Red>INVALID KEY </Red><br />
        <Esp />
        <Esp />
        <Esp />
        <Red>DISPLAY </Red><Grey>'Registro no encontrado' </Grey><br />
        <Esp />
        <Esp />
        <Red>NOT INVALID KEY </Red><br />
        <Esp />
        <Esp />
        <Esp />
        <Red>MOVE </Red><Grey>'Producto Actualizado'</Grey><Red> TO </Red>NombreProducto <br />
        <Esp />
        <Esp />
        <Esp />
        <Red>MOVE </Red>49.99<Red> TO </Red>PrecioProducto <br />
        <Esp />
        <Esp />
        <Esp />
        <Red>REWRITE</Red> RegistroProducto <br />
        <Esp />
        <Red>END-READ</Red>. <br />
        <br />
        <Esp />
        <Red>CLOSE </Red>ArchivoDirecto. <br />
        <Esp />
        <Red>STOP RUN</Red>.
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
      <hr />
    </section>
  );
};

export { Mod5_5 };
