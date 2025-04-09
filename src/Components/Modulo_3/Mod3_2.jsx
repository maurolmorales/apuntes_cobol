const Mod3_2 = ({ Cuadro, Red, Grey, Esp, Com }) => {
  return (
    <section id="3.2">
      <h3>3.2. Niveles de Jerarquía en COBOL</h3>
      <p>
        En COBOL, las variables se organizan jerárquicamente mediante niveles
        numéricos. Cada nivel tiene un propósito específico en la estructura de
        datos del programa. El uso adecuado de los niveles de jerarquía es
        esencial para organizar y describir la relación entre las variables en
        un programa COBOL.
      </p>
      <h5>Level Numbers</h5>
      <li>
        Los niveles 01 y 77 deben comenzar en margen A y debe estar seguidos por
        un blanco y los mismos están asociados a un data-name o FILLER.
      </li>
      <li>
        Los niveles 02 al 49 deben comenzar en margen A o B, y deben estar
        seguidos por un blanco y los mismos están asociados a un data-name o
        FILLER.
      </li>
      <li>
        Lo niveles 66 o 88, pueden empezar en margen A o B deben estar seguidos
        por un blanco y junto con el nivel 77 son llamados niveles especiales.
      </li>
<li>
  LEVEL 66, contiene una cláusula RENAMES. Reagrupa ítems previamente definidos.
</li>
  <li>No puede ser RENAME de otro nivel 66, 01, 77 o 88.</li>
<li>
  LEVEL 77, no puede ser subdivido y el data-name debe ser único como variable, dado
  que no puede ser calificado.
</li>
<li>LEVEL 88, establece un condition-name asociado a una cláusula VALUE.</li>

<div className="codigo">
  77 CONTADOR <Red>PIC</Red> 9(06) <Red>COMP VALUE ZEROS</Red>.  <br/>
  01 REG-EMPLEADO.  <br/>
  <Esp/>05 TIPO-EMPLEADO <Red>PIC</Red> X.  <br/>
  <Esp/><Esp/>88 EXPERTO <Red>VALUE</Red> 'E'.  <br/>
  <Esp/><Esp/>88 NO-EXPERTO <Red>VALUE</Red> 'N'.  <br/>
  <Esp/>05 DIRECCION.  <br/>
  <Esp/><Esp/>10 CALLE <Red>PIC</Red> X(15).  <br/>
  <Esp/><Esp/>10 NUMERO <Red>PIC</Red> X(05).  <br/>
  <Esp/><Esp/>10 CIUDAD <Red>PIC</Red> X(15).  <br/>
  <Esp/><Esp/>10 PROVINCIA <Red>PIC</Red> XX.  <br/>
  66 CIUDAD-PROVINCIA <Red>RENAMES</Red> CIUDAD <Red>THRU</Red> PROVINCIA.  <br/>
</div>


      <h5>Level Indicators</h5>
      <li>
        Cuando un dato no puede subdividirse en más de un dato se llama ítem
        elemental. En caso contrario es un ítem grupal.
      </li>
      <li>
        Los niveles 01 al 49 pueden ser de un ítem elemental o grupal. Y los
        niveles de ítem deben estar en orden creciente pero no consecutivo.
      </li>
      <li>Los niveles 66, 77 y 88 son para ítem elementales.</li>

<h5>Data Name: </h5>

<li>Identifican un dato a ser descripto.</li>
<li>
  Si el DATANAME identifica un DATAITEM a ser usados en un programa. Entonces el DATANAME debe
  ser la primera palabra seguida del LEVELNUMBER
</li>
<li>
  Un DATANAME no puede ser usado como nombre de párrafo o nombre de sección en la PROCEDURE
  DIVISION
</li>
<li>Con calificación un DATANAME puede ser no único.</li>

<div className="codigo">
  01 REG-EMPLEADO.  <br />
  <Esp/>02 COD-EMPLEADO <Red>PIC</Red> 9(05).  <br />
  <Esp/>02 NOMBRE-EMPLEADO <Red>PIC</Red> X(40).  <br />
  <Com>..........................</Com>  <br />
  01 PROYECTO.  <br />
  <Esp/>02 COD-PROYECTO <Red>PIC</Red> 9(03).  <br />
  <Esp/>02 NOMBRE-PROYECTO <Red>PIC</Red> X(25).  <br />
  <Esp/>02 CODEMPLEADO <Red>PIC</Red> 9(05).  <br />
  <Com>..........................</Com>  <br />
  <Red>PROCEDURE DIVISION</Red>.  <br />
  <Esp/><Red>MOVE</Red> COD-EMPLEADO <Red>IN</Red> PROYECTO <Red>TO</Red> <Com>(IN o OF son equivalentes )</Com>  <br />
  <Com>..........................</Com>  <br />
  
</div>

      <h4>Nivel 01 (Nivel Principal)</h4>
      <ul>
        <li>
          El nivel 01 se utiliza para definir las variables principales o
          registros.
        </li>
        <li>
          Las variables declaradas a nivel 01 son las más grandes y representan
          estructuras de datos completas.
        </li>
        <li>
          Pueden contener variables de nivel inferior y otras estructuras de
          datos.
        </li>
        <li>
          Se utilizan para organizar y describir datos a un alto nivel de
          abstracción.
        </li>
      </ul>
      <div className="twoColums">
        <div className="codigo">
          01 Cliente. <br />
          <Esp />
          02 Nombre <Red>PIC</Red> X(30). <br />
          <Esp />
          02 Edad <Red>PIC</Red> 99. <br />
          <Esp />
          02 Direccion. <br />
          <Esp />
          <Esp />
          03 Calle <Red>PIC</Red> X(50). <br />
          <Esp />
          <Esp />
          03 Ciudad <Red>PIC</Red> X(20).
        </div>
        <p>
          En este ejemplo, Cliente es una variable a nivel 01 que contiene datos
          de un cliente, como nombre, edad y dirección. A su vez, Direccion es
          una estructura de datos dentro de Cliente.
        </p>
      </div>
      <h4>Nivel 02, 03, 04, etc. (Niveles Inferiores)</h4>
      <ul>
        <li>
          Los niveles 02, 03, 04, etc., se utilizan para definir variables
          secundarias dentro de una estructura.
        </li>
        <li>
          Estas variables se utilizan para representar campos individuales o
          subestructuras dentro de la variable de nivel superior.
        </li>
        <li>
          Los niveles más bajos indican una relación de anidamiento dentro de la
          estructura de datos.
        </li>
      </ul>
      <div className="twoColums">
        <div className="codigo">
          01 Empleado. <br />
          <Esp />
          02 Nombre <Red>PIC</Red> X(30). <br />
          <Esp />
          02 Edad <Red>PIC</Red> 99. <br />
          <Esp />
          02 Departamento. <br />
          <Esp />
          <Esp />
          03 NombreDepto <Red>PIC</Red> X(20). <br />
          <Esp />
          <Esp />
          03 UbicacionDepto <Red>PIC</Red> X(30). <br />
          <Esp />
          02 Salario <Red>PIC</Red> 9(7)V99.
        </div>
        <p>
          En este ejemplo, las variables Nombre, Edad, Departamento, y Salario
          son de nivel 02 dentro de la variable Empleado. A su vez, NombreDepto
          y UbicacionDepto son de nivel 03 dentro de Departamento.
        </p>
      </div>
      <h4>Uso del 77</h4>
      <p>
        cuando se utiliza el nivel de número 77, se está definiendo una variable
        de nivel elemental. Esta variable no se subdivide en ninguna otra parte
        de la estructura de datos y no forma parte de ningún registro. Es una
        variable independiente y no tiene componentes adicionales.
      </p>
      <div className="codigo">
        77 VARIABLE-EJEMPLO <Red>PIC</Red> X(10).
      </div>
      <h4>Uso del 88</h4>
      <p>
        El nivel 88 en COBOL se utiliza para definir condiciones simbólicas o
        alias para valores específicos de una variable. Proporciona una forma
        legible y fácil de entender para verificar si una variable tiene un
        valor particular. Se puede utilizar en conjunción con variables
        alfanuméricas y numéricas.
      </p>
      <p>
        Supongamos que tenemos una variable ESTADO-CIVIL que puede tomar valores
        como 'S' para soltero, 'C' para casado, 'D' para divorciado y 'V' para
        viudo. Podemos definir condiciones simbólicas utilizando el nivel 88
        para estos valores específicos de la siguiente manera:
      </p>
      <div className="twoColums">
        <div className="codigo">
          01 ESTADO-CIVIL <Red>PIC</Red> X. <br />
          <Esp />
          88 SOLTERO VALUE <Grey>'S'</Grey>. <br />
          <Esp />
          88 CASADO VALUE <Grey>'C'</Grey>. <br />
          <Esp />
          88 DIVORCIADO VALUE <Grey>'D'</Grey>. <br />
          <Esp />
          88 VIUDO VALUE <Grey>'V'</Grey>. <br />
        </div>
        <p>
          Ahora, podemos utilizar estas condiciones simbólicas para verificar el
          estado civil de una persona de una manera más legible en nuestro
          programa. Por ejemplo:
        </p>
      </div>
      <div className="twoColums">
        <div className="codigo">
          <Red>IF</Red> SOLTERO <br />
          <Esp /> <Red>DISPLAY</Red> <Grey>'La persona está soltera.'</Grey>{" "}
          <br />
          <Red>ELSE IF</Red> CASADO <br />
          <Esp /> <Red>DISPLAY</Red> <Grey>'La persona está casada.'</Grey>{" "}
          <br />
          <Red>ELSE IF</Red> DIVORCIADO <br />
          <Esp /> <Red>DISPLAY</Red> <Grey>'La persona está divorciada.'</Grey>{" "}
          <br />
          <Red>ELSE IF</Red> VIUDO <br />
          <Esp /> <Red>DISPLAY</Red> <Grey>'La persona está viuda.'</Grey>{" "}
          <br />
          <Red>END-IF</Red>. <br />
        </div>
        <p>
          Aquí, SOLTERO, CASADO, DIVORCIADO y VIUDO actúan como condiciones
          simbólicas que se evalúan como verdaderas si la variable ESTADO-CIVIL
          tiene los valores correspondientes. Esto hace que el código sea más
          legible y fácil de entender en comparación con el uso directo de
          valores de variables en las condiciones.
        </p>
      </div>
      <h4>Uso de Niveles de Jerarquía</h4>
      <ul>
        <li>
          Los niveles de jerarquía ayudan a organizar y describir la relación
          entre las variables y campos de datos en un programa COBOL.
        </li>
        <li>
          Se utilizan para representar estructuras de datos complejas y
          anidadas, lo que facilita la manipulación de información detallada en
          aplicaciones empresariales.
        </li>
        <li>
          Los niveles más bajos se utilizan para definir campos individuales o
          subestructuras, mientras que los niveles superiores representan
          estructuras de datos más amplias.
        </li>
      </ul>
      <h4>Conclusión</h4>
      <p>
        El uso de niveles de jerarquía en COBOL es esencial para la organización
        y descripción de datos en programas. Esto permite representar
        estructuras de datos complejas y anidadas de manera clara y eficiente.
        La comprensión de los niveles de jerarquía es fundamental para
        desarrollar aplicaciones COBOL efectivas en entornos empresariales.
      </p>
    </section>
  );
};

export { Mod3_2 };
