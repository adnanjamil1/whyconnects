import React from 'react';
import { Form, Field } from "formik";
import { AntInput } from '../../form/createAntFields';
import { Button, Col, Row } from 'antd';
import { useNavigate } from 'react-router-dom';

const ShowDefaultLogin = () => {
    const navigate = useNavigate();
    return (
        <div className="form-wrapper">
            <span className="form-heading">Login</span>
            <Form name="login-form" className="form-container" autoComplete="off">
                <Col lg={22} className="mb-1 mx-auto">
                    <Field
                        size="large"
                        placeholder="+ 02 333 0056313"
                        component={AntInput}
                        name="userNum"
                        type="text"
                        label="Your Mobile Number"
                        hasFeedback
                        className="custom-input"
                    />
                </Col>
                <Col lg={22} className="mb-1 mx-auto">
                    <Field
                        size="large"
                        component={AntInput}
                        name="userPass"
                        type="password"
                        label="Your PIN"
                        hasFeedback
                        className="custom-input"
                    />
                    <span className="forgot-pin-text d-flex justify-content-end">Forgot PIN ?</span>
                </Col>
                <Col lg={22} className="mx-auto">
                    <Button onClick={() => navigate('/dashboard')} className="custom-btn-bg" type="primary" block size={'large'}>Login</Button>
                </Col>
                <Col lg={22} className="mx-auto separator-spacer">
                    <div className="d-flex align-items-center justify-content-center">
                    </div>
                    <h1 className='separator'>or</h1>
                </Col>
                <Col lg={22} className="mx-auto">
                    <Button onClick={() => navigate('/login_cnic')} className="custom-btn-bg" type="primary" block size={'large'}>Login with CNIC</Button>
                </Col>
                <Col lg={22} className="mx-auto">
                    <span onClick={() => navigate('/signup')} className="create-acc-redirect">Create an account by clicking here</span>
                </Col>
            </Form>
        </div>
    )
}

export default ShowDefaultLogin;