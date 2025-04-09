const Mod8_1 = ({ Cuadro, Red, Grey, Esp, Com }) => {
  return (
    <section id="8.1">
      <h3>8.1. Estrategias de Depuración en COBOL</h3>
      <p>
        La depuración es un proceso esencial en el desarrollo de software que
        implica identificar, diagnosticar y corregir errores en un programa. En
        COBOL, existen varias estrategias y herramientas para depurar programas
        de manera efectiva.
      </p>
      <h4>Utilización de Compiladores y Listados</h4>
      <p>
        Los compiladores de COBOL, como GnuCOBOL, suelen generar listados de
        compilación que muestran el código fuente y el código objeto resultante.
        Estos listados son útiles para rastrear errores y verificar la
        generación de código. Para aprovechar esta estrategia, debes:
      </p>
      <ol>
        <li>
          Generar un listado de compilación durante el proceso de compilación.
        </li>
        <li>Examinar el listado para buscar errores de sintaxis o lógicos.</li>
        <li>
          Identificar las ubicaciones de los errores y las líneas de código
          asociadas.
        </li>
      </ol>
      <h4>Inserción de Sentencias de Depuración</h4>
      <p>
        Una técnica común en la depuración es la inserción de sentencias de
        depuración en el código fuente. Estas sentencias pueden ser DISPLAY para
        mostrar valores de variables o STOP RUN para detener la ejecución del
        programa en un punto específico. Puedes seguir estos pasos:
      </p>
      <ol>
        <li>Identificar las áreas sospechosas del código.</li>
        <li>
          Insertar sentencias DISPLAY o STOP RUN para examinar el estado del
          programa.
        </li>
        <li>Ejecutar el programa y observar la salida de depuración.</li>
      </ol>
      <div className="codigo">
        <Red>IF</Red> Saldo {"<"} 0 <br />
        <Esp />
        <Red>DISPLAY</Red><Grey> '¡Error! Saldo negativo: ' </Grey>Saldo <br />
        <Red>END-IF</Red>.
      </div>
      <h4>Uso de Herramientas de Depuración Interactiva</h4>
      <p>
        Algunos entornos de desarrollo COBOL ofrecen herramientas de depuración
        interactiva que permiten establecer puntos de interrupción, inspeccionar
        variables y ejecutar el programa paso a paso. Estas herramientas son
        útiles para depurar programas más grandes y complejos. Los pasos típicos
        son:
      </p>
      <ol>
        <li>Identificar el punto de inicio de la depuración.</li>
        <li>Establecer puntos de interrupción en áreas críticas.</li>
        <li>Ejecutar el programa en modo de depuración.</li>
        <li>
          Inspeccionar variables y seguir la ejecución del programa paso a paso.
        </li>
      </ol>
      <h4>Análisis de Dump</h4>
      <p>
        En situaciones difíciles de depurar, puedes recurrir al análisis de
        dumps. Un dump es un volcado de memoria que registra el estado del
        programa en un momento dado. Puedes generar un dump cuando el programa
        encuentra un error grave. Luego, debes:
      </p>
      <ol>
        <li>Analizar el dump para identificar la ubicación del problema.</li>
        <li>
          Inspeccionar las variables y registros en el dump para entender el
          estado del programa.
        </li>
        <li>Corregir el error y volver a ejecutar el programa.</li>
      </ol>
      <h4>Pruebas por División y Conquista</h4>
      <p>
        Si estás lidiando con un programa grande o complejo, una estrategia
        efectiva es utilizar pruebas por división y conquista. Esto implica
        dividir el programa en partes más pequeñas y depurar cada parte por
        separado antes de combinarlas. Los pasos son:
      </p>
      <ol>
        <li>Identificar las áreas problemáticas o módulos sospechosos.</li>
        <li>Dividir el programa en partes más pequeñas.</li>
        <li>Depurar cada parte individualmente.</li>
        <li>Combinar las partes depuradas para formar el programa completo.</li>
      </ol>
      <h4>Conclusión</h4>
      <p>
        La depuración es una parte fundamental del desarrollo de software en
        COBOL. Al utilizar estrategias como la revisión de listados de
        compilación, la inserción de sentencias de depuración, el uso de
        herramientas interactivas y el análisis de dumps, puedes identificar y
        corregir errores de manera efectiva. La depuración es un proceso
        iterativo que requiere paciencia y atención a los detalles, pero es
        esencial para garantizar que tus programas COBOL funcionen correctamente
        y sean fiables en entornos empresariales y sistemas legados.
      </p>
    </section>
  );
};

export { Mod8_1 };
