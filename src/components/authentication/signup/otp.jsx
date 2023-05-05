import React, { Fragment } from 'react'
import { Form, Field, Formik } from "formik";
import { AntInput } from '../../form/createAntFields';
import { Button, Col, Row } from 'antd';

const Otp = () => {
    return (
        <Fragment>
            <Col lg={17} className="mx-auto">
                <div className="otp-wrapper">
                    <span className="reg-form-top-heading">signup</span>
                    <Row className="otp-input-mb">
                        <Col lg={10} className="mx-auto">
                            <Formik>
                                <Form name="login-form reg-form-labels" className="form-container" autoComplete="off" >
                                    <Field
                                        size="large"
                                        placeholder="Your OTP here"
                                        component={AntInput}
                                        name="userName"
                                        type="text"
                                        label="One Time Password"
                                        className="custom-input"
                                    />
                                    <span className="otp-hint">*Enter the OTP you received on your mobile number</span>
                                </Form>
                            </Formik>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={10} className="mx-auto">
                            <Button className="custom-btn-bg text-white w-100">Next</Button>
                        </Col>
                    </Row>
                </div>
            </Col>
        </Fragment>
    )
}

export default Otp;
