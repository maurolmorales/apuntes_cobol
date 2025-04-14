const Mod5_1 = ({ Cuadro, Red, Grey, Esp, Com }) => {
  return (
    <section id="5.1">
      <h3>5.1. Introducción a las tablas</h3>
      <p>
        Las tablas en COBOL son estructuras de datos similares a los arreglos en
        otros lenguajes. Permiten almacenar múltiples valores del mismo tipo
        bajo una misma estructura, accediendo a ellos mediante un índice. Se
        utilizan principalmente cuando: Se necesita almacenar listas o
        colecciones de datos. Se desea realizar búsquedas o recorridos
        secuenciales. Se trabaja con estructuras repetitivas (como registros
        mensuales, productos, empleados, etc.). No puede especificarse en una
        descripción de nivel 01, 77, 88 o 66. Entero indica el número de veces
        que se repite un campo con la misma descripción. Se definen solamente en
        los niveles 02 a 49 ambos inclusive Decide qué tipo de datos contendrá
        cada elemento de la tabla y define la estructura correspondiente
        utilizando la cláusula 01 LEVEL. Por ejemplo, si deseas crear una tabla
        de nombres, cada elemento podría ser una cadena de caracteres.
      </p>
      <h4>Uso de OCCURS</h4>
      <p>
      Esta cláusula es para definir tablas de 'n' dimensiones, y pueden ser referenciadas por índices o suscriptores. Esta cláusula no se puede usar en los niveles 01/66/77/88. Se utiliza para declarar arreglos de variables. Permite especificar el número de elementos y la estructura de cada elemento dentro del arreglo. Indica el número de veces 'n' que se repite un elemento (campo simple o compuesto) con la misma descripción. El subíndice correspondiente al primer elemento es 1. El subíndice puede ser un número entero o un nombre de datos. Si es un nombre de datos se recomienda declararlo con formato binario (COMP). La cláusula OCCURS no puede especificarse en una descripción con número de nivel 01 o 77. Una tabla en COBOL puede tener hasta 3 subíndices. En este caso se dice que la tabla es de 3 dimensiones. La cláusula OCCURS y VALUE son incompatibles, lo cual no permite inicializar una tabla en su propia declaración. Por ejemplo, para declarar una tabla de
        nombres con capacidad para 100 elementos, puedes hacer lo siguiente:
      </p>
      <div className="codigo">
        01 TABLA-NOMBRES. <br />
        <Esp />
        05 NOMBRE-REGISTRO <Red>OCCURS</Red> 100 <Red>TIMES</Red>. <br />
        <Esp />
        <Esp />
        10 NOMBRE <Red>PIC</Red> X(30). <br />
        <Esp />
        <Esp />
        10 APELLIDO <Red>PIC</Red> X(30). <br />
      </div>






      <h4>Uso de DEPENDING ON</h4>
      <p>La cláusula DEPENDING ON permite que el número de ocurrencias de una tabla se determine dinámicamente en tiempo de ejecución.</p>
      <div className="twoColums">
        <div className="codigo">
01 TOTAL-EMPLEADOS        <Red>PIC</Red> 9(2).   <br />
01 TABLA-EMPLEADOS.   <br />
<Esp/>05 EMPLEADO-NOMBRE     <Red>PIC</Red> X(30)   <br />
<Esp/><Esp/><Red>OCCURS</Red> 1 <Red>TO</Red> 50 <Red>TIMES</Red>   <br />
<Esp/><Esp/><Red>DEPENDING ON</Red> TOTAL-EMPLEADOS.   <br />

        </div>
        <p> El número real de elementos dependerá del valor de TOTAL-EMPLEADOS.</p>
      </div>



      <h4>5.3 INDEXED BY y USAGE INDEX</h4>
      <p>Cuando se necesita recorrer tablas de forma más eficiente, se puede utilizar un índice, declarado con INDEXED BY.</p>
      <div className="codigo">
01 TABLA-EMPLEADOS.  <br />
<Esp/>05 EMPLEADO-NOMBRE      <Red>PIC</Red> X(30) <Red>OCCURS</Red> 10 <Red>TIMES</Red>  <br />
<br />
<Esp/><Red>INDEXED BY</Red> IDX-NOMBRE.  <br />

      </div>
<div className="twoColums">
    <p>Para manipular el índice se utiliza la instrucción SET:</p>
  <div>
  <div className="codigo">
<Red>SET</Red> IDX-NOMBRE <Red>TO</Red> 1. <br />
<Red>SET</Red> IDX-NOMBRE <Red>UP BY</Red> 1.

  </div>
  </div>
</div>

<div className="twoColums">
  <p>En la <mark>LINKAGE SECTION</mark>, cuando se trabaja con índices, se puede usar USAGE IS INDEX:</p>
  <div className="codigo">01 IDX-NOMBRE <Red>USAGE IS INDEX</Red>.</div>
</div>






<h4>5.4 Inicialización y recorrido</h4>
<p>Las tablas pueden inicializarse con INITIALIZE o manualmente con MOVE.</p>
<div className="twoColums">
  <p>📌 Inicializar toda la tabla:</p>
  <div className="codigo"><Red>INITIALIZE</Red> EMPLEADO-NOMBRE.</div>
</div>

<div className="twoColums">
  <p>📌 Recorrido secuencial con subíndice:</p>
  <div className="codigo">
    <Red>PERFORM VARYING</Red> IDX <Red>FROM</Red> 1 <Red>BY</Red> 1 <Red>UNTIL</Red> IDX {">"} 10  <br />
   <Esp/>    <Red>DISPLAY</Red> EMPLEADO-NOMBRE(IDX)  <br />
    <Red>END-PERFORM</Red>.  <br />
  </div>
</div>
<div className="twoColums">
  <p>📌 Recorrido con índice:</p>
  <div className="codigo">
    <Red>SET</Red> IDX-NOMBRE <Red>TO</Red> 1  <br />
    <Red>PERFORM UNTIL </Red>IDX-NOMBRE {">"} 10  <br />
    <Esp/> <Red>DISPLAY</Red> EMPLEADO-NOMBRE(IDX-NOMBRE)  <br />
    <Esp/> <Red>SET</Red> IDX-NOMBRE <Red>UP BY</Red> 1  <br />
    <Red>END-PERFORM</Red>.  <br />
  </div>
</div>


<h4>5.5 Búsqueda con SEARCH y SEARCH ALL</h4>
COBOL provee dos formas de búsqueda en tablas:
<li><mark>SEARCH</mark>: búsqueda secuencial.</li>
<li><mark>SEARCH ALL</mark>: búsqueda binaria (requiere que la tabla esté ordenada).</li>

<div className="twoColums">
  <p>📌 Ejemplo de <mark>SEARCH</mark>:</p>
  <div className="codigo">
    <Red>SEARCH</Red> EMPLEADO-ID  <br />
    <Esp/>   <Red>AT END DISPLAY</Red> <Grey>'NO ENCONTRADO'</Grey>  <br />
    <Esp/>   <Red>WHEN</Red> EMPLEADO-ID(IDX) = 123  <br />
    <Esp/><Esp/>      <Red>DISPLAY</Red> <Grey>'ENCONTRADO'</Grey>  <br />
    <Red>END-SEARCH</Red>.  <br />
  </div>
</div>

<div className="twoColums">
  <div>
  <p>📌 Ejemplo de <mark>SEARCH ALL</mark>:</p>
    <p>
      Importante: SEARCH ALL requiere: <br />
        Tabla ordenada (ASCENDING KEY). <br />
        Uso de índice, no subíndice. <br />
        Declaración del campo como OCCURS ... INDEXED BY. <br />
    </p>
      </div>
  <div className="codigo">
    <Red>SEARCH ALL</Red> EMPLEADO-ID  <br />
    <Esp/>   <Red>AT END DISPLAY</Red> <Grey>'NO ENCONTRADO'</Grey>  <br />
    <Esp/>   <Red>WHEN</Red> EMPLEADO-ID(IDX) = 123  <br />
    <Esp/><Esp/>      <Red>DISPLAY</Red> <Grey>'ENCONTRADO'</Grey> <br />
    <Red>END-SEARCH</Red>.  <br />
  </div>
</div>



<h5>MANIPULACIÓN DE TABLAS</h5>
      <p>
        Una tabla es un conjunto de elementos del mismo tipo, que comparten en
        común un nombre común pero que son distinguibles por la posición que
        ocupa cada uno de ellos en la tabla. Cada elemento de la tabla puede
        contener un dato numérico o una cadena de caracteres o una combinación
        de ambos. La representación de una tabla se hace mediante variables
        suscritas o de subíndices y puede tener una o varias dimensiones. La
        descripción de una tabla se hace en la sección FILE y en la sección
        WORKINGSTORAGE utilizando la cláusula OCCURS.
      </p>


      <div className="codigo">
          <Red>IDENTIFICATION DIVISION</Red>. <br />
          <Red>PROGRAM-ID</Red>. <Red>EJEMPLO-TABLA</Red>. <br /> <br />
          <Red>DATA DIVISION</Red>. <br />
          <Red>WORKING-STORAGE SECTION</Red>. <br />
          01 NOMBRE-REGISTRO. <br />
          <Esp />
          05 NOMBRE <Red>PIC</Red> X(30). <br />
          <Esp />
          05 APELLIDO <Red>PIC</Red> X(30). <br /> <br />
          01 TABLA-NOMBRES. <br />
          <Esp />
          05 NOMBRE-REGISTRO <Red>OCCURS</Red> 100 <Red>TIMES</Red>. <br />
          <Esp />
          <Esp />
          10 NOMBRE <Red>PIC</Red> X(30). <br />
          <Esp />
          <Esp />
          10 APELLIDO <Red>PIC</Red> X(30). <br /> <br />
          <Red>PROCEDURE DIVISION</Red>. <br />
          <Esp />
          <Red>PERFORM</Red> VACIAR-TABLA <br />
          <Esp />
          <Red>PERFORM</Red> LLENAR-TABLA <br />
          <Esp />
          <Red>PERFORM</Red> MOSTRAR-TABLA <br />
          <Esp />
          <Red>STOP RUN</Red>. <br /> <br />
          VACIAR-TABLA. <br />
          <Esp />
          <Red>INITIALIZE</Red> TABLA-NOMBRES. <br /> <br />
          LLENAR-TABLA. <br />
          <Esp />
          <Red>MOVE</Red> <Grey>'Juan'</Grey> <Red>TO</Red> NOMBRE-REGISTRO(1).
          // Asigna 'Juan' al primer elemento <br />
          <Esp />
          <Red>MOVE</Red> <Grey>'Perez'</Grey> <Red>TO</Red> APELLIDO(1). //
          Asigna 'Perez' al primer elemento <br />
          <Esp />
          <Red>MOVE</Red> <Grey>'Maria'</Grey> <Red>TO</Red> NOMBRE-REGISTRO(2).
          // Asigna 'Maria' al segundo elemento <br />
          <Esp />
          <Red>MOVE</Red> <Grey>'Gomez'</Grey> <Red>TO</Red> APELLIDO(2). //
          Asigna 'Gomez' al segundo elemento <br />
          ... // Continuar llenando la tabla <br /> <br />
          MOSTRAR-TABLA. <br />
          <Esp />
          <Red>DISPLAY</Red> <Grey>'Tabla de nombres:'</Grey> <br />
          <Esp />
          <Red>PERFORM</Red> <Red>VARYING</Red> I <Red>FROM</Red> 1{" "}
          <Red>BY</Red> 1 <Red>UNTIL</Red> I {"> "}100 <br />
          <Esp />
          <Esp />
          <Red>DISPLAY</Red> <Grey>'Nombre: '</Grey> NOMBRE-REGISTRO(I) <br />
          <Esp />
          <Esp />
          <Red>DISPLAY</Red> <Grey>'Apellido: '</Grey> APELLIDO(I) <br />
          <Esp />
          <Red>END-PERFORM</Red>. <br />
          <br />
        </div>



          <h5>Acceder y manipular la tabla:</h5>
        <p>
            Una vez que hayas definido la tabla, puedes acceder y manipular sus
            elementos de la misma manera que lo harías con cualquier otra variable
            en COBOL. Puedes acceder a elementos específicos de la tabla
            utilizando índices y realizar operaciones con ellos según sea
            necesario en tu programa.
        </p>
   

        <h5>Manipulación de tablas en PROCEDURE DIVISION</h5>
      <p>
        Cuando se especifica nombre dato-2 debe ser descrito por medio de la
        cláusula USAGE IS INDEX o como un campo elemental entero. El valor de
        este campo evoluciona paralelamente al índice de la tabla y se emplea
        cuando:
      </p>
        <ul>
          <li>
            A: Aparte de realizar la búsqueda de un determinado elemento de la
            tabla se desea conocer su posición.
          </li>
          <li>
            B: Se desea incrementar simultáneamente el índice de otra tabla
            diferente a la tabla en la que se está realizando la búsqueda. Las
            condiciones de las cláusulas WHEN se evalúan en el orden en que
            están descritas.
          </li>
        </ul>


      <h4>Sentencia SET</h4>
      <p>
        Permite transferir el valor de un literal, nombre de datos o de un
        índice a uno o más identificadores.
      </p>
      <ul>
        <li>
          Formato 1: Cuando se ejecuta esta sentencia el valor del operando que
          sigue a TO es transferido a los operandos que siguen a SET. SET I J TO
          1.
        </li>
        <li>
          Formato 2: Este formato permite ir incrementando (UP BY) o
          decrementando (DOWN BY) el índice o índices en el valor especificado
          por nombre dato o entero. SET I J UP BY 1.
        </li>
      </ul>



    </section>
  );
};

export { Mod5_1 };
