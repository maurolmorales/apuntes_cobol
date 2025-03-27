import { Esp } from "../espacio";
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
        cantidad de dígitos que puede contener la variable.
      </p>
      <div className="codigo">
        01 EdadCliente PIC 99. <br />
        01 CantidadProductos PIC S9(5).
      </div>
      <p>
        En el primer ejemplo, EdadCliente puede contener números enteros
        positivos de hasta dos dígitos. En el segundo ejemplo, CantidadProductos
        puede contener números enteros positivos o negativos de hasta cinco
        dígitos.
      </p>
      <h4>DECIMAL (PIC 9(3)V9(2)): </h4>
      <p>
        El tipo de dato DECIMAL se utiliza para representar números decimales en
        COBOL. Este tipo de dato se utiliza comúnmente en aplicaciones
        financieras para manejar valores con decimales. La declaración de una
        variable DECIMAL se realiza con la cláusula PIC seguida de una
        especificación que incluye una parte entera y una parte decimal.
      </p>
      <div className="codigo">
        01 PrecioProducto PIC S9(5)V99. <br />
        01 SaldoCuentaBancaria PIC 9(7)V999.
      </div>
      <p>
        En el primer ejemplo, PrecioProducto puede contener un valor decimal con
        una parte entera de hasta cinco dígitos y dos dígitos decimales. En el
        segundo ejemplo, SaldoCuentaBancaria puede contener un valor decimal con
        una parte entera de hasta siete dígitos y tres dígitos decimales.
        <strong>
          La " V " indica la parte decimal. El signo " S " indica que la
          variable puede contener valores negativos.
        </strong>
      </p>
      <h4>Numérico empaquetado (PIC S9(n) COMP-3):</h4>
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
      <div className="codigo">
        01 TotalVentas PIC 9(9) USAGE IS COMPUTATIONAL-3.
      </div>
      <p>
        En este ejemplo, TotalVentas se almacena de manera eficiente para
        cálculos utilizando la cláusula COMPUTATIONAL-3.
      </p>
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
    </section>
  );
};

export { Mod3_3 };
