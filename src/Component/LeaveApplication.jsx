import React, { useContext, useState } from "react";
import client from "../apiConfig";
import { useNavigate } from "react-router-dom";
import { userAuth } from "../App";

function LeaveApplication() {
  const [sDate, setSDate] = useState("");
  const [eDate, setEDate] = useState("");
  const [reason, setReason] = useState("");
  const navigate = useNavigate();
  const {token} = useContext(userAuth);

  function reqSubmision() {
    client
      .post("/employee/leave",{
        start_date: sDate,
        end_date: eDate,
        reason: reason
      },{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data.message);
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
              setSDate(e.target.value);
            }}
            className="inputField"
            value={sDate}
          />
          <input
            type="date"
            onChange={(e) => {
              setEDate(e.target.value);
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
