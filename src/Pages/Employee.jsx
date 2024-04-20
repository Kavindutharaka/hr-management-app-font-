import React from 'react'
import { useNavigate } from 'react-router-dom'
import LeaveCard from '../Component/LeaveCard';

function Employee() {
    const navigate = useNavigate();
    function reqLeave(){
        navigate("/user/leave");
    }
  return (
    <div>
        <button onClick={reqLeave}>Req Leave</button>
        <span>Leave Details</span>
            <LeaveCard/>
    </div>
  )
}

export default Employee