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
        ORGANIZATION IS INDEXED SELECT ArchivoAleatorio ASSIGN TO 'datos.dat'{" "}
        <br />
        ACCESS MODE IS DYNAMIC <br />
        RECORD KEY IS ClaveRegistro. <br />
        FD RegistroEmpleado. <br />
        01 NumeroEmpleado PIC 9(5). <br />
        <br />
        01 NombreEmpleado PIC X(30). <br />
        01 DepartamentoEmpleado PIC X(10). <br />
        01 SalarioEmpleado PIC 9(7)V99. <br />
        01 RegistroLeido. <br />
        <Esp />
        COPY RegistroEmpleado. <br />
        <br />
        PROCEDURE DIVISION. <br />
        <Esp />
        OPEN I-O ArchivoAleatorio. <br />
        <br />
        <Esp />
        MOVE 12345 TO NumeroEmpleado <br />
        <Esp />
        READ ArchivoAleatorio <br />
        <br />
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
        DISPLAY 'Número de Empleado: ' NumeroEmpleado <br />
        <Esp />
        <Esp />
        <Esp />
        DISPLAY 'Nombre de Empleado: ' NombreEmpleado <br />
        <Esp />
        <Esp />
        <Esp />
        DISPLAY 'Departamento de Empleado: ' DepartamentoEmpleado <br />
        <Esp />
        <Esp />
        <Esp />
        DISPLAY 'Salario de Empleado: ' SalarioEmpleado <br />
        <Esp />
        END-READ. <br />
        <br />
        <Esp />
        CLOSE ArchivoAleatorio.
        <Esp />
        STOP RUN.
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
        SELECT ArchivoAleatorio ASSIGN TO 'datos.dat'
        <br />
        ORGANIZATION IS INDEXED
        <br />
        ACCESS MODE IS DYNAMIC
        <br />
        RECORD KEY IS ClaveRegistro.
        <br />
        <br />
        FD RegistroEmpleado.
        <br />
        01 NumeroEmpleado PIC 9(5).
        <br />
        01 NombreEmpleado PIC X(30).
        <br />
        01 DepartamentoEmpleado PIC X(10).
        <br />
        01 SalarioEmpleado PIC 9(7)V99.
        <br />
        <br />
        01 NuevoRegistro.
        <br />
        <Esp />
        COPY RegistroEmpleado.
        <br />
        <br />
        PROCEDURE DIVISION.
        <br />
        <Esp />
        OPEN I-O ArchivoAleatorio.
        <br />
        <br />
        <Esp />
        MOVE 54321 TO NumeroEmpleado
        <br />
        <Esp />
        MOVE 'María Rodríguez' TO NombreEmpleado
        <br />
        <Esp />
        MOVE 'Ventas' TO DepartamentoEmpleado
        <br />
        <Esp />
        MOVE 5000.75 TO SalarioEmpleado
        <br />
        <br />
        <Esp />
        WRITE NuevoRegistro.
        <br />
        <br />
        <Esp />
        CLOSE ArchivoAleatorio.
        <br />
        <Esp />
        STOP RUN.
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
        RECORD KEY IS ClaveRegistro. <br />
        <br />
        FD RegistroEmpleado. <br />
        01 NumeroEmpleado PIC 9(5). <br />
        01 NombreEmpleado PIC X(30). <br />
        01 DepartamentoEmpleado PIC X(10). <br />
        01 SalarioEmpleado PIC 9(7)V99. <br />
        <br />
        PROCEDURE DIVISION. <br />
        <Esp />
        OPEN I-O ArchivoAleatorio. <br />
        <br />
        <Esp />
        MOVE 12345 TO NumeroEmpleado <br />
        <Esp />
        READ ArchivoAleatorio <br />
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
        MOVE 'Juan Pérez' TO NombreEmpleado <br />
        <Esp />
        <Esp />
        <Esp />
        MOVE 'Recursos Humanos' TO DepartamentoEmpleado <br />
        <Esp />
        <Esp />
        <Esp />
        MOVE 6000.00 TO SalarioEmpleado <br />
        <Esp />
        <Esp />
        <Esp />
        REWRITE RegistroEmpleado <br />
        <Esp />
        END-READ. <br />
        <br />
        <Esp />
        CLOSE ArchivoAleatorio. <br />
        <Esp />
        STOP RUN. <br />
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
