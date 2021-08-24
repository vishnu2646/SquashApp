import React, { useState } from "react";

const Personal = ({status,statusChange}) => {

    const next = (event) => {
        event.preventDefault();
        statusChange(2)
        onAdd(data)
    }

    const data = [];
    const [name,setName] = useState('')
    const [gender,setGender] = useState('')
    const [country,setCountry] = useState('')
    const [palce,setPlace] = useState('')
    const [phone,setPhone] = useState('')

    const onAdd = (data) => {
        data.push({name,gender,country,palce,phone})
        console.log(data)
    }

    return (
        <div className={status}>
            <h2 className="titles">Add Your Personal Details</h2>
            <p className="stitles">
                Lorem ipsum is simply dummy Text of the printing and typesetting
                industry.
            </p>
            <div className="form mt-3">
                <form className="rform" onSubmit={next}>
                    <div className="form-group">
                        <label>Full Name</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter email"
                            autoComplete="off"
                            required
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Gender</label>
                        <br />
                        <div className="cat action">
                            <label>
                                <input type="checkbox" value="male" onChange={(e) => setGender(e.target.value)}/>
                                <span>Male</span>
                            </label>
                        </div>
                        <div className="cat action">
                            <label>
                                <input type="checkbox" value="female" onChange={(e) => setGender(e.target.value)}/>
                                <span>Female</span>
                            </label>
                        </div>
                        <div className="cat action">
                            <label>
                                <input type="checkbox" value="other" onChange={(e) => setGender(e.target.value)}/>
                                <span>Other</span>
                            </label>
                        </div>
                    </div>
                    <br />
                    <br />
                    <div className="form-group">
                        <label>Country</label>
                        <select className="form-control" onChange={(e) => setCountry(e.target.value)}>
                            <option>India</option>
                            <option>America</option>
                            <option>Russia</option>
                            <option>China</option>
                            <option>Japan</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>State</label>
                        <select className="form-control" onChange={(e) => setPlace(e.target.value)}>
                            <option>Tamil Nadu</option>
                            <option>Kerala</option>
                            <option>Karnataka</option>
                            <option>Andhra Pradesh</option>
                            <option>Telengana</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Phone</label>
                        <div className="input-group mb-2">
                            <div className="input-group-prepend">
                                <div className="input-group-text">+91</div>
                            </div>
                            <input
                                type="text"
                                className="form-control"
                                id="inlineFormInputGroup"
                                placeholder="Phone Number"
                                required
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </div>
                    </div>
                    <button className="btn btn-block" type="submit">
                        Next
                    </button>
                </form>
            </div>
            <p className="footer-link mt-3">
                Already Have an account? <span>Log in</span>
            </p>
        </div>
    );
}

export default Personal