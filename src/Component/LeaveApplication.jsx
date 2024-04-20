import React, { useState } from "react";
import client from "../apiConfig";
import { useNavigate } from "react-router-dom";

function LeaveApplication() {
  const [sDate, setSDate] = useState("");
  const [eDate, setEDate] = useState("");
  const [reason, setReason] = useState("");
  const navigate = useNavigate();

  function reqSubmision() {
    client
      .post("/employee/leave")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="content">
      <div className="row">
        <button
          onClick={() => {
            navigate("/user");
          }}
          className="btn2"
        >
          Close
        </button>
      </div>

      <div className="row">
        <div className="formContainer">
          <input
            type="date"
            onChange={(e) => {
              setSDate(e.target.value.toString);
            }}
            className="inputField"
            value={sDate}
          />
          <input
            type="date"
            onChange={(e) => {
              setEDate(e.target.value.toString);
            }}
            className="inputField"
            value={eDate}
          />
          <input
            type="text"
            placeholder="Enter Reason"
            onChange={(e) => {
              setReason(e.target.value);
            }}
            className="inputField"
            value={reason}
          />
          <button onClick={reqSubmision} className="btn1 submitBtn">Request</button>
        </div>
      </div>
    </div>
  );
}

export default LeaveApplication;
