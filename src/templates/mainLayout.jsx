import React, { Fragment } from 'react';
import { Layout } from 'antd';
import SiteHeader from './siteHeader';
import SideBar from './sideBar';


const { Content } = Layout;
const MainLayout = ({ children }) => {
    return (
        <Fragment>
            <Layout className="section-bg-white">
                <SiteHeader />
                <Layout className="section-bg-white fixed-layout-wrapper">
                    <SideBar />
                    <Content className=" fixed-content-ml">
                        <main className="custom-container">{children}</main>
                    </Content>
                </Layout>
            </Layout>
        </Fragment>
    )
}

export default MainLayout;