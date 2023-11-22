import  React from 'react';
import TextField from '@mui/material/TextField';
import Person4Icon from '@mui/icons-material/Person4';
import {Link,useNavigate} from 'react-router-dom';
import lcss from './lcss.css';

const Login=()=> {
   const nav=useNavigate()
  return (
    < >
      <div className='idiv'>
      <h1  className='oko'></h1>
      <div className='ok'>
      <form onSubmit={()=>{nav('/')}} >
        
        <table cellPadding={10} cellSpacing={10} className='text'>
          <tr>
    <td><Person4Icon style={{width:'50px',height:'100px'}}/><TextField id="outlined-basic" type="text" className='text' label="UserName" variant="outlined" required /></td>
    </tr>
  <tr>
    <td> <TextField id="outlined-basic" type="email" label="Email" variant="outlined" className='text' required/></td>
    </tr>
    <tr>
    <td><a href='https://accounts.google.com/v3/signin/challenge/pwd?TL=AHNYTIQZebXcGWqPdUz7ML6HE2fgpZMbl0d7Ek9curG2tSBFRNFemEHM-1-PK80i&checkConnection&checkedDomains=youtube&cid=1&continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&dsh=S-871413550%3A1700470116636240&emr=1&flowEntry=ServiceLogin&flowName=GlifWebSignIn&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&ifkv=ASKXGp0_1fjkAj45aBpmjQ1aUYmEF_6u0GRKn15q9ppylNwC3e_wq_qdWuCkAIXrqriYJrkwkEe7BQ&osid=1&pstMsg=1&service=mail&theme=glif&authuser=0'>Forgot  Password?</a> </td></tr>
    <tr>
    <td><button type='submit'className="but" ><span>LOGIN</span></button></td>
    </tr>
    <p style={{color:'black '}}>Don't have a SHIELD Account? </p> <Link to="/Signup">SIGN UP</Link>
    </table>
        </form>
    </div>
    </div>
    </>
  )
}

export default Login;
