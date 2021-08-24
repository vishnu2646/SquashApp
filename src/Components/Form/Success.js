import React from 'react'
import '../../success.css'

export default function Success({status}) {
    return (
        <div className={status}>
            <div className="card">
                <div style={styles}>
                    <i className="checkmark">✓</i>
                </div>
                <h1>Success</h1> 
                <p className="t">We received your purchase request we'll be in touch shortly!</p>
            </div>
        </div>
    )
}

const styles = {
    borderRadius:"200px",
    height:"200px",
    width:"200px",
    background: "#F8FAF5",
    margin:"0 auto"
}