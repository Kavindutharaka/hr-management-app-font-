import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import client from "../apiConfig";
import "../Component/LoginStyle.css";

function Admin() {
  const navigate = useNavigate();
  const [employee, setEmployee] = useState([]);

  //   const [type, setType] = useState('');

  useEffect(() => {
    fetchEmp();
  }, []);

  async function fetchEmp() {
    try {
      const response = await client.get("/employee");
      const data = response.data;

      // Format the join_date for each employee
      const formattedData = data.map((emp) => {
        const date = new Date(emp.join_date);
        const formattedJoinDate = `${date.getFullYear()}-${
          date.getMonth() + 1
        }-${date.getDate()}`;
        return { ...emp, join_date: formattedJoinDate };
      });

      // Set the formatted employee data
      setEmployee(formattedData);

      console.log(formattedData);
    } catch (err) {
      console.log(err);
    }
  }

  function handleEdit(id) {
    navigate(`/empRegister?id=${id}`);
  }
  function handleDelete(id) {
    client
      .delete(`/employee/${id}`)
      .then((res) => {
        alert(res.data.message);
        fetchEmp();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function navEmpReg() {
    navigate("/empRegister");
  }
  return (
    <div className="content">
      <div className="row">
        <h3 className="h3-1">Admin Dashboard</h3>
        <button onClick={navEmpReg} className="btn1 r-btn">
          Employee +
        </button>
      </div>

      <div className="row">
        <table className="emp-display-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Join Date</th>
            </tr>
          </thead>
          <tbody>
            {employee.map((emp, index) => (
              <tr key={index}>
                <td>{emp.name}</td>
                <td>{emp.email}</td>
                <td>{emp.join_date}</td>
                <td>
                  <button
                    onClick={() => {
                      handleEdit(emp._id);
                    }}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      handleDelete(emp._id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Admin;
