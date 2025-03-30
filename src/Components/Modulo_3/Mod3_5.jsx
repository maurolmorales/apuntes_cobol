import { Esp } from "../espacio";
import Red from "../Colors/Red";
import Grey from "../Colors/Grey";
import Cuadro from "../Cuadro";
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
          <Red>CONCATENATE</Red> Nombre <Grey>' '</Grey> Apellido{" "}
          <Red>INTO</Red> NombreCompleto.
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
        <Red>DISPLAY</Red> <Grey>'Fecha después de sumar un día: '</Grey> Dia{" "}
        <Grey>'/'</Grey> Mes '/' Anio. <br />
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

      <br />
      <br />

      <h4>Reglas generales en COBOL al mover datos entre distintos formatos</h4>
      <p>
        Cuando se mueve información de una variable a otra con distintos
        formatos, el comportamiento del programa sigue ciertas reglas
        predefinidas. A continuación, se presentan las reglas generales según el
        tipo de datos involucrado.
      </p>
      <br />
      <h5>Movimiento entre campos alfanuméricos (PIC X)</h5>
      <Cuadro
        data={{
          gridTemplateColumns: "6fr 2fr 2fr 2fr 2fr",
        }}
        key={3}
      >
        <div className="col tCenter">
          <div>Regla</div>
          <div>
            Si el campo de destino es más grande que el origen, se copia el
            contenido y se rellenan los espacios restantes con espacios en
            blanco (' ').
          </div>
          <div>
            Si el campo de destino es más pequeño que el origen, se trunca el
            contenido, perdiendo los caracteres que exceden el tamaño del
            destino.
          </div>
        </div>
        <div className="col tCenter">
          <div>Dato </div>
          <div>'cobol'</div>
          <div>'cobol'</div>
        </div>
        <div className="col tCenter">
          <div>Campo origen</div>
          <div>PIC X(05)</div>
          <div>PIC X(05)</div>
        </div>
        <div className="col tCenter">
          <div>Campo destino</div>
          <div>PIC X(06)</div>
          <div>PIC X(03)</div>
        </div>
        <div className="col tCenter">
          <div>Resultado</div>
          <div>
            'cobol
            <Esp />'
          </div>
          <div>'cob'</div>
        </div>
      </Cuadro>
      <br />

      <h5>
        Movimiento de un campo alfanumérico (PIC X) a un campo numérico (PIC 9)
      </h5>
      <Cuadro data={{ gridTemplateColumns: "6fr 2fr 2fr 2fr 2fr"}} key={180} >
        <div className="col tCenter">
          <div>Regla</div>
          <div>
            intentará convertir el valor siempre que contenga solo caracteres
            numéricos. Si la conversión no es posible (por ejemplo, si contiene
            letras o caracteres especiales), puede generar un error en tiempo de
            ejecución.
          </div>
          <div>
            Si el campo numérico de destino es más pequeño, se trunca el valor,
            lo que puede causar pérdida de información o errores.
          </div>
          <div>
          Si el campo numérico de destino es más pequeño, se trunca el valor,
          lo que puede causar pérdida de información o errores.
          </div>
          <div>   Si el campo decimal de destino es más pequeño, se trunca el valor,
          lo que puede causar pérdida de información o errores y se complementa los decimales.</div>
        </div>
        <div className="col tCenter">
          <div>Dato </div>
          <div>'1234'</div>
          <div>'1234'</div>
          <div>'123456' </div>
          <div>'123456' </div>
        </div>
        <div className="col tCenter">
          <div>Campo origen</div>
          <div>PIC X(04)</div>
          <div>PIC X(4)</div>
          <div>PIC X(06)</div>
          <div>PIC X(06)</div>
        </div>
        <div className="col tCenter">
          <div>Campo destino</div>
          <div>PIC 9(04)</div>
          <div>PIC 9(6)</div>
          <div> PIC 9(04) </div>
          <div> PIC 9(02)V9(04)</div>
        </div>
        <div className="col tCenter">
          <div>Resultado</div>
          <div>1234</div>
          <div> 001234 <br /> (si la conversión es válida)</div>
          <div> 3456 <br /> (se pierden los primeros dígitos si la conversión es válida) </div>
          <div> 56,0000 </div>
        </div>
      </Cuadro>
      <br />

      <h5>
        Movimiento de un campo numérico (PIC 9) a un campo alfanumérico (PIC X)
      </h5>
      <Cuadro data={{ gridTemplateColumns: "6fr 2fr 2fr 2fr 2fr" }} key={233} >
        <div className="col tCenter">
          <div>Regla</div>
          <div>
            Se copia el número tal cual, sin agregar ceros ni espacios extra.
          </div>
          <div>
            COBOL lo trata como una conversión a texto, preservando los espacios
            si el campo de destino es más grande.
          </div>
          <div>
            Ocurre truncamiento porque el campo de destino no tiene suficiente
            espacio para almacenar todos los caracteres del origen.
          </div>
        </div>
        <div className="col tCenter">
          <div>Dato </div>
          <div>1234</div>
          <div>1234</div>
          <div>123456</div>
        </div>
        <div className="col tCenter">
          <div>Campo origen</div>
          <div>PIC 9(04) </div>
          <div>PIC 9(04) </div>
          <div>PIC 9(06) </div>
        </div>
        <div className="col tCenter">
          <div>Campo destino</div>
          <div>PIC x(04) </div>
          <div>PIC x(06) </div>
          <div>PIC x(04) </div>
        </div>
        <div className="col tCenter">
          <div>Resultado</div>
          <div>'1234' </div>
          <div>
            '1234
            <Esp />'{" "}
          </div>
          <div>'1234' </div>
        </div>
      </Cuadro>
      <br />

      <h5>Movimiento entre campos numéricos (PIC 9) de distinto tamaño</h5>
      <Cuadro data={{ gridTemplateColumns: "6fr 2fr 2fr 2fr 2fr" }} key={279}>
        <div className="col tCenter">
          <div>Regla</div>
          <div>
            Si el campo de destino es más grande, se rellenan ceros a la
            izquierda.
          </div>
          <div>
            Si el campo de destino es más pequeño, se trunca el valor, lo que
            puede causar pérdida de información.
          </div>
        </div>
        <div className="col tCenter">
          <div>Dato </div>
          <div>1234</div>
          <div>123456</div>
        </div>
        <div className="col tCenter">
          <div>Campo origen</div>
          <div>PIC 9(4)</div>
          <div>PIC 9(6)</div>
        </div>
        <div className="col tCenter">
          <div>Campo destino</div>
          <div>PIC 9(6)</div>
          <div>PIC 9(4)</div>
        </div>
        <div className="col tCenter">
          <div>Resultado</div>
          <div>001234</div>
          <div>
            3456 <br />
            se pierden los primeros dígitos
          </div>
        </div>
      </Cuadro>
      <br />

      <h5>Movimiento entre campos con decimales (V, S9)</h5>
      <Cuadro data={{ gridTemplateColumns: "6fr 2fr 2fr 2fr 2fr" }} key={318}>
        <div className="col tCenter">
          <div>Regla</div>
          <div>
            Si el campo de destino tiene más decimales, se agregan ceros al
            final.
          </div>
          <div>
            Si el campo de destino tiene menos decimales, se trunca el valor sin
            redondeo.
          </div>
          <div>
            Si el destino es numérico con signo (S9), el signo se conserva.
          </div>
          <div>
            Si el campo de destino tiene más capacidad en números enteros, el
            número se copia sin modificaciones.
          </div>
          <div>
            Dependiendo del compilador COBOL, pueden ocurrir diferentes cosas:
            Error en ejecución - Valor incorrecto almacenado - Pérdida total de
            datos
          </div>
        </div>
        <div className="col tCenter">
          <div>Dato </div>
          <div>1234.56</div>
          <div>1234.5689 </div>
          <div>1234.56</div>
          <div>1234.56</div>
          <div>1234.56</div>
        </div>
        <div className="col tCenter">
          <div>Campo origen</div>
          <div>PIC S9(4)V99</div>
          <div>PIC S9(4)V9999</div>
          <div>PIC S9(4)V99</div>
          <div>PIC S9(4)V99</div>
          <div>PIC S9(4)V99</div>
        </div>
        <div className="col tCenter">
          <div>Campo destino</div>
          <div>PIC S9(4)V9999</div>
          <div>PIC S9(4)V99</div>
          <div>PIC S9(6)V99</div>
          <div>PIC S9(6)V99</div>
          <div>PIC S9(2)V99</div>
        </div>
        <div className="col tCenter">
          <div>Resultado</div>
          <div>1234.5600</div>
          <div>
            sin redondeo: 1234.56 <br /> con redondeo: 1234.57
          </div>
          <div>1234.56</div>
          <div>1234.56</div>
          <div>34.56</div>
        </div>
      </Cuadro>
      <br />

      <h5>
        Movimiento entre campos numéricos (PIC 9) a campos con decimales (V, S9){" "}
      </h5>
      <Cuadro data={{ gridTemplateColumns: "6fr 2fr 2fr 2fr 2fr" }} key={380}>
        <div className="col tCenter">
          <div>Regla</div>
          <div>
            Si el destino tiene decimales adicionales el número entero se mueve
            sin cambios y os decimales del destino se rellenan con ceros.
          </div>
          <div>
            Si el destino tiene más enteros y decimales entonces el número se
            mueve sin cambios. Los enteros adicionales del destino se rellenan
            con ceros a la izquierda. Los decimales se rellenan con 00.
          </div>
          <div>
            Si el destino tiene menos enteros que el origen (ERROR de
            desbordamiento)
          </div>
          <div>
            Si el destino tiene signo (S9(4)V99). el número se mueve sin
            cambios. Se agregan ceros en la parte decimal. El signo del destino
            sigue siendo positivo (+), ya que el origen no tenía signo.
          </div>
        </div>
        <div className="col tCenter">
          <div>Dato </div>
          <div>1234</div>
          <div>123</div>
          <div>1234</div>
          <div>5678</div>
        </div>
        <div className="col tCenter">
          <div>Campo origen</div>
          <div>PIC 9(4)</div>
          <div>PIC 9(3)</div>
          <div>PIC 9(4)</div>
          <div>PIC 9(4)</div>
        </div>
        <div className="col tCenter">
          <div>Campo destino</div>
          <div>PIC 9(4)V99</div>
          <div>PIC 9(6)V99</div>
          <div>PIC 9(2)V99</div>
          <div>PIC S9(4)V99</div>
        </div>
        <div className="col tCenter">
          <div>Resultado</div>
          <div>1234.00</div>
          <div>000123.00</div>
          <div>34.00 </div>
          <div>+5678.00</div>
        </div>
      </Cuadro>
      <br />

      <h5>
        Movimiento entre campos con decimales (V, S9 ) a campos numéricos (PIC 9)
      </h5>
      <Cuadro data={{ gridTemplateColumns: "6fr 2fr 2fr 2fr 2fr" }} key={435}>
        <div className="col tCenter">
          <div>Regla</div>
          <div>
            Si el destino tiene más enteros que el origen: El número entero se
            mueve sin cambios. Los decimales se eliminan (no se redondean). Si
            el destino tiene más espacio, se rellenan ceros a la izquierda.
          </div>
          <div>
            El destino tiene la misma cantidad de enteros que el origen: El
            número entero se mueve sin cambios. Los decimales se eliminan (.99
            desaparece).
          </div>
          <div>
            El destino tiene menos enteros que el origen (ERROR de
            desbordamiento)
          </div>
          <div>
            Movimiento de un campo con signo (S9(4)V99). El número entero se
            mueve sin cambios. El signo se conserva (-). Los decimales se
            eliminan (.78 desaparece).
          </div>
        </div>
        <div className="col tCenter">
          <div>Dato </div>
          <div>1234.56</div>
          <div>5678.99</div>
          <div>1234.56</div>
          <div>-3456.78</div>
        </div>
        <div className="col tCenter">
          <div>Campo origen</div>
          <div>PIC 9(4)V99</div>
          <div>PIC 9(4)V99</div>
          <div>PIC 9(4)V99</div>
          <div>PIC S9(4)V99</div>
        </div>
        <div className="col tCenter">
          <div>Campo destino</div>
          <div>PIC 9(6)</div>
          <div>PIC 9(4)</div>
          <div>PIC 9(2)</div>
          <div>PIC S9(4)</div>
        </div>
        <div className="col tCenter">
          <div>Resultado</div>
          <div>001234</div>
          <div>5678</div>
          <div>34</div>
          <div>-3456</div>
        </div>
      </Cuadro>
      <br />

      <hr />
    </section>
  );
};

export { Mod3_5 };
