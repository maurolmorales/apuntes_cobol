import { Esp } from "../espacio";
import Red from "../Colors/Red";
import Grey from "../Colors/Grey";
const Mod7_3 = () => {
  return (
    <section id="7.3">
      <h3>7.3. Cálculos Matemáticos y Financieros en COBOL</h3>
      <p>
        COBOL es un lenguaje de programación que se utiliza ampliamente en
        aplicaciones financieras y empresariales, lo que significa que es
        esencial poder realizar cálculos matemáticos y financieros con
        precisión.{" "}
      </p>
      <h4>Operaciones Matemáticas Básicas</h4>
      <p>
        COBOL admite las operaciones matemáticas básicas, como la suma, la
        resta, la multiplicación y la división. Estas operaciones se realizan
        utilizando los operadores aritméticos estándar:
      </p>
      <ul>
        <li>Suma (+)</li>
        <li>Resta (-)</li>
        <li>Multiplicación (*)</li>
        <li>División (/)</li>
      </ul>
      <div className="codigo">
        DATA DIVISION. <br />
        WORKING-STORAGE SECTION. <br />
        01 NumeroA PIC 9(3) VALUE 100. <br />
        01 NumeroB PIC 9(3) VALUE 50. <br />
        01 Resultado PIC 9(4). <br /> <br />
        PROCEDURE DIVISION. <br />
        <Esp />
        COMPUTE Resultado = NumeroA + NumeroB. <br />
        <Esp />
        DISPLAY 'Suma: ' Resultado. <br /> <br />
        <Esp />
        COMPUTE Resultado = NumeroA - NumeroB. <br />
        <Esp />
        DISPLAY 'Resta: ' Resultado. <br /> <br />
        <Esp />
        COMPUTE Resultado = NumeroA * NumeroB. <br />
        <Esp />
        DISPLAY 'Multiplicación: ' Resultado. <br /> <br />
        <Esp />
        COMPUTE Resultado = NumeroA / NumeroB. <br />
        <Esp />
        DISPLAY 'División: ' Resultado.
      </div>
      <h4>Operaciones Financieras</h4>
      <p>
        En aplicaciones financieras, a menudo se realizan cálculos más
        complejos, como cálculos de interés, depreciación, tasas de retorno y
        otros cálculos financieros. COBOL admite cálculos financieros mediante
        la aplicación de fórmulas financieras específicas.
      </p>
      <div className="codigo">
        DATA DIVISION. <br />
        WORKING-STORAGE SECTION. <br />
        01 Capital PIC 9(7)V99 VALUE 1000.00. <br />
        01 TasaInteres PIC 9(4)V99 VALUE 5.25. <br />
        01 Tiempo PIC 9(3) VALUE 3. <br />
        01 InteresSimple PIC 9(7)V99. <br /> <br />
        PROCEDURE DIVISION. <br />
        <Esp />
        COMPUTE InteresSimple = (Capital * TasaInteres * Tiempo) / 100. <br />
        <Esp />
        DISPLAY 'Interés Simple: ' InteresSimple.
      </div>
      <p>
        En este ejemplo, calculamos el interés simple utilizando la fórmula
        (Capital * Tasa de Interés * Tiempo) / 100. Puedes aplicar fórmulas
        financieras similares para otros cálculos financieros.
      </p>
      <h4>Manipulación de Números Decimales</h4>
      <p>
        COBOL permite trabajar con números decimales precisos utilizando la
        notación PIC para definir la precisión de las variables numéricas. Las
        variables numéricas pueden ser de tipo Packed-Decimal, Zoned-Decimal, o
        Floating-Point, y puedes especificar la precisión y la escala.
      </p>
      <div className="codigo">
        DATA DIVISION. <br />
        WORKING-STORAGE SECTION. <br />
        01 PrecioVenta PIC S9(5)V99 VALUE -123.45. <br />
        01 Cantidad PIC 9(3) VALUE 10. <br />
        01 TotalVenta PIC 9(7)V99. <br /> <br />
        PROCEDURE DIVISION. <br />
        <Esp />
        COMPUTE TotalVenta = PrecioVenta * Cantidad. <br />
        <Esp />
        DISPLAY 'Total de Venta: ' TotalVenta.
      </div>
      <p>
        En este ejemplo, PrecioVenta es una variable de tipo Packed-Decimal que
        representa un número decimal con precisión y escala. La multiplicación
        se realiza de manera precisa, y el resultado se almacena en TotalVenta.
      </p>
      <h4>Conclusión</h4>
      <p>
        COBOL es un lenguaje de programación poderoso para realizar cálculos
        matemáticos y financieros, especialmente en aplicaciones empresariales y
        financieras. Puedes realizar operaciones matemáticas básicas, aplicar
        fórmulas financieras, trabajar con números decimales precisos y
        manipular datos financieros con precisión. La capacidad de realizar
        cálculos matemáticos y financieros precisos es fundamental para el
        desarrollo de aplicaciones COBOL en entornos empresariales y
        financieros.
      </p>
    </section>
  );
};

export { Mod7_3 };
