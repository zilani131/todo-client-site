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
        <div>

            <Link to="/home">Home</Link>
            <Link to="/addtask">Add Task</Link>
            <Link to="/completetask">Complete Task</Link>
            {user? <button className='btn btn-outline btn-md' onClick={Logout}>Sign out</button>:<Link to="/login">Log in</Link>}
            <Link to="/registration">Registration</Link>
            {user? <h1>{user.displayName}</h1>:"" }
        </div>
    );
};

export default Navbar;