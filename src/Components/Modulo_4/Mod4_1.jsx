const Mod4_1 = ({ Cuadro, Red, Grey, Esp, Com }) => {
  return (
    <section id="4.1">
      <h3>4.1 Campos numéricos: PIC 9</h3>
     
      
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
     


















      <h3>4.5 Decimales: V</h3>
      <p>
        En COBOL, la letra V dentro de una cláusula PIC indica la posición del
        punto decimal implícito. Esto significa que el punto no se almacena en
        la memoria, pero COBOL lo interpreta en esa posición al realizar
        operaciones y conversiones.
      </p>
      Nota importante: La V es sólo una marca lógica, no ocupa espacio de
      almacenamiento.
      <div className="codigo">
        <Red>PIC</Red> 9(4)V99
      </div>
      <p>Este formato define un número de 6 dígitos, de los cuales:</p>
      <li>4 están antes del punto decimal (parte entera),</li>
      <li>2 están después del punto decimal (parte decimal).</li>
      📌 No hay un punto real almacenado. COBOL lo interpreta como si existiera
      entre el cuarto y el quinto dígito.
      <div className="twoColums">
        <div className="codigo">
          01 PRECIO <Red>PIC</Red> 9(4)V99 <Red>VALUE</Red> 123456.
        </div>
        <div>
          COBOL interpreta este valor como: 1234.56 El punto no se almacena ni
          se muestra automáticamente.
        </div>
      </div>


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





      <h3>Campo numérico con signo (S)</h3>
      <p>
        En COBOL, el prefijo S en una cláusula PIC (Picture) indica que el campo
        numérico puede contener signo, es decir, puede representar tanto valores
        positivos como negativos.
      </p>
      <li>
        <mark>S</mark>: indica que el número puede tener signo.
      </li>
      <li>
        <mark>9(n)</mark>: representa un número con <mark>n</mark> dígitos
        decimales enteros.
      </li>
      <p>
        El signo no ocupa un carácter adicional visible en la representación,
        sino que se guarda internamente, dependiendo del uso especificado (por
        ejemplo, <mark>DISPLAY</mark>, <mark>COMP</mark>, <mark>COMP-3</mark>,
        etc.).
      </p>
      <div className="twoColums">
        <div className="codigo">PIC 9(4)V99</div>
        <div>
          Esto representa un número con 4 dígitos enteros y 2 decimales.
          Ejemplo: 123456 se interpreta como 1234.56.
        </div>
      </div>
      <div className="twoColums">
        <div className="codigo">
          01 PRECIO <Red>PIC</Red> 9(3)V99.{" "}
          <Com>Representa valores hasta 999.99</Com> <br />
          01 IMPORTE <Red>PIC</Red> S9(5)V999.{" "}
          <Com>Hasta 99999.999 con signo</Com>
        </div>
        <div className="dodigo">
          El <mark>V</mark> puede ser interpretado como una coma si se define en{" "}
          <mark>SPECIAL-NAMES</mark>:
          <div className="codigo">
            <Red>SPECIAL-NAMES</Red>. <br />
            <Red>DECIMAL-POINT IS COMMA</Red>. <br />
          </div>
        </div>
      </div>
      <h5>Ejemplo 1: Número entero con signo</h5>
      <div className="codigo">
        01 SALDO <Red>PIC</Red> S9(5) <Red>VALUE</Red> -12345.
      </div>
      <li>
        Puede contener valores entre <strong>-99999</strong> y{" "}
        <strong>+99999</strong>.
      </li>
      <li>
        El signo se almacena de forma interna, pero en algunos sistemas o usos
        puede visualizarse como un carácter especial (por ejemplo,{" "}
        <mark>{"{"}</mark> o <mark>{"}"}</mark> al final del número).
      </li>
      <h5>Ejemplo 2: Número con decimales y signo</h5>
      <div className="codigo">
        01 PRECIO <Red>PIC</Red> S9(4)V99 <Red>VALUE</Red> -1234.56.
      </div>
      <li>
        Representa un número con 4 enteros y 2 decimales, con posibilidad de
        signo.
      </li>
      <li>
        El carácter <mark>V</mark> es un punto decimal implícito, no se almacena
        físicamente.
      </li>
      <li>
        Si se omite la <mark>S</mark>, se asume que el número no tendrá signo
        (siendo positivo).
      </li>
      <li>
        El uso de <mark>S9</mark> es común cuando se trabaja con cálculos
        matemáticos, valores contables o campos que deben diferenciar entre
        créditos y débitos.
      </li>
      <li>
        Para mostrar adecuadamente el signo en pantalla, es común combinar el{" "}
        <mark>S9</mark> con variables de edición (ver tema sobre variables de
        edición más adelante).
      </li>


             
      <h4>SIGN</h4>
<p>
Esta cláusula especifica la posición y el modo de representación del signo
operacional de un campo numérico en cuya especificación de formato se ha
especificado 'S'. Permite especificar dónde se debe colocar el signo (+ o -) en un campo numérico con signo. 
</p>
<ul>
  <li>
    Si la cláusula SEPARATE no se especifica, el signo del número es
    incorporado en el dígito de la derecha (TRAILING) o en el dígito de la
    izquierda (LEADING). En este caso el carácter S de la PICTURE no se tiene
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
<div className="codigo">
05 SALDO     <Red>PIC</Red> S9(5) <Red>SIGN IS LEADING</Red>.  <Esp/><Com>-1234</Com> <br />
05 MONTO     <Red>PIC</Red> S9(4) <Red>SIGN IS TRAILING</Red>. <Esp/><Com>5678-</Com>
</div>


<h4>Uso de USAGE (cláusulas de almacenamiento )</h4>
      <p>
        En COBOL, se pueden utilizar cláusulas USAGE para especificar cómo se
        almacenan los valores numéricos en la memoria. Las cláusulas USAGE son
        opcionales y se utilizan para optimizar el uso de memoria. Algunas
        cláusulas USAGE comunes son:
      </p>
      <ul>
        <li>
          USAGE IS DISPLAY (predeterminado): Se utiliza para variables alfanuméricas. Los datos
          se almacenan como caracteres ASCII y se pueden mostrar en informes o
          pantallas.
        </li>
        <li>
          USAGE IS BINARY: Se utiliza para variables numéricas enteras. Los
          datos se almacenan en formato binario y se pueden utilizar para
          cálculos aritméticos.
        </li>
        <li>
          USAGE IS COMP: Similar a USAGE IS BINARY, pero se utiliza para números
          enteros. Los datos se almacenan de manera más eficiente en formato
          binario.
        </li>
        <li>
          USAGE IS COMP-3 o USAGE IS PACKED-DECIMAL: Se utiliza para variables
          numéricas decimales empaquetadas. Los datos se almacenan en formato
          comprimido, ahorrando espacio de almacenamiento. Otros tipos menos
          comunes incluyen USAGE IS POINTER, USAGE IS INDEX, etc.
        </li>
      </ul>
      <div className="codigo">
        01 NUMERO-DIAS <Red>USAGE IS BINARY</Red>. <br />
        01 SALDO-CUENTA <Red>USAGE IS COMP</Red>. <br />
        01 NUMERO-CLIENTE <Red>USAGE IS DISPLAY</Red>. <br />
        01 MONTO-PAGAR <Red>USAGE IS COMP-3</Red>. <br />
      </div>
      <p>
        La elección del tipo correcto de USAGE puede tener un impacto en el
        rendimiento y el uso de memoria de un programa COBOL. Es importante
        seleccionar el tipo adecuado de USAGE según el tipo de datos que se está
        manejando y los requisitos de rendimiento del programa.
      </p>
     
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
      <div className="codigo">
        01 TOTAL-VENTAS <Red>PIC</Red> 9(6)V99 <Red>USAGE DISPLAY</Red>. <br />
        01 TOTAL-FACTURAS <Red>PIC</Red> S9(6)V99 <Red>USAGE COMP-3</Red>.{" "}
        <br />
      </div>

    
      


      <h5>Numérico empaquetado (PIC S9(n) COMP-3):</h5>
      <p>
        Se utiliza para almacenar números de manera comprimida para ahorrar
        espacio de almacenamiento. Es especialmente útil para grandes volúmenes
        de datos numéricos.
      </p>
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


      <br />
      <h3>4.2 Campos alfabéticos: PIC A</h3>
      <p>
        En COBOL, la cláusula PIC A (Picture A) define un campo alfabético, es
        decir, un campo que sólo puede contener letras (de la A a la Z,
        mayúsculas y minúsculas dependiendo del sistema, aunque tradicionalmente
        se usaban solo mayúsculas en mainframes). 📌 No se permiten dígitos
        numéricos ni caracteres especiales.
      </p>
      <div className="twoColums">
        <div className="codigo">01 CAMPO-ALFA PIC A(10).</div>
        <div>
          Esto define un campo de 10 posiciones que puede contener solo letras.
        </div>
      </div>
      <p>
        <u>Características del tipo A</u>
      </p>
      <li>
        <strong>Tipo de dato</strong>: Alfabético
      </li>
      <li>
        <strong>Rango de valores</strong>: Letras (A-Z, a-z en sistemas
        compatibles con ASCII/EBCDIC)
      </li>
      <li>
        <strong>Longitud máxima</strong>: Depende del sistema, usualmente hasta
        255 caracteres
      </li>
      <li>
        <strong>Inclusión de espacios</strong>: Se permiten espacios, pero no
        caracteres numéricos
      </li>
      <li>
        <strong>Incompatibilidad</strong>: No se pueden almacenar directamente
        números o símbolos
      </li>
      <br />
      <p>
        En la práctica moderna, <mark>PIC X</mark> (alfanumérico) es mucho más
        utilizado, ya que permite letras, números y símbolos. Sin embargo,{" "}
        <mark>PIC A</mark> puede ser útil para validaciones estrictas o
        estructuras que deben contener exclusivamente texto alfabético (por
        ejemplo, ciertas iniciales, códigos de letras, etc.).
      </p>
      4.3 Campos alfanuméricos: PIC X ¿Qué es PIC X? La cláusula PIC X (Picture
      X) define un campo alfanumérico, es decir, un campo que puede contener
      letras, números, símbolos y espacios. 📌 Es el tipo de campo más flexible
      en COBOL y, por lo tanto, uno de los más utilizados.
      <div className="twoColums">
        <div className="codigo">
          01 NOMBRE-COMPLETO <Red>PIC</Red> X(30).
        </div>
        <div>
          Esto define un campo de 30 posiciones que puede almacenar cualquier
          combinación de caracteres alfanuméricos.
        </div>
      </div>
      <p>
        <u>Características del tipo X</u>:
      </p>
      <li>
        <strong>Tipo de dato</strong>: Alfanumérico
      </li>
      <li>
        <strong>Rango de valores</strong>: Letras (A-Z, a-z), números (0-9),
        símbolos (como +, -, /, *) y espacios
      </li>
      <li>
        <strong>Longitud máxima</strong>: Depende del sistema, comúnmente hasta
        255 caracteres
      </li>
      <li>
        <strong>Usos comunes</strong>: Nombres, direcciones, mensajes, códigos
        mixtos, descripciones, etc.
      </li>
      <li>
        <strong>Alineación</strong>: Los valores se alinean a la izquierda y se
        rellenan con espacios a la derecha
      </li>
      <li>Acepta cualquier carácter ASCII o EBCDIC válido.</li>
      <li>
        No realiza validación del tipo de contenido (a diferencia de PIC A o PIC
        9).
      </li>
      <li>
        Muy útil para manejar datos de entrada de usuario, archivos de texto,
        impresiones en pantalla, etc.
      </li>
      <li>Es ideal para casi cualquier tipo de dato textual o mixto.</li>
      <li>
        Es común limpiar espacios con funciones intrínsecas como FUNCTION TRIM.
      </li>
      <li>
        Verificar si el contenido tiene solo letras o números si se requiere una
        validación adicional.
      </li>
    </section>
  );
};

export { Mod4_1 };
