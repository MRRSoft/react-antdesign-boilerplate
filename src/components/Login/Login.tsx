import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "hooks/reduxHooks";
import { Button, Card, Col, Form, Input, Image, Typography, Row } from "antd";
import { doLogin } from "store/slices/auth.slice";
import { notificationController } from "components/Common/Notification/Notification";

interface LoginFormData {
  username: string;
  password: string;
}

export const Login: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [isLoading, setLoading] = useState(false);

  const handleSubmit = (values: LoginFormData) => {
    setLoading(true);
    dispatch(doLogin(values))
      .unwrap()
      .then((data) => {
        if (data.is_account) {
          navigate("/dashboard");
        } else {
          navigate("/");
        }
      })
      .catch((err) => {
        notificationController.error({ message: err.message });
        setLoading(false);
      });
  };

  return (
    <>
      <Row justify={"center"}>
        <Col span={8}>
          <Card bordered={true}>
            <Row justify={"center"}>
              <Col>
                <Image
                  className="login-card"
                  src="/logo192.png"
                  preview={false}
                />
              </Col>
            </Row>
            <Row justify={"center"}>
              <Col>
                <Typography.Title level={3}>Login</Typography.Title>{" "}
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <Form
                  layout="vertical"
                  name="basic"
                  initialValues={{ remember: true }}
                  onFinish={handleSubmit}
                  autoComplete="off"
                >
                  <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: "Please input your username!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>

                  <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                    ]}
                  >
                    <Input.Password />
                  </Form.Item>

                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      loading={isLoading}
                    >
                      Submit
                    </Button>
                  </Form.Item>
                </Form>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </>
  );
};
