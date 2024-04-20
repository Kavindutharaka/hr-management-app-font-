import React, { useState } from 'react'
import client from '../apiConfig';
import { useNavigate } from 'react-router-dom';

function LeaveApplication() {
    const[sDate,setSDate] = useState("");
    const[eDate,setEDate] = useState("");
    const[reason,setReason] = useState("");
    const navigate = useNavigate();

    function reqSubmision(){
        client.post("/employee/leave").then((res)=>{
            console.log(res);
        }).catch((err)=>{
            console.log(err);
        });
    }
    
  return (
    <div>
        <button onClick={()=>{navigate("/user")}}>Close</button>
        <input
        type="date"
        onChange={(e)=>{setSDate(e.target.value.toString)}}
        className="loginp1"
        value={sDate}
      />
      <input
        type="date"
        onChange={(e)=>{setEDate(e.target.value.toString)}}
        className="loginp1"
        value={eDate}
      />
      <input
        type="text"
        placeholder="Enter Reason"
        onChange={(e)=>{setReason(e.target.value)}}
        className="loginp1"
        value={reason}
      />
      <button onClick={reqSubmision}>Request</button>
    </div>
  )
}

export default LeaveApplication