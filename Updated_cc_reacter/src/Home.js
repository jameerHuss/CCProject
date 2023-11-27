import './Home.css';
import './Home2.css';
import { useNavigate} from 'react-router-dom';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import Marquee from "react-fast-marquee";
const Home =()=>
{
  const nav=useNavigate();
  const n=useNavigate();
  const newn=useNavigate();
  const newnav=useNavigate();
  return(
    <>
   <div className='tot'>
    <div className="tl">
     <div className='ind'>
  <div className="d4"><HomeIcon style={{height:'74px',width:'40px'}} onClick={()=>{newnav('/Home')}}/></div>
  </div>
      <div className="hg">
       <ul>
        <li>Help</li>
        <li>Products</li>
       
       </ul>
      </div >
      <div className='go'>
      <div className="jk"><Button style={{color:'black',height:'45px'}} onClick={()=>{newn('/Login')}}>Login</Button></div>
      </div>
    </div>
    
    <div className="tooop">
      <Marquee style={{behaviour:'scroll',direction:'right',scrollamount:'50'}}>
        <div className="log">
        <div className="log1">
        <img src="https://clipartmag.com/images/animated-house-clipart-28.png" height={200} width={300}></img>
            </div>
            <div className='roll'>
           <div className="log2">
            <h1>------LIFE INSURANCE-----</h1>
          </div>
          </div>
          <div className="log3">
            <div>
            <img src="https://www.clipartkey.com/mpngs/m/109-1090456_family-cartoon-wallpaper-talk-to-my-family.png" height={200} width={300}></img>
            </div>
          </div>
        </div>
        </Marquee> 
            </div>
            <div className='jam'><img src='https://www.thetimes.co.uk/money-mentor/wp-content/uploads/2021/07/Life-insurance-1.jpg?quality=75&strip=all&w=1900&w=1200' width={'500px'} style={{borderRadius:'20px'}}/><p className='newpara'>
                Every day we wake up to the fact that more than 250 million lives are part of our family called Shield Insurance

We are humbled by the magnitude of the responsibility we carry and realise the lives that are associated with us are very valuable indeed.

Though this journey started over six decades ago, we are still conscious of the fact that, while insurance may be a business for us, being part of millions of lives every day for the past 65 years has been a process called TRUST.

A true saga Of Trust.
                    </p></div>
                    
       <div > 
       <Button  className='page1lastbut' variant="outlined" onClick={()=>{nav('/Home2')} } style={{backgroundColor:"white", border:' 2px solid black'}}>GroupSchemes</Button>
       </div>
        <div >
        <Button  className='ee' variant="outlined" onClick={()=>{n('/About')}} style={{backgroundColor:"white", border:' 2px solid black'}}>AboutUs</Button>
        </div>
     </div>
      
    </>
  )
}
export default Home;