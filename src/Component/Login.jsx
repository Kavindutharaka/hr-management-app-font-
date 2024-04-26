import React, { useContext, useEffect, useState } from "react";
import "./LoginStyle.css";
// import axios from "axios";
import client from "../apiConfig";
import { useNavigate } from "react-router-dom";
import { UserAuthContext } from '../Context/Auth';

function Login({ userType }) {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [userPwd, setUserPwd] = useState("");

  const { setUserId } = useContext(UserAuthContext);

  useEffect(() => {}, []);

  const authAdmin = async () => {
    await client
      .post(
        "/admin/login",
        {
          username: userName,
          password: userPwd,
        },
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        console.log(response.data.message);
        alert(response.data.message);
        navigate("/admin");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const authEmp = async () => {
    await client
      .post("/employee/login", {
        name: userName,
        password: userPwd,
      })
      .then((response) => {
        console.log(response.data.message);
        setUserId(response.data.emp_id);
        // alert(response.data.message);
        navigate("/user");
      })
      .catch((err) => {
        console.log(err.data.message);
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
    e.preventDefault();
    if (userName === "" || userPwd === "") {
      alert("field cannot be null");
    } else if (userType === "Admin") {
      authAdmin();
    } else if (userType === "Emp") {
      authEmp();
    }
  }
  return (
    <div className="row">
      <div className="formContainer loginForm">
        <span className="loginTxt">Login</span>
        <input
          type="text"
          placeholder="Enter UserName"
          onChange={handleUserName}
          className="inputField"
          value={userName}
        />
        <input
          type="text"
          placeholder="Enter Password"
          onChange={handleUserPwd}
          className="inputField"
        />
        <button onClick={handleLogin} className="btn1 submitBtn">
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
