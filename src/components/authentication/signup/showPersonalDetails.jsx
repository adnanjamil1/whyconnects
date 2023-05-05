import React from 'react';
import { Form, Field } from "formik";
import { AntInput } from '../../form/createAntFields';
import { Button, Col, Row } from 'antd';
import { useNavigate } from 'react-router-dom';

const ShowPersonalDetails = () => {
    const navigate = useNavigate();
    return (
        <Form name="login-form reg-form-labels" className="form-container" autoComplete="off" >
            <Row>
                <Col lg={24}>
                    <span className="reg-form-sub-heading">personal details</span>
                </Col>
            </Row>
            <Row gutter={40}>
                <Col lg={12}>
                    <Field
                        size="large"
                        placeholder="Jhon Doe"
                        component={AntInput}
                        name="userName"
                        type="text"
                        label="Enter Your Name"
                        className="custom-input"
                    />
                </Col>
                <Col lg={12}>
                    <Field
                        size="large"
                        placeholder="Jhondoe@gmail.com"
                        component={AntInput}
                        name="streetNum"
                        type="email"
                        label="Enter Your email address"
                        className="custom-input"
                    />
                </Col>
                <Col lg={12} className="mb-2">
                    <Field
                        size="large"
                        placeholder="32562452452452"
                        component={AntInput}
                        name="cnicNum"
                        type="text"
                        label="Enter Your CNIC Number"
                        className="custom-input"
                    />
                </Col>
                <Col lg={12} className="mb-2">
                    <Field
                        size="large"
                        placeholder="+ 92 333 0056313"
                        component={AntInput}
                        name="userNum"
                        type="text"
                        label="Enter Your Mobile Number"
                        className="custom-input"
                    />
                </Col>
                {/* <Col lg={12}>
                    <Button onClick={() => navigate('/permanent_address')} className="custom-btn-bg text-white w-100">Next</Button>
                </Col> */}
            </Row>
        </Form>
    )
}

export default ShowPersonalDetails;