import React, { useEffect, useState } from "react";
import "./LoginStyle.css";
// import axios from "axios";
import client from "../apiConfig";
import { useNavigate } from "react-router-dom";

function Login({ userType }) {
//   const client = axios.create({
//     baseURL: "http://localhost:3001",
//   });
const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [userPwd, setUserPwd] = useState("");

  useEffect(() => {}, []);

  const authAdmin = async () => {
    await client
    .post("/admin/login", {
      username: userName,
      password: userPwd,
    }).then((response)=>{

      console.log(response.data.message);
      alert(response.data.message);
      navigate("/admin");

    }).catch((err)=>{
      console.log(err);
    });
  };
  const authEmp = async () => {
    await client
    .post("/employee/login", {
      name: userName,
      password: userPwd
    }).then((response)=>{

      console.log(response.data.message);
      alert(response.data.message);

    }).catch((err)=>{
      console.log(err);
    });
  };

  function handleUserName(e) {
    const userName = e.target.value;
    setUserName(userName);
    
  }
  function handleUserPwd(e) {
    const password = e.target.value;
    setUserPwd(password);
  }
  function handleLogin(e) {
    if(userName ==='' || userPwd ===''){
      alert("field cannot be null")
    }
    else if (userType === "Admin") {
      authAdmin();
    }
    else if (userType === "Emp") {
      authEmp();
    }
  }
  return (
    <div>
      <div className="loginMainContent loginContainer">
        <span className="loginTxt">Login</span>

        <input
          type="text"
          placeholder="Enter UserName"
          onChange={handleUserName}
          className="loginp1"
          value={userName}
        />
        <input
          type="text"
          placeholder="Enter Password"
          onChange={handleUserPwd}
          className="loginp1"
        />
        <button onClick={handleLogin} className="btn1">
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
