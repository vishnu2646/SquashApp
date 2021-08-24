import React from "react";

export default function ProgressBar({ progress }) {
  return (
    <div className="nav-tab">
      <div className={`tab-${progress.personal}`}>
        {progress.personal === "completed" ? <i className="fas fa-check"></i> : <div className="number">1</div>}
        <div className="text">Personal Details</div>
      </div>
      <div className={`tab-${progress.company}`}>
        {progress.company === "completed" ? <i className="fas fa-check"></i> : <div className="number">2</div>}
        <div className="text">Company Details</div>
      </div>
      <div className={`tab-${progress.otp}`}>
        {progress.otp === "completed" ? <i className="fas fa-check"></i> : <div className="number">3</div>}
        <div className="text">Email Verification</div>
      </div>
    </div>
  );
}
