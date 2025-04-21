const Mod8_5 = ({ Cuadro, Red, Grey, Esp, Com }) => {
  return (
    <section id="8.5">
      <h3>8.5 Archivos PLANOS</h3>
      <p>
        Un archivo plano (flat file) es un archivo secuencial sin índices ni
        estructuras complejas. Son utilizados para intercambiar datos con otros
        sistemas o como entrada/salida básica.
      </p>
      <li>
        <u>Organización</u>: <mark>SEQUENTIAL</mark>
      </li>
      <li>
        <u>Acceso</u>: <mark>SEQUENTIAL</mark>
      </li>
      <li>
        <u>Medio común</u>: archivo <mark>.txt</mark> o <mark>.dat</mark> en
        entornos Windows/Linux o datasets secuenciales en mainframes.
      </li>
      <br />
      📌 Ejemplo de asignación en COBOL:
      <div className="codigo">
        <Red>SELECT</Red> ARCHIVO-ENTRADA <Red>ASSIGN TO</Red>{" "}
        <Grey>'DATOS.TXT'</Grey> <br />
        <Red>ORGANIZATION IS SEQUENTIAL</Red> <br />
        <Red>ACCESS MODE IS SEQUENTIAL</Red> <br />
        <Red>FILE STATUS IS FS</Red>. <br />
      </div>
      <hr />
    </section>
  );
};

export { Mod8_5 };
