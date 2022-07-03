import React from "react";
import { format } from "date-fns";
const Footer = () => {
  return (
    <div className="bg-slate-200 py-10  my-5">
      <div className="flex flex-row items-center justify-center gap-3">
        <a href="https://www.facebook.com/mdabdulkader.zilani.9634/"><img className="w-10 h-10" src="https://i.ibb.co/xXvfjyN/facebook-removebg-preview.png" alt="" /></a>
        
        <a href="https://www.linkedin.com/in/md-abdul-kader-zilani-23a158218/"><img className="w-10 h-10" src="https://i.ibb.co/SxgYT0N/linkedin-removebg-preview.png" alt="" /></a>
        <a href="https://github.com/zilani131"><img className="w-10 h-10" src="https://i.ibb.co/VC85DBZ/git-removebg-preview.png" alt="" /></a>
      </div>
      <div className="flex flex-row gap-3 items-center justify-center text-lg font-semibold"><li>Info</li><li>Support</li></div>
      <div className="flex flex-row gap-3 items-center justify-center text-lg font-semibold"><li>Terms of Use</li><li>Privacy Policy</li></div>
     <div className="text-xl font-semibold">Copyright &copy; {format(new Date(), " y")} </div>
    </div>
  );
};

export default Footer;
// https://i.ibb.co/xXvfjyN/facebook-removebg-preview.png
// https://i.ibb.co/VC85DBZ/git-removebg-preview.png
// https://i.ibb.co/SxgYT0N/linkedin-removebg-preview.png
// https://www.linkedin.com/in/md-abdul-kader-zilani-23a158218/
// https://github.com/zilani131