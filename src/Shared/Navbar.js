import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from "react-router-dom";
import auth from '../firebase.init';
const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    const Logout=()=>{
        signOut(auth);
    }
    if(loading){
        return <h1>Loading...</h1>
    }
    console.log(user)
    return (
        <div class="navbar bg-neutral text-neutral-content">
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-neutral rounded-box w-52">
      <li><Link to="/home">Home</Link></li>
      <li><Link to="/addtask">Add Task</Link></li>
      <li><Link to="/completetask">Complete Task</Link></li>
      <li><Link to="/calender">Calender</Link></li>
      <li>{user? <span  onClick={Logout}>Sign out</span>:<Link to="/login">Log in</Link>}</li>
      <li>{user? <h1>{user.displayName}</h1>:"" }</li>
      </ul>
    </div>
    <a class="btn btn-ghost normal-case text-xl">Daily Task Manager</a>
  </div>
  <div class="navbar-end hidden lg:flex">
    <ul class="menu menu-horizontal p-0">
      <li><Link to="/home">Home</Link></li>
      <li><Link to="/addtask">Add Task</Link></li>
      <li><Link to="/completetask">Complete Task</Link></li>
      <li><Link to="/calender">Calender</Link></li>
      <li>{user? <span  onClick={Logout}>Sign out</span>:<Link to="/login">Log in</Link>}</li>
      <li>{user? <h1>{user.displayName}</h1>:"" }</li>
      
    </ul>
  </div>
 
</div>
        // <div>

        //     <Link to="/home">Home</Link>
        //     <Link to="/addtask">Add Task</Link>
        //     <Link to="/completetask">Complete Task</Link>
        //     {user? <button className='btn btn-outline btn-md' onClick={Logout}>Sign out</button>:<Link to="/login">Log in</Link>}
        //     <Link to="/registration">Registration</Link>
        //     {user? <h1>{user.displayName}</h1>:"" }
        // </div>
    );
};

export default Navbar;