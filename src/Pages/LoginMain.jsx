import React from 'react'
import { useNavigate } from 'react-router-dom'

function LoginMain() {
  const navigate = useNavigate();
  function navAdminLogin(){
    navigate('/adminlogin');
  }
  function navEmpLogin(){
    navigate('/userlogin');
  }
  return (
    <div>
      <button onClick={navAdminLogin}>Admin</button>
      <button onClick={navEmpLogin}>Employee</button>
    </div>
  )
}

export default LoginMain