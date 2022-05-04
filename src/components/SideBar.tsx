/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { Layout, Menu } from "antd";
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from "@ant-design/icons";
import { useEffect, useState } from "react";
import React from "react";
import Image from "next/image";

const { Header, Sider, Content } = Layout;

const SideBar = () => {
    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [noti, setNoti] = useState<string>("")
    const [collapsed, setCollapsed] = useState<boolean>(false);

    const toggle = () => {
        setCollapsed(!collapsed);
    };

    const onClickBtn = () => {
        console.log(username)
        console.log(password)

        setNoti("login oke")
        console.log(noti)
    }

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
                <form onSubmit={onClickBtn} >
                    <input type="text" onChange={(e) => setUsername(e.target.value)}/>
                    <input type="password" onChange={(e) => setPassword(e.target.value)}/>
                    <button type="submit">dang nhap</button>
                </form>
                    <p>{noti}</p>
            </div>
            <Menu
                className="side_bar_items"
                theme="light"
                mode="inline"
                defaultSelectedKeys={["1"]}
                items={[
                    {
                        key: "1",
                        icon: <UserOutlined />,
                        label: "nav 1",
                    },
                    {
                        key: "2",
                        icon: <VideoCameraOutlined />,
                        label: "nav 2",
                    },
                    {
                        key: "3",
                        icon: <UploadOutlined />,
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