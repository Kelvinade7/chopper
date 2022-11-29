import{Link} from "react-router-dom"
import {useEffect,useState}from "react"
function Pass(){
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
            <h5>Set Password</h5>
            <h6 style={{opacity:'0.7'}}>Step 2 of 3</h6>
            <br/><br/>
           <div class='God' style={{borderColor:name}}>
           <form style={{padding:'3px'}}>
          <label>Set Password</label><br/>
            <input type='password' required/>
            <br/><br/>
            <label>Comfirm Password</label><br/>
            <input type='password' required /><br/><br/>
            <Link to='/signin'><button>Comfirm</button></Link>
          </form>
           </div>
            <br/><br/>
            <Link to={'/'}><h3 style={{fontSize:'0.5cm'}}>Back to Sign up Page</h3></Link>


        </div>
    )
}
export default Pass