import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import {  useQuery } from 'react-query'
import auth from '../../firebase.init';
import Todolistcard from './Todolistcard';
import { Link } from "react-router-dom";
const Todolist = () => {
    const [user,loading,error1]=useAuthState(auth)
    const {isLoading,error,data,refetch}=useQuery('task',()=>
 
    fetch(`https://serene-atoll-60052.herokuapp.com/task?email=${user?.email}`).then(res =>
    res.json()))
    if(isLoading || loading){
        return <h1>Loading...</h1>
    }
    if(error){
        return console.log(error.message);
    }
    return (
        <div className='mt-6'>
            {data?.length===0? <h1 className='text-lg font-semibold'>Assalamualaikum <span className='uppercase'>{user?.displayName}</span>.
             You did not add any task .  </h1> :<div className='flex flex-col gap-3' >{data?.length && data.map(datum=><Todolistcard key={datum._id} datum={datum} refetch={refetch}></Todolistcard>).reverse()}</div>}
             <Link className="btn btn-outline btn-primary btn-md my-5" to="/addtask" >Add Task</Link>
        </div>
    );
};
// classname="btn btn-outline-primary btn-md"
export default Todolist;