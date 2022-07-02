import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
const Calender = () => {
    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <div class="card w-fit  bg-base-100 shadow-xl mx-auto">
  <div class="card-body">
  <DayPicker />
    </div>
    </div>
        </div>
    );
};

export default Calender;