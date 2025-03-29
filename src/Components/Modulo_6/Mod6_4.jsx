import { Esp } from "../espacio";
import Red from "../Colors/Red";
import Grey from "../Colors/Grey";
const Mod6_4 = () => {
  return (
    <section id="6.4">
      <h3>6.4. Reutilización de Código en COBOL</h3>
      <p>
        La reutilización de código es una práctica esencial en la programación,
        que consiste en escribir código de manera que pueda ser utilizado en
        múltiples partes de una aplicación o en diferentes programas. En COBOL,
        la reutilización de código se logra a través de procedimientos,
        subrutinas y la organización estructurada del programa.
      </p>
      <h4>Procedimientos y Subrutinas</h4>
      <p>
        Una de las principales formas de reutilización de código en COBOL es
        mediante la creación de procedimientos y subrutinas. Estos bloques de
        código realizan tareas específicas y se pueden llamar desde diferentes
        partes de un programa o incluso desde varios programas.
      </p>
      <p>
        Un ejemplo de reutilización de código con procedimientos y subrutinas se
        ha presentado en secciones anteriores. Definir tareas específicas en
        procedimientos y subrutinas y llamarlos cuando sea necesario es una
        estrategia efectiva para evitar la duplicación de código y mejorar la
        mantenibilidad.
      </p>
      <h4>Copias de Registros</h4>
      <p>
        Otra forma de reutilización de código en COBOL es a través de copias de
        registros. En lugar de definir la misma estructura de datos
        repetidamente en diferentes partes del programa, se puede crear una
        copia del registro en la sección DATA DIVISION y luego utilizarla en
        múltiples lugares.
      </p>
      <div className="codigo">
        <Red>DATA DIVISION</Red>. <br /> <br />
        <Red>COPY</Red> RegistroCliente. <br /> <br />
        <Red>PROCEDURE DIVISION</Red>. <br />
        <Esp />
        <Red>MOVE</Red> <Grey>'Juan Pérez'</Grey><Red> TO </Red>NombreCliente. <br />
        <Esp />
        <Red>DISPLAY</Red> <Grey>'Nombre del Cliente: '</Grey> NombreCliente. <br /> <br />
        <Esp />
        <Red>MOVE</Red><Grey> 'María Rodríguez'</Grey><Red> TO </Red>NombreCliente. <br />
        <Esp />
        <Red>DISPLAY</Red> <Grey>'Nombre del Cliente: '</Grey> NombreCliente.
      </div>
      <p>
        En este ejemplo, se ha definido una copia del registro RegistroCliente
        en la sección DATA DIVISION. Esto permite reutilizar la estructura de
        datos en diferentes partes del programa sin tener que volver a
        definirla.
      </p>
      <h4>Bibliotecas de Enlace Dinámico</h4>
      <p>
        En COBOL, también es posible reutilizar código a nivel de programas
        mediante el uso de bibliotecas de enlace dinámico. Esto implica
        almacenar procedimientos, subrutinas o módulos en bibliotecas separadas
        y luego enlazar dinámicamente esos recursos cuando se ejecuta el
        programa principal. De esta manera, los mismos procedimientos pueden ser
        compartidos entre múltiples programas.
      </p>
      <h4>Conclusión</h4>
      <p>
        La reutilización de código es una práctica fundamental en la
        programación en COBOL, que ayuda a reducir la redundancia, mejorar la
        mantenibilidad y acelerar el desarrollo de aplicaciones. Mediante la
        creación de procedimientos, subrutinas, copias de registros y el uso de
        bibliotecas de enlace dinámico, es posible lograr una reutilización
        efectiva del código en COBOL, lo que resulta en programas más eficientes
        y fáciles de mantener.
      </p>
      <hr />
    </section>
  );
};

export { Mod6_4 };
