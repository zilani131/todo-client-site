import React from 'react';

const Todolistcard = ({datum}) => {
    const {task}=datum;
    return (
        <div>
            <li>{task}</li>
        </div>
    );
};

export default Todolistcard;