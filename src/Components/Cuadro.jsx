const Cuadro = ({data, children}) => {
  return ( 
    <div className="cuadro" style={data}>
    {children}
    </div>
   );
}
 
export default Cuadro;