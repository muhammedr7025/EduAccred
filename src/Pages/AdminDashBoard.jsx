
import { Route, Routes } from 'react-router-dom'
import Staff from '../Components/AdminDashBoardItem/Staff'
import SideBar from '../Components/SideBar/AdminSideBar'
import Department from '../Components/AdminDashBoardItem/Department'

const AdminDashBoard = () => {
  return (
    <div className='flex'>
      <SideBar></SideBar>
      <Staff></Staff>
      <Routes>
        <Route path='/staff' element = {<Staff/>}/>
        <Route path='/department' element = {<Department/>}/>
        {/* <Route path='/student-dashboard' element = {<StudentDashBoard/>}/> */}
        
        
      </Routes>
      
    </div>
  )
}

export default AdminDashBoard