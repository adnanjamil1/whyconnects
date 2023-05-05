import React, { Fragment } from 'react'
import { Form, Field, Formik } from "formik";
import { AntInput } from '../../form/createAntFields';
import { Button, Col, Row } from 'antd';

const ForgotPin = () => {
    return (
        <Fragment>
            <Col lg={17} className="mx-auto">
                <div className="forgot-wrapper">
                    <span className="reg-form-top-heading">signup</span>
                    <Row className="forgot-input-mb">
                        <Col lg={10} className="mx-auto">
                            <Formik>
                                <Form name="login-form reg-form-labels" className="form-container" autoComplete="off" >
                                    <Field
                                        size="large"
                                        placeholder="Jhondoe@gmail.com"
                                        component={AntInput}
                                        name="userName"
                                        type="email"
                                        label="Enter your Email"
                                        className="custom-input"
                                    />
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

export default ForgotPin;