import { Esp } from "../espacio";
import Red from "../Colors/Red";
import Grey from "../Colors/Grey";
const Mod7_4 = () => {
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
        DATA DIVISION. <br />
        WORKING-STORAGE SECTION. <br />
        01 Edad PIC 9(3) VALUE 25. <br />
        01 Resultado PIC X(20). <br />
        <br />
        PROCEDURE DIVISION. <br />
        <Esp />
        IF Edad {">"} 0 <br />
        <Esp />
        <Esp />
        MOVE 'Edad válida' TO Resultado <br />
        <Esp />
        ELSE <br />
        <Esp />
        <Esp />
        MOVE 'Edad no válida' TO Resultado <br />
        <Esp />
        END-IF. <br />
        <Esp />
        DISPLAY Resultado.
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
        01 NombreTransformado PIC X(20). <br />
        <br />
        PROCEDURE DIVISION. <br />
        <Esp />
        MOVE FUNCTION UPPER-CASE(NombreMayusculas) TO NombreTransformado. <br />
        <Esp />
        DISPLAY 'Nombre en mayúsculas: ' NombreTransformado.
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
        <Esp />
        05 Nombre PIC X(30) VALUE 'Ana López'. <br />
        <Esp />
        05 Edad PIC 9(3) VALUE 30. <br /> <br />
        PROCEDURE DIVISION. <br />
        <Esp />
        INSPECT Empleado TALLYING TotalEspacios FOR ALL SPACE. <br />
        <Esp />
        IF TotalEspacios {">"} 0 <br />
        <Esp />
        <Esp />
        DISPLAY 'El nombre contiene espacios en blanco.' <br />
        <Esp />
        ELSE <br />
        <Esp />
        <Esp />
        DISPLAY 'El nombre no contiene espacios en blanco.' <br />
        <Esp />
        END-IF. <br /> <br />
        <Esp />
        PERFORM VALIDAR-EDAD VARYING Edad FROM 1 BY 1 UNTIL Edad {">"} 100.{" "}
        <br /> <br />
        VALIDAR-EDAD. <br />
        <Esp />
        IF Edad {"<"} 0 OR Edad {">"} 99 <br />
        <Esp />
        <Esp />
        DISPLAY 'Edad no válida: ' Edad <br />
        <Esp />
        END-IF.
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
    </section>
  );
};

export { Mod7_4 };
