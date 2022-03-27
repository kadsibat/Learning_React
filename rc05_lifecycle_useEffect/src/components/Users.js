import React,{useState,useEffect}from 'react'
import axios from "axios"

const Users = () => {
  //  const [users, setUsers] = useState()//  map te true kullanmak istersek içi bos olur
   const [users, setUsers] = useState([])
console.log(users);

useEffect(()=>{
  axios
  .get('https://jsonplaceholder.typicode.com/users')
  .then((res)=>setUsers(res.data))
  .catch((err)=>console.log(err))
},[])



// const getUsers= () =>{
//   axios
//   .get('https://jsonplaceholder.typicode.com/users')
//   .then((res)=>setUsers(res.data))
//   .catch((err)=>console.log(err))
// }

  return (
    <div className="users">
      <h2>Users</h2>
      <div className="users-cards">
        {users.map((user)=>(
          <div className="useritem" key={user.id}>
            <img src={`https://avatars.dicebear.com/v2/avataaars/${user.id}.svg`} alt="" />
          </div>
        ))}
      </div>
      {/* <button onClick={getUsers}>get users</button> */}
    </div>
  )
}

export default Users
