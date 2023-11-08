import React, { useState, useContext } from "react";
import UserContext from "../context/userContext";


function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState('');
    const {setUser, user} = useContext(UserContext);

    const handleSubmit = (e)=>{
        e.preventDefault();
        setUser({username,password})
    }

    // console.log(user);

  return (
    <div>
      <h1>Login</h1>
      <input type="text" placeholder="username" onChange={(e)=>setUsername(e.target.value)} />
      <input type="paassword" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;
