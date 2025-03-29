import { Esp } from "../espacio";
import Red from "../Colors/Red";
import Grey from "../Colors/Grey";
const Mod3_3 = () => {
  return (
    <section id="3.3">
      <h3>3.3. Tipos de Datos Numéricos en COBOL</h3>
      <p>
        En COBOL, se utilizan varios tipos de datos numéricos para representar
        valores numéricos, ya sean enteros o decimales. Estos tipos de datos
        numéricos son fundamentales para realizar cálculos matemáticos y
        manipular datos financieros en aplicaciones empresariales.{" "}
      </p>
      <h4>INTEGER (PIC 9):</h4>
      <p>
        El tipo de dato INTEGER se utiliza para representar números enteros en
        COBOL. Estos números no tienen parte decimal y pueden ser positivos o
        negativos. La declaración de una variable INTEGER se realiza con la
        cláusula PIC seguida de una especificación de tamaño, que indica la
        cantidad de dígitos que puede contener la variable. Se pueden hacer
        operaciones. Máximo desde 18 posiciones hasta 32 bytes (según cada
        instalación). La Inclusión de signo operacional (S) indica que el número
        es con signo (Signed Number). Esto significa que la variable puede
        representar tanto valores positivos como negativos.
      </p>
      <ul>
        <li>Si no se usa "S", el número es siempre positivo (00000 a 99999)</li>
        <li>
          Si se usa "S", el número puede ser positivo o negativo (-99999 a
          99999).
        </li>
      </ul>
      <div className="twoColums">
        <div className="codigo">
          01 EdadCliente <Red>PIC</Red> 99. <br />
          01 CantidadProductos <Red>PIC</Red> S9(5).
        </div>
        <p>
          En el primer ejemplo, EdadCliente puede contener números enteros
          positivos de hasta dos dígitos. <br />
          En el segundo ejemplo, CantidadProductos puede contener números
          enteros positivos o negativos de hasta cinco dígitos.
        </p>
      </div>
      <h4>DECIMAL (PIC 9(3)V9(2)): </h4>
      <p>
        El tipo de dato DECIMAL se utiliza para representar números decimales en
        COBOL. Este tipo de dato se utiliza comúnmente en aplicaciones
        financieras para manejar valores con decimales. La declaración de una
        variable DECIMAL se realiza con la cláusula PIC seguida de una
        especificación que incluye una parte entera y una parte decimal.
        Representa la posición de un punto decimal implícito. No forma parte de
        la longitud del campo.
      </p>
      <div className="twoColums">
        <div className="codigo">
          01 PrecioProducto <Red>PIC</Red> S9(5)V99. <br />
          01 SaldoCuentaBancaria <Red>PIC</Red> 9(7)V999.
        </div>

        <p>
          En el primer ejemplo, PrecioProducto puede contener un valor decimal
          con una parte entera de hasta cinco dígitos y dos dígitos decimales.
          En el segundo ejemplo, SaldoCuentaBancaria puede contener un valor
          decimal con una parte entera de hasta siete dígitos y tres dígitos
          decimales.
          <strong>
            La " V " indica la parte decimal. El signo " S " indica que la
            variable puede contener valores negativos.
          </strong>
        </p>
      </div>

      <h4>CARACTERES DE EDICIÓN: </h4>
      <p>
        Los caracteres de edición en COBOL permiten dar formato a los datos
        numéricos al momento de mostrar o imprimir valores. Se definen en el
        PICTURE Clause (PIC) y ayudan a mejorar la presentación de los números.
        Cambio en el formato en que se muestran los datos. Fundamental para una
        clara presentación de los datos por pantalla o en un informe impreso.
      </p>
      <ul>
        <li>Mejoran la legibilidad de los valores numéricos en reportes.</li>
        <li>Facilitan la presentación de valores monetarios o contables.</li>
        <li>Permiten ocultar ceros innecesarios y usar símbolos de moneda.</li>
        <li>Aseguran la correcta alineación en documentos o pantallas.</li>
      </ul>
      <br />
      <div className="cuadro">
        <div className="col tCenter">
          <div>Carácter</div>
          <div>
            <strong>Z</strong>
          </div>
          <div>
            <strong>9</strong>
          </div>
          <div>
            <strong>.</strong>
          </div>
          <div>
            <strong>,</strong>
          </div>
          <div>
            <strong>B</strong>
          </div>
          <div>
            <strong>0</strong>
          </div>
          <div>
            <strong>+</strong>
          </div>
          <div>
            <strong>-</strong>
          </div>
          <div>
            <strong>$</strong>
          </div>
          <div>
            <strong>CR</strong>
          </div>
          <div>
            <strong>DB</strong>
          </div>
          <div>
            <strong>*</strong>
          </div>
        </div>
        <div className="col">
          <div>Descripción</div>
          <div>Oculta ceros a la izquierda</div>
          <div>Representa un dígito numérico</div>
          <div>Indica el punto decimal</div>
          <div>Separa miles</div>
          <div>Representa un espacio en blanco</div>
          <div>Forza la visualización de ceros</div>
          <div>Muestra signo explícito</div>
          <div>Muestra solo signo negativo</div>
          <div>Muestra el símbolo de moneda</div>
          <div>Indica valores negativos (Contabilidad)</div>
          <div>Similar a CR pero para débitos</div>
          <div>Rellena con asteriscos en lugar de espacios</div>
        </div>
        <div className="col">
          <div>Ejemplo de Declaración</div>
          <div>PIC ZZZ9 con VALUE 0045</div>
          <div>PIC 9999 con VALUE 45</div>
          <div>PIC 999.99 con VALUE 12.3</div>
          <div>PIC Z,ZZZ,ZZ9 con VALUE 1234567</div>
          <div>PIC 9B9B9 con VALUE 123</div>
          <div>PIC 9999 con VALUE 45</div>
          <div>PIC +999 con VALUE -45</div>
          <div>PIC -999 con VALUE -45</div>
          <div>PIC $ZZZ9 con VALUE 45</div>
          <div>PIC 999CR con VALUE -45</div>
          <div>PIC 999DB con VALUE -45</div>
          <div>PIC **9.99 con VALUE 5.2</div>
        </div>
        <div className="col tCenter">
          <div>Ejemplo de Salida</div>
          <div>45</div>
          <div>0045</div>
          <div>012.30</div>
          <div>1,234,567</div>
          <div>1 2 3</div>
          <div>0045</div>
          <div>045</div>
          <div>-045</div>
          <div>$ 45</div>
          <div>45CR</div>
          <div>45DB</div>
          <div> **5.20</div>
        </div>
      </div>

      <h5>Numérico empaquetado (PIC S9(n) COMP-3):</h5>
      <p>
        Se utiliza para almacenar números de manera comprimida para ahorrar
        espacio de almacenamiento. Es especialmente útil para grandes volúmenes
        de datos numéricos.
      </p>
      <h4>Uso de Cláusulas USAGE</h4>
      <p>
        En COBOL, se pueden utilizar cláusulas USAGE para especificar cómo se
        almacenan los valores numéricos en la memoria. Las cláusulas USAGE son
        opcionales y se utilizan para optimizar el uso de memoria. Algunas
        cláusulas USAGE comunes son:
      </p>
      <ul>
        <li>
          USAGE IS DISPLAY: Se utiliza para almacenar valores numéricos de
          manera legible para los humanos. Es la opción predeterminada.
        </li>
        <li>
          USAGE IS COMPUTATIONAL: Se utiliza para almacenar valores numéricos en
          una forma más eficiente para cálculos. Puede haber diferentes
          cláusulas COMPUTATIONAL según el tipo de dato (por ejemplo,
          COMPUTATIONAL-3 para enteros largos).
        </li>
      </ul>
      <div className="twoColums">
        <div className="codigo">
          01 TotalVentas <Red>PIC</Red> 9(9) <Red>USAGE IS</Red>{" "}
          COMPUTATIONAL-3.
        </div>
        <p>
          En este ejemplo, TotalVentas se almacena de manera eficiente para
          cálculos utilizando la cláusula COMPUTATIONAL-3.
        </p>
      </div>
      <h4>Conclusión</h4>
      <p>
        Los tipos de datos numéricos en COBOL son esenciales para el manejo de
        valores numéricos, tanto enteros como decimales. La elección del tipo de
        dato y la cláusula USAGE adecuados es fundamental para garantizar el
        almacenamiento eficiente y el procesamiento preciso de datos en
        aplicaciones empresariales. Estos tipos de datos son ampliamente
        utilizados en aplicaciones financieras y de procesamiento de datos
        masivos en COBOL.
      </p>
      <hr />
    </section>
  );
};

export { Mod3_3 };
