import { Esp } from "../espacio";
const VariablesSimples = () => {
  return (
    <section>
      <h3> 3.1.1 Variables Simples </h3>
      <p>
        Las variables simples en COBOL son elementos básicos de almacenamiento
        que contienen un solo valor. Se declaran en la sección DATA DIVISION del
        programa y se utilizan para almacenar información como números,
        caracteres o fechas. Aquí hay una descripción detallada:
      </p>
      <div className="codigo">
        IDENTIFICATION DIVISION. <br />
        PROGRAM-ID. VariablesSimplesExample. <br />
        DATA DIVISION. <br />
        WORKING-STORAGE SECTION. <br />
        <Esp /> 01 NUMERO-SIMPLE PIC 9(5). <br />
        <Esp /> 01 NOMBRE-SIMPLE PIC X(20). <br />
        <Esp /> 01 FECHA-SIMPLE PIC 9(8). <br />
        PROCEDURE DIVISION. <br />
        <Esp /> MOVE 12345 TO NUMERO-SIMPLE. <br />
        <Esp /> MOVE "Ejemplo" TO NOMBRE-SIMPLE. <br />
        <Esp /> MOVE 20231031 TO FECHA-SIMPLE. <br />
        <Esp /> DISPLAY "Número: " NUMERO-SIMPLE. <br />
        <Esp /> DISPLAY "Nombre: " NOMBRE-SIMPLE. <br />
        <Esp /> DISPLAY "Fecha: " FECHA-SIMPLE. <br />
        STOP RUN.
      </div>
      <p>Descripción de las Variables:</p>
      <ul>
        <li>
          NUMERO-SIMPLE: Una variable numérica simple que puede almacenar hasta
          5 dígitos enteros.
        </li>
        <li>
          NOMBRE-SIMPLE: Una variable alfanumérica simple que puede almacenar
          hasta 20 caracteres.
        </li>
        <li>
          FECHA-SIMPLE: Una variable numérica simple utilizada para representar
          una fecha en formato AAAAMMDD.
        </li>
      </ul>
      <p>Operaciones Comunes con Variables Simples:</p>
      <ol>
        <li>
          Asignación de Valores:
          <div className="codigo">MOVE 67890 TO NUMERO-SIMPLE.</div>
        </li>
        <li>
          Visualización de Valores:
          <div className="codigo">DISPLAY "Número: " NUMERO-SIMPLE.</div>
        </li>
        <li>
          Operaciones Aritméticas:
          <div className="codigo">ADD 100 TO NUMERO-SIMPLE.</div>
        </li>
        <li>
          Manipulación de Cadenas:
          <div className="codigo">MOVE "NuevoNombre" TO NOMBRE-SIMPLE.</div>
        </li>
      </ol>
    </section>
  );
};

export {VariablesSimples};
