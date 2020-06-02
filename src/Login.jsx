

import React, { useState } from "react";
import {useDispatch,useSelector} from "react-redux"
import { validAdminLogin , showLoginPage} from "./Redux/actions";

 const Login =(props)=>{

  const [name,setName] = useState("");
  const [password,setPassword] = useState("");

  const dispatch = useDispatch()
  const store = useSelector(state=>state)

  
   const handleLogin = ()=>{
    
       const value = {
         name,password
       };
       
       if(name==="" && password==="" ){
         alert("please fill it properly")
         return
       }
       dispatch(validAdminLogin(name))
       
      //  if(store.isError){
      //    alert("")
      //  }
     }
     
     return(
       <>
       
         <div className="bg-white">
             <div className="loginContainer ">
               <div className="login m-4" style={{borderRadius:10}}>
                 <h2
                   style={{
                     fontWeight: "600",
                     color: "rgb(61, 60, 60)"
                   }}
                 >
                  <i class="far fa-user loginLogo"></i>  LOGIN
                 </h2>
                 <input
                   className="d-block w-100 loginInput"
                   placeholder="Username"
                   required
                   value={name}
                   onChange={e=>setName(e.target.value)}
                 />
                 <input
                   className="d-block w-100 loginInput"
                   placeholder="Password"
                   required
                   value={password}
                   onChange={e=>setPassword(e.target.value)}
                 />
                 <button
                  onClick={()=>handleLogin()} 
                  className="loginButton">
                   LOGIN
                 </button>
                    {/* for pssword reset  */}
                <div className="mt-4" style={{ fontSize: 14 }}>
                
                 <span
                   className="float-right"
                   style={{ cursor: "pointer" }}
                   
                 >
                   <b>New to Shopihy?</b> Create Account
                 </span>
               </div>
                 
               </div>
             </div>
           </div>
       </>
   
   )
}

export default Login