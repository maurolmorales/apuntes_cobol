const Mod5_2 = ({ Cuadro, Red, Grey, Esp, Com }) => {
  return (
    <section id="5.2">
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
        <Red>SELECT</Red> ArchivoSecuencial <Red>ASSIGN TO</Red> <Grey>'datos.dat'</Grey> <br />
        <Red>ORGANIZATION IS SEQUENTIAL</Red>.
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
        <Red>FD</Red> RegistroCliente. <br />
        01 NumeroCliente <Red>PIC</Red> 9(5). <br />
        01 NombreCliente <Red>PIC</Red> X(30). <br />
        01 DireccionCliente <Red>PIC</Red> X(50).
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
        <Red>FD</Red> ArchivoAleatorio. <br />
        01 Registro. <br />
        <Esp />
        02 NumeroEmpleado <Red>PIC</Red> 9(5). <br />
        <Esp />
        02 NombreEmpleado <Red>PIC</Red> X(30). <br />
        <Esp />
        02 Departamento <Red>PIC</Red> X(10). <br />
        <Esp />
        02 Salario <Red>PIC</Red> 9(7)V99. <br />
        <Esp />
        02 <Red>KEY IS</Red> NumeroEmpleado.
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
    </section>
  );
};

export { Mod5_2 };
