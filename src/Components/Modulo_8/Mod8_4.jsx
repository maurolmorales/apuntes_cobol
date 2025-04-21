const Mod8_4 = ({ Cuadro, Red, Grey, Esp, Com }) => {
  return (
    <section id="8.4">
      <h3>8.4 PDS (Partitioned Data Set)</h3>
      <p>
        Un PDS es un archivo contenedor que almacena varios miembros o
        subarchivos, como si fueran carpetas con archivos individuales.
      </p>

      <p>🗂️ Comúnmente se usa para:</p>
      <li>Almacenar programas fuente COBOL.</li>
      <li>Almacenar JCL (Job Control Language).</li>
      <li>Almacenar COPYBOOKS.</li>

      <div className="codigo">
        //COPYLIB <Red>DD</Red> DSN=MI.LIBRERIA.COPYBOOKS,DISP=SHR
      </div>
      <p>
        Cada miembro dentro de un PDS puede accederse por nombre: MIEMBRO1,
        MIEMBRO2, etc.
      </p>
    </section>
  );
};

export { Mod8_4 };
