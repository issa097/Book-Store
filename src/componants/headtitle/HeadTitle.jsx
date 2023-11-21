const HeadTilte = ({title}) => {
    return ( 
        <div style={divstyles}>
            <h2 style={h2styles}>{title}</h2>
        </div>
     );
}

const divstyles={
    padding:"10px 30px",
    backgroundColor:'#fff',
}

const h2styles={
    color:"#1926d2",
    fontSize:"30px",
    fontWeight:"500",
    borderBottom:"2px solid 1926d2",
    width:"max-content",
    paddingBottom:"5px"

}
 
export default HeadTilte;