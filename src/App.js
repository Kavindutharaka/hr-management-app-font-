import { Route, Routes } from 'react-router-dom';
import './App.css';
import LoginMain from './Pages/LoginMain';
import AdminLogin from './Pages/AdminLogin';
import EmpLogin from './Pages/EmpLogin';

function App() {
  return (
    <>
        <Routes>
          <Route path='/' element={<LoginMain/>} />
          <Route path='/adminlogin' element={<AdminLogin/>} />
          <Route path='/userlogin' element={<EmpLogin/>}/>
        </Routes>
    </>
  );
}

export default App;
