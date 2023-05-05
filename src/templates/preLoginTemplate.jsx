import { Col, Row } from 'antd';
import React, { Children, Fragment } from 'react'
import { Route, Routes } from 'react-router';
import SiteHeader from "./siteHeader";
import loginBgImg from "../media/prelogin-sub-img.png";

const PreLoginTemplate = ({ children }) => {

    return (
        <Fragment>
            <SiteHeader isLogin={true} />
            <section className="prelogin-bg-img">
                <div className='prelogin-sub-img'> </div>
                <div className="w-100">
                    {children}
                </div>
            </section>
        </Fragment>

    )
}

export default PreLoginTemplate;