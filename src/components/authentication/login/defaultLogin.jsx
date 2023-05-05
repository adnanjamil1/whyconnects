import React, { Fragment } from 'react'
import { Formik } from 'formik';
import ShowDefaultLogin from './showDefaultLogin';
import { Col } from 'antd';

const initialValues = {
    email: "",
    password: "",

};
const DefaultLogin = () => {
    console.log("render default login")
    const handleSubmit = (formProps) => {

    };
    return (
        <Fragment>
            <div className="custom-container">
                <Col lg={9} offset={14}>
                    <Formik
                        onSubmit={handleSubmit}
                        initialValues={initialValues}
                        component={ShowDefaultLogin}
                    />
                </Col>
            </div>
        </Fragment>
    )
}

export default DefaultLogin;