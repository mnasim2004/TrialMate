import React, { useState } from 'react'
import './loginsignup.css'
import usericon from './assets/person.png'
import emailicon from './assets/email.png'
import passwordicon from './assets/password.png'
import pincode from './assets/pincode.jpg' 

const Loginsignup = () => {

   const[action,setaction]=useState("Login");


  return (
    <div className='container'>
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action==="Login"?<div></div>: <div className="input">
        <img src={usericon}  alt="" />
        <input type='text' placeholder='Name' />
        </div>
        }

        {action==="Login"?<div></div>: <div className="input">
        <img src={usericon}  alt="" />
        <input type='text' placeholder='phonenumber' />
        </div>
        }   


        {action==="Login"?<div></div>: <div className="input">
        <img src={usericon}  alt="" />
        <input type='text' placeholder='Address' />
        </div>
        }  

        {action==="Login"?<div></div>: <div className="input">
        <img src={pincode}  alt="" />
        <input type='text' placeholder='pincode' />
        </div>
        }  



       
        <div className="input">
        <img src={emailicon} alt="" />
        <input type='email'  placeholder='Email-id'/>
        </div>
        <div className="input">
        <img src={passwordicon} alt="" />
        <input type='password' placeholder='Password' />
        </div>

       

        
      </div>
      <div className="forgotpassword">forgot password <span>Click Here</span></div>
      <div className="submitcontainer">
        <div className={action==="Login"?"submitgray":"submit"}  onClick={()=>{setaction("Sign up")}}>Signup</div>
      <div className={action==="Signup"?"submitgray":"submit"}  onClick={()=>{setaction("Login")}}>Login</div>
      </div>
      
    </div>
  )
}

export default Loginsignup
