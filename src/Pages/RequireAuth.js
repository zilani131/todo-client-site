import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../firebase.init';
// import Loading from '../Utilities.js/Loading';


const RequireAuth = ({children}) => {
    const [user,loading] = useAuthState(auth);
   
    let location = useLocation();
    if(loading){
        return <h1>Loading...</h1> //for not giving the loading it was redirected every loading
    }
    if(!user){
        return <Navigate to="/login"  state={{ from: location }} replace />
    }
    return children;
};

export default RequireAuth;