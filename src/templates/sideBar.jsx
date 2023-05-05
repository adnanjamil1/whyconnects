import { AppstoreOutlined, MailOutlined, CalendarOutlined, SettingOutlined, LinkOutlined } from '@ant-design/icons';
import { Divider, Menu, Switch } from 'antd';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";



function getItem(label, key, icon, children, path) {
    return {
        key,
        icon,
        children,
        label,
        path
    };
}

let mainPath = "/wiconnect-portal"
const items = [

    getItem('Statistics', '1', <MailOutlined />, null, mainPath + "/dashboard"),

    getItem('Subscriber', '2', <MailOutlined />, null, mainPath + "/subscribers"),

    getItem('Call Reports', 'sub1', <AppstoreOutlined />, [
        getItem('Daily Report', '3', null, null, mainPath + "/call_daily_report"),
        getItem('Hourly Report', '4', null, null, mainPath + "/call_hourly_report"),
        getItem('Call Detail Report', '5', null, null, mainPath + "/call_detail_report"),
    ]),
    getItem('SMS Reports', 'sub2', <SettingOutlined />, [
        getItem('Daily Report', '6', null, null, mainPath + "/sms_daily_report"),
        getItem('Detail Report', '7', null, null, mainPath + "/sms_detail_report"),

    ]),


];
const App = () => {
    const [mode, setMode] = useState('inline');
    const [theme, setTheme] = useState('light');
    const changeMode = (value) => {
        setMode(value ? 'vertical' : 'inline');
    };
    const changeTheme = (value) => {
        setTheme(value ? 'dark' : 'light');
    };

    const navigate = useNavigate()
    return (
        <>

            <Menu
                style={{
                    width: 200,
                }}
                defaultSelectedKeys={['1']}
                // defaultOpenKeys={['sub1']}
                mode={mode}
                theme={theme}
                items={items}
                className={"aside-bar-nav"}
                onClick={(e) => {
                    navigate(e.item.props.path)
                }}
            />
        </>
    );
};
export default App;