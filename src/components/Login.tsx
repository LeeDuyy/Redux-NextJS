/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-html-link-for-pages */
import {
  Form,
  Input,
  Button,
  Checkbox,
  Layout,
  Typography,
  notification,
  Row,
  Col,
  Card,
} from "antd";
import {
  FacebookOutlined,
  GoogleOutlined,
  GithubOutlined,
} from "@ant-design/icons";
import Axios from "axios";
import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const { Content } = Layout;
const { Text } = Typography;
const { Meta } = Card;

const Login = () => {
  const router = useRouter();

  const [getUserName, setUserName] = useState<string>("");
  const [getPassword, setPassword] = useState<string>("");
  const [getRemember, setRemember] = useState<boolean>(false);

  const handleSubmit = async () => {
    await Axios.post("http://localhost:3000/api/user", {
      username: getUserName,
      password: getPassword,
    })
      .then((res) => {
        openNotificationWithIcon(
          res.data.status,
          res.data.title,
          res.data.message
        );
        if (res.data.status === "success") {
          console.log(res.data.authToken);
          if (window) {
            window.localStorage.setItem("token", res.data.authToken);
          }
          router.push("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // const onFinish = (values: any) => {
  //   console.log("Success:", values);
  // };

  // const onFinishFailed = (errorInfo: any) => {
  //   console.log("Failed:", errorInfo);
  // };

  const openNotificationWithIcon = (
    type: string,
    message: string,
    err: string
  ) => {
    if (type == "success" || type == "error")
      notification[type]({ message: message, description: err });
    return;
  };

  return (
    <Layout
      className="site-layout"
      style={{
        height: "100vh",
        background:
          "linear-gradient(to right bottom, #C9DEF4 0%, #EECFD9 100%)",
      }}
    >
      <Content
        className="site-layout-background"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          borderRadius: "20px",
        }}
      >
        <div
          className="body-login d-md-flex align-items-center justify-content-between"
          style={{ borderRadius: "20px" }}
        >
          <div className="box-1-login mt-md-0 mt-5">
            <div className="already">
              <h2>CHƯA CÓ TÀI KHOẢN</h2>
              <Link href={"/register"}>
                <Button
                  type="primary"
                  style={{
                    marginTop: "20px",
                    width: 120,
                    height: 40,
                    background: "white",
                    border: 0,
                    color: "#b9dcf2",
                    fontWeight: "bolder",
                  }}
                  shape="round"
                >
                  Đăng Ký
                </Button>
              </Link>
            </div>
          </div>
          <div className="box-2-login d-flex flex-column h-100">
            <div className="d-flex flex-column align-items-center justify-content-center">
              <div className="login-form">
                <h1 className="text-center" style={{ fontWeight: "bolder" }}>
                  Đăng Nhập
                </h1>
                <Form
                  name="basic"
                  initialValues={{ remember: true }}
                  // onFinish={onFinish}
                  // onFinishFailed={onFinishFailed}
                  autoComplete="off"
                >
                  <Form.Item
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: "Vui lòng nhập tên tài khoản!",
                      },
                    ]}
                  >
                    <Input
                      className="form-item"
                      placeholder="Tên tài khoản"
                      onChange={(e) => setUserName(e.target.value)}
                      // onChange={(e) => {
                      //   setUserName(e.target.value);
                      // }}
                    />
                  </Form.Item>

                  <Form.Item
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Vui lòng nhập mật khẩu!",
                      },
                    ]}
                  >
                    <Input.Password
                      className="form-item"
                      placeholder="Mật Khẩu"
                      onChange={(e) => setPassword(e.target.value)}
                      // onChange={(e) => {
                      //   setPassword(e.target.value);
                      // }}
                    />
                  </Form.Item>

                  <Form.Item valuePropName="checked">
                    <Row>
                      <Col span={12}>
                        <Checkbox>Ghi Nhớ</Checkbox>
                      </Col>
                      <Col span={12}>
                        <a
                          className="login-form-forgot"
                          href="/"
                          style={{
                            color: "#b9dcf2",
                            fontSize: "12px",
                            fontWeight: "bold",
                            float: "right",
                          }}
                        >
                          Quên mật khẩu?
                        </a>
                      </Col>
                    </Row>
                  </Form.Item>

                  <Form.Item>
                    <Button
                      className="btn-login"
                      type="primary"
                      htmlType="submit"
                      style={{
                        width: 120,
                        height: 40,
                        background: "#b9dcf2",
                        border: 0,
                        borderRadius: "20px",
                      }}
                      onClick={() => {
                        handleSubmit();
                      }}
                    >
                      Đặng Nhập
                    </Button>
                  </Form.Item>
                </Form>
                <div className="login-type">
                  <Card.Grid
                    style={{
                      borderRadius: "20px 0 0 20px",
                    }}
                  >
                    <FacebookOutlined />
                  </Card.Grid>
                  <Card.Grid>
                    <GoogleOutlined />
                  </Card.Grid>
                  <Card.Grid
                    style={{
                      borderRadius: "0 20px 20px 0",
                    }}
                  >
                    <GithubOutlined />
                  </Card.Grid>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Content>
    </Layout>
  );
};

export default Login;
