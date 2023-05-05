import React, { Fragment, useState } from 'react';
import { Col, DatePicker, Row, Select, Table, Button, Input } from 'antd';
import { getDetailnum } from '../../utils/apiManager';
import { HandleError } from '../../utils/HandleError';
import moment from 'moment';

const { RangePicker } = DatePicker;
const { Option } = Select;



// Table Columns Title
const columns = [
    {
        title: 'Serial Number',
        dataIndex: 'serialNumber',
        render: (text, record, index) => index + 1,
    },
    {
        title: 'MSISDN',
        dataIndex: 'fu',
        key: 'fu',
    },
    {
        title: 'Call Type',
        dataIndex: 'ou',
        key: 'ou',
    },
    {
        title: 'Party A',
        dataIndex: 'fu',
        key: 'fu',
    },
    {
        title: 'Party B',
        dataIndex: 'ru',
        key: 'ru',
    },
    {
        title: 'Start Time',
        dataIndex: 'date',
        key: 'date',
    },
    {
        title: 'End Time',
        dataIndex: 'enddate',
        key: 'enddate',
    },
    {
        title: 'MOUs',
        dataIndex: 'mous',
        key: 'mous',
    },
];

const DetailReport = () => {

    const [date, setDate] = useState(new Date());
    const [callType, setCalltype] = useState(1);
    const [partyA, setPartyA] = useState();
    const [partyB, setPartyB] = useState();
    const [dataSource, setDatasource] = useState();
    const [callsCount, setCallscount] = useState(0);
    const [loading, setIsloading] = useState(false);

    const onDateChange = (value) => {
        setDate(value);
    };

    const onTypeChange = (value) => {
        setCalltype(value);
    };

    const changeParty_A = (e) => {
        setPartyA(e.target.value);
    }

    const changeParty_B = (e) => {
        setPartyB(e.target.value);
    }

    const onSubmit = async () => {
        setIsloading(true);
        const format = "YYYY-MM-DD HH:mm:ss"
        let callObj = {
            startDate: moment(date[0]).format(format),
            endDate: moment(date[1]).format(format),
            ou: callType,
            fu: partyA,
            ru: partyB
        };
        try {
            let response = await getDetailnum(callObj);
            setDatasource(response.data)
            setCallscount(response.data.length);
            setIsloading(false);
        } catch (err) {
            if (err && err.response && err.response.status) {
                HandleError(err.response.status, err.response?.data?.details);
            }
        }
    };




    return (
        <Fragment>
            <div className="heading-wrapper d-flex justify-content-between align-items-center">
                <span className="main-title-heading">calls detail report</span>
                <span className="count-heading">Total CALLS Count : {callsCount}</span>
            </div>
            <section className="mt-4">
                <Row gutter={10} className="align-items-center">
                    <Col lg={5}>
                        <div className="date-pick-box mb-4">
                            <span className="sub-main-heading req">
                                Select Start and End Date
                            </span>
                            <RangePicker
                                className={"w-100"}
                                onChange={onDateChange}
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
                    <Col lg={5}>
                        <div className="date-pick-box mb-4">
                            <span className="sub-main-heading">Party-A</span>
                            <Input
                                placeholder="Type Party-A Number"
                                value={partyA}
                                onChange={changeParty_A}
                            />
                        </div>
                    </Col>
                    <Col lg={5}>
                        <div className="date-pick-box mb-4">
                            <span className="sub-main-heading">Party-B</span>
                            <Input
                                placeholder="Type Party-B Number"
                                value={partyB}
                                onChange={changeParty_B}
                            />
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
        </Fragment >
    )
}

export default DetailReport