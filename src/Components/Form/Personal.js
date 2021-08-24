import React from "react";

const Personal = ({status,statusChange,personalForm,setPersonalForm}) => {
    
    const next = (event) => {
        event.preventDefault();
        statusChange(2)
    }

    const handleChange = (event) => {
        setPersonalForm({
            ...personalForm,
            [event.target.name]:event.target.value
        })
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
                            onChange={handleChange}
                            name="fullname"
                        />
                    </div>
                    <div className="form-group">
                        <label>Gender</label>
                        <br />
                        <div className="cat action">
                            <label>
                                <input type="radio" value="male"  className="form-control" name="gender" onChange={handleChange} required/>
                                <span>Male</span>
                            </label>
                        </div>
                        <div className="cat action">
                            <label>
                                <input type="radio" value="female"  className="form-control" name="gender" onChange={handleChange} />
                                <span>Female</span>
                            </label>
                        </div>
                        <div className="cat action">
                            <label>
                                <input type="radio" value="other" className="form-control"  name="gender" onChange={handleChange} />
                                <span>Other</span>
                            </label>
                        </div>
                    </div>
                    <br />
                    <br />
                    <div className="form-group">
                        <label>Country</label>
                        <select className="form-control" onChange={handleChange} name="country" required>
                            <option value="" disabled selected>Select Country</option>
                            <option value="India">India</option>
                            <option value="America">America</option>
                            <option value="Russia">Russia</option>
                            <option value="China">China</option>
                            <option value="Japan">Japan</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>State</label>
                        <select className="form-control" onChange={handleChange} name="place" required>
                            <option value="" disabled selected>Select State</option>
                            <option value="Tamil Nadu">Tamil Nadu</option>
                            <option value="Kerala">Kerala</option>
                            <option value="Karnataka">Karnataka</option>
                            <option value="Andhra Pradesh">Andhra Pradesh</option>
                            <option value="Telengana">Telengana</option>
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
                                onChange={handleChange}
                                name="phone"
                            />
                        </div>
                    </div>
                    <button 
                        className="btn btn-block" 
                        type="submit" 
                        disabled={!((personalForm.fullname.length > 0) && 
                            (personalForm.gender.length > 0) && 
                            (personalForm.country.length > 0) && 
                            (personalForm.place.length > 0) && 
                            (personalForm.phone.length > 0))
                        }>
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