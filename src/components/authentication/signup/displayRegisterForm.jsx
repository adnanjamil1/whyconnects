import { Button, Col, Row } from 'antd';
import React, { Fragment, useState } from 'react'
import Stepper from "./stepper";
import PersonalDetails from './personalDetails';
import PermanentAddress from "./permanentAddress";
import SetPassword from "./setPassword";
import Otp from './otp';
import { useNavigate } from 'react-router-dom';


const DisplayRegisterForm = () => {
    const navigate = useNavigate();
    const [stepForm, setStepForm] = useState(1);

    return (
        <Fragment>
            <Col lg={17} className="mx-auto">
                <div className="reg-form-wrapper">
                    <span className="reg-form-top-heading">signup</span>
                    <Row className="mb-4">
                        <Col lg={6} className="mx-auto">
                            <Stepper activeStep={stepForm} />
                        </Col>
                    </Row>

                    {
                        stepForm === 3 ?
                            <SetPassword />
                            :
                            <Row>
                                <Col lg={18} offset={3}>
                                    {stepForm === 1 && <PersonalDetails />}
                                    {stepForm === 2 && <PermanentAddress />}
                                    <Col lg={12} className="pe-3">
                                        <Button onClick={() => {
                                            setStepForm(stepForm + 1);
                                        }
                                        } className="custom-btn-bg text-white w-100">Next</Button>
                                    </Col>
                                </Col>
                            </Row>
                    }
                </div>
            </Col>
        </Fragment >

    )
}

export default DisplayRegisterForm;