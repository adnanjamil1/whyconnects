import React, { Fragment, useState } from 'react'
import { Breadcrumb, Button, Table } from 'antd';
import { useNavigate } from 'react-router-dom';

const data = [
    {
        key: '1',
        calltype: 'live',
        aparty: '03155123920',
        bparty: '03155123921',
        // date: "12-4-2023",
        duration: '60 mins',
        status: 'active',
        termination: 'signals dropped'
    },
    {
        key: '2',
        calltype: 'live',
        aparty: '03155123920',
        bparty: '03155123921',
        // date: "12-4-2023",
        duration: '60 mins',
        status: 'inactive',
        termination: 'signals dropped'
    },
    {
        key: '3',
        calltype: 'live',
        aparty: '03155123920',
        bparty: '03155123921',
        // date: "12-4-2023",
        duration: '60 mins',
        status: 'deleted',
        termination: 'signals dropped'
    },
    {
        key: '4',
        calltype: 'live',
        aparty: '03155123920',
        bparty: '03155123921',
        // date: "12-4-2023",
        duration: '60 mins',
        status: 'inactive',
        termination: 'signals dropped'
    },
];


const Sms = () => {
    const navigate = useNavigate();

    const [filteredInfo, setFilteredInfo] = useState({});
    const [sortedInfo, setSortedInfo] = useState({});
    const handleChange = (pagination, filters, sorter) => {
        console.log('Various parameters', pagination, filters, sorter);
        setFilteredInfo(filters);
        setSortedInfo(sorter);
    };
    const clearFilters = () => {
        setFilteredInfo({});
    };
    const clearAll = () => {
        setFilteredInfo({});
        setSortedInfo({});
    };
    const setAgeSort = () => {
        setSortedInfo({
            order: 'descend',
            columnKey: 'age',
        });
    };
    const columns = [
        {
            title: 'Sr.No',
            dataIndex: 'srno',
            key: 'srno',
        },
        {
            title: 'Count',
            dataIndex: 'count',
            key: 'count',
        },
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
        }

    ];
    return (
        <Fragment>
            <div className="bread-crumb-spacer custom-bread-crumb-box">
                <Breadcrumb className="mb-2">
                    <Breadcrumb.Item onClick={() => navigate('/dashboard')}>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>SMS Details</Breadcrumb.Item>
                </Breadcrumb>
                <h2>SMS Details</h2>
            </div>
            <div className="content-wrapper">
                <Table columns={columns} dataSource={data} onChange={handleChange} />
            </div>
        </Fragment >
    )
}

export default Sms