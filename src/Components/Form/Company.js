import React, { useState } from "react";

export default function Company({status,progress,statusChange}) {

    const next = (event) => {
        event.preventDefault();
        statusChange(3)
        onAdd(data);
        console.log(data)
    }

    const data = [];
    const[img,setImg] = useState('');
    const[company,setCompany] = useState('')
    const [email,setEmail] = useState('')
    const [job,setJob] = useState('')
    const [experience,setExperience] = useState('')
    const [accept,setAccept] = useState('')

    const onAdd = (data) => {
        data.push({img,company,email,job,experience,accept})
    }

    return (
        <div className={status}>
            <h2 className="titles">Add Your Company Details</h2>
            <p className="stitles">
                Lorem ipsum is simply dummy Text of the printing and typesetting
                industry.
            </p>
            <div className="form mt-3">
                <form className="rform" onSubmit={next}>
                    <div className="form-group">
                        <input type="file" autoComplete="off" required onChange={(e) => setImg(e.target.value)}/>
                        <label className="file-label">Upload your company logo</label>
                    </div>
                    <div className="form-group">
                        <label>Company Name</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Company Name"
                            onChange={(e) => setCompany(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email id</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter Email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Job Title</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Job Title"
                            onChange={(e) => setJob(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Years of Experience</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Experience"
                            onChange={(e) => setExperience(e.target.value)}
                        />
                    </div>
                    <div className="form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="exampleCheck1"
                            onChange={(e) => setAccept(e.target.value)}
                        />{" "}
                        I accept the
                        <label className="form-check-label">Terms and Condition</label>
                    </div>
                    <button className="btn mr-2" type="submit">
                        Back
                    </button>
                    <button className="btn btn1 ml-1" type="submit">
                        Send OTP
                    </button>
                </form>
            </div>
        </div>
    );
}
