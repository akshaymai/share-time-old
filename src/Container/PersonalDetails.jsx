import { Row, Col } from "antd";
import { useState, useEffect } from "react";
// import style from '../Login/index.css'
const PersonalDetails = (props) => {
  const { firstName, lastName, phone, username, otp, nextStep, handleChange } =
    props;
  const initialValues = {
    firstName: props.firstName,
    lastName: props.lastName,
    phone: props.phone,
    username: props.username,
    otp: props.otp,
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
   const [showall,setShowAll]=useState(true)
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    // setShowAll(true)
    console.log('aaaaaaaaaaaa',firstName)
    if( firstName &&  lastName &&  phone &&  otp &&  username ){
    //  console.log('inside');
      props.nextStep()
    }else{ 
    //  console.log('inside not');

    }
  };
  useEffect(() => {
    // console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      // console.log(formValues);
    }
  }, [formErrors  ]);
  const validate = (values) => {  
      // console.log(values)
    const errors = {};
    const regex =  /^[a-zA-Z]+$/;
    // const mobilerex=/^(\(?\+?[0-9]*\)?)?[0-9_\-\(\)]*$/
    if (!values.firstName) {
      errors.firstName = "FirstName is required!";
    }
    if (!values.lastName) {
      errors.lastName = "LastName is required!";
    } else if (!regex.test(values.email)) {
      errors.lastName = "This is not a valid LastName format!";
    }
    if (!values.phone) {
      errors.phone = "Phone is required";
    }else if(values.phone.length !== 10) {
      errors.phone="Enter valid phone number"
    }


    if (!values.otp) {
      errors.otp = "otp is required";
    }
    if (!values.username) {
      errors.username = "username is required";
    }
    return errors;
  };

  const handleSendOTP=()=>{
    setShowAll(false)
  }
  return (
    <div className="body-home">
      <form onSubmit={handleSubmit}>
        <Row>
        {formErrors.firstName&& <span>{formErrors.firstName}</span>}
          <Col span={24}>
            <input
              className={formErrors.firstName ? "input-text error":"input-text"}
              type="text"
              name="firstName"
              pattern="^[A-Za-z -]+$"
              title="Please enter text only"
              value={firstName}
              onBlur={(e) => {
                const { name, value } = e.target;
                setFormValues({ ...formValues, [name]: value }); 
              }}
              onChange={handleChange("firstName")}
              placeholder="First Name"
            ></input>
          
          </Col>
        </Row>
        <Row>
        {formErrors.lastName&&  <span>{formErrors.lastName}</span>}
          <Col span={24}>
            <input
              className={formErrors.lastName? "input-text error":'input-text'}
              type="text"
              name="lastName"
              pattern="^[A-Za-z -]+$"
              title="Please enter text only"
              value={lastName}
              placeholder="Last Name"
              onBlur={(e) => {
                const { name, value } = e.target;
                
                setFormValues({ ...formValues, [name]: value }); 
              }}
              onChange={handleChange("lastName")}
            ></input>
         
          </Col>
        </Row>
        <Row>
        {formErrors.phone&& <span>{formErrors.phone}</span>}
          <Col span={24}>
            <input
              className={formErrors.phone? "input-text error":'input-text'}
              type="number"  
              name="phone"
              pattern="^[789]\d{9}$"
              title="Please Enter 10 digits number"
              value={phone}
              onBlur={(e) => {
                const { name, value } = e.target; 
                setFormValues({ ...formValues, [name]: value });
              }}
              onChange={handleChange("phone")}
              type="text"
              placeholder="Telephone Number"
            ></input>
        
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <button className="btn-send" onClick={handleSendOTP}>Send</button>
          </Col>
        </Row>

        <Row>
        {formErrors.username&& showall && <span>{formErrors.username}</span>}  
          <Col span={24}>
            <input
              className={(formErrors.username && showall)?"input-text error":'input-text'}
              type="text"
              name="username"
              value={username}
              onChange={handleChange("username")}
              onBlur={(e) => {
                const { name, value } = e.target;
                setFormValues({ ...formValues, [name]: value });
              }}
              placeholder="Username"
            ></input>
  
          </Col>
        </Row>
        <span class="dot"></span>
        <Row>
        {formErrors.otp&& showall && <span>{formErrors.otp}</span>}
          <Col span={24}>
            <input
              className={(formErrors.otp&& showall)?"input-text error ":"input-text"}
              type="text"
              name="otp"
              value={otp}
              onBlur={(e) => {
                const { name, value } = e.target;
                setFormValues({ ...formValues, [name]: value });
              }}
              onChange={handleChange("otp")}
              placeholder="Otp Passcode"
            ></input>
       
          </Col>
        </Row>

        <button className="btn-submit">SUBMIT</button>
      </form>
    </div>
  );
};

export default PersonalDetails;
