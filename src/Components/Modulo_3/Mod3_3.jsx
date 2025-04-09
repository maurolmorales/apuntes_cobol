const Mod3_3 = ({ Cuadro, Red, Grey, Esp, Com }) => {
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
        instalación). La Inclusión de signo operacional (<strong>S</strong>) indica que el número
        es con signo (Signed Number). Esto significa que la variable puede
        representar tanto valores positivos como negativos.
      </p>
      <ul>
        <li>Si no se usa "<strong>S</strong>", el número es siempre positivo (00000 a 99999)</li>
        <li>
          Si se usa "<strong>S</strong>", el número puede ser positivo o negativo (-99999 a
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

<h5>Usage</h5>
<p>USAGE IS BINARY EL USAGE DISPLAY ES POR DEFECTO, SI NO HAY USAGE ESCRITO ASUME DISPLAY</p>
COMP <br />
COMP 3 <br />
COMP 4 <br />
INDEX <br />
POINTER <br />
<h5>BINARY o COMPUTATIONAL o COMPUTATIONAL-4</h5>
<li>El dato es almacenado en formato binario ( media palabra, palabra, etc).</li>
<li>Cuando tiene signo ( positivo o negativo ), se representa en dos medias palabras complementarias.</li>
<li>Del ejemplo de +1234 / -1234 será 00 00 y 04 D2</li>
<li>Una media palabra ( 2 BYTES ) es usada para 4 dígitos. Una palabra ( 4 BYTES ) es usada para 5 a 9 dígitos.</li>
<li>Una doble palabra ( 8 BYTES ) es usada para 10 a 18 dígitos.</li>

<h5>COMPUTATIONAL-3</h5>
<li>El dato es almacenado en un packed-decimal o sea dos dígitos por byte.</li>
<h5>Estructura</h5>
<Cuadro data={{gridTemplateColumns:"1fr 1fr 1fr"}} key={51}>
<div className="col tCenter">
<div>PICTURE</div>
<div>9999</div>
<div>S9999</div>
<div>S9999</div>
<div>9999BINARY</div>
<div>999999BINARY</div>
<div>S9999BINARY</div>
<div>S999999BINARY</div>
<div>9999COMP-3</div>
<div>S9999COMP-3</div>
<div>S9999COMP-3</div>

</div>
<div className="col tCenter">
<div>VALOR</div>
<div>+1234 / -1234</div>
<div>+1234</div>
<div>-1234</div>
<div>+1234 / -1234</div>
<div>+1234 / -1234</div>
<div>+1234 / -1234</div>
<div>+1234 / -1234</div>
<div>+1234 / -1234</div>
<div>+1234</div>
<div>-1234</div>

</div>
<div className="col tCenter">
<div>REPRESENTACIÓN INTERNA</div>
<div>F1F2F3F4</div>
<div>F1F2F3C4</div>
<div>F1F2F3D4</div>
<div>04 D2</div>
<div>00 00 04 D2</div>
<div>FB 2E</div>
<div>FFFFFB2E</div>
<div>01 23 4F</div>
<div>01 23 4C</div>
<div>01 23 4D</div>
  </div>
</Cuadro>

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
      <Cuadro data={{gridTemplateColumns:"1fr 5fr 2fr 1fr"}} key={1}>
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
          <div>
            <strong>/</strong>
          </div>
        </div>
        <div className="col">
          <div>Descripción</div>
          <div>Oculta ceros a la izquierda. Sirve para reemplazar ceros no
          significativos por blancos.</div>
          <div>Representa un dígito numérico</div>
          <div>Punto unidad de mil (Sist. EEUU: Indica el punto decimal)</div>
          <div>Coma decimal (Sist. EEUU:  separa los miles "comma separator") </div>
          <div>Representa un espacio en blanco</div>
          <div>Forza la visualización de ceros</div>
          <div>Muestra signo explícito</div>
          <div>Muestra solo signo negativo</div>
          <div>Muestra el símbolo de moneda</div>
          <div>Indica valores negativos (Contabilidad)</div>
          <div>Similar a CR pero para débitos</div>
          <div>Rellena con asteriscos en lugar de espacios. Ej:Protege cantidades escritas
          en los cheques.</div>
          <div>Inserción de carácter en las
          posiciones designadas.</div>
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
          <div>PIC 99/99/9999 </div>
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
          <div>20/03/2025</div>
        </div>
      </Cuadro>

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

<h4>SIGN</h4>
<p>
Esta cláusula especifica la posición y el modo de representación del signo
operacional de un campo numérico en cuya especificación de formato se ha
especificado 'S'.
</p>
<ul>
  <li>
    Si la cláusula SEPARATE no se especifica, el signo del número es
    incorporado en el dígito de la derecha (TRAILING) o en el dígito de la
    izquierda LEADING. En este caso el carácter S de la PICTURE no se tiene
    en cuenta para determinar el tamaño del campo.
  </li>
  <li>
    Si la cláusula SEPARATE se especifica, entonces el signo es almacenado
    como un carácter separado adicional a los dígitos. En este caso el carácter
    'S' se tiene en cuenta para determinar el tamaño del campo.
  </li>
  <li>
    Si la cláusula SIGN no se especifica, generalmente la posición por defecto
    es a la izquierda
  </li>
</ul>
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
