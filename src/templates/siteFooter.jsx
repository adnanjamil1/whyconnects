import React from 'react'
import { useNavigate } from "react-router-dom";

const SiteFooter = () => {
    const navigate = useNavigate();
    return (

        <div className="site-footer">
            <div className=" d-flex justify-content-end">
                <ul className="d-flex">
                    <li className="me-4" onClick={() => navigate('/terms_conditions')}>
                        Terms & Conditions
                    </li>
                    <li onClick={() => navigate('/privacy_policy')}>
                        Privacy Policy
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SiteFooter;