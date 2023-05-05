import React, { Fragment, useState } from 'react';
import { Col, DatePicker, Row, Space, Select, Table, Button } from 'antd';
import { getSms } from '../../utils/apiManager';
import { HandleError } from '../../utils/HandleError';
import moment from "moment";

const { RangePicker } = DatePicker;

const columns = [
    {
        title: 'Serial Number',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'Date',
        dataIndex: 'date',
        key: 'date',
    },
    {
        title: 'SMS Type',
        dataIndex: 'smstype',
        key: 'smstype',
    },
    {
        title: 'SMS Count',
        dataIndex: 'count',
        key: 'count',
    }
];


const DailyReport = () => {

    const [date, setDate] = useState();
    const [type, setType] = useState();
    const [dataSource, setDatasource] = useState();
    const [smsCount, setSmscount] = useState(0);
    const [loading, setIsloading] = useState(false);

    const onDateChange = (value) => {
        setDate(value);

    };

    const onTypeChange = (value) => {
        setType(value);

    };

    const onSubmit = async () => {
        setIsloading(true);
        const format = "YYYY-MM-DD HH:mm:ss"
        let smsObj = {
            startDate: moment(date[0]).format(format),
            endDate: moment(date[1]).format(format),
            type: type
        };
        try {
            let response = await getSms(smsObj);
            setDatasource(response.data);
            setSmscount(response.data.length);
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
                <span className="main-title-heading">sms daily report</span>
                <span className="count-heading">Total SMS Count : {smsCount}</span>
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
                            <span className="sub-main-heading">Select SMS Type</span>
                            <Select
                                onChange={onTypeChange}
                                className={"w-100"}
                                defaultValue="Select SMS Type"
                                options={[
                                    { value: '6', label: 'Chat' },
                                    { value: '21', label: 'SMS' },
                                    { value: '7', label: 'All' },

                                ]}
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
        </Fragment>
    )
}

export default DailyReport