import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import {  useQuery } from 'react-query'
import auth from '../firebase.init';
const CompletedTask = () => {
    const [user,loading,error1]=useAuthState(auth)
    console.log(user?.email)
    const {isLoading,error,data}=useQuery('completetask',()=>
    fetch(`http://localhost:5000/completetask?email=${user?.email}`).then(res =>
    res.json()))
    if(isLoading || loading){
        return <h1>Loading...</h1>
    }
    return (
        <div>
            {data?.length && data.map(datum=><li key={datum._id}>{datum.task}</li>).reverse()}
        </div>
    );
};

export default CompletedTask;