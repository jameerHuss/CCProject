import './About.css';
import Button from '@mui/material/Button';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useNavigate } from 'react-router-dom';
const About =()=>
{
    const nop=useNavigate()
    return(
        <>
        <div className="giant">
            
            <h1 style={{color:'red'}}>Aboutus</h1>
            <div className="au1">
                <img src="https://cdn.shopify.com/s/files/1/0070/7032/files/how-to-write-an-about-us-wip1.png?format=webp&v=1618511825&width=1024" height={250} width={450} style={{borderRadius:'20px'}}></img>
            </div>
           <p className='cho' style={{fontSize:"19px"}}>Expertise: With years of experience in the insurance industry, our team consists of seasoned professionals who understand the intricacies of life insurance. We leverage our expertise to guide you through the process and help you make informed decisions.

Customer-Centric Approach: Your satisfaction is our priority. We pride ourselves on our customer-centric approach, offering personalized service to address your unique requirements. Our dedicated support team is always ready to assist you at every step of the way.

Financial Stability: [Your Company Name] is backed by financial stability and a strong foundation. This ensures that we can fulfill our commitment to you, providing the financial security you need when it matters most.Our Products and Services

Explore a range of life insurance products tailored to meet your specific needs. Whether you are looking for term life insurance, whole life insurance, or other coverage options, we have a solution designed to offer protection and peace of mind.

Community Engagement

Beyond our commitment to providing exceptional insurance solutions, we are dedicated to giving back to the community. Through various initiatives and partnerships, we strive to make a positive impact on the lives of those we serve.
Term life insurance lasts for a set timeframe (usually 10 to 30 years), making it a more
 affordable option, while permanent life insurance lasts your entire lifetime
</p>
            
            <div>
                <img src='https://www.pngplay.com/wp-content/uploads/1/Contact-Us-PNG-Download-Free-Image.png' height={100} width={250} style={{marginLeft:'59%',marginTop:'2%'}}></img>
                </div>
                <div className='det'>
                    <div className='uu'>
                  <h3><EmailOutlinedIcon style={{height:'40px',width:'40px'}}/>hevfhe@gmail.com</h3>
                  <h3 ><PhoneInTalkIcon style={{height:'40px',width:'40px'}}/>5738783498</h3>
                  <h3 ><WhatsAppIcon style={{height:'40px',width:'40px'}}/>whatsapp:4787238745</h3>
                  <div><Button onClick={()=>{nop('/Home')}} style={{backgroundColor:"white",height:'30px',width:'70px', border:' 2px solid black'}}>Back</Button></div>
                  </div>
                
            </div>
        </div>
        </>
    )
}
export default About