import { Esp } from "../espacio";
import Red from "../Colors/Red";
import Grey from "../Colors/Grey";
const Mod5_4 = () => {
  return (
    <section id="5.4">
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
        <Red>ORGANIZATION IS INDEXED SELECT</Red> ArchivoAleatorio <Red>ASSIGN TO</Red> <Grey>'datos.dat'</Grey>{" "}
        <br />
        <Red>ACCESS MODE IS DYNAMIC</Red> <br />
        <Red>RECORD KEY IS</Red> ClaveRegistro. <br />
        <Red>FD</Red> RegistroEmpleado. <br />
        01 NumeroEmpleado <Red>PIC</Red> 9(5). <br />
        <br />
        01 NombreEmpleado <Red>PIC</Red> X(30). <br />
        01 DepartamentoEmpleado <Red>PIC</Red> X(10). <br />
        01 SalarioEmpleado <Red>PIC</Red> 9(7)V99. <br />
        01 RegistroLeido. <br />
        <Esp />
        <Red>COPY</Red> RegistroEmpleado. <br />
        <br />
        <Red>PROCEDURE DIVISION</Red>. <br />
        <Esp />
        <Red>OPEN I-O</Red> ArchivoAleatorio. <br />
        <br />
        <Esp />
        <Red>MOVE</Red> 12345 <Red>TO</Red> NumeroEmpleado <br />
        <Esp />
        <Red>READ</Red> ArchivoAleatorio <br />
        <br />
        <Esp />
        <Esp />
        <Red>INVALID KEY </Red><br />
        <Esp />
        <Esp />
        <Esp />
        <Red>DISPLAY</Red> 'Registro no encontrado' <br />
        <Esp />
        <Esp />
        NOT INVALID KEY <br />
        <Esp />
        <Esp />
        <Esp />
        <Red>DISPLAY</Red> <Grey>'Número de Empleado: '</Grey> NumeroEmpleado <br />
        <Esp />
        <Esp />
        <Esp />
        <Red>DISPLAY</Red> <Grey>'Nombre de Empleado: '</Grey> NombreEmpleado <br />
        <Esp />
        <Esp />
        <Esp />
        <Red>DISPLAY</Red> <Grey>'Departamento de Empleado: '</Grey> DepartamentoEmpleado <br />
        <Esp />
        <Esp />
        <Esp />
        <Red>DISPLAY</Red> <Grey>'Salario de Empleado: '</Grey> SalarioEmpleado <br />
        <Esp />
        <Red>END-READ</Red>. <br />
        <br />
        <Esp />
        <Red>CLOSE</Red> ArchivoAleatorio.
        <Esp />
        <Red>STOP RUN</Red>.
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
        <Red>SELECT</Red> ArchivoAleatorio <Red>ASSIGN TO</Red> <Grey>'datos.dat'</Grey>
        <br />
        <Red>ORGANIZATION IS INDEXED</Red>
        <br />
        <Red>ACCESS MODE IS DYNAMIC</Red>
        <br />
        <Red>RECORD KEY IS</Red> ClaveRegistro.
        <br />
        <br />
        <Red>FD</Red> RegistroEmpleado.
        <br />
        01 NumeroEmpleado <Red>PIC</Red> 9(5).
        <br />
        01 NombreEmpleado <Red>PIC</Red> X(30).
        <br />
        01 DepartamentoEmpleado <Red>PIC</Red> X(10).
        <br />
        01 SalarioEmpleado <Red>PIC</Red> 9(7)V99.
        <br />
        <br />
        01 NuevoRegistro.
        <br />
        <Esp />
        <Red>COPY</Red> RegistroEmpleado.
        <br />
        <br />
        <Red>PROCEDURE DIVISION</Red>.
        <br />
        <Esp />
        <Red>OPEN I-O</Red> ArchivoAleatorio.
        <br />
        <br />
        <Esp />
        <Red>MOVE</Red> 54321<Red> TO </Red>NumeroEmpleado
        <br />
        <Esp />
        <Red>MOVE</Red> <Grey>'María Rodríguez'</Grey><Red> TO </Red>NombreEmpleado
        <br />
        <Esp />
        <Red>MOVE</Red> <Grey>'Ventas'</Grey><Red> TO </Red>DepartamentoEmpleado
        <br />
        <Esp />
        <Red>MOVE</Red> 5000.75<Red> TO </Red>SalarioEmpleado
        <br />
        <br />
        <Esp />
        <Red>WRITE</Red> NuevoRegistro.
        <br />
        <br />
        <Esp />
        <Red>CLOSE</Red> ArchivoAleatorio.
        <br />
        <Esp />
        <Red>STOP RUN</Red>.
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
        <Red>SELECT</Red> ArchivoAleatorio <Red>ASSIGN TO</Red> <Grey>'datos.dat'</Grey> <br />
        <Red>ORGANIZATION IS INDEXED</Red> <br />
        <Red>ACCESS MODE IS DYNAMIC</Red> <br />
        <Red>RECORD KEY IS</Red> ClaveRegistro. <br />
        <br />
        <Red>FD</Red> RegistroEmpleado. <br />
        01 NumeroEmpleado <Red>PIC</Red> 9(5). <br />
        01 NombreEmpleado <Red>PIC</Red> X(30). <br />
        01 DepartamentoEmpleado <Red>PIC</Red> X(10). <br />
        01 SalarioEmpleado <Red>PIC</Red> 9(7)V99. <br />
        <br />
        <Red>PROCEDURE DIVISION</Red>. <br />
        <Esp />
        <Red>OPEN I-O</Red> ArchivoAleatorio. <br />
        <br />
        <Esp />
        <Red>MOVE</Red> 12345<Red> TO </Red>NumeroEmpleado <br />
        <Esp />
        <Red>READ</Red> ArchivoAleatorio <br />
        <Esp />
        <Esp />
        <Red>INVALID KEY</Red> <br />
        <Esp />
        <Esp />
        <Esp />
        <Red>DISPLAY</Red><Grey> <Grey>'Registro no encontrado'</Grey></Grey> <br />
        <Esp />
        <Esp />
        <Red>NOT INVALID KEY</Red> <br />
        <Esp />
        <Esp />
        <Esp />
        <Red>MOVE</Red> <Grey>'Juan Pérez'</Grey><Red> TO </Red>NombreEmpleado <br />
        <Esp />
        <Esp />
        <Esp />
        <Red>MOVE</Red> <Grey>'Recursos Humanos'</Grey><Red> TO </Red>DepartamentoEmpleado <br />
        <Esp />
        <Esp />
        <Esp />
        <Red>MOVE</Red> 6000.00<Red> TO </Red>SalarioEmpleado <br />
        <Esp />
        <Esp />
        <Esp />
        <Red>REWRITE</Red> RegistroEmpleado <br />
        <Esp />
        <Red>END-READ</Red>. <br />
        <br />
        <Esp />
        <Red>CLOSE</Red> ArchivoAleatorio. <br />
        <Esp />
        <Red>STOP RUN</Red>. <br />
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
    </section>
  );
};

export { Mod5_4 };
