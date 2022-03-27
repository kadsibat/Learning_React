import React,{useState,useEffect} from 'react'

const UseEffectComp = () => {
  const [count, setCount] = useState(0)
  const [age, setAge] = useState(4)

  // useEffect(() => {
  //  console.log("useffect")  
    
  // })

  // useEffect(() => {
  //   console.log("useffect")  
     
  //  },[])  //?sadece 1 kez calısır


   useEffect(() => {
    console.log("useffect")  
    // count !==0 && alert(`new notification,total:${count}`)
    // let timer =setTimeout (()=>{
    //   alert("hello")
    // },3000)
    return () =>{
      console.log("func comp  unmounted");
      // clearTimeout(timer)

    } //! clean up function
   },[]) //?degişkene baglı degişiyor içinde bişey yazarsa


   console.log("func comp rendered")
  
 
  
  //  const increase= ()=>setCount(count+1)
   const increase= ()=>setCount((count)=>count+1)
   const increaseAge = () =>setAge(age+1)
  
  
    return (
      <div className="function">
        <h2>Functional Component</h2>
        <p>{count}</p>
        <button onClick={increase}>Increase count</button>
        <p>{age}</p>
        <button onClick={increaseAge}>Increase age</button>
      
     
      </div>
    )
}

export default UseEffectComp
