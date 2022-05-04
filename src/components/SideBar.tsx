/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { Layout, Menu } from "antd";
import { FolderOutlined } from "@ant-design/icons";
import { useState } from "react";
import React from "react";

const { Header, Sider, Content } = Layout;

const SideBar = () => {
    const [collapsed, setCollapsed] = useState<boolean>(false);

    const toggle = () => {
        setCollapsed(!collapsed);
    };

    return (
        <Sider className="sider side_bar_wrapper" width={"23%"} theme="light" trigger={null} collapsible collapsed={collapsed}>
            <div className="top_side">
                <div className="top_side_info">
                    <div className="image_container">
                        <img src="/assets/images/Logo.png" />
                    </div>
                    <div className="top_side_info_name">
                        <span>ADMIN</span>
                    </div>
                </div>
                <div className="top_side_activity">
                    <div className="top_side_activity_item">
                        <div className="top_side_activity_item_count">0</div>
                        <div className="top_side_activity_item_title">Todo Tasks</div>
                    </div>
                    <div className="top_side_activity_item">
                        <div className="top_side_activity_item_count">0</div>
                        <div className="top_side_activity_item_title">Completed Tasks</div>
                    </div>
                    <div className="top_side_activity_item">
                        <div className="top_side_activity_item_count">0</div>
                        <div className="top_side_activity_item_title">Delay Tasks</div>
                    </div>
                </div>
            </div>
            <div className="title_side_bar">
                Groups TODO
            </div>
            <Menu
                className="side_bar_items"
                theme="light"
                mode="inline"
                defaultSelectedKeys={["1"]}
                items={[
                    {
                        key: "1",
                        icon: <FolderOutlined />,
                        label: "nav 1",
                    },
                    {
                        key: "2",
                        icon: <FolderOutlined />,
                        label: "nav 2",
                    },
                    {
                        key: "3",
                        icon: <FolderOutlined />,
                        label: "nav 3",
                    },
                ]}
            />
        </Sider>
        // <Layout className="side_bar_wrapper">
        //     <Sider className="sider" trigger={null} collapsible collapsed={collapsed}>
        //         <div className="logo">

        //         </div>
        //         <Menu
        //             theme="light"
        //             mode="inline"
        //             defaultSelectedKeys={["1"]}
        //             items={[
        //                 {
        //                     key: "1",
        //                     icon: <UserOutlined />,
        //                     label: "nav 1",
        //                 },
        //                 {
        //                     key: "2",
        //                     icon: <VideoCameraOutlined />,
        //                     label: "nav 2",
        //                 },
        //                 {
        //                     key: "3",
        //                     icon: <UploadOutlined />,
        //                     label: "nav 3",
        //                 },
        //             ]}
        //         />
        //     </Sider>
        //     <Layout className="site-layout">
        //         <Header className="site-layout-background" style={{ padding: 0 }}>
        //             {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        //                 className: "trigger",
        //                 onClick: toggle,
        //             })}
        //         </Header>
        //     </Layout>
        // </Layout>
    );

};

export default SideBar;
