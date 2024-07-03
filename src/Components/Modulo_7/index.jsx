import { Esp } from "../espacio";
const Modulo7 = () => {
  return (
    <article id="modulo-7">
      <div className="h2-topBar">
        <h2> Módulo 7: Trabajo con Datos en COBOL</h2>

        <a href="#indice">al Indice</a>
      </div>
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
      <div className="codigo">
      MOVE Cadena1 + ' ' + Cadena2 TO Resultado.
      </div>
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
INSPECT Cadena1 TALLYING NumReemplazos FOR ALL 'a' REPLACING ALL 'a' BY 'X'. <br />
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
      <h3>7.2. Formateo de Fechas y Horas en COBOL</h3>
      <p>
        El formateo de fechas y horas es una tarea común en la programación,
        particularmente en aplicaciones empresariales donde se necesita
        representar y manipular datos temporales. COBOL ofrece herramientas y
        técnicas para trabajar con fechas y horas de manera efectiva.{" "}
      </p>
      <h4>Declaración de Variables de Fecha y Hora</h4>
      <p>
        Para trabajar con fechas y horas en COBOL, primero debes declarar
        variables que contendrán estos valores. Esto se hace en la sección DATA
        DIVISION.
      </p>
      <div className="codigo">
DATA DIVISION. <br />
WORKING-STORAGE SECTION. <br />
01 FechaActual. <br />
<Esp/>05 Anio PIC 9(4). <br />
<Esp/>05 Mes PIC 9(2). <br />
<Esp/>05 Dia PIC 9(2). <br /> <br />
01 HoraActual. <br />
<Esp/>05 Hora PIC 9(2). <br />
<Esp/>05 Minuto PIC 9(2). <br />
<Esp/>05 Segundo PIC 9(2).
      </div>
      <p>
        En este ejemplo, hemos declarado dos variables: FechaActual y
        HoraActual, que representan la fecha y la hora actual. Cada variable se
        divide en campos separados para año, mes, día, hora, minuto y segundo.
      </p>
      <h4>Obtención de la Fecha y Hora Actual</h4>
      <p>
        Para obtener la fecha y hora actual en COBOL, generalmente se utiliza
        una llamada a una función de sistema o una API proporcionada por el
        entorno de ejecución. La forma de hacerlo puede variar según la
        plataforma y el sistema operativo en el que se esté ejecutando el
        programa COBOL.
      </p>
      <div className="codigo">
      MOVE FUNCTION CURRENT-DATE TO FechaActual. <br />
MOVE FUNCTION CURRENT-TIME TO HoraActual.
      </div>
      <p>
        En este ejemplo, utilizamos las funciones CURRENT-DATE y CURRENT-TIME
        para obtener la fecha y hora actual y luego las movemos a las variables
        FechaActual y HoraActual, respectivamente.
      </p>
      <h4>Formateo de Fechas y Horas</h4>
      <p>
        {" "}
        Una vez que tienes la fecha y la hora en variables, puedes formatearlas
        según tus necesidades. Puedes usar la sentencia MOVE para construir
        cadenas de fecha y hora en un formato específico.{" "}
      </p>
      <div className="codigo">
MOVE Anio TO AnioFormatted. <br />
MOVE '/' TO Separator. <br />
MOVE Mes TO MesFormatted. <br />
MOVE '/' TO Separator. <br />
MOVE Dia TO DiaFormatted. <br />
MOVE AnioFormatted + Separator + MesFormatted + Separator + DiaFormatted TO FechaFormateada. <br />
DISPLAY 'Fecha Formateada: ' FechaFormateada.
      </div>
      <p>
        En este ejemplo, hemos formateado la fecha con el formato "AAAA/MM/DD".
        Puedes aplicar técnicas similares para formatear la hora según tus
        necesidades.
      </p>
      <h4>Conclusión</h4>
      <p>
        El formateo de fechas y horas es esencial en muchas aplicaciones,
        incluidas las aplicaciones empresariales y de sistemas legados escritas
        en COBOL. COBOL proporciona las herramientas necesarias para declarar,
        obtener y formatear fechas y horas de manera efectiva. Comprender cómo
        trabajar con datos temporales es fundamental para el desarrollo de
        aplicaciones COBOL que gestionan información relacionada con el tiempo
        de manera precisa y legible.
      </p>
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
<Esp/>COMPUTE Resultado = NumeroA + NumeroB. <br />
<Esp/>DISPLAY 'Suma: ' Resultado. <br /> <br />
<Esp/>COMPUTE Resultado = NumeroA - NumeroB. <br />
<Esp/>DISPLAY 'Resta: ' Resultado. <br /> <br />
<Esp/>COMPUTE Resultado = NumeroA * NumeroB. <br />
<Esp/>DISPLAY 'Multiplicación: ' Resultado. <br /> <br />
<Esp/>COMPUTE Resultado = NumeroA / NumeroB. <br />
<Esp/>DISPLAY 'División: ' Resultado.
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
<Esp/>COMPUTE InteresSimple = (Capital * TasaInteres * Tiempo) / 100. <br />
<Esp/>DISPLAY 'Interés Simple: ' InteresSimple.
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
<Esp/>COMPUTE TotalVenta = PrecioVenta * Cantidad. <br />
<Esp/>DISPLAY 'Total de Venta: ' TotalVenta.
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
      <h3>7.4. Validación y Transformación de Datos en COBOL</h3>
      <p>
        La validación y transformación de datos son tareas críticas en la
        programación, especialmente en aplicaciones empresariales y de
        procesamiento de datos. COBOL proporciona herramientas y técnicas para
        realizar estas operaciones de manera efectiva.{" "}
      </p>
      <h4>Validación de Datos</h4>
      <p>
        La validación de datos implica verificar que los datos cumplan con
        ciertas reglas o restricciones antes de ser procesados. Puedes realizar
        la validación de datos en COBOL utilizando declaraciones IF o EVALUATE.
        Por ejemplo, puedes verificar si un número es positivo o si una cadena
        cumple con un formato específico.
      </p>
      <div className="codigo">
DATA DIVISION. <br />
WORKING-STORAGE SECTION. <br />
01 Edad PIC 9(3) VALUE 25. <br />
01 Resultado PIC X(20). <br /><br />
PROCEDURE DIVISION. <br />
<Esp/>IF Edad {">"} 0 <br />
<Esp/><Esp/>MOVE 'Edad válida' TO Resultado <br />
<Esp/>ELSE <br />
<Esp/><Esp/>MOVE 'Edad no válida' TO Resultado <br />
<Esp/>END-IF. <br />
<Esp/>DISPLAY Resultado.
      </div>
      <p>
        En este ejemplo, validamos si la variable Edad es un número positivo
        antes de asignar un mensaje al resultado.
      </p>
      <h4>Transformación de Datos</h4>
      <p>
        La transformación de datos implica cambiar el formato o la estructura de
        los datos. Puedes utilizar declaraciones de asignación para transformar
        datos en COBOL. Esto es útil, por ejemplo, cuando necesitas formatear
        una fecha o convertir una cadena en mayúsculas o minúsculas.
      </p>
      <div className="codigo">
DATA DIVISION. <br />
WORKING-STORAGE SECTION. <br />
01 NombreMayusculas PIC X(20) VALUE 'juan perez'. <br />
01 NombreTransformado PIC X(20). <br /><br />
PROCEDURE DIVISION. <br />
<Esp/>MOVE FUNCTION UPPER-CASE(NombreMayusculas) TO NombreTransformado. <br />
<Esp/>DISPLAY 'Nombre en mayúsculas: ' NombreTransformado.
      </div>
      <p>
        En este ejemplo, transformamos la variable NombreMayusculas a mayúsculas
        utilizando la función UPPER-CASE y luego asignamos el resultado a
        NombreTransformado.
      </p>
      <h4>Manipulación de Datos Compuestos</h4>
      <p>
        COBOL también permite la validación y transformación de datos en
        estructuras compuestas, como registros y tablas. Puedes utilizar
        instrucciones PERFORM y declaraciones INSPECT para iterar a través de
        elementos y realizar validaciones o transformaciones específicas.
      </p>
      <div className="codigo">
DATA DIVISION. <br />
WORKING-STORAGE SECTION. <br />
01 Empleado. <br />
<Esp/>05 Nombre PIC X(30) VALUE 'Ana López'. <br />
<Esp/>05 Edad PIC 9(3) VALUE 30. <br /> <br />
PROCEDURE DIVISION. <br />
<Esp/>INSPECT Empleado TALLYING TotalEspacios FOR ALL SPACE. <br />
<Esp/>IF TotalEspacios {">"} 0 <br />
<Esp/><Esp/>DISPLAY 'El nombre contiene espacios en blanco.' <br />
<Esp/>ELSE <br />
<Esp/><Esp/>DISPLAY 'El nombre no contiene espacios en blanco.' <br />
<Esp/>END-IF. <br /> <br />
<Esp/>PERFORM VALIDAR-EDAD VARYING Edad FROM 1 BY 1 UNTIL Edad {">"} 100. <br /> <br />
VALIDAR-EDAD. <br />
<Esp/>IF Edad {"<"} 0 OR Edad {">"} 99 <br />
<Esp/><Esp/>DISPLAY 'Edad no válida: ' Edad <br />
<Esp/>END-IF.
      </div>
      <p>
        En este ejemplo, validamos si el campo Nombre contiene espacios en
        blanco y realizamos una validación de la edad para garantizar que esté
        dentro de un rango válido.
      </p>
      <h4>Conclusión</h4>
      <p>
        La validación y transformación de datos son operaciones comunes en el
        desarrollo de aplicaciones en COBOL. Puedes utilizar declaraciones IF,
        EVALUATE, MOVE, INSPECT, PERFORM y funciones predefinidas para llevar a
        cabo estas tareas. La capacidad de validar y transformar datos con
        precisión es esencial para garantizar la integridad de los datos y
        prepararlos para su procesamiento en aplicaciones empresariales y
        sistemas legados escritos en COBOL.
      </p>
    </article>
  );
};
export { Modulo7 };
