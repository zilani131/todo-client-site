import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import {  useQuery } from 'react-query'
import auth from '../../firebase.init';
import Todolistcard from './Todolistcard';
import { Link } from "react-router-dom";
const Todolist = () => {
    const [user,loading,error1]=useAuthState(auth)
    const {isLoading,error,data,refetch}=useQuery('task',()=>
 
    fetch(`http://localhost:5000/task?email=${user?.email}`).then(res =>
    res.json()))
    if(isLoading || loading){
        return <h1>Loading...</h1>
    }
    if(error){
        return console.log(error.message);
    }
    return (
        <div>
            {data?.length===0? <h1>There is no task . <Link className="btn btn-outline btn-primary btn-md" to="/addtask" >Add Task</Link> </h1> :<div>{data?.length && data.map(datum=><Todolistcard key={datum._id} datum={datum} refetch={refetch}></Todolistcard>).reverse()}</div>}
            
        </div>
    );
};
// classname="btn btn-outline-primary btn-md"
export default Todolist;