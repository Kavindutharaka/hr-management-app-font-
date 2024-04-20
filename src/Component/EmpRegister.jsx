import React, { useEffect, useState } from "react";
import client from "../apiConfig";
import { useNavigate, useLocation } from "react-router-dom";
import "../Component/LoginStyle.css";

function EmpRegister() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [date, setDate] = useState("");
  const [lock, setLock] = useState(false);
  // const todayDate = Date.now("yyyy-mm-dd");
  const today = new Date();
  const todayDate = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
  const navigate = useNavigate();

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const param = searchParams.get("id");

  useEffect(() => {
    if (param !== null) {
      fetchEdit(param);
    }
    
  }, []);

  const fetchEdit = async (editId) => {
    try {
      if(editId !== 0){
      const response = await client.get(`/employee/${editId}`);
      const data = response.data.data;
      setLock(true);
      console.log("this is get byID : ", data);
      // setDate(data.join_date);
      setName(data.name);
      setEmail(data.email);
      setPassword(data.password);
      
    }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  function handleUpdate() {
    client
      .put(`/employee/${param}`, { name, email, password})
      .then((response) => {
        console.log(response.data.message);
        alert(response.data.message);
        navigate("/admin");
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  }

  function handleUserName(e) {
    const name = e.target.value;
    setName(name);
  }
  function handleUserEmai(e) {
    const email = e.target.value;
    setEmail(email);
  }
  function handleUserPwd(e) {
    const password = e.target.value;
    setPassword(password);
  }
  function handleRegister() {
    if (name === "" || email === "" || password === "") {
      alert("Please Complete the form");
    } else {
      client
        .post("/employee", {
          name: name,
          email: email,
          password: password,
          join_date: todayDate,
        })
        .then((response) => {
          console.log(response.data.message);
          alert(response.data.message);
          setName("");
          setEmail("");
          setPassword("");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
  function passwordUnlock() {
    setLock(false);
    setPassword("");
  }
  return (
    <div>
      <button
        onClick={() => {
          navigate("/admin");
        }}
      >
        Close
      </button>
      <input
        type="text"
        placeholder="Enter Name"
        onChange={handleUserName}
        className="loginp1"
        value={name}
      />
      <input
        type="text"
        placeholder="Enter Email"
        onChange={handleUserEmai}
        className="loginp1"
        value={email}
      />

      <input
        type="password"
        placeholder="Enter Password"
        onChange={handleUserPwd}
        className="loginp1"
        value={password}
        disabled={lock}
      />
      {lock && <button onClick={passwordUnlock}>unlock</button>}
      <button onClick={param ? handleUpdate : handleRegister} className="btn1">
        {param ? "Update" : "Register"}
      </button>
    </div>
  );
}

export default EmpRegister;
