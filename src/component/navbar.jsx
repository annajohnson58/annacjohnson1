function Navbar()
{
    return(
        <div style={{color:"black",backgroundColor:"pink",display:"flex",flexDirection:"row",justifyContent:'space-between',alignItems:'center'}}>
        <h1>EXPENSE TRACKER</h1>
        <input style={{borderRadius:'10px'}} type='search ' id='search-form'  placeholder='search'/>
        <button style={{height:"30px",alignItems:"flex"}}>login</button>
        </div>
    );
}
export default Navbar;