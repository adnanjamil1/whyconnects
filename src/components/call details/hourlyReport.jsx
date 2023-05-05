import React, { Fragment, useState } from "react";
import {
    Col,
    DatePicker,
    Row,
    Space,
    Select,
    Table,
    Button,
    TimePicker,
} from "antd";
import moment from "moment";
import { getCalls } from "../../utils/apiManager";
import { HandleError } from "../../utils/HandleError";
const { Option } = Select;
const { RangePicker } = DatePicker;

// For Select Call Type
const handleChange = (value) => {
    console.log(`selected ${value}`);
};

// Table Columns Title
const columns = [
    {
        title: 'Serial Number',
        dataIndex: 'serialNumber',
        render: (text, record, index) => index + 1,
    },
    {
        title: "Date",
        dataIndex: "date",
        key: "date",
    },
    {
        title: "Hour",
        dataIndex: "duration",
        key: "duration",
    },
    {
        title: "Call Type",
        dataIndex: "calltype",
        key: "calltype",
    },
    {
        title: "Calls",
        dataIndex: "numCalls",
        key: "numCalls",
    },
    {
        title: "MOUs",
        dataIndex: "mous",
        key: "mous",
    },
];

const HourlyReport = () => {
    const [startDatetime, setStartdatetime] = useState();
    const [endDatetime, setEnddatetime] = useState();
    const [type, setType] = useState(5);
    const [dataSource, setDatasource] = useState();
    const [callsCount, setCallscount] = useState(0);
    const [loading, setIsLoading] = useState(false);

    const startDatetimechange = (date) => {
        setStartdatetime(date);
        console.log(date);
    };

    const endDatetimechange = (date) => {
        setEnddatetime(date);
        console.log(date);
    };

    const onTypeChange = (value) => {
        setType(value);
        console.log(value);
    };

    const onSubmit = async () => {
        setIsLoading(true)
        const format = "YYYY-MM-DD HH:mm:ss"
        let callObj = {
            startDate: moment(startDatetime).format(format),
            endDate: moment(endDatetime).format(format),
            ou: type
        };
        try {
            let response = await getCalls(callObj);
            setDatasource(response.data)
            setCallscount(response.data.length);
            setIsLoading(false);
        } catch (err) {
            if (err && err.response && err.response.status) {
                HandleError(err.response.status, err.response?.data?.details);
            }
        }
    };

    return (
        <Fragment>
            <div className="heading-wrapper d-flex justify-content-between align-items-center">
                <span className="main-title-heading">calls hourly report</span>
                <span className="count-heading">Total CALLS Count : {callsCount}</span>
            </div>
            <section className="mt-4">
                <Row gutter={10} className="align-items-center">
                    <Col lg={5}>
                        <div className="date-pick-box mb-4">
                            <span className="sub-main-heading req">
                                Select Start Date and Time
                            </span>
                            <DatePicker
                                showTime={{ format: "HH:mm:ss" }}
                                format="YYYY-MM-DD HH:mm:ss"
                                defaultValue={startDatetime ? moment(startDatetime) : null}
                                onChange={startDatetimechange}
                            />
                        </div>
                    </Col>
                    <Col lg={5}>
                        <div className="date-pick-box mb-4">
                            <span className="sub-main-heading req">
                                Select End Date and Time
                            </span>
                            <DatePicker
                                showTime={{ format: "HH:mm:ss" }}
                                format="YYYY-MM-DD HH:mm:ss"
                                defaultValue={endDatetime ? moment(endDatetime) : null}
                                onChange={endDatetimechange}
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
    );
};

export default HourlyReport;
