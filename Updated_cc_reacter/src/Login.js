import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Person4Icon from '@mui/icons-material/Person4';
import {useNavigate} from 'react-router-dom';
import lcss from './lcss.css';
import axios from 'axios';
import { Button } from '@mui/material';

const Login=()=> 
{
   const nat=useNavigate()
   const na=useNavigate()
   const nav=useNavigate()
   const[email,setemail]=useState('')
   const[password,setpassword]=useState('')
   const handleSubmit=(e)=>
   {
      e.preventDefault()
      axios.get(`http://localhost:3003/users?email=${email}&password=${password}`)      
      .then(res=>{
        if(res.data.length>0)
        {
          alert(`Logged in succesful`)
         nav('/Home')
        }
        else
        {
          alert(`Invalid username or password`)
        }
      })
      .catch(err=>{console.log(err)})
   }
  return (
    < >
      <div className='idiv'>
      <h1  className='oko'></h1>
      <div className='ok'>
      <form onSubmit={handleSubmit}>
        
        <table cellPadding={10} cellSpacing={10} className='text'>
          <tr>
    <td><Person4Icon style={{width:'50px',height:'100px'}}/><TextField id="outlined-basic" type="email" className='text' label="Email" variant="outlined" onChange={(event)=>{setemail(event.target.value)}} required /></td>
    </tr>
  <tr>
    <td> <TextField id="outlined-basic" type="password" label="password" variant="outlined" className='text'  onChange={(event)=>{setpassword(event.target.value)}} required/></td>
    </tr>
    <tr>
    <td><a href='https://accounts.google.com/v3/signin/challenge/pwd?TL=AHNYTIQZebXcGWqPdUz7ML6HE2fgpZMbl0d7Ek9curG2tSBFRNFemEHM-1-PK80i&checkConnection&checkedDomains=youtube&cid=1&continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&dsh=S-871413550%3A1700470116636240&emr=1&flowEntry=ServiceLogin&flowName=GlifWebSignIn&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&ifkv=ASKXGp0_1fjkAj45aBpmjQ1aUYmEF_6u0GRKn15q9ppylNwC3e_wq_qdWuCkAIXrqriYJrkwkEe7BQ&osid=1&pstMsg=1&service=mail&theme=glif&authuser=0'>Forgot  Password?</a> </td></tr>
    <tr>
    <td><button type='submit'className="but" onClick={()=>{nat('/Home')}}><span>LOGIN</span></button></td>
    </tr>
    <p style={{color:'black '}}>Don't have a SHIELD Account? </p> <div onClick={()=>{na('/Signup')}}><Button style={{color:'#8000FF'}}>SIGN UP</Button></div>
    </table>
        </form>
    </div>
    </div>
    </>
  )
}

export default Login;
