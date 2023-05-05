import React, { Fragment, useEffect, useState } from 'react';
import { Col, DatePicker, Row, Select, Table, Button } from 'antd';
import { getUserdetails } from '../../utils/apiManager';
import { HandleError } from "../../utils/HandleError";

const { RangePicker } = DatePicker;

const { Option } = Select;

const columns = [
    {
        title: 'Serial Number',
        dataIndex: 'serialNumber',
        render: (text, record, index) => index + 1,
    },

    {
        title: 'MSISDN',
        dataIndex: 'username',
        key: 'username',
    },
    {
        title: 'Type',
        dataIndex: 'type',
        key: 'type',
    },
    {
        title: 'Status',
        dataIndex: 'isuserloggedin',
        key: 'isuserloggedin',
    }
];

const Subscriber = () => {

    const [dataSource, setDatasource] = useState([]);
    const [status, setStatus] = useState();
    const [loading, setIsLoading] = useState(false);
    const [subCount, setSubcount] = useState(0);


    const handleSelect = (value) => {
        setStatus(value);
    }

    const onSubmit = async () => {
        setIsLoading(true);
        let tempStatus = false;
        if (status === "inactive") {
            tempStatus = false;
        }
        if (status === "active") {
            tempStatus = true
        }
        if (status === "deleted") {
            tempStatus = false;
        }
        if (status === "all") {
            tempStatus = true;
        }
        let callObj = {
            isactiveuser: tempStatus,
        }
        try {
            let response = await getUserdetails(callObj);
            setDatasource(response.data.data)
            setSubcount(response.data.data.length);
        } catch (err) {
            if (err && err.response && err.response.status) {
                HandleError(err.response.status, err.response?.data?.details);
            }
        }
        setIsLoading(false)
    };

    return (
        <Fragment>
            <div className="heading-wrapper d-flex justify-content-between align-items-center">
                <span className="main-title-heading">Subscribers Stats</span>
                <span className="count-heading">Total SUB Count : {subCount}</span>
            </div>
            <section className="mt-4">
                <Row gutter={10} className="align-items-center">
                    <Col lg={5}>
                        <div className="date-pick-box mb-4">
                            <span className="sub-main-heading">Select Subscriber Status</span>
                            <Select defaultValue={"Select Status"} className="w-100" onSelect={handleSelect}>
                                <Option value="active">Active</Option>
                                <Option value="inactive">Inactive</Option>
                                <Option value="deleted">Deleted</Option>
                                <Option value="all">All</Option>
                            </Select>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <Button className="w-100" onClick={onSubmit}>Submit</Button>
                    </Col>
                </Row>
                <Col lg={24}>
                    <div className="data-table">
                        <Table
                            columns={columns}
                            dataSource={dataSource}
                            loading={loading}
                        />
                    </div>
                </Col>
            </section>
        </Fragment>
    )
}

export default Subscriber