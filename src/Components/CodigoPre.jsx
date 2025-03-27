const CodigoPre = ({ children }) => {
  // Definir las palabras clave y sus colores
  const keywords = {
    PIC: "text-green-500",
    Cliente: "text-blue-500",
    Direccion: "text-yellow-500",
    Edad: "text-red-500",
  };


  children.forEach(w => {
    if (w.includes("PIC")) {
      console.log('ok')
    }
  })


  return <pre style={{color:"lightgreen"}}>{children}</pre>;
};

export { CodigoPre };
