import {   Row, Col,Checkbox } from "antd"; 
import Card from "../UI/Card";

const Selfcontract=()=>{

return(
    <div className="body-home">
     <h3 style={{marginTop:'-38px',fontWeight:400}}>Self Contract</h3>
     <Card>
        <Row>
        <p style={{textAlign:'initial'}}>11.2 Entire agreement</p>
        </Row>
     
       <div>
   <p className="questes">
 (a)  The placeholder attribute specifies 
     a short hint that describes the expected 
     value of an input field 
     (e.g. a sample value or a short description of the expected format).
The short hint is displayed in the input field before the user enters a value.

     </p> 
     <p  className="questes">
       
(b)  The placeholder attribute specifies 
     a short hint that describes the expected 
     value of an input field 
     (e.g. a sample value or a short description of the expected format).
The short hint is displayed in the input field before the user enters a value.
     </p>
       </div>
     </Card>
     <Row></Row>
     <div className="checked">
     <Checkbox ><span>
     Agree to your self contract
       </span></Checkbox><br/>
     </div>
  
     <button className="btn-self">SUBMIT</button>
  </div>

)
}

export default Selfcontract