import React, { Fragment, useState } from 'react';
import { Col, DatePicker, Row, Select, Table, Button } from 'antd';
import { getCalls } from '../../utils/apiManager';
import moment from "moment";
import { HandleError } from '../../utils/HandleError';

const { Option } = Select;
const { RangePicker } = DatePicker;



// Table Columns Title
const columns = [
    {
        title: 'Serial Number',
        dataIndex: 'serialNumber',
        render: (text, record, index) => index + 1,
    },
    {
        title: 'Date',
        dataIndex: 'date',
        key: 'date',
    },
    {
        title: 'Call Type',
        dataIndex: 'ou',
        key: 'ou',
    },
    {
        title: 'Calls',
        dataIndex: 'numCalls',
        key: 'numCalls',
    },
    {
        title: 'MOUs',
        dataIndex: 'mous',
        key: 'mous',
    }
];

const DailyReport = () => {

    const [date, setDate] = useState();
    const [dataSource, setDatasource] = useState();
    const [callsCount, setCallscount] = useState(0);
    const [type, setType] = useState();
    const [loading, setIsloading] = useState(false);

    const onDateChange = (value) => {
        setDate(value);
    };

    const onTypeChange = (value) => {
        setType(value)
    };

    const onSubmit = async () => {
        const format = "YYYY-MM-DD HH:mm:ss"
        let callsObj = {
            startDate: moment(date[0]).format(format),
            endDate: moment(date[1]).format(format),
            ou: type
        };
        try {
            setIsloading(true);
            let response = await getCalls(callsObj);
            setDatasource(response.data);
            setCallscount(response.data.length);
            setIsloading(false);
        } catch (err) {
            if (err && err.response && err.response.status) {
                HandleError(err.response.status, err.response?.data?.details);
            }
            setIsloading(false)
        }
    };


    return (
        <Fragment>
            <div className="heading-wrapper d-flex justify-content-between align-items-center">
                <span className="main-title-heading">calls daily report</span>
                <span className="count-heading">Total CALLS Count : {callsCount}</span>
            </div>
            <section className="mt-4">
                <Row gutter={10} className="align-items-center">
                    <Col lg={5}>
                        <div className="date-pick-box mb-4">
                            <span className="sub-main-heading req">Select Start and End Date</span>
                            <RangePicker
                                className={"w-100"}
                                onChange={onDateChange}
                                required
                            />
                        </div>
                    </Col>
                    <Col lg={5}>
                        <div className="date-pick-box mb-4">
                            <span className="sub-main-heading">Select Call Type</span>
                            <Select className="w-100" defaultValue={null} onChange={onTypeChange}>
                                <Option value="FW#N">Inbound</Option>
                                <Option value="FW#Y">Outbound</Option>
                                <Option value={null}>All</Option>
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

export default DailyReport