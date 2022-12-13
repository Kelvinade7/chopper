import { useState,useEffect } from "react";
import {Link} from'react-router-dom'
function Home(){
const [name,sname]=useState("white")
const [pass, spass]=useState(0);
const [form,sform]=useState('')
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
    <div class='bord' >
      <p>Already have an account? <Link to={'/signin'}>Sign in</Link></p>
      <h5>Sign Up</h5>
      <h6 style={{opacity:'0.7'}}>Step 1 of 3</h6>
      <h5>Personal details</h5>
      <div class='God' style={{borderColor:name}}>
      <form  >
        <label>First Name</label><br/>
            <input type='text' placeholder="First Name" value={form} onChange={(e)=>sform(e.target.value)}/><br/>
            <label>Email</label><br/>
            <input type='email'required placeholder="Email" /> <br/><br/>
            <label>Country of residence</label> 
            <select>
                <option><li>Nigeria</li></option>
                <option>Ghana</option>
                <option>Benin</option>
                <option>Congo</option>
                <option>Liberia</option>
                <option>Togo</option>
            </select><br/><br/>
            <label>Date of Birth</label> <br/>
            <input type='date' /><br/><br/>
            <label>Preferred Language</label>
            <select>
               <option>English</option>
               <option>French</option>
               <option>Spanish</option>
            </select>
            <br/><br/>
          
            <Link disabled={pass} to={'/next'}><button>Create Account</button></Link>
           

          
      </form>
    
     
      </div>
      <br/> <p style={{color :'black',fontSize:'larger',textAlign:'center'}}>Website Designed By WMA</p>

    </div>
)
}
export default Home