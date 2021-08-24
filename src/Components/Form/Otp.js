import React from "react";

export default function Otp({status,statusChange,pushToStorage,otpForm,setOtpForm}) {
    
    const next = (event) => {
        event.preventDefault();
        statusChange(4)
        pushToStorage();
    }
    
    const handleChange = (event) => {
        setOtpForm({
            ...otpForm,
            [event.target.name]:event.target.value
        })
    }

    return (
        <div className={status}>
            <h2 className="titles">
                Add Your Company Details
            </h2>
            <p className="stitles">
                For Your security, we need to verify identity, We Sent a 5-digit
            </p>
            <p className="stitles">
                code to <b>name@domine.com.</b> Please enter it below <b>"Enter Any Random 5 Digits".</b>
            </p>
            <div className="form mt-3">
                <label>Enter your code</label>
                <form onSubmit={next}>
                    <div className="digit">
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                autoComplete="off"
                                required
                                name="num1"
                                onChange={handleChange}
                                maxLength="1"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                autoComplete="off"
                                required
                                name="num2"
                                onChange={handleChange}
                                maxLength="1"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                autoComplete="off"
                                required
                                name="num3"
                                onChange={handleChange}
                                maxLength="1"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                autoComplete="off"
                                required
                                name="num4"
                                onChange={handleChange}
                                maxLength="1"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                autoComplete="off"
                                required
                                name="num5"
                                onChange={handleChange}
                                maxLength="1"
                            />
                        </div>
                    </div>
                    <button className="btn mr-2" type="submit">
                        Back
                    </button>
                    <button 
                        className="btn btn1 ml-1" 
                        type="submit" 
                        disabled={
                            !((otpForm.num1.length === 1) && (otpForm.num2.length === 1)
                            &&(otpForm.num3.length === 1) && (otpForm.num4.length === 1)
                            &&(otpForm.num5.length === 1)
                        )}>
                        Verify
                    </button>
                </form>
                <hr />
                <p className="footer">
                    Didn't receive the email? Check your spam filter for an email
                </p>
                <p className="footer-link">
                    from <span>name@domain.com</span>
                </p>
            </div>
        </div>
    );
}
