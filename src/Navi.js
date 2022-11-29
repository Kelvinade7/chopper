import { Link } from "react-router-dom";
import {useEffect,useState}from "react"
function Navi(){
  const [name,sname]=useState("white")
  const [pass, spass]=useState(0);
useEffect(()=>{     
      const ball =setInterval(()=>{ 
            spass(pass=>pass + 1) 
          
             if(pass===1){
                sname("aqua")
                console.log("aqua")
                spass(0)                
             }
             if(pass===0){
                sname("white")
                console.log("white")
             }
     },1000) 
    
return ()=>clearInterval(ball) ;
},[pass])
    return(
        <div class='bord'>
            <h2>Sign in</h2>
            <h6 style={{opacity:'0.7'}}>Step 3 of 3</h6>
            <br/>
          <div  class='God' style={{borderColor:name}}>
          <form>
          <label>First Name</label><br/>
            <input type='text' placeholder="First name"/><br/>
            <label>Password</label><br/>
            <input type='password' placeholder="Password"/><br/><br/>
            <button>Sign in</button><br/><br/>
            <p style={{fontSize :'large'}}>Don't Have An Account Sign Up Below</p><br/>
            <Link to='/'><button>Sign Up</button></Link>
          </form>
          </div>

        </div>
    )
}
export default Navi;