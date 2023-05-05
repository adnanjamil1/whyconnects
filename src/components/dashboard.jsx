import React, { Fragment, useEffect, useState } from 'react';
import { Col, Row } from 'antd';
import Card from "./card";
import Sub from "../media/subscribe.png";
import Call from "../media/viber.png";
import { getStats } from '../utils/apiManager';
import Chart from "../components/chart";

const Subscriber = () => {

    const [stats, setStats] = useState();


    useEffect(() => {
        getStats().then((res) => {
            setStats(res?.data);
        });

    }, []);



    return (
        <Fragment>
            <div className="content-wrapper mt-3 mb-0">
                <h2 className="welcome-user-heading">Welcome, Jhon Doe!</h2>
                <Row gutter={15}>
                    <Col lg={6} className="mb-3">
                        <Card serviceImg={Sub} serviceTitle={"Total Subscribers"} serviceCount={stats?.data?.subscriberCount} />
                    </Col>
                    <Col lg={6} className="mb-3">
                        <Card serviceImg={Call} serviceTitle={'Total Concurrent Call'} serviceCount={stats?.data?.concurrentCallsCount} />
                    </Col>
                    <Col lg={6} className="mb-3">
                        <Card serviceImg={Call} serviceTitle={'Total Call per subscriber'} serviceCount={stats?.data?.callsMadePerSecond} />
                    </Col>
                    <Col lg={6} className="mb-3">
                        <Card serviceImg={Call} serviceTitle={'Total Calls attempt'} serviceCount={stats?.data?.callsAttemptPerSecond} />
                    </Col>
                    <Col lg={6} className="mb-3">
                        <Card serviceImg={Call} serviceTitle={'Total Terminated'} serviceCount={stats?.data?.callsTerminatedPerSecond} />
                    </Col>
                </Row>
            </div>
        </Fragment>
    )
}

export default Subscriber