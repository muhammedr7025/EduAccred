
import Login from './Pages/Login';
import { Route, Routes } from 'react-router-dom';
import Register from './Pages/Register';
import StudentDashBoard from './Pages/StudentDashBoard';
import AdminDashBoard from './Pages/AdminDashBoard';

const App = () => {
  return (
    <div >
      <Routes>
        <Route path='/login' element = {<Login/>}/>
        <Route path='/register' element = {<Register/>}/>
        <Route path='/student-dashboard' element = {<StudentDashBoard/>}/>
        <Route path='/Admin-dashboard' element = {<AdminDashBoard/>}/>
        
      </Routes>
    </div>
  );
};

export default App;
