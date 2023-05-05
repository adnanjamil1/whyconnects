import React from 'react'

const Stepper = ({ activeStep }) => {
    return (
        <ul className="timeline">
            <li className={activeStep >= 1 ? "active-tl" : " "}></li>
            <li className={activeStep >= 2 ? "active-tl" : " "}></li>
            <li className={activeStep === 3 ? "active-tl" : " "}> </li>
        </ul >
    )
}

export default Stepper;