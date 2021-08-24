import React from "react";

export default function Otp({status,progress,statusChange}) {
    const next = (event) => {
        event.preventDefault();
        statusChange(4)
    }
  return (
    <div className={status}>
        <h2 className="titles">Add Your Company Details</h2>
        <p className="stitles">
            For Your security, we need to verify identity, We Sent a 5-digit
        </p>
        <p className="stitles">
            code to <b>name@domine.com.</b> Please enter it below
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
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            autoComplete="off"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            autoComplete="off"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            autoComplete="off"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            autoComplete="off"
                            required
                        />
                    </div>
                </div>
                <button className="btn mr-2" type="submit">
                    Back
                </button>
                <button className="btn btn1 ml-1" type="submit">
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
