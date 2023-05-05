import React, { Fragment } from 'react'
import SiteHeader from '../components/siteHeader';


const WelcomeTemplate = () => {
    return (
        <Fragment>
            <SiteHeader />
            <section className="welcome-bg-img">
                <div className='welcome-sub-img'>
                    <img src={loginBgImg} />
                </div>
                <div className="text-box">
                    <h1 className="welcome-text">Welcome to</h1>
                    <p className="service-text">Municipal Services KP Management Portal</p>
                </div>
            </section>
        </Fragment>
    )
}

export default WelcomeTemplate;