import React, { useState } from 'react';
import { Steps, Image, Button } from 'antd';
import Step1 from '../Container/PersonalDetails'
import Step2 from '../Container/PassKeyStep'
import Step3 from '../Container/Selfcontract'
import Step4 from '../Container/PaymentStep' 
import Header from '../Container/Header';

 

export class StepAuth extends React.Component {
    state = {
        firstName:'',
        lastName:'',
        phone:'',
        username:'',
        otp:'',
        passkey:'',
        selfContract:'',
        isCheckedContract:false,
        cardholderName:'',
        cardNumber:'',
        expiryDate:'',
        cvv:'',
        step: 1,

    }

    nextStep = () => {
        const { step } = this.state;

        this.setState({
            step: step + 2
        });
    }

    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    handleChange = input => e => { 
        this.setState({[input]: e.target.value});
    }

    showStep = () => {
        const { step, firstName, lastName, phone,username,otp,passkey,
            selfContract,isCheckedContract,cardNumber,cardholderName,cvv,expiryDate} = this.state;

        if(step === 1)
            return (<Step1 
                nextStep = {this.nextStep} 
                handleChange = {this.handleChange} 
                firstName={firstName} 
                lastName={lastName}
                phone={phone}
                username={username}
                otp={otp}
            />);
        if(step === 2)
            return (<Step2 
                nextStep = {this.nextStep} 
                prevStep = {this.prevStep}
                handleChange = {this.handleChange} 
                 passkey={passkey}
            />);
        if(step === 3)
            return (<Step3 
                selfContract={selfContract} 
                isCheckedContract={isCheckedContract}
                prevStep = {this.prevStep}
            />);
            if(step === 4)
            return (<Step4 
                cardNumber={cardNumber} 
                cardholderName={cardholderName}
                cvv={cvv} 
                expiryDate={expiryDate} 
                prevStep = {this.prevStep}
            />);
    }

    render(){
        const { step } = this.state; 
        return(
            <> 
                 <Header/>
                 
                {this.showStep()}
            </>
        );
    }
}
 

 



export default StepAuth;