import Captcha from "../Captcha/Captcha";
import { Button, Form, Input, Space } from "antd";
import { useAuthLoginMutation } from "../../reducer/apis/Auth";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import AppPaths from "../../constant/AppPaths";
import { NavigateFunction } from "react-router-dom";
const Auth = () => {
  const [form] = Form.useForm();
  const [login] = useAuthLoginMutation();
  const [clientReady, setClientReady] = useState<boolean>(false);
  const handleOnSuccess = (navigate?: NavigateFunction, data?: any) => {
    navigate?.(AppPaths.LOGIN_2FA);
  };
  // To disable submit button at the beginning.
  useEffect(() => {
    setClientReady(true);
  }, []);
  const handleLogin = () => {
    login(form.getFieldsValue())
      .unwrap()
      .then(() => {
        handleOnSuccess();
      })
      .catch(() => {});
  };
  return (
    <>
      <Form
        form={form}
        name="validateOnly"
        layout="vertical"
        autoComplete="off"
        onFinish={handleLogin}
      >
        {/* <Form.Item>
          <img src='' />
        </Form.Item> */}
        <Form.Item
          name="loginCode"
          label="Login Code"
          rules={[{ required: true }]}
        >
          <Input placeholder="Enter the entity code" />
        </Form.Item>
        <Form.Item
          name="username"
          label="Username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input prefix={<UserOutlined />} placeholder="Enter the username" />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password
            prefix={<LockOutlined />}
            placeholder="Enter the password"
          />
        </Form.Item>

        <Form.Item rules={[{ required: true }]}>
          <Captcha />
        </Form.Item>
        <Form.Item shouldUpdate>
          {() => (
            <Button
              type="primary"
              htmlType="submit"
              style={{ width: "100%" }}
              disabled={
                !clientReady ||
                !form.isFieldsTouched(true) ||
                !!form.getFieldsError().filter(({ errors }) => errors.length)
                  .length
              }
            >
              Log in
            </Button>
          )}
        </Form.Item>
      </Form>
    </>
  );
};

export default Auth;
