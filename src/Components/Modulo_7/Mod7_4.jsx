const Mod7_4 = ({ Cuadro, Red, Grey, Esp, Com }) => {
  return (
    <section id="7.4">
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
        <Red>DATA DIVISION</Red>. <br />
        <Red>WORKING-STORAGE SECTION</Red>  . <br />
        01 Edad<Red> PIC </Red>9(3)<Red> VALUE </Red>25. <br />
        01 Resultado<Red> PIC </Red>X(20). <br />
        <br />
        <Red>PROCEDURE DIVISION</Red>. <br />
        <Esp />
        <Red>IF </Red>Edad {">"} 0 <br />
        <Esp />
        <Esp />
        <Red>MOVE </Red><Grey>'Edad válida'</Grey><Red> TO </Red>Resultado <br />
        <Esp />
        <Red>ELSE </Red><br />
        <Esp />
        <Esp />
        <Red>MOVE </Red><Grey>'Edad no válida'</Grey><Red> TO </Red>Resultado <br />
        <Esp />
        <Red>END-IF</Red>. <br />
        <Esp />
        <Red>DISPLAY</Red> Resultado.
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
        <Red>DATA DIVISION</Red>. <br />
        <Red>WORKING-STORAGE SECTION</Red>. <br />
        01 NombreMayusculas<Red> PIC </Red>X(20)<Red> VALUE </Red><Grey>'juan perez'</Grey>. <br />
        01 NombreTransformado<Red> PIC </Red>X(20). <br />
        <br />
        <Red>PROCEDURE DIVISION</Red>. <br />
        <Esp />
        <Red>MOVE FUNCTION</Red> UPPER-CASE(NombreMayusculas)<Red> TO </Red>NombreTransformado. <br />
        <Esp />
        <Red>DISPLAY</Red> <Grey>'Nombre en mayúsculas: ' </Grey>NombreTransformado.
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
        instrucciones PERFORM y declaraciones <Red>INSPECT </Red>para iterar a través de
        elementos y realizar validaciones o transformaciones específicas.
      </p>
      <div className="codigo">
        <Red>DATA DIVISION</Red>. <br />
        <Red>WORKING-STORAGE SECTION</Red>. <br />
        01 Empleado. <br />
        <Esp />
        05 Nombre<Red> PIC </Red>X(30)<Red> VALUE </Red><Grey>'Ana López'</Grey>. <br />
        <Esp />
        05 Edad<Red> PIC </Red>9(3)<Red> VALUE </Red>30. <br /> <br />
        <Red>PROCEDURE DIVISION</Red>. <br />
        <Esp />
        <Red>INSPECT </Red>Empleado <Red>TALLYING </Red>TotalEspacios <Red>FOR ALL SPACE</Red>. <br />
        <Esp />
        <Red>IF </Red>TotalEspacios {">"} 0 <br />
        <Esp />
        <Esp />
        <Red>DISPLAY</Red> <Grey>'El nombre contiene espacios en blanco.'</Grey> <br />
        <Esp />
        <Red>ELSE </Red><br />
        <Esp />
        <Esp />
        <Red>DISPLAY</Red> <Grey>'El nombre no contiene espacios en blanco.'</Grey>
         <br />
        <Esp />
        <Red>END-IF</Red>. <br /> <br />
        <Esp />
        <Red>PERFORM </Red>VALIDAR-EDAD <Red>VARYING</Red> Edad <Red>FROM</Red> 1 <Red>BY</Red> 1 <Red>UNTIL</Red> Edad {">"} 100.{" "}
        <br /> <br />
        VALIDAR-EDAD. <br />
        <Esp />
        <Red>IF </Red>Edad {"<"} 0 <Red>OR</Red> Edad {">"} 99 <br />
        <Esp />
        <Esp />
        <Red>DISPLAY</Red> <Grey>'Edad no válida: '</Grey> Edad <br />
        <Esp />
        <Red>END-IF</Red>.
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
      <hr />
    </section>
  );
};

export { Mod7_4 };
