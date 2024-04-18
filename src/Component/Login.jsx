import "./LoginStyle.css";

import React, { useState } from "react";

function Login() {
  const [userName, setUserName] = useState("");
  const [userPwd, setUserPwd] = useState("");
  function handleUserName(e) {
    const userName = e.target.value;
    setUserName(userName);
  }
  function handleUserPwd(e) {
    const password = e.target.value;
    setUserPwd(password);
  }
  function handleLogin(e) {}
  return (
    <div>
      <div className="loginMainContent loginContainer">
        <span className="loginTxt">Login</span>

        <input
          type="text"
          placeholder="Enter UserName"
          onChange={handleUserName}
          className="loginp1"
        />

        <input
          type="text"
          placeholder="Enter Password"
          onChange={handleUserPwd}
          className="loginp1"
        />
        <button onClick={handleLogin} className="btn1">Login</button>
      </div>
    </div>
  );
}

export default Login;
