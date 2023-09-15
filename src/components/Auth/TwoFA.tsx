import Captcha from "../Captcha/Captcha";
import { Button, Form, Input, Space } from "antd";
import { useTwoFAMutation } from "../../reducer/apis/Auth";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";

const twoFA = () => {
  const [formFA] = Form.useForm();
  const [twoFA] = useTwoFAMutation();
  const [clientReady, setClientReady] = useState<boolean>(false);

  // To disable submit button at the beginning.
  useEffect(() => {
    setClientReady(true);
  }, []);
  const handleTwoFa = () => {
    twoFA(formFA.getFieldsValue())
      .unwrap()
      .then(() => {})
      .catch(() => {});
  };
  return (
    <>
      <Form
        form={formFA}
        name="validateOnly"
        layout="vertical"
        autoComplete="off"
        onFinish={handleTwoFa}
      >
        {/* <Form.Item>
          <img src='' />
        </Form.Item> */}
        <Form.Item name="otp" rules={[{ required: true }]}>
          <Input placeholder="Authencation Code" />
        </Form.Item>

        <Form.Item shouldUpdate>
          {() => (
            <Button
              type="primary"
              htmlType="submit"
              style={{ width: "100%" }}
              disabled={
                !clientReady ||
                !formFA.isFieldsTouched(true) ||
                !!formFA.getFieldsError().filter(({ errors }) => errors.length)
                  .length
              }
            >
              Confirm
            </Button>
          )}
        </Form.Item>
      </Form>
    </>
  );
};

export default twoFA;
