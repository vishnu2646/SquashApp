import React from "react";

export default function Company({ status, statusChange, setDetailsForm, detailsForm }) {

    const next = (event) => {
        event.preventDefault();
        statusChange(3);
        // localStorage.setItem('company',JSON.stringify(detailsForm))
        console.log(detailsForm)
    };
  
    // const [detailsForm, setDetailsForm] = useState({
    //     img: null,
    //     company: "",
    //     email: "",
    //     job: "",
    //     experience: "",
    //     accept: "",
    // });

    const handleFormChange = (event) =>{
        setDetailsForm({
            ...detailsForm,
            [event.target.name]:event.target.value
        })
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
                        <input
                            type="file"
                            autoComplete="off"
                            required
                            name="img"
                            onChange={(e) => setDetailsForm({
                                ...detailsForm,
                                img:e.target.files[0]
                            })}
                        />
                        <label className="file-label">Upload your company logo</label>
                    </div>
                    <div className="form-group">
                        <label>Company Name</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Company Name"
                            onChange={handleFormChange}
                            name="company"
                        />
                    </div>
                    <div className="form-group">
                        <label>Email id</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter Email"
                            onChange={handleFormChange}
                            name="email"
                        />
                    </div>
                    <div className="form-group">
                        <label>Job Title</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Job Title"
                            onChange={handleFormChange}
                            name="job"
                        />
                    </div>
                    <div className="form-group">
                        <label>Years of Experience</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Experience"
                            onChange={handleFormChange}
                            name="experience"
                        />
                    </div>
                    <div className="form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="exampleCheck1"
                            onChange={handleFormChange}
                            name="accept"
                        />{" "}
                        I accept the
                        <label className="form-check-label">Terms and Condition</label>
                    </div>
                    <button 
                        className="btn mr-2" 
                        type="submit" 
                    >
                        Back
                    </button>
                    <button 
                        className="btn btn1 ml-1" 
                        type="submit" 
                        disabled={
                            !((detailsForm.company.length > 0) && 
                            (detailsForm.email.length > 0) && 
                            (detailsForm.accept.length > 0) && 
                            (detailsForm.job.length > 0)&& 
                            (detailsForm.experience.length > 0)
                        )}>
                        Send OTP
                    </button>
                </form>
            </div>
        </div>
    );
}
