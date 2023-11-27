import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
const Home2=()=>
{
    const no=useNavigate()
return(
    <>
    <div  className="home2div">
        <div className='Home2butdiv'><Button onClick={()=>{no('/Home')}}  style={{backgroundColor:"white",height:'30px',width:'70px', border:' 2px solid black'}}>Back</Button></div>
   <div className="not">
    <div className="not1">
        <div className="in1">
            <p className="p1"> Term Life Insurance:Term life insurance provides coverage for a specified term, typically 10, 20, or 30 years. It offers a straightforward death benefit without cash value accumulation. Premiums are generally lower than permanent life insurance, making it an affordable option for individuals seeking temporary coverage to protect their loved ones in case of premature death. If the insured passes away during the term, beneficiaries receive the death benefit tax-free. However, once the term expires, the coverage ends, and there is no return on premiums paid. Term life insurance is often chosen for its simplicity, cost-effectiveness, and the ability to match coverage with specific financial responsibilities.
</p>
        </div>
        <div className="in12"> 
        <img src="https://www.lifeinsuranceblog.net/wp-content/uploads/2020/06/Group-Term-Life-Insurance.jpg" height={200}></img>
        </div>
    </div>
    <div className="not2">
        <div className="in22"> 
        <img src="https://i.ytimg.com/vi/NOStEpayfgs/maxresdefault.jpg" height={200}></img>
        </div>
    <div className="in2">
            <p className="p2"> Individuals Seeking Permanent Coverage: Whole life insurance is suitable for those who want coverage that lasts their entire lifetime, providing financial protection for their loved ones regardless of when they pass away.

Individuals with Long-Term Financial Goals: The cash value accumulation feature makes whole life insurance a potential fit for individuals with long-term financial goals, such as supplementing retirement income or building a financial legacy.</p>
        </div>
    </div>
    <div className="not3">
    <div className="in3">
            <p className="p3"> Term Life Insurance:Term life insurance provides coverage for a specified term, typically 10, 20, or 30 years. It offers a straightforward death benefit without cash value accumulation. Premiums are generally lower than permanent life insurance, making it an affordable option for individuals seeking temporary coverage to protect their loved ones in case of premature death. If the insured passes away during the term, beneficiaries receive the death benefit tax-free. However, once the term expires, the coverage ends, and there is no return on premiums paid. Term life insurance is often chosen for its simplicity, cost-effectiveness, and the ability to match coverage with specific financial responsibilities.
</p>
        </div>
        <div className="in32"> 
        <img src="https://www.allstatevoluntary.com/temp/meri/images/UniversalLife-Video-Image-OG.png" height={200}></img>
        </div>
    </div>
    <div className="not4">
        <div className="in42"> 
        <img src="http://lifeinsurancetype.com/wp-content/uploads/2014/12/variable-life-insurance.png" height={200}></img>
        </div>
    <div className="in4">
            <p className="p4">Variable life insurance is a type of permanent life insurance that combines a death benefit with an investment component. Unlike traditional whole life insurance, which typically offers a fixed cash value growth, variable life insurance allows policyholders to invest the cash value in a variety of investment options, such as stocks, bonds, and mutual funds. This investment component introduces an element of risk and potential reward, making variable life insurance a more dynamic and flexible option. In this detailed exploration of variable life insurance, we will delve into its features, advantages, considerations, and the types of individuals who might find it suitable for their financial needs.
</p>
        </div>
    </div>
   </div>
   <div className="footte">
 <p className="nan">Copyright © 2023 - All Rights Reserved - Official website of Life Insurance Corporation of India.

For any query regarding this website, please contact the Web Information Manager

Manoj Sharad Kulkarni, Administrative Officer, co[dash]cc[at]licindia[dot]com

Content on this website is published and managed by Life Insurance Corporation of India.

Corporate Office : Yogakshema Building, Jeevan Bima Marg, P.O. Box No – 19953, Mumbai – 400 021 IRDAI Reg No- 512

Life Insurance Corporation of India, Administrative Officer, Corporate Communication Dept.</p>

               
                   
   </div>
    </div>
    </>
)
}
export default Home2;