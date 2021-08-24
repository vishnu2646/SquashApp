import React, {useState} from 'react'
import Personal from './Personal'
import Company from './Company'
import Otp from './Otp'
import ProgressBar from '../ProgressBar'
import Success from './Success'

const Form = () => {

    const [personalForm,setPersonalForm] = useState({
        fullname:"",
        gender:"",
        country:"",
        place:"",
        phone:"",
    });

    const [detailsForm, setDetailsForm] = useState({
        img: null,
        company: "",
        email: "",
        job: "",
        experience: "",
        accept: "",
    });

    const [otpForm, setOtpForm] = useState({
        num1: "",
        num2: "",
        num3: "",
        num4: "",
        num5: "",
    });

    /* used for changing the classname weather is active(i.e current Form) 
    or inactive(i.e Next Form to Fill) or completed(i.e Details have been filled) in Progress Bar*/

    const [progress,setProgress] = useState({
        personal:"active",
        company:"inactive",
        otp:"inactive"
    });

    /* used for changing the classname weather is active(i.e current Form) 
    or inactive(i.e Next Form to Fill) or completed(i.e Details have been filled) in Progress Bar*/
    
    const statusChange = (tabNo) =>{

        if(tabNo === 1){
            setProgress({
                personal:"active",
                company:"inactive",
                otp:"inactive"
            })
        }

        else if(tabNo === 2){
            setProgress({
                personal:"completed",
                company:"active",
                otp:"inactive"
            })
        }

        else if(tabNo === 3){
            setProgress({
                personal:"completed",
                company:"completed",
                otp:"active"
            })
        }

        else{
            setProgress({
                personal:"completed",
                company:"completed",
                otp:"completed"
            })
        }
    }

    const pushToStorage = () => {
        localStorage.setItem('personal',JSON.stringify(personalForm))
        localStorage.setItem('company',JSON.stringify(detailsForm))
    }

    return (
        <div>
            <ProgressBar progress={progress}/>
            <div className="content-tab">
                <Personal 
                    status={progress.personal === "active" ? "active-content" : "content"} 
                    progress={progress} statusChange={statusChange}
                    personalForm = {personalForm}
                    setPersonalForm = {setPersonalForm}
                />  
                <Company 
                    status={progress.company === "active" ? "active-content" : "content"} 
                    progress={progress}
                    statusChange={statusChange}
                    detailsForm ={detailsForm}
                    setDetailsForm = {setDetailsForm}
                />
                <Otp 
                    status={progress.otp === "active" ? "active-content" : "content"} 
                    progress={progress} 
                    statusChange={statusChange}
                    otpForm = {otpForm}
                    setOtpForm = {setOtpForm}
                    pushToStorage = {pushToStorage}
                />
                <Success status={progress.otp === "completed" ? "active-content" : "content"} />
            </div>
        </div>
    )
}

export default Form
