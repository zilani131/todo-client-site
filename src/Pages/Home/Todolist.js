import React from 'react';
import {  useQuery } from 'react-query'
import Todolistcard from './Todolistcard';
const Todolist = () => {
    const {isLoading,error,data,refetch}=useQuery('task',()=>
    // fetch(("http://localhost:5000/task").then(res=>res.json())))
    fetch('http://localhost:5000/task').then(res =>
    res.json()))
    if(isLoading){
        return <h1>Loading...</h1>
    }
    if(error){
        return console.log(error.message);
    }
    return (
        <div>
            {data?.length && data.map(datum=><Todolistcard key={datum._id} datum={datum} refetch={refetch}></Todolistcard>)}
        </div>
    );
};

export default Todolist;