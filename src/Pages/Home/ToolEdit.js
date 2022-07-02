import React from 'react';

const ToolEdit = ({datum,setEdit,edit}) => {
    const {_id,task}=datum;
    const Update=(e)=>{
        e.preventDefault();
      
        console.log(e.target.task.value)
        const task=e.target.task.value;
        
        const data={task:task,
        id:_id}
        fetch(`http://localhost:5000/taskupdate/:id`, {
    method: 'PUT', // or 'PUT'
    // headers: {
    //   'Content-Type': 'application/json',
    // },
    body: JSON.stringify(data),
  })
  .then(res => res.json())
  .then(data => {
    console.log('Success:', data);
   
  })
  setEdit(!edit);
    }
    return (
        <div>
              <form onSubmit={Update}>
            <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" name="task" defaultValue={task}/>  <button type='submit' class="btn btn-outline" >save</button>
           </form> 
        </div>
    );
};

export default ToolEdit;