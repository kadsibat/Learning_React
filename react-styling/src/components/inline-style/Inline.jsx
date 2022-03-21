const myStyle ={
    color:"blue",
    fontSize:"2rem",
    fontWeight:"bolder",
    div:{
    backgroundColor:"gray",
    fontSize:"3.2rem"  
    }

}

const Inline = () => {
  return (
    <>
    <div style={{backgroundColor:"red",color:"#fff"}}>
        <h1>Hello from inline CSS</h1>

    <div style={myStyle.div}>
        <p style={myStyle.parag}>yoruldum</p>
    </div>

    </div>
    
    
    
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default Inline
