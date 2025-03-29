import { Esp } from "../espacio";
import Red from "../Colors/Red";
import Grey from "../Colors/Grey";
const Mod7_2 = () => {
  return (
    <section id="7.2">
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
        <Red>DATA DIVISION</Red>. <br />
        <Red>WORKING-STORAGE SECTION</Red>. <br />
        01 FechaActual. <br />
        <Esp />
        05 Anio<Red> PIC</Red> 9(4). <br />
        <Esp />
        05 Mes<Red> PIC</Red> 9(2). <br />
        <Esp />
        05 Dia<Red> PIC</Red> 9(2). <br /> <br />
        01 HoraActual. <br />
        <Esp />
        05 Hora<Red> PIC</Red> 9(2). <br />
        <Esp />
        05 Minuto<Red> PIC</Red> 9(2). <br />
        <Esp />
        05 Segundo<Red> PIC</Red> 9(2).
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
        <Red>MOVE FUNCTION CURRENT-DATE TO</Red> FechaActual. <br />
        <Red>MOVE FUNCTION CURRENT-TIME TO</Red> HoraActual.
      </div>
      <p>
        En este ejemplo, utilizamos las funciones CURRENT-DATE y CURRENT-TIME
        para obtener la fecha y hora actual y luego las movemos a las variables
        FechaActual y HoraActual, respectivamente.
      </p>
      <h4>Formateo de Fechas y Horas</h4>
      <p>
        Una vez que tienes la fecha y la hora en variables, puedes formatearlas
        según tus necesidades. Puedes usar la sentencia MOVE para construir
        cadenas de fecha y hora en un formato específico.
      </p>
      <div className="codigo">
        <Red>MOVE</Red> Anio<Red> TO </Red>AnioFormatted. <br />
        <Red>MOVE</Red> <Grey>'/'</Grey><Red> TO </Red>Separator. <br />
        <Red>MOVE</Red> Mes<Red> TO </Red>MesFormatted. <br />
        <Red>MOVE</Red> <Grey>'/'</Grey> <Red> TO </Red>Separator. <br />
        <Red>MOVE</Red> Dia<Red> TO </Red>DiaFormatted. <br />
        <Red>MOVE</Red> AnioFormatted + Separator + MesFormatted + Separator + DiaFormatted
        <Red> TO </Red>FechaFormateada. <br />
        <Red>DISPLAY</Red> <Grey>'Fecha Formateada: ' </Grey>FechaFormateada.
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
    </section>
  );
};

export { Mod7_2 };
