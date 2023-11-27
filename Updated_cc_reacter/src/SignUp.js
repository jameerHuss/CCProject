import React from 'react';
import { User2 } from 'lucide-react';
import  './Signup.css';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios'

const SignUp=()=>{
  const n=useNavigate()

   const[email,setemail]=useState('')
   const[password,setpassword]=useState('')
   const[text,settext]=useState('')
   const[newtext,setnewtext]=useState('')
   const[gender,setgender]=useState('')
   const[date,setdate]=useState('')
   const handleSubmit=(e)=>
   {
      e.preventDefault()
      axios.post(` http://localhost:3003/users`,{
        email,password,text,newtext,gender,date
      })
      .then(res=>{alert(`Signin Successful`)
        n('/Login')
    })
     
      .catch(err=>{console.log(err)})
   }
  return(
    <div className='signdiv '>
      <div >
      <form onSubmit={handleSubmit}>
        <div className='logdiv'><h1 className='op'><User2 size={29} style={{color:'white'}}/>{"\t"}Sign up</h1></div>  
     <div className="main">
            
            <div ><input type="email" placeholder="*Enter-Email" className="oi" onChange={(event)=>{setemail(event.target.value)}} required /> </div>
            <div><input type="password" placeholder="*password" className="oi" onChange={(event)=>{setpassword(event.target.value)}}  required/></div>
            <div ><input type="text" placeholder="*MobileNumber"className="oi" onChange={(event)=>{settext(event.target.value)}}  required /></div>
            <div ><input type="newtext" placeholder="*BankName" className="oi" onChange={(event)=>{setnewtext(event.target.value)}} required /></div>
            <div><select  placeholder="gender" className='io' onChange={(event)=>{setgender(event.target.value)}} required >
         <option >Male</option>
         <option>Female</option>
        <option>Others</option> 
             </select ></div>
             <div>
            <input type="date" placeholder="" className="oi"  onChange={(event)=>{setdate(event.target.value)}} required /></div>
           
           <div><button className="but" type='submit'>SIGN UP</button></div>
           </div>
            
    </form>
    </div>
    </div>
  )
}
export default SignUp;