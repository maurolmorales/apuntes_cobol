const Mod2_2 = () => {
  return (
    <section id="2.2">
      <h3>IDENTIFICATION DIVISION</h3>
      <p>
        Es la primera división en un programa COBOL y tiene un propósito
        específico: proporcionar información de identificación sobre el
        programa. Esta división contiene metadatos que describen el programa,
        como su nombre, autor, fecha de creación y otros detalles importantes.
        No tiene una funcionalidad operativa en el programa COBOL. Su propósito
        principal es proporcionar información para la documentación y el
        seguimiento del código. Estos detalles de identificación son útiles para
        los desarrolladores, mantenimiento, auditoría y otros involucrados en el
        ciclo de vida del software. Además de los elementos mencionados, la
        IDENTIFICATION DIVISION también puede incluir otros comentarios o
        información que el equipo de desarrollo considere relevante para
        documentar el programa. La práctica de mantener información de
        identificación clara y actualizada es una buena costumbre de
        programación, ya que facilita la comprensión y el mantenimiento del
        código a lo largo del tiempo.
      </p>
      <ul>
        <li>
          <strong>PROGRAM-ID:</strong> Esta declaración especifica el nombre del
          programa COBOL. El nombre del programa es una etiqueta única que lo
          identifica.
        </li>
      </ul>
      <br />
      <p>Las siguientes no son obligatorias:</p>
      <ul>
        <li>
          <strong>AUTHOR:</strong> La declaración AUTHOR se utiliza para
          proporcionar el nombre del autor del programa. Esto facilita la
          identificación del autor del código.
        </li>
        <li>
          <strong>DATE-WRITTEN:</strong> DATE-WRITTEN se utiliza para indicar la
          fecha en que se escribió el programa. Esto puede ser útil para llevar
          un registro de cuándo se creó o modificó el código. La fecha
          generalmente se especifica en el formato "YYYY-MM-DD"
        </li>
        <li>
          <strong>DATE-COMPILED:</strong> Aunque no se encuentra en la
          IDENTIFICATION DIVISION, la declaración DATE-COMPILED es relevante
          para el ciclo de vida del programa. Indica la fecha en que se compiló
          el programa en un ejecutable. Esto puede ser diferente de la fecha de
          escritura si el programa ha experimentado modificaciones
        </li>
        <li>
          <strong>SECURITY:</strong> Opcionalmente, puedes incluir una
          declaración de seguridad que describa aspectos de seguridad
          relacionados con el programa.
        </li>
      </ul>
    </section>
  );
};

export {Mod2_2};
