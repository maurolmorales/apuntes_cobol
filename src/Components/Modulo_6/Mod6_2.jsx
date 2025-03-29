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
        <Red>IDENTIFICATION DIVISION</Red>. <br />
        <Red>PROGRAM-ID</Red>. MiPrograma. <br />
        <br />
        <Red>DATA DIVISION</Red>. <br />
        <br />
        <Red>WORKING-STORAGE SECTION</Red>. <br />
        01 NumeroA<Red> PIC </Red>9(3)<Red> VALUE </Red>100. <br />
        01 NumeroB<Red> PIC </Red>9(3)<Red> VALUE </Red>50. <br />
        01 Resultado<Red> PIC </Red>9(4). <br />
        <br />
        <Red>PROCEDURE DIVISION</Red>. <br />
        <Esp />
        <Red>DISPLAY </Red><Grey>'Inicio del programa principal'</Grey>. <br />
        <br />
        <Esp />
        <Red>CALL</Red> <Grey>'MiSubrutina'</Grey> <Red>USING</Red> NumeroA NumeroB Resultado. <br />
        <br />
        <Esp />
        <Red>DISPLAY </Red><Grey>'Resultado: ' </Grey>Resultado. <br />
        <Esp />
        <Red>DISPLAY </Red><Grey>'Fin del programa principal'</Grey>. <br />
        <br />
        <Red>STOP RUN</Red>. <br />
        <br />
        MiSubrutina. <br />
        <Esp />
        <Red>IDENTIFICATION DIVISION</Red>. <br />
        <Esp />
        <Red>PROGRAM-ID</Red>. MiSubrutina. <br />
        <br />
        <Esp />
        <Red>DATA DIVISION</Red>. <br />
        <br />
        <Esp />
        <Red>LINKAGE SECTION</Red>. <br />
        <Esp />
        01 NumA<Red> PIC </Red>9(3). <br />
        <Esp />
        01 NumB<Red> PIC </Red>9(3). <br />
        <Esp />
        01 Resul<Red> PIC </Red>9(4). <br />
        <br />
        <Esp />
        <Red>PROCEDURE DIVISION USING</Red> NumA NumB Resul. <br />
        <Esp />
        <Red>COMPUTE</Red> Resul = NumA + NumB.
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
        <Red>DENTIFICATION DIVISION</Red>. <br />
        <Red>PROGRAM-ID</Red>. MiPrograma. <br />
        <br />
        <Red>DATA DIVISION</Red>. <br />
        <br />
        <Red>WORKING-STORAGE SECTION</Red>. <br />
        01 NumeroA<Red> PIC </Red>9(3)<Red> VALUE </Red>100. <br />
        01 NumeroB<Red> PIC </Red>9(3)<Red> VALUE </Red>50. <br />
        01 Resultado<Red> PIC </Red>9(4). <br />
        <br />
        <Red>PROCEDURE DIVISION</Red>. <br />
        <Esp />
        <Red>DISPLAY </Red><Grey>'Inicio del programa principal'</Grey>. <br />
        <br />
        <Esp />
        CALL <Grey>'MiSubrutina'</Grey> USING NumeroA NumeroB Resultado. <br />
        <br />
        <Esp />
        <Red>DISPLAY </Red><Grey>'Resultado: ' </Grey>Resultado. <br />
        <Esp />
        <Red>DISPLAY </Red><Grey>'Fin del programa principal'</Grey>. <br />
        <br />
        <Red>STOP RUN</Red>. <br />
        <br />
        MiSubrutina. <br />
        <Esp />
        <Red>IDENTIFICATION DIVISION</Red>. <br />
        <Esp />
        <Red>PROGRAM-ID</Red>. MiSubrutina. <br />
        <br />
        <Esp />
        <Red>DATA DIVISION</Red>. <br />
        <br />
        <Esp />
        <Red>LINKAGE SECTION</Red>. <br />
        <Esp />
        01 NumA<Red> PIC </Red>9(3). <br />
        <Esp />
        01 NumB<Red> PIC </Red>9(3). <br />
        <Esp />
        01 Resul<Red> PIC </Red>9(4). <br />
        <br />
        <Esp />
        <Red>PROCEDURE DIVISION USING</Red> NumA NumB Resul. <br />
        <Esp />
        <Red>COMPUTE</Red> Resul = NumA + NumB.
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
