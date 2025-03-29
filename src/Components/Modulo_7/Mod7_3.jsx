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
        <Red>DATA DIVISION</Red>. <br />
        <Red>WORKING-STORAGE SECTION</Red>. <br />
        01 NumeroA<Red> PIC </Red>9(3)<Red> VALUE </Red>100. <br />
        01 NumeroB<Red> PIC </Red>9(3)<Red> VALUE </Red>50. <br />
        01 Resultado<Red> PIC </Red>9(4). <br /> <br />
        <Red>PROCEDURE DIVISION</Red>. <br />
        <Esp />
        <Red>COMPUTE </Red>Resultado = NumeroA + NumeroB. <br />
        <Esp />
        <Red>DISPLAY </Red><Grey>'Suma: '</Grey> Resultado. <br /> <br />
        <Esp />
        <Red>COMPUTE </Red>Resultado = NumeroA - NumeroB. <br />
        <Esp />
        <Red>DISPLAY </Red><Grey>'Resta: '</Grey> Resultado. <br /> <br />
        <Esp />
        <Red>COMPUTE </Red>Resultado = NumeroA * NumeroB. <br />
        <Esp />
        <Red>DISPLAY </Red><Grey>'Multiplicación: '</Grey> Resultado. <br /> <br />
        <Esp />
        <Red>COMPUTE </Red>Resultado = NumeroA / NumeroB. <br />
        <Esp />
        <Red>DISPLAY </Red><Grey>'División: ' </Grey>Resultado.
      </div>
      <h4>Operaciones Financieras</h4>
      <p>
        En aplicaciones financieras, a menudo se realizan cálculos más
        complejos, como cálculos de interés, depreciación, tasas de retorno y
        otros cálculos financieros. COBOL admite cálculos financieros mediante
        la aplicación de fórmulas financieras específicas.
      </p>
      <div className="codigo">
        <Red>DATA DIVISION</Red>. <br />
        <Red>WORKING-STORAGE SECTION</Red>. <br />
        01 Capital<Red> PIC </Red>9(7)V99<Red> VALUE </Red>1000.00. <br />
        01 TasaInteres<Red> PIC </Red>9(4)V99<Red> VALUE </Red>5.25. <br />
        01 Tiempo<Red> PIC </Red>9(3)<Red> VALUE </Red>3. <br />
        01 InteresSimple<Red> PIC </Red>9(7)V99. <br /> <br />
        <Red>PROCEDURE DIVISION</Red>. <br />
        <Esp />
        <Red>COMPUTE </Red>InteresSimple = (Capital * TasaInteres * Tiempo) / 100. <br />
        <Esp />
        <Red>DISPLAY </Red><Grey>'Interés Simple: ' </Grey>InteresSimple.
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
        <Red>DATA DIVISION</Red>. <br />
        <Red>WORKING-STORAGE SECTION</Red>. <br />
        01 PrecioVenta<Red> PIC </Red>S9(5)V99<Red> VALUE </Red>-123.45. <br />
        01 Cantidad<Red> PIC </Red>9(3)<Red> VALUE </Red>10. <br />
        01 TotalVenta<Red> PIC </Red>9(7)V99. <br /> <br />
        <Red>PROCEDURE DIVISION</Red>. <br />
        <Esp />
        <Red>COMPUTE </Red>TotalVenta = PrecioVenta * Cantidad. <br />
        <Esp />
        <Red>DISPLAY </Red><Grey>'Total de Venta: '</Grey> TotalVenta.
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
