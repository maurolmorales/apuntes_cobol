import { Esp } from "../espacio";
import Red from "../Colors/Red";
import Grey from "../Colors/Grey";
const Mod6_2 = () => {
  return (
    <section id="6.2">
      <h3>6.2. Paso de Parámetros en COBOL</h3>
      <p>
        El paso de parámetros en COBOL es una técnica que permite que los
        procedimientos y subrutinas reciban información desde el programa
        principal y devuelvan resultados a través de parámetros. Los parámetros
        son variables que se pasan entre el programa principal y las subrutinas
        para compartir información.
      </p>
      <h4>Paso de Parámetros a Subrutinas</h4>
      <p>
        El paso de parámetros a subrutinas se realiza utilizando la cláusula
        USING en la llamada a la subrutina. Los parámetros se enumeran en la
        sección USING y se pasan a la subrutina. La subrutina debe estar
        definida para recibir los parámetros en el mismo orden.
      </p>
      <div className="codigo">
        IDENTIFICATION DIVISION. <br />
        PROGRAM-ID. MiPrograma. <br />
        <br />
        DATA DIVISION. <br />
        <br />
        WORKING-STORAGE SECTION. <br />
        01 NumeroA PIC 9(3) VALUE 100. <br />
        01 NumeroB PIC 9(3) VALUE 50. <br />
        01 Resultado PIC 9(4). <br />
        <br />
        PROCEDURE DIVISION. <br />
        <Esp />
        DISPLAY 'Inicio del programa principal'. <br />
        <br />
        <Esp />
        CALL 'MiSubrutina' USING NumeroA NumeroB Resultado. <br />
        <br />
        <Esp />
        DISPLAY 'Resultado: ' Resultado. <br />
        <Esp />
        DISPLAY 'Fin del programa principal'. <br />
        <br />
        STOP RUN. <br />
        <br />
        MiSubrutina. <br />
        <Esp />
        IDENTIFICATION DIVISION. <br />
        <Esp />
        PROGRAM-ID. MiSubrutina. <br />
        <br />
        <Esp />
        DATA DIVISION. <br />
        <br />
        <Esp />
        LINKAGE SECTION. <br />
        <Esp />
        01 NumA PIC 9(3). <br />
        <Esp />
        01 NumB PIC 9(3). <br />
        <Esp />
        01 Resul PIC 9(4). <br />
        <br />
        <Esp />
        PROCEDURE DIVISION USING NumA NumB Resul. <br />
        <Esp />
        COMPUTE Resul = NumA + NumB.
      </div>
      <p>
        En este ejemplo, la subrutina MiSubrutina recibe tres parámetros: NumA,
        NumB, y Resul. Estos parámetros se pasan desde el programa principal
        mediante la sentencia CALL utilizando la cláusula USING.
      </p>
      <h4>Paso de Parámetros de Retorno</h4>
      <p>
        El paso de parámetros de retorno se utiliza para devolver resultados
        desde una subrutina al programa principal. Los parámetros de retorno se
        declaran en la subrutina y se modifican para enviar resultados al
        programa principal.
      </p>
      <div className="codigo">
        DENTIFICATION DIVISION. <br />
        PROGRAM-ID. MiPrograma. <br />
        <br />
        DATA DIVISION. <br />
        <br />
        WORKING-STORAGE SECTION. <br />
        01 NumeroA PIC 9(3) VALUE 100. <br />
        01 NumeroB PIC 9(3) VALUE 50. <br />
        01 Resultado PIC 9(4). <br />
        <br />
        PROCEDURE DIVISION. <br />
        <Esp />
        DISPLAY 'Inicio del programa principal'. <br />
        <br />
        <Esp />
        CALL 'MiSubrutina' USING NumeroA NumeroB Resultado. <br />
        <br />
        <Esp />
        DISPLAY 'Resultado: ' Resultado. <br />
        <Esp />
        DISPLAY 'Fin del programa principal'. <br />
        <br />
        STOP RUN. <br />
        <br />
        MiSubrutina. <br />
        <Esp />
        IDENTIFICATION DIVISION. <br />
        <Esp />
        PROGRAM-ID. MiSubrutina. <br />
        <br />
        <Esp />
        DATA DIVISION. <br />
        <br />
        <Esp />
        LINKAGE SECTION. <br />
        <Esp />
        01 NumA PIC 9(3). <br />
        <Esp />
        01 NumB PIC 9(3). <br />
        <Esp />
        01 Resul PIC 9(4). <br />
        <br />
        <Esp />
        PROCEDURE DIVISION USING NumA NumB Resul. <br />
        <Esp />
        COMPUTE Resul = NumA + NumB.
      </div>
      <p>
        En este ejemplo, la subrutina MiSubrutina modifica el parámetro Resul y
        envía el resultado de vuelta al programa principal.
      </p>
      <h4>Conclusión</h4>
      <p>
        El paso de parámetros en COBOL es esencial para compartir información
        entre el programa principal y las subrutinas. Permite que las subrutinas
        realicen tareas específicas con datos proporcionados por el programa
        principal y devuelvan resultados si es necesario. Comprender cómo pasar
        y recibir parámetros en COBOL es crucial para el desarrollo de
        aplicaciones estructuradas y modularizadas en COBOL.
      </p>
    </section>
  );
};

export { Mod6_2 };
