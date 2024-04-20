import React from "react";
import "./LeaveCard.css";

function LeaveCard() {
  return (
    <div className="leaveCard">
      <div className="row">
        <p className="p1">Start Date</p>
        <p className="p2">2024-02-01</p>
      </div>
      <div className="row">
        <p className="p1">End Date</p>
        <p className="p2">2024-02-02</p>
      </div>
      <div className="row">
        <p className="p1">Reason</p>
        <p className="p2">For A Wedding</p>
      </div>
      <div className="row">
        <p className="p1">Status</p>
        <p className="p2">Pending</p>
      </div>
      <button className="btn1 submitBtn">Edit</button>
    </div>
  );
}

export default LeaveCard;
