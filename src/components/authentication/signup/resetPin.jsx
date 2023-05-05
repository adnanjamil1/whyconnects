import React, { Fragment } from 'react';
import { Button, Col, Row } from 'antd';
import check from "../../../media/check.png";

const ResetPin = () => {
    return (
        <Fragment>
            <Col lg={17} className="mx-auto">
                <div className="reset-wrapper">
                    <Row>
                        <Col lg={10} className="mx-auto">
                            <div className="reset-img d-flex justify-content-center">
                                <img src={check} />
                            </div>
                            <div className="reset-pin-text">
                                <h2>PIN Successfully Reset</h2>
                                <p>You have successfully created <br /> your new PIN</p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={10} className="mx-auto">
                            <Button className="custom-btn-bg text-white w-100">Home</Button>
                        </Col>
                    </Row>
                </div>
            </Col>
        </Fragment>
    )
}

export default ResetPin;