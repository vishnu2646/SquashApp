import React, {useState} from 'react'
import Personal from './Personal'
import Company from './Company'
import Otp from './Otp'
import ProgressBar from '../ProgressBar'
import Success from './Success'

const Form = () => {

    const [progress,setProgress] = useState({
        personal:"active",
        company:"inactive",
        otp:"inactive"
    });

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

    return (
        <div>
            <ProgressBar progress={progress}/>
            <div className="content-tab">
                <Personal status={progress.personal === "active" ? "active-content" : "content"} progress={progress} statusChange={statusChange}/>  
                <Company status={progress.company === "active" ? "active-content" : "content"} progress={progress} statusChange={statusChange}/>
                <Otp status={progress.otp === "active" ? "active-content" : "content"} progress={progress} statusChange={statusChange}/>
                <Success status={progress.otp === "completed" ? "active-content" : "content"} />
            </div>
        </div>
    )
}

export default Form
