import React from 'react';
import { Form, Field } from "formik";
import { AntInput } from '../../form/createAntFields';
import { Button, Col, Row } from 'antd';
import { useNavigate } from 'react-router-dom';

const ShowSetPassword = () => {
    const navigate = useNavigate();
    return (
        <Form name="login-form reg-form-labels" className="form-container" autoComplete="off" >
            <Row>
                <Col lg={11} offset={6}>
                    <span className="reg-form-sub-heading">set password</span>
                </Col>
            </Row>
            <Row>
                <Col lg={11} offset={6}>
                    <Field
                        size="large"
                        placeholder="xxxxxx"
                        component={AntInput}
                        name="enterPass"
                        type="password"
                        label="Enter Password"
                        className="custom-input"
                    />
                </Col>
            </Row>
            <Row>
                <Col lg={11} className="mb-2" offset={6}>
                    <Field
                        size="large"
                        placeholder="xxxxxx"
                        component={AntInput}
                        name="reenterPass"
                        type="password"
                        label="Re-Enter Password"
                        className="custom-input"
                    />
                </Col>
            </Row>
            <Row>
                <Col lg={11} offset={6}>
                    <Button onClick={() => navigate('/dashboard')} className="custom-btn-bg text-white w-100">Done</Button>
                </Col>
            </Row>
        </Form>
    )
}

export default ShowSetPassword;