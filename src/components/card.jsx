import React, { Fragment } from 'react'
const Card = ({ serviceTitle, serviceImg, serviceCount }) => {
    return (
        <Fragment>
            <div className="custom-card" >
                <div className="custom-card-body">
                    <div className="service-img">
                        <img src={serviceImg} />
                    </div>
                    <div className="d-flex justify-content-between">
                        <span className="service-title">{serviceTitle}</span>
                        <span className="service-title">{serviceCount}</span>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Card;
