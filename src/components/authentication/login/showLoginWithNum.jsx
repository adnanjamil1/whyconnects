import React from 'react'
import { Form, Field } from "formik";
import { AntInput } from '../../form/createAntFields';
import { Button, Col, Row } from 'antd';
import { useNavigate } from 'react-router-dom';
import Wi from "../../../media/wi.png";

const ShowLoginWithNum = ({ handleSubmit, isLoginLoading }) => {
    const navigate = useNavigate();
    return (
        <div className="form-wrapper">
            <div className="d-flex justify-content-center  mb-4">
                <div className="form-logo">
                    <img src={Wi} />
                    <span>wiconnect</span>
                </div>
            </div>

            <Form name="login-form" className="form-container" autoComplete="off">
                <Col lg={22} className="mb-1 mx-auto">
                    <Field
                        size="large"
                        placeholder="User Name"
                        component={AntInput}
                        name="username"
                        type="text"
                        label="User Name"
                        hasFeedback
                        className="custom-input"
                        disable={isLoginLoading}
                        onPressEnter={handleSubmit}
                    />
                </Col>
                <Col lg={22} className="mb-1 mx-auto">
                    <Field
                        size="large"
                        component={AntInput}
                        name="password"
                        type="password"
                        label="Password"
                        hasFeedback
                        className="custom-input"
                        placeholder="Password"
                        disable={isLoginLoading}
                        onPressEnter={handleSubmit}
                    />
                </Col>
                <Col lg={22} className="mx-auto">
                    <Button
                        // onClick={() => navigate('/')}
                        className="custom-btn-bg"
                        type="primary"
                        block size={"large"}
                        onClick={handleSubmit}
                        disabled={isLoginLoading}
                    >Login
                    </Button>
                </Col>
            </Form>
        </div>
    )
}

export default ShowLoginWithNum;