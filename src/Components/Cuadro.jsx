/*
 <Cuadro data={{gridTemplateColumns:"1fr 5fr 2fr 1fr"}} key={1}>
        <div className="col tCenter">
         </div> 
         <div className="col tCenter">
         </div> 
</Cuadro>
*/


const Cuadro = ({data, children}) => {
  return ( 
    <div className="cuadro" style={data}>
    {children}
    </div>
   );
}
 
export default Cuadro;