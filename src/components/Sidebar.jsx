import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { NavLink } from 'react-router-dom';
const Sidebar = ({settoggle}) => {
  let hideSidebar=()=>{
    settoggle(false)
  }
  return (
    <div className=" vh-100 bg-success text-white position-fixed sidebar-width   col-md-3 ">
      <div className="logo px-2 flex align-items-center ">
        <img src="/public/clocktowercar.png" alt="" width='100%' height='100%' />
        <div className='close'><CloseIcon className=' d-md-none' onClick={hideSidebar}/></div>
      </div>  
      <div className="list-group px-2 py-4 ">
        <NavLink to="/" className={(e)=>{ return e.isActive?'green':'' }} >
          Complaint
        </NavLink>
        <NavLink to="/ComplaintStatus"  className={(e)=>{ return e.isActive?'green':'' }}   >
          Complaint Status
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar;
