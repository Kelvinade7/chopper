import Navi from "./Navi";
import {Routes,Route} from 'react-router-dom'
import "./Vic.css"
import Home from "./Home";
import Pass from "./Pass";
function App() {
  
  return (
    
    
   <div  class='in'>
    <h3>CHOBER</h3><br/>
  <Routes>
    <Route path="/signin" element={<Navi/>}/>
    <Route path="/" element={<Home/>}/>
    <Route path="/next" element={<Pass/>}/>
  </Routes>
  <footer style={{textAlign :'center'}}>
    <p style={{color :'black',fontSize:'larger'}}>Website Designed By WMA</p>

  </footer>
  <div class='po'>
    
  </div>
     
      
    
   </div>
  );
}


export default App;