import { Route, Routes } from 'react-router-dom';
import './App.css';
import LoginMain from './Pages/LoginMain';
import AdminLogin from './Pages/AdminLogin';
import EmpLogin from './Pages/EmpLogin';
import EmpRegister from './Component/EmpRegister';
import Admin from './Pages/Admin';
import Employee from './Pages/Employee';
import LeaveApplication from './Component/LeaveApplication';

function App() {
  return (
    <>
        <Routes>
          <Route path='/' element={<LoginMain/>} />
          <Route path='/adminlogin' element={<AdminLogin/>} />
          <Route path='/userlogin' element={<EmpLogin/>}/>
          <Route path='/admin' element={<Admin/>}/>
          <Route path='/empregister' element={<EmpRegister/>}/>
          <Route path='/user' element={<Employee/>}/>
          <Route path='/user/leave' element={<LeaveApplication/>}/>
        </Routes>
    </>
  );
}

export default App;
