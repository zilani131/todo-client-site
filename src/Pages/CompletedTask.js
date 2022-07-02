import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import {  useQuery } from 'react-query'
import auth from '../firebase.init';
const CompletedTask = () => {
    const [user,loading,error1]=useAuthState(auth)
    console.log(user?.email)
    const {isLoading,error,data}=useQuery('completetask',()=>
    fetch(`https://serene-atoll-60052.herokuapp.com/completetask?email=${user?.email}`).then(res =>
    res.json()))
    if(isLoading || loading){
        return <h1>Loading...</h1>
    }
    return (
        <div className='flex flex-col gap-4 mt-5'>
            {data?.length && data.map((datum,index)=> <div class="card w-10/12 lg:w-1/3 bg-base-100 shadow-md mx-auto">
  <div class="card-body"> <h2 class="card-title" key={datum._id}>{datum.task} </h2> </div></div>).reverse()}
        </div>
    );
};

export default CompletedTask;
// https://serene-atoll-60052.herokuapp.com/