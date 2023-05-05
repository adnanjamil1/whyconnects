import React, { Fragment, useState, useRef } from 'react';
import { Col, DatePicker, Row, Space, Select, Table, Button, Input } from 'antd';
import { HandleError } from '../../utils/HandleError';
import { getSmsdetails } from '../../utils/apiManager';
import { SearchOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
import moment from "moment";
const { RangePicker } = DatePicker;







const DetailReport = () => {

    const [date, setDate] = useState(new Date());
    const [type, setType] = useState(6);
    const [dataSource, setDatasource] = useState();
    const [smsCount, setSmscount] = useState(0);
    const [partyA, setPartyA] = useState();
    const [partyB, setPartyB] = useState();
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const [loading, setIsloading] = useState(false);

    const onDatechange = (value) => {
        setDate(value);
    }

    const onTypechange = (value) => {
        setType(value);
    }

    const changeParty_A = (e) => {
        setPartyA(e.target.value);
    }

    const changeParty_B = (e) => {
        setPartyB(e.target.value);
    }

    const onSubmit = async () => {
        setIsloading(true);
        const format = "YYYY-MM-DD HH:mm:ss"
        let smsObj = {
            startDate: moment(date[0]).format(format),
            endDate: moment(date[1]).format(format),
            from: partyA,
            to: partyB,
            type: type
        };
        try {
            let response = await getSmsdetails(smsObj);
            setDatasource(response.data);
            setSmscount(response.data.length);
            setIsloading(false);
        } catch (err) {
            if (err && err.response && err.response.status) {
                HandleError(err.response.status, err.response?.data?.details);
            }
        }
    }

    const searchInput = useRef(null);

    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };

    const handleReset = (clearFilters) => {
        clearFilters();
        setSearchText('');
    };

    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
            <div
                style={{
                    padding: 8,
                }}
                onKeyDown={(e) => e.stopPropagation()}
            >
                <Input
                    ref={searchInput}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{
                        marginBottom: 8,
                        display: 'block',
                    }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() => clearFilters && handleReset(clearFilters)}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Reset
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({
                                closeDropdown: false,
                            });
                            setSearchText(selectedKeys[0]);
                            setSearchedColumn(dataIndex);
                        }}
                    >
                        Filter
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            close();
                        }}
                    >
                        close
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered) => (
            <SearchOutlined
                style={{
                    color: filtered ? '#1890ff' : undefined,
                }}
            />
        ),
        onFilter: (value, record) =>
            record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownOpenChange: (visible) => {
            if (visible) {
                setTimeout(() => searchInput.current?.select(), 100);
            }
        },
        render: (text) =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{
                        backgroundColor: '#ffc069',
                        padding: 0,
                    }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    });

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
            title: 'Party A',
            dataIndex: 'partya',
            key: 'partya',
            ...getColumnSearchProps('partya')
        },
        {
            title: 'Party B',
            dataIndex: 'partyb',
            key: 'partyb',
            ...getColumnSearchProps('partyb')
        },
        {
            title: 'SMS Type',
            dataIndex: 'msgType',
            key: 'msgType',
        },
        {
            title: 'SMS Text',
            dataIndex: 'message',
            key: 'message',
        }
    ];

    return (
        <Fragment>
            <div className="heading-wrapper d-flex justify-content-between align-items-center">
                <span className="main-title-heading">sms detail report</span>
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
                                onChange={onDatechange} />
                        </div>
                    </Col>
                    <Col lg={5}>
                        <div className="date-pick-box mb-4">
                            <span className="sub-main-heading">Select SMS Type</span>
                            <Select
                                className={"w-100"}
                                onChange={onTypechange}
                                defaultValue="Select SMS Type"
                                options={[
                                    { value: '1', label: 'Chat' },
                                    // { value: '6', label: 'SMS' },
                                    { value: '1', label: 'All' },

                                ]}
                            />
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
        </Fragment>
    )
}

export default DetailReport