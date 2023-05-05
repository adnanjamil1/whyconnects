import React, { Fragment } from 'react';
import { Formik } from 'formik';
import ShowLoginWithCnic from './showLoginWithCnic';
import { Col } from 'antd';

const initialValues = {
    email: "",
    password: "",
};

const LoginWithCnic = () => {
    const handleSubmit = (formProps) => {

    };
    return (
        <Fragment>
            <div className="custom-container">
                <Col lg={9} offset={14}>
                    <Formik
                        onSubmit={handleSubmit}
                        initialValues={initialValues}
                        component={ShowLoginWithCnic}
                    />
                </Col>
            </div>
        </Fragment>
    )
}

export default LoginWithCnic;