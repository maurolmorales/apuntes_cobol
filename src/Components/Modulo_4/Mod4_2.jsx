const Mod4_2 = ({ Cuadro, Red, Grey, Esp, Com }) => {
  return (
    <section id="4.2">
            <h3>4.2. Sentencias de Toma de Decisiones en COBOL</h3>
      <p>
        En COBOL, las sentencias de toma de decisiones se utilizan para tomar
        acciones específicas en función de condiciones o valores. Estas
        sentencias son fundamentales para dirigir la ejecución del programa en
        diferentes ramas de acuerdo con las condiciones evaluadas.
      </p>
      <h4>IF-ELSE</h4>
      <p>
        La sentencia IF en COBOL se utiliza para tomar decisiones basadas en
        condiciones. Puede ir acompañada de ELSE para manejar situaciones
        alternativas.
      </p>
      <div className="codigo">
        <Red>IF</Red> SaldoCuenta {"<"} 0 <br />
        <Esp/>  <Red>DISPLAY</Red> <Grey>'Cuenta en números rojos'</Grey> <br />
        <Red>ELSE</Red> <br />
        <Esp/><Red>DISPLAY</Red> <Grey>'Cuenta en buen estado' </Grey><br />
        <Red>END-IF</Red>.
      </div>
      <p>
        En este ejemplo, se muestra un mensaje en función del saldo de la
        cuenta.
      </p>
      <h4>EVALUATE</h4>
      <p>
        La sentencia EVALUATE en COBOL se utiliza para realizar múltiples
        comparaciones en paralelo y tomar decisiones basadas en los resultados
        de esas comparaciones.
      </p>
      <div className="codigo">
        <Red>EVALUATE</Red> OpcionMenu <br />
          <Esp/><Red>WHEN</Red> <Grey>'1'</Grey> <Red>DISPLAY</Red> <Grey>'Seleccionó la opción 1'</Grey> <br />
          <Esp/><Red>WHEN</Red> <Grey>'2'</Grey> <Red>DISPLAY</Red> <Grey>'Seleccionó la opción 2'</Grey> <br />
          <Esp/><Red>WHEN</Red> <Grey>'3'</Grey> <Red>DISPLAY</Red> <Grey>'Seleccionó la opción 3'</Grey> <br />
          <Esp/><Red>WHEN OTHER DISPLAY</Red> <Grey>'Opción no válida'</Grey> <br />
        <Red>END-EVALUATE</Red>.
      </div>
      <p>
        En este ejemplo, se evalúa la opción de menú y se muestra un mensaje en
        función de la opción seleccionada.
      </p>
      <h4>PERFORM UNTIL</h4>
      <p>
        La sentencia PERFORM UNTIL se utiliza para repetir un bloque de código
        hasta que se cumple una condición.
      </p>
      <div className="codigo">
        01 Contador <Red>PIC</Red> 9 <Red>VALUE</Red> 1. <br /><br />

        <Red>PERFORM UNTIL</Red> Contador {">"} 5 <br />
           <Esp/><Red>DISPLAY</Red> <Grey>'Iteración '</Grey> Contador <br />
           <Esp/><Red>ADD</Red> 1 <Red>TO</Red> Contador <br />
        <Red>END-PERFORM</Red>.
      </div>
      <p>
        En este ejemplo, se muestra un mensaje en cada iteración hasta que el
        contador sea mayor que 5.
      </p>
      <h4>IF-ELSE anidados</h4>
      <p>
        En COBOL, es posible anidar sentencias IF-ELSE para manejar condiciones
        más complejas. Esto permite tomar decisiones en función de múltiples
        condiciones.
      </p>
      <div className="codigo">
        <Red>IF</Red> Edad {"<"} 18 <br />
          <Esp/><Red>DISPLAY</Red> <Grey>'Menor de edad'</Grey> <br />
        <Red>ELSE</Red> <br />
        <Esp/><Red>IF</Red> Edad {"<"} 65 <br />
        <Esp/><Esp/><Red>DISPLAY</Red> <Grey>'Adulto'</Grey> <br />
        <Esp/><Red>ELSE</Red> <br />
          <Esp/><Esp/><Red>DISPLAY</Red> <Grey>'Persona mayor'</Grey> <br />
          <Esp/>END-IF. <br />
        END-IF.
      </div>
      <p>
        En este ejemplo, se anidan sentencias IF-ELSE para determinar la
        categoría de edad.
      </p>
      <h4>Conclusión</h4>
      <p>
        Las sentencias de toma de decisiones en COBOL son fundamentales para
        controlar el flujo de ejecución del programa en función de condiciones o
        valores evaluados. Comprender cómo utilizar estas sentencias y cómo
        anidarlas es esencial para desarrollar aplicaciones COBOL efectivas. En
        módulos posteriores, exploraremos ejemplos más complejos de toma de
        decisiones y cómo manejar situaciones más elaboradas en programas COBOL.
      </p>
    </section>
  );
};

export { Mod4_2 };