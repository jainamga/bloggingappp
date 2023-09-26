import React from 'react'
import { Outlet ,Navigate} from 'react-router-dom';
import { isLoggedIn } from '../auth';
const Privateroute=() =>{
  
 
    let loggedIn=false;
    if(isLoggedIn){
        return<Outlet/>

    }
    else{
        return <Navigate to={"/login"}/>;
    } 
  
    return (


    <>
    <div>Privateroute</div>
    <Outlet/>
    </>
  )
}

export default Privateroute; 