const Mod3_1 = ({ Cuadro, Red, Grey, Esp, Com }) => {
  return (
    <section id="Mod3_1">
      <h3>3.1 IDENTIFICATION DIVISION</h3>
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
          <mark>PROGRAM-ID</mark>: Esta declaración especifica el nombre del
          programa COBOL. El nombre del programa es una etiqueta única que lo
          identifica. Este párrafo sirve para especificar el nombre del
          programa. Este nombre será utilizado por el compilador o durante la
          ejecución para indicar en qué programa ocurrió algún error. El nombre
          del programa debe ajustarse a las reglas de formación de un
          identificador COBOL. El resto de los párrafos son opcionales, pueden
          aparecer en cualquier orden, y su utilización queda perfectamente
          definida en el formato descrito. Si un comentario ocupa más de una
          línea, no está permitido utilizar el guión como carácter de
          continuación, sin embargo puede ser continuado en las líneas
          siguientes, comenzando en el margen B. <u>uso obligatorio</u>.
        </li>
        <li>
          <mark>AUTHOR</mark>: Identifica al autor o programador responsable.
        </li>
        <li>
          <mark>INSTALLATION</mark>: Nombre de la empresa o instalación donde se
          escribió o se usará el programa.
        </li>
        <li>
          <mark>DATE-WRITTEN</mark>: Fecha de creación del programa.
        </li>
        <li>
          <mark>DATE-COMPILED</mark>: Fecha de compilación del programa. En
          algunos entornos se completa automáticamente.
        </li>
        <li>
          <mark>SECURITY</mark>: Indica aspectos relacionados con la seguridad,
          por ejemplo: "Confidencial", "Público", etc.
        </li>
        <li>
          <mark>REMARKS</mark>: Se pueden incluir comentarios adicionales sobre
          el propósito o uso del programa.
        </li>
      </ul>


      <div className="codigo">
<Red>IDENTIFICATION DIVISION</Red>.  <br />
<Red>PROGRAM-ID</Red>.    CALCULO-NOMINA.  <br />
<Red>AUTHOR</Red>.        JUAN PEREZ.  <br />
<Red>INSTALLATION</Red>.  EMPRESA ABC S.A.  <br />
<Red>DATE-WRITTEN</Red>.  2025-04-10.  <br />
<Red>DATE-COMPILED</Red>. 2025-04-11.  <br />
<Red>SECURITY</Red>.      USO INTERNO.  <br />
<Red>REMARKS</Red>.       Este programa calcula la nómina de empleados mensualmente.  <br />

      </div>

<br />

<p>✅ <u>Buenas prácticas</u>:</p>
<li>Usar nombres descriptivos para el <mark>PROGRAM-ID</mark>.</li>
<li>Completar todos los campos, especialmente en entornos corporativos con muchos programas.</li>
<li>Escribir fechas en formato internacional <mark>AAAA-MM-DD</mark> si es posible, para evitar confusiones.</li>
<br />
<p>⚠️ <u>Advertencias comunes</u>:</p>
<li>La palabra clave <mark>PROGRAM-ID</mark>. debe ir en mayúsculas, comenzando en la columna 8 (en muchos estándares).</li>
<li>Los puntos (<mark>.</mark>) son obligatorios al final de cada cláusula.</li>
    </section>
  );
};

export { Mod3_1 };
