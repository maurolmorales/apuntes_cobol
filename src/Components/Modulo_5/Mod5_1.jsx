const Mod5_1 = ({ Cuadro, Red, Grey, Esp, Com }) => {
  return (<section id="5.1">
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
      <Red>SELECT</Red> ArchivoSecuencial <Red>ASSIGN TO</Red> <Grey>'datos.dat'</Grey> <br />
      <Red>ORGANIZATION IS SEQUENTIAL</Red>.
      </div>
      <h4>Archivos de Acceso Aleatorio</h4>
      <p>
        Los archivos de acceso aleatorio permiten acceder a registros
        específicos mediante una clave única. Estos archivos son útiles cuando
        se necesita recuperar registros de manera eficiente en función de un
        valor clave.
      </p>
      <div className="codigo">
      <Red>SELECT</Red> ArchivoAleatorio <Red>ASSIGN TO</Red> <Grey>'datos.dat'</Grey> <br />
      <Esp/><Red>ORGANIZATION IS INDEXED</Red> <br />
      <Esp/><Red>ACCESS MODE IS DYNAMIC</Red> <br />
      <Esp/><Red>RECORD KEY IS</Red> ClaveRegistro.
      </div>
      <h4>Archivos de Acceso Directo</h4>
      <p>
        Los archivos de acceso directo son similares a los archivos de acceso
        aleatorio pero permiten un acceso más rápido a los registros. Se
        organizan en bloques y se accede a los bloques en lugar de a registros
        individuales.
      </p>
      <div className="codigo">
      <Red>SELECT</Red> ArchivoDirecto <Red>ASSIGN TO</Red> <Grey>'datos.dat'</Grey> <br />
      <Red>ORGANIZATION IS RELATIVE</Red>.
      </div>
      <h4>Archivos de Acceso Dinámico</h4>
      <p>
        Los archivos de acceso dinámico permiten el acceso a registros en
        función de su posición en el archivo. Esto significa que puedes acceder
        a registros por número de registro en lugar de una clave única.
      </p>
      <div className="codigo">
        <Red>SELECT</Red> ArchivoDinamico <Red>ASSIGN TO</Red> <Grey>'datos.dat'</Grey> <br />
        <Red>ORGANIZATION IS LINE SEQUENTIAL</Red> <br />
        <Red>ACCESS MODE IS DYNAMIC</Red>.
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
  </section>);
};

export { Mod5_1 };
