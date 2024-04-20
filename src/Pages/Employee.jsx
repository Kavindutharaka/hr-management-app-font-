import React from "react";
import { useNavigate } from "react-router-dom";
import LeaveCard from "../Component/LeaveCard";

function Employee() {
  const navigate = useNavigate();
  function reqLeave() {
    navigate("/user/leave");
  }
  return (
    <div className="content">
      <div className="row">
        <button onClick={reqLeave} className="btn2">Req Leave</button>
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
