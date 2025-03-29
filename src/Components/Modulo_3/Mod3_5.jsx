import { Esp } from "../espacio";
import Red from "../Colors/Red"
import Grey from "../Colors/Grey"
const Mod3_5 = () => {
  return (
    <section id="3.5">
      <h3>3.5. Manipulación de Datos en COBOL</h3>
      <p>
        La manipulación de datos en COBOL es esencial para realizar cálculos,
        procesar información y transformar los datos según las necesidades de
        una aplicación. COBOL proporciona una variedad de operaciones que
        permiten realizar estas tareas de manera eficiente.
      </p>
      <h4>Operaciones Aritméticas</h4>
      <p>
        COBOL permite realizar operaciones aritméticas en variables numéricas.
        Puedes realizar sumas, restas, multiplicaciones y divisiones utilizando
        operadores aritméticos como +, -, * y /. Estas operaciones son
        fundamentales para realizar cálculos financieros y matemáticos.
      </p>
      <div className="twoColums">
        <div className="codigo">
          01 SaldoFinal <Red>PIC</Red> S9(7)V99. <br />
          01 Interes <Red>PIC</Red> 9(5)V99 <Red>VALUE</Red> 3.25. <br /> <br />
          <Red>MOVE</Red> SaldoInicial <Red>TO</Red> SaldoFinal. <br />
          <Red>COMPUTE</Red> SaldoFinal = SaldoFinal + Deposito - Interes.
        </div>
        <p>
          En este ejemplo, se realiza una serie de operaciones aritméticas para
          calcular el saldo final.
        </p>
      </div>
      <h4>Concatenación de Cadenas</h4>
      <p>
        Para unir cadenas de texto en COBOL, se utiliza la operación
        CONCATENATE. Esta operación permite combinar cadenas de caracteres y
        crear una cadena más larga.
      </p>
      <div className="twoColums">
        <div className="codigo">
          01 Nombre <Red>PIC</Red> X(20) VALUE <Grey>'Juan'</Grey>. <br />
          01 Apellido <Red>PIC</Red> X(20) VALUE <Grey>'Pérez'</Grey>. <br />
          <br />
          01 NombreCompleto <Red>PIC</Red> X(40). <br />
          <br />
          <Red>MOVE</Red> <Red>SPACES TO</Red> NombreCompleto. <br />
          <Red>CONCATENATE</Red> Nombre <Grey>' '</Grey> Apellido <Red>INTO</Red> NombreCompleto.
        </div>
        <p>
          En este ejemplo, se concatena el nombre y el apellido para crear un
          nombre completo.
        </p>
      </div>
      <h4>Comparación de Datos</h4>
      <p>
        COBOL proporciona operadores de comparación que permiten comparar
        valores y tomar decisiones en función de los resultados. Algunos
        operadores comunes son IF, EQUAL TO, NOT EQUAL TO, LESS THAN, GREATER
        THAN, LESS OR EQUAL TO, y GREATER OR EQUAL TO.
      </p>
      <div className="codigo">
        01 Edad <Red>PIC</Red> 99 <Red>VALUE</Red> 25. <br /> <br />
        <Red>IF</Red> Edad <Red>LESS THAN</Red> 18 <br />
        <Esp />
        <Red>DISPLAY</Red> <Grey>'Menor de edad'</Grey> <br />
        <Red>ELSE</Red> <br />
        <Esp />
        <Red>DISPLAY</Red> <Grey>'Mayor de edad'</Grey> <br />
        END-IF.
      </div>
      <p>
        En este ejemplo, se compara la edad y se muestra un mensaje en función
        del resultado.
      </p>
      <h4>Tratamiento de Fechas y Horas</h4>
      <p>
        En aplicaciones empresariales, a menudo es necesario trabajar con fechas
        y horas. COBOL permite manipular y calcular fechas y horas utilizando
        funciones y operaciones específicas.
      </p>
      <div className="codigo">
        01 FechaActual. <br />
        <Esp />
        02 Dia <Red>PIC</Red> 99. <br />
        <Esp />
        02 Mes <Red>PIC</Red> 99. <br />
        <Esp />
        02 Anio <Red>PIC</Red> 9999. <br />
        <br />
        <Red>MOVE</Red> 05 <Red>TO</Red> Dia. <br />
        <Red>MOVE</Red> 10 <Red>TO</Red> Mes. <br />
        <Red>MOVE</Red> 2023 <Red>TO</Red> Anio. <br />
        <br />
        <Red>ADD</Red> 1 <Red>TO</Red> Dia <Red>GIVING</Red> Dia. <br /> <br />
        <Red>IF</Red> Dia {">"} 31 <br />
        <Esp />
        <Red>MOVE</Red> 1 <Red>TO</Red> Dia <br />
        <Esp />
        <Red>ADD</Red> 1 <Red>TO</Red> Mes <Red>GIVING</Red> Mes. <br /> <br />
        <Red>DISPLAY</Red> <Grey>'Fecha después de sumar un día: '</Grey> Dia <Grey>'/'</Grey> Mes '/' Anio. <br />
      </div>
      <p>
        En este ejemplo, se suma un día a una fecha y se maneja adecuadamente el
        desbordamiento de los valores de día y mes.
      </p>
      <h4>Conclusión</h4>
      <p>
        La manipulación de datos es una parte fundamental de la programación en
        COBOL. Estas operaciones permiten realizar cálculos, unir cadenas de
        texto, tomar decisiones y trabajar con fechas y horas, entre otras
        tareas. Comprender cómo utilizar estas operaciones es esencial para
        desarrollar aplicaciones efectivas en COBOL, especialmente en el
        contexto de aplicaciones empresariales que requieren una manipulación
        precisa de datos.
      </p>
      <hr />
    </section>
  );
};

export { Mod3_5 };
