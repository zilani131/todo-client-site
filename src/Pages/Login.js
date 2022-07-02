
import React from 'react';
import { useForm } from "react-hook-form";
import {  useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import auth from '../firebase.init';

const Login = () => {
    let navigate = useNavigate();
    let location = useLocation();
    let from = location?.state?.from?.pathname || "/";
    // sign in with email and password
    const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);

  const { register, handleSubmit,  formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log('react form',data)
    signInWithEmailAndPassword(data.email, data.password);
  };
   
    let err;
    if(error){
        const z=error.message.split('/');
        const m=z[1].split(')');
       err=m[0];
    }
    let gerr;
    if(gerror){
        const z=gerror.message.split('/');
        const m=z[1].split(')');
       gerr=m[0];
    }
    // loading
    if(loading||gloading)
    {
        return <h1>Loading..</h1>
    }
    if(user||guser){
        navigate(from, { replace: true });
     
    }
  return (
    <div className=" flex h-screen justify-center items-center">
    <div className="card w-96 bg-base-600 shadow-xl">
      <div className="card-body grid grid-cols-1 justify-items-center">
        <h2 className="text-2xl  font-bold text-primary">Log in</h2>
        <div className="flex flex-col w-full border-opacity-50">
          <div className="grid w-11/12 card  rounded-box place-items-center">
      
         <form className="grid grid-cols-1 gap-6 my-4 justify-items-center w-full px-4" onSubmit={handleSubmit(onSubmit)}>


{/* include validation with required or other standard HTML validation rules */}
<input className="input input-bordered input-info w-full max-w-xs" type="email" {...register("email", { required: true })} />
<input className="input input-bordered input-info w-full max-w-xs" type="password" {...register("password", { required: true })} />
{/* errors will return when field validation fails  */}
{errors.exampleRequired && <span>This field is required</span>}
{error&&<div className="text-red-500">{err}</div>}
          {gerror&&<div className="text-red-500">{gerr}</div>}

<input  className="btn btn-primary w-8/12 max-w-xs" type="submit" />
</form>

         <div>
         {/* <span className='whitespace-nowrap'>Forgot password? <button  className='btn btn-link'>Password Recover</button></span>  */}
          <span className=" whitespace-nowrap">New to this site? <Link to='/registration'><span className=" whitespace-nowrap text-primary">Registration</span></Link></span>
         </div>
          </div>
          {/* divider */}
          <div className="divider">OR</div>
          <div className="grid h-20 card rounded-box place-items-center">
            <button
              onClick={() => signInWithGoogle()}
              className="btn btn-outline"
            >
             <img className='h-8 m-1' src="https://i.ibb.co/h9c4Fyb/google.webp" alt="" /> Sign in with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Login;
