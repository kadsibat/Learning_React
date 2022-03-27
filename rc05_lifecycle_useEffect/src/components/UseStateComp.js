import React from 'react'
import {useState} from "react"
//! Don’t call Hooks inside loops, conditions, or nested functions.
//! Don’t call Hooks from regular JavaScript functions.
//* Only call Hooks at the top level
//* Call Hooks from React function components.
//* Call Hooks from custom Hooks.

const UseStateComp = () => {
 const [count, setCount] = useState(0)
const [age, setAge] = useState(4)
const [user, setUser] = useState({name:"felix",age:"25", email:"felix@gmail.com"})

//  const increase= ()=>setCount(count+1)
 const increase= ()=>setCount((count)=>count+1)

 const increaseAge = () =>setAge(age+1)

const updateUser= ()=>setUser({...user,name:"sibel", age:"30"})

  return (
    <div className="function">
      <h2>Functional Component</h2>
      <p>{count}</p>
      <button onClick={increase}>Increase count</button>
      <p>{age}</p>
      <button onClick={increaseAge}>Increase age</button>
      <p>name:{user.name}</p>
      <p>age:{user.age}</p>
      <p>email:{user.email}</p>
      <button onClick={updateUser}>update user</button>
   
    </div>
  )
}

export default UseStateComp
