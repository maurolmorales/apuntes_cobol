const Mod2_2 = ({ Cuadro, Red, Grey, Esp, Com }) => {
  return (
    <section id="2.2">
      <h3>2.2 Convenciones de Nomenclatura en COBOL</h3>
<p>COBOL utiliza una serie de reglas y buenas prácticas para nombrar programas, variables, registros, archivos y otros elementos. Aunque algunas de estas convenciones son opcionales, seguirlas mejora la legibilidad, el mantenimiento y la estandarización del código, especialmente en entornos corporativos.</p>

<h4>2.2.1 Reglas generales de nomenclatura</h4>
<ul>
  <li>
    Longitud máxima:
    <ul>
      <li>En versiones estándar de COBOL, los nombres pueden tener hasta 30 caracteres.</li>
      <li>Algunas implementaciones antiguas limitaban esto a 8 caracteres.</li>
    </ul>
  </li>
  
  <li>
    Caracteres permitidos:
    <ul>
      <li>Letras (A-Z), números (0-9) y el guion medio (-).</li>
      <li>No se permiten espacios, signos de puntuación ni caracteres especiales.</li>
      <li>No se permite iniciar ni terminar con un guion.</li>
    </ul>
  </li>
  
  <li>
    Sensibilidad a mayúsculas y minúsculas:
    <ul>
      <li>COBOL no distingue entre mayúsculas y minúsculas. Sin embargo, es común escribir todo en mayúsculas por convención.</li>
    </ul>
  </li>
</ul>

<h4>2.2.2 Convenciones comunes por tipo de elemento</h4>
<Cuadro data={{gridTemplateColumns:"1fr 5fr 2fr"}} key={35  }>
        <div className="col tCenter">
        <div>Elemento</div>
        <div>Nombre del programa</div>
        <div>Variables</div>
        <div>Constantes</div>
        <div>Registros</div>
        <div>Campos de registro</div>
        <div>Párrafos</div>
        <div>Archivos</div>
         </div> 
         <div className="col tCenter">
         <div>Convención común</div>
         <div>En mayúsculas, con guiones si es compuesto	</div>
         <div>Prefijo por tipo o propósito + nombre descriptivo	WS-TOTAL-SUELDO</div>
         <div>Nombre en mayúsculas, con -CONST al final</div>
         <div>Nombre compuesto por contexto + “REG”</div>
         <div>Nombre compuesto y jerárquico	</div>
         <div>En mayúsculas, con nombres verbales o funcionales	</div>
         <div>Nombre descriptivo y en mayúsculas</div>
         </div> 
         <div className="col tCenter">
         <div>Ejemplo</div>
         <div><mark>PROCESO-PAGO</mark></div>
         <div><mark>(WS = Working Storage)</mark></div>
         <div><mark>IVA-CONST</mark></div>
         <div><mark>CLIENTE-REG</mark></div>
         <div><mark>CLIENTE-NOMBRE, CLIENTE-DIRECCION</mark></div>
         <div><mark>CALCULAR-TOTAL, IMPRIMIR-RECIBO</mark></div>
         <div><mark>ARCHIVO-ENTRADA, ARCHIVO-SALIDA</mark></div>
         </div> 
</Cuadro>
	<br />


  <h4>2.2.3 Prefijos recomendados según sección</h4>
  <Cuadro data={{gridTemplateColumns:"1fr 5fr 2fr"}} key={1}>
  <div className="col tCenter">
    <div>Prefijo</div>
<div><mark>WS-	</mark></div>
<div><mark>LS-	</mark></div>
<div><mark>LK-	</mark></div>
<div><mark>FD-	</mark></div>
<div><mark>PARM-</mark></div>
<div><mark>ERR-</mark></div>
<div><mark>CTR-</mark></div>
  </div>
  <div className="col tCenter">
<div>Significado</div>
<div>Working-Storage</div>
<div>Local-Storage</div>
<div>Linkage</div>
<div>File Description</div>
<div>Parámetro de entrada</div>
<div>Campo relacionado con errores</div>
<div>Contador</div>
  </div>
  <div className="col tCenter">
	<div>Sección recomendada</div>

  <div>WORKING-STORAGE SECTION</div>
  <div>LOCAL-STORAGE SECTION</div>
  <div>LINKAGE SECTION</div>
  <div>FILE SECTION</div>
  <div>LINKAGE SECTION (JCL)</div>
  <div>WORKING-STORAGE SECTION</div>
  <div>Cualquier sección de datos</div>
  </div>
  </Cuadro>
		
<br />

	
	
<h4>2.2.4 Estilo de nombres</h4>
<p>Aunque COBOL no impone un estilo, se recomienda:</p>
<ul>
  
  <li>
    Separar palabras con guiones (-) para mejorar la lectura:  <br />
    <Esp/>✅ <mark>TOTAL-PAGOS-CLIENTE</mark>  <br />
    <Esp/>❌ <mark>TOTALPAGOSCLIENTE</mark>  <br />
  </li>
  
  <li>Usar nombres descriptivos y significativos en lugar de abreviaciones crípticas.</li>
  
  <li>Evitar usar palabras reservadas como nombres de variables o párrafos (<mark>IF</mark>, <mark>MOVE</mark>, <mark>FILE</mark>, etc.).</li>
</ul>
<br />
<p>Seguir estas convenciones facilita:</p>

<ul>
  <li>La comprensión por parte de otros programadores.</li>
  <li>El mantenimiento de programas antiguos.</li>
  <li>La uniformidad en grandes sistemas COBOL.</li>
</ul>
    </section>
  );
};

export { Mod2_2 };
