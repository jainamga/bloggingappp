//is loggedIn=> 
export const isLoggedIn=()=>{
    let data = localStorage.getItem("data");
    if(data!=null)
    {
        return true;
    }else
    {
        return false;
    }
}

//doLogin data=> 

export const doLogin=(data)=>
{
    localStorage.setItem("data",JSON.stringify(data));
    
}

export const doLogout = (next) => {
    localStorage.removeItem("data");
    next()
  };


//get currentUser

export const getCurretUserDetail=()=>
{
    if(isLoggedIn){
        return JSON.parse(localStorage.getItem("data"))?.username;
    }else{
        return undefined;
    }
    };
