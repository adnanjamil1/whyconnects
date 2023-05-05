import React from 'react';
import { Form, Field } from "formik";
import { AntInput } from '../../form/createAntFields';
import { Button, Col, Row } from 'antd';

const ShowPermanentaddress = () => {
    return (
        <Form name="login-form reg-form-labels" className="form-container" autoComplete="off" >
            <Row>
                <Col lg={24}>
                    <span className="reg-form-sub-heading">permanent address</span>
                </Col>
            </Row>
            <Row gutter={40}>
                <Col lg={12}>
                    <Field
                        size="large"
                        placeholder="Street no 10"
                        component={AntInput}
                        name="userStreet"
                        type="text"
                        label="Enter Street"
                        className="custom-input"
                    />
                </Col>
                <Col lg={12}>
                    <Field
                        size="large"
                        placeholder="Hangu"
                        component={AntInput}
                        name="userCity"
                        type="text"
                        label="Enter City"
                        className="custom-input"
                    />
                </Col>
                <Col lg={12} className="mb-2">
                    <Field
                        size="large"
                        placeholder="Hangu"
                        component={AntInput}
                        name="userDistrict"
                        type="text"
                        label="Enter District"
                        className="custom-input"
                    />
                </Col>
                <Col lg={12} className="mb-2">
                    <Field
                        size="large"
                        placeholder="KPK"
                        component={AntInput}
                        name="userProvince"
                        type="text"
                        label="Enter Province"
                        className="custom-input"
                    />
                </Col>
                {/* <Col lg={12}>
                    <Button className="custom-btn-bg text-white w-100">Next</Button>
                </Col> */}
            </Row>
        </Form>
    )
}

export default ShowPermanentaddress;