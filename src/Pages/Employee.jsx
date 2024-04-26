import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LeaveCard from "../Component/LeaveCard";
import client from "../apiConfig";
import { UserAuthContext } from "../Context/Auth";

function Employee() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const { userId } = useContext(UserAuthContext);

  useEffect(() => {
    getLeaveDetails();
    console.log("this is log emp id: ", userId);
  }, [setData]);

  function reqLeave() {
    navigate("/user/leave");
  }
  async function getLeaveDetails() {
    try {
      const response = await client.get("/admin/leave");
      console.log(response.data);
      setData(response.data);
    } catch (err) {
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
      {data.map((leave) => (
  <LeaveCard key={leave._id} data={leave} />
))}

      </div>
    </div>
  );
}

export default Employee;
