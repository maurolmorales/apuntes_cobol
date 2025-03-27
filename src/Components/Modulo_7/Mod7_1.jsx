import { Esp } from "../espacio";
import Red from "../Colors/Red";
import Grey from "../Colors/Grey";
const Mod7_1 = () => {
  return (
    <section id="7.1">
      <h3>7.1. Manipulación de Cadenas de Texto en COBOL</h3>
      <p>
        La manipulación de cadenas de texto es una tarea común en la
        programación, y COBOL ofrece diversas herramientas y técnicas para
        trabajar con cadenas de caracteres.{" "}
      </p>
      <h4>Declaración de Variables de Cadena</h4>
      <p>
        Para manipular cadenas de texto en COBOL, primero debes declarar las
        variables que contendrán las cadenas. Esto se hace en la sección DATA
        DIVISION.{" "}
      </p>
      <div className="codigo">
        DATA DIVISION. <br />
        WORKING-STORAGE SECTION. <br />
        01 Cadena1 PIC X(20) VALUE 'Hola, ' <br />
        01 Cadena2 PIC X(20) VALUE 'Mundo!' <br />
        01 Resultado PIC X(40). <br />
      </div>
      <p>
        En este ejemplo, hemos declarado tres variables de cadena: Cadena1,
        Cadena2 y Resultado. Las variables Cadena1 y Cadena2 contienen cadenas
        de texto predefinidas, mientras que Resultado se utilizará para
        almacenar el resultado de las manipulaciones de cadenas.
      </p>
      <h4>Concatenación de Cadenas</h4>
      <p>
        La concatenación de cadenas es la operación de unir dos o más cadenas en
        una sola cadena más larga. En COBOL, esto se puede lograr utilizando la
        sentencia MOVE o el operador +.
      </p>
      <p>Usando la sentencia MOVE:</p>
      <div className="codigo">
        MOVE Cadena1 TO Resultado. <br />
        MOVE ' ' TO Resultado(7:1). <br />
        MOVE Cadena2 TO Resultado(8:6). <br />
      </div>
      <p>Usando el operador +:</p>
      <div className="codigo">MOVE Cadena1 + ' ' + Cadena2 TO Resultado.</div>
      <p>Ambos ejemplos producirán Resultado con el valor "Hola, Mundo!".</p>
      <h4>Longitud de Cadenas</h4>
      <p>
        Para determinar la longitud de una cadena en COBOL, puedes utilizar la
        función LENGTH OF.
      </p>
      <div className="codigo">
        MOVE LENGTH OF Cadena1 TO Longitud. <br />
        DISPLAY 'La longitud de Cadena1 es: ' Longitud.
      </div>
      <p>Este código calculará y mostrará la longitud de Cadena1.</p>
      <h4>Extracción de Subcadenas</h4>
      <p>
        Puedes extraer subcadenas de una cadena más larga utilizando la técnica
        de "subíndices".
      </p>
      <div className="codigo">
        MOVE Cadena1(7:5) TO Subcadena. <br />
        DISPLAY 'Subcadena: ' Subcadena.
      </div>
      <p>
        En este ejemplo, estamos extrayendo una subcadena de Cadena1, comenzando
        en la posición 7 y con una longitud de 5 caracteres.
      </p>
      <h4>Búsqueda y Reemplazo</h4>
      <p>
        COBOL también permite buscar y reemplazar texto dentro de una cadena.
        Esto se puede hacer utilizando las funciones INSPECT y REPLACE.
      </p>
      <div className="codigo">
        INSPECT Cadena1 TALLYING NumReemplazos FOR ALL 'a' REPLACING ALL 'a' BY
        'X'. <br />
        DISPLAY 'Cadena1 con reemplazos: ' Cadena1. <br />
        DISPLAY 'Número de reemplazos realizados: ' NumReemplazos. <br />
      </div>
      <p>
        Este código busca todas las instancias de 'a' en Cadena1 y las reemplaza
        por 'X'.
      </p>
      <h4>Conclusión</h4>
      <p>
        La manipulación de cadenas de texto es una parte fundamental de la
        programación en COBOL. Mediante la declaración de variables de cadena y
        el uso de técnicas como la concatenación, la determinación de la
        longitud, la extracción de subcadenas y la búsqueda y reemplazo, puedes
        trabajar eficazmente con datos de texto en tus programas COBOL. Estas
        habilidades son esenciales para el procesamiento y la manipulación de
        información textual en aplicaciones empresariales y sistemas legados.
      </p>
    </section>
  );
};

export { Mod7_1 };
