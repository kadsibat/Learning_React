import axios from "axios";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import Users from "./components/Users";
import { useRef } from "react";
const UseMemoCallBack = () => {
  const [users, setUsers] = useState([]);
  const [text, setText] = useState("")
const [search, setSearch] = useState("")
  const inputRef=useRef()
  console.log(text,"text render edildi");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data));
  }, []);
  const handleSearch=()=>{
    setSearch(text)
    // setSearch(inputRef.current.value)

  }
const filteredUsers= useMemo(
()=>
users.filter(user=>{
  return user.name.toLowerCase().includes(search.toLowerCase())
}),[users,search])

//?eseeffect gibi degiskene baglılık olmamlı [] gibi

const addUser =useCallback( ()=>{
  setUsers([...users,{id:users.length+1,name:`Clarusway-${users.length-9}`}])
},[users])
  return (
    <div>
      <input type="search" onChange={(e)=>setText(e.target.value)} />
      {/* <input type="search" ref={inputRef} /> */}
      <button onClick={handleSearch} >Search User</button>
      <Users users={filteredUsers} addUser={addUser} />
  
    </div>
  );
};

export default UseMemoCallBack;