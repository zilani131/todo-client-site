import React from 'react';
import { format } from 'date-fns'
const Footer = () => {
    return (
        <div className='bg-slate-200 py-10 text-2xl font-semibold my-5'>
           Copyright &copy; {format(new Date(), " y")}
        </div>
    );
};

export default Footer;