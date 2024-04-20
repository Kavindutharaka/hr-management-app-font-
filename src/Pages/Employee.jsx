import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LeaveCard from "../Component/LeaveCard";
import client from "../apiConfig";
import { userAuth } from "../App";

function Employee() {
  const[data,setData] = useState("");
  const navigate = useNavigate();
  const {token} = useContext(userAuth);

  useEffect(()=>{
    // getLeaveDetails();
  },[setData]);

  function reqLeave() {
    navigate("/user/leave");
  }
  async function getLeaveDetails() {
    try{
    const data = await client.get("/admin/leave",{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(data);
    setData(data);
  }catch(err){
    console.log(err);
  }
  }

  return (
    <div className="content">
      <div className="row">
        <button onClick={reqLeave} className="btn2">
          Req Leave
        </button>
      </div>
      <div className="row">
        <h3 className="h3-1 titletxt">Leave Details</h3>
      </div>
      <div className="row">
        <LeaveCard />
      </div>
    </div>
  );
}

export default Employee;
