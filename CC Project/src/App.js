import { Routes,Route } from 'react-router-dom';
import Login  from './Login.js';
 import Main  from './Main.js';
import SignUp from './SignUp.js' ;
const App=()=>
{
    return(

    <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
    </Routes>
   
    )
}
export default App;