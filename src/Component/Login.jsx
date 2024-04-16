import React, { useState } from 'react'

function Login() {
    const [userName,setUserName] = useState('');
    const [userPwd,setUserPwd] = useState('');
    function handleUserName(e){
        const userName = e.target.value;
        setUserName(userName);
    }
    function handleUserPwd(e){
        const password = e.target.value;
        setUserPwd(password);
    }
    function handleLogin(e){
        
    }
  return (
    <div>
        <span>Login</span>
        <input type='text' placeholder='Enter UserName' onChange={handleUserName}/>
        <input type='text' placeholder='Enter Password'onChange={handleUserPwd}/>
        <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login