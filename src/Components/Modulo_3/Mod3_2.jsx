import { Esp } from "../espacio";
const Mod3_2 = () => {
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
      <div className="codigo">
        01 Cliente. <br />
        <Esp />
        02 Nombre PIC X(30). <br />
        <Esp />
        02 Edad PIC 99. <br />
        <Esp />
        02 Direccion. <br />
        <Esp />
        <Esp />
        03 Calle PIC X(50). <br />
        <Esp />
        <Esp />
        03 Ciudad PIC X(20).
      </div>
      <p>
        En este ejemplo, Cliente es una variable a nivel 01 que contiene datos
        de un cliente, como nombre, edad y dirección. A su vez, Direccion es una
        estructura de datos dentro de Cliente.
      </p>
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
      <div className="codigo">
        01 Empleado. <br />
        <Esp />
        02 Nombre PIC X(30). <br />
        <Esp />
        02 Edad PIC 99. <br />
        <Esp />
        02 Departamento. <br />
        <Esp />
        <Esp />
        03 NombreDepto PIC X(20). <br />
        <Esp />
        <Esp />
        03 UbicacionDepto PIC X(30). <br />
        <Esp />
        02 Salario PIC 9(7)V99.
      </div>
      <p>
        En este ejemplo, las variables Nombre, Edad, Departamento, y Salario son
        de nivel 02 dentro de la variable Empleado. A su vez, NombreDepto y
        UbicacionDepto son de nivel 03 dentro de Departamento.
      </p>
      <h4>Uso del 77</h4>
      <p>
        cuando se utiliza el nivel de número 77, se está definiendo una variable
        de nivel elemental. Esta variable no se subdivide en ninguna otra parte
        de la estructura de datos y no forma parte de ningún registro. Es una
        variable independiente y no tiene componentes adicionales.
      </p>
      <div className="codigo">77 VARIABLE-EJEMPLO PIC X(10).</div>
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
      <div className="codigo">
        01 ESTADO-CIVIL PIC X. <br />
        <Esp />
        88 SOLTERO VALUE 'S'. <br />
        <Esp />
        88 CASADO VALUE 'C'. <br />
        <Esp />
        88 DIVORCIADO VALUE 'D'. <br />
        <Esp />
        88 VIUDO VALUE 'V'. <br />
      </div>
      <p>
        Ahora, podemos utilizar estas condiciones simbólicas para verificar el
        estado civil de una persona de una manera más legible en nuestro
        programa. Por ejemplo:
      </p>
      <div className="codigo">
        IF SOLTERO <br />
        <Esp /> DISPLAY 'La persona está soltera.' <br />
        ELSE IF CASADO <br />
        <Esp /> DISPLAY 'La persona está casada.' <br />
        ELSE IF DIVORCIADO <br />
        <Esp /> DISPLAY 'La persona está divorciada.' <br />
        ELSE IF VIUDO <br />
        <Esp /> DISPLAY 'La persona está viuda.' <br />
        END-IF. <br />
      </div>
      <p>
        Aquí, SOLTERO, CASADO, DIVORCIADO y VIUDO actúan como condiciones
        simbólicas que se evalúan como verdaderas si la variable ESTADO-CIVIL
        tiene los valores correspondientes. Esto hace que el código sea más
        legible y fácil de entender en comparación con el uso directo de valores
        de variables en las condiciones.
      </p>
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
