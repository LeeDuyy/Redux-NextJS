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

const { Content } = Layout;
const { Text } = Typography;
const { Meta } = Card;

const Register = () => {
  const router = useRouter();

  const [getUserName, setUserName] = useState<string>("");
  const [getGmail, setGmail] = useState<string>("");
  const [getPhoneNumber, setPhoneNumber] = useState<string>("");
  const [getPassword, setPassword] = useState<string>("");
  const [getRePassword, setRePassword] = useState<string>("");
  const [getBirthday, setBirthday] = useState<string>("");
  const [getRemember, setRemember] = useState<boolean>(false);

  const handleSubmit = async () => {
    await Axios.post("http://localhost:3000/api/register", {
      username: getUserName,
      gmail: getGmail,
      phonenumber: getPhoneNumber,
      password: getPassword,
      birthday: getBirthday,
    })
      .then((res) => {
        openNotificationWithIcon(
          res.data.status,
          res.data.title,
          res.data.message
        );
        if (res.data.status === "success") {
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
          className="body-resister d-md-flex align-items-center justify-content-between"
          style={{ borderRadius: "20px" }}
        >
          <div className="box-2 d-flex flex-column h-100">
            <div className="d-flex flex-column align-items-center justify-content-center">
              <div className="register-form">
                <h1 className="text-center" style={{ fontWeight: "bolder" }}>
                  Đăng Ký
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
                    label=""
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
                    />
                  </Form.Item>
                  <Form.Item
                    name="gmail"
                    label=""
                    rules={[
                      {
                        required: true,
                        message: "Vui lòng nhập tài khoản gmail!",
                      },
                    ]}
                  >
                    <Input
                      className="form-item"
                      placeholder="Tài khoản gmail"
                      onChange={(e) => setGmail(e.target.value)}
                    />
                  </Form.Item>
                  <Form.Item
                    name="birthday"
                    label=""
                    rules={[
                      {
                        required: true,
                        message: "Vui lòng nhập ngày sinh!",
                      },
                    ]}
                  >
                    <Input
                      className="form-item"
                      placeholder="Ngày sinh"
                      onChange={(e) => setBirthday(e.target.value)}
                    />
                  </Form.Item>
                  <Form.Item
                    name="phonenumber"
                    label=""
                    rules={[
                      {
                        required: true,
                        message: "Vui lòng nhập số điện thoại!",
                      },
                    ]}
                  >
                    <Input
                      className="form-item"
                      placeholder="Số điện thoại"
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </Form.Item>
                  <Form.Item
                    name="password"
                    label=""
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
                  <Form.Item
                    name="re-password"
                    label=""
                    rules={[
                      {
                        required: true,
                        message: "Vui lòng nhập lại mật khẩu!",
                      },
                    ]}
                  >
                    <Input.Password
                      className="form-item"
                      placeholder="Nhập lại mật Khẩu"
                      onChange={(e) => setRePassword(e.target.value)}
                      // onChange={(e) => {
                      //   setPassword(e.target.value);
                      // }}
                    />
                  </Form.Item>

                  <Form.Item>
                    <Button
                      className="btn-register"
                      type="primary"
                      htmlType="submit"
                      style={{
                        marginTop: "20px",
                        width: 120,
                        height: 40,
                        background: "#b9dcf2",
                        border: 0,
                        borderRadius: "20px",
                      }}
                      onClick={() => {
                        if (getPassword !== getRePassword) {
                          openNotificationWithIcon(
                            "error",
                            "Lỗi",
                            "Mật khẩu không khớp!"
                          );
                        } else {
                          handleSubmit();
                        }
                      }}
                    >
                      Đăng Ký
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </div>
          </div>
          <div className="box-1 mt-md-0 mt-5">
            <img src="/Assets/images/login-side-3.png" />
          </div>
        </div>
      </Content>
    </Layout>
  );
};

export default Register;
