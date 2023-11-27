import { Routes,Route } from 'react-router-dom';
import Login  from './Login.js';
 import Home  from './Home.js';
import SignUp from './SignUp.js' ;
import Home2 from './Home2.js';
import About from './About.js';
const App=()=>
{
    return(

    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Home2' element={<Home2/>}/>
        <Route path='/About' element={<About/>}/>
    </Routes>
   
    )
}
export default App;