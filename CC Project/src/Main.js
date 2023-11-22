
import './main.css'; 
import { Link } from 'react-router-dom';
const Main = () => {
  
      return (
        <div className='bod'>

            <div className="top">
                <div style={{ paddingRight: '10px', float: 'right' }}>
                    <Link to={"/Login"}><button id="login" type="button" style={{ marginTop: '7px', height: '55px', width: '100px', borderRadius: '40px', border: '1px solid white', fontSize: '15px', fontWeight: 'bold', cursor: 'pointer' }}>Log in</button></Link>
                </div>
                <h3 className="my" id="fontsize">Help</h3>
                <h3 className="my" id="fontsize">Contact Us</h3>
                <h3 className='my' id="fontsize">Home</h3>
                <h2 className='nam'>Shield Insurance</h2>
                <img className='log' src="https://media.istockphoto.com/id/1265111441/vector/circle-swoosh-with-hand-care-inside.jpg?s=612x612&w=0&k=20&c=qmcwdMKI1ZLF3djInsklBLkZPYPIr-X6se75BWfum7w="></img>

            </div>
            <div className="intro">
                <h1 className='intro1'>Welcome</h1>
                <p className='intro2'>To Our Shield Insurance Policy</p>
                <a href="#down" className='intro3'><span>GET STARTED</span></a>
            </div>
            <div id="down" className="About">
                <div className='jam'><img src='https://www.thetimes.co.uk/money-mentor/wp-content/uploads/2021/07/Life-insurance-1.jpg?quality=75&strip=all&w=1900&w=1200' width={'500px'} style={{borderRadius:'20px'}}/><p className='newpara'>
                Every day we wake up to the fact that more than 250 million lives are part of our family called Shield Insurance

We are humbled by the magnitude of the responsibility we carry and realise the lives that are associated with us are very valuable indeed.

Though this journey started over six decades ago, we are still conscious of the fact that, while insurance may be a business for us, being part of millions of lives every day for the past 65 years has been a process called TRUST.

A true saga Of Trust.
                    </p></div>
                
            
            
            </div>
           </div>
    )
}
export default Main;