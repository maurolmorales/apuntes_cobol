const Mod9_1 = ({ Cuadro, Red, Grey, Esp, Com }) => {
  return (
    <section id="9.1">
      <h3>9.1. Principios de Programación Estructurada en COBOL</h3>
      <p>
        Claro, a continuación, desarrollaré el punto 9.1: "Principios de
        Programación Estructurada" en un curso de COBOL. 9.1. Principios de
        Programación Estructurada en COBOL La programación estructurada es un
        enfoque de diseño de software que se centra en la organización lógica y
        clara del código. Aunque COBOL es conocido por su estilo de programación
        basado en divisiones (Divisiones de Identificación, Medio Ambiente,
        Datos y Procedimientos), muchos de los principios de programación
        estructurada pueden aplicarse al escribir programas COBOL. Aquí hay
        algunos principios clave de la programación estructurada que se pueden
        aplicar en COBOL:
      </p>
      <h4>1. Descomposición Modular</h4>
      <p>
        La descomposición modular implica dividir un programa en módulos o
        subrutinas más pequeñas. En COBOL, esto se logra mediante la creación de
        secciones de código reutilizables utilizando la cláusula PERFORM. Cada
        subrutina debe tener una tarea clara y específica, lo que facilita la
        comprensión y el mantenimiento del código.
      </p>
      <div className="codigo">
        <Red>PERFORM</Red> Inicializar-Datos <br />
        <Red>PERFORM</Red> Procesar-Datos <br />
        <Red>PERFORM</Red> Mostrar-Resultados
      </div>
      <h4>2. Secuencia y Control de Flujo</h4>
      <p>
        En COBOL, el control de flujo se gestiona mediante estructuras de
        control como IF, PERFORM, EVALUATE, y GO TO. La programación
        estructurada fomenta el uso de estructuras de control claras y evita el
        uso excesivo de GO TO, lo que facilita la lectura y comprensión del
        código.
      </p>
      <div className="codigo">
        <Red>IF </Red>Saldo {"<"} 0 <br />
        <Esp />
        <Red>DISPLAY </Red><Grey>'Saldo negativo'</Grey> <br />
        <Red>ELSE</Red> <br />
        <Esp />
        <Red>DISPLAY </Red><Grey>'Saldo positivo'</Grey> <br />
        <Red>END-IF</Red>.
      </div>
      <h4>3. Abstracción de Datos</h4>
      <p>
        La abstracción de datos se refiere a la encapsulación de datos y
        funciones en módulos o subrutinas, lo que oculta los detalles internos y
        simplifica su uso. En COBOL, esto se logra mediante el uso de variables
        locales y parámetros en las subrutinas, lo que evita la exposición
        innecesaria de datos.
      </p>
      <div className="codigo">
        <Red>PERFORM</Red> Calcular-Interes (Capital, TasaInteres, Tiempo)
      </div>
      <h4>4. Evitar Estructuras de Control Anidadas en Exceso</h4>
      <p>
        La anidación excesiva de estructuras de control, como bucles dentro de
        bucles, puede hacer que el código sea difícil de entender. En COBOL, es
        importante limitar la anidación excesiva y dividir las tareas en
        subrutinas si es necesario
      </p>
      <div className="codigo">
        <Red>PERFORM UNTIL</Red> Contador {">"} 10 <br />
        <Esp />
        <Red>PERFORM</Red> Dentro-Del-Bucle <br />
        <Esp />
        <Red>ADD</Red> 1 <Red>TO</Red> Contador <br />
        <Red>END-PERFORM</Red>.
      </div>
      <h4>5. Comentarios Significativos</h4>
      <p>
        La programación estructurada enfatiza la importancia de proporcionar
        comentarios significativos en el código para explicar la lógica y el
        propósito de las secciones de código. Los comentarios ayudan a otros
        programadores a comprender el código más rápidamente.
      </p>
      <div className="codigo">
        * Este programa calcula el interés simple. <br />
        <Red>IDENTIFICATION DIVISION</Red>.
      </div>
      <h4>6. Pruebas Unitarias</h4>
      <p>
        La programación estructurada promueve la realización de pruebas
        unitarias para cada módulo o subrutina por separado. En COBOL, puedes
        desarrollar casos de prueba específicos para cada subrutina y verificar
        su funcionamiento antes de la integración.
      </p>
      <div className="codigo"><Red>PERFORM</Red> Test-Calcular-Interes</div>
      <h4>7. Reutilización de Código</h4>
      <p>
        La reutilización de código es un principio fundamental en la
        programación estructurada. En COBOL, puedes definir subrutinas que
        realicen tareas específicas y reutilizarlas en diferentes partes del
        programa.
      </p>
      <div className="codigo">
        <Red>PERFORM</Red> Calcular-Interes <br />
        <Red>PERFORM</Red> Calcular-Amortización
      </div>

      <h4>Conclusión</h4>
      <p>
        La aplicación de principios de programación estructurada en COBOL
        conlleva a la escritura de código más limpio, organizado y mantenible.
        Al dividir un programa en módulos, utilizar estructuras de control
        efectivas y proporcionar comentarios significativos, los programadores
        pueden escribir código COBOL que sea más fácil de comprender y mantener
        a lo largo del tiempo. Esto es esencial para el desarrollo y
        mantenimiento de aplicaciones empresariales en COBOL.
      </p>
    </section>
  );
};

export { Mod9_1 };
