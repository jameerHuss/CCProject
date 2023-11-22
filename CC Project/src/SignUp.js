import React from 'react';
import { User2 } from 'lucide-react';
import  './Signup.css';
import {Link,useNavigate} from 'react-router-dom';

const SignUp=()=>{

    const nav=useNavigate()
  return(
    <div className='signdiv '>
      <div style={{}}>
      <form onSubmit={()=>{nav('/login')}}>
        <div className='logdiv'><h1 className='op'><User2 size={29} style={{color:'white'}}/>{"\t"}Sign up</h1></div>  
     <div className="main">
            
            <div ><input type="text" placeholder="UserName" className="oi" required/> </div>
            <div><input type="email" placeholder="*Enter-Email" className="oi" required/></div>
            <div ><input type="text" placeholder="*MobileNumber"className="oi"  required/></div>
            <div ><input type="text" placeholder="BankName" className="oi" required/></div>
            <div><select  placeholder="gender" className='io' required>
         <option >Male</option>
         <option>Female</option>
        <option>Others</option> 
             </select ></div>
             <div>
            <input type="date" placeholder="" className="oi" required/></div>
           
           <div><button className="but" type='submit'>SIGN UP</button></div>
           </div>
            
    </form>
    </div>
    </div>
  )
}
export default SignUp;