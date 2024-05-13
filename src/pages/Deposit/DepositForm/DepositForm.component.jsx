import { Button, Flex, Form, Input, InputNumber } from "antd";
import React from "react";

function DepositForm(props) {
  const { onSubmit } = props;

  const handleOnSubmit = (values) => onSubmit(values);

  return (
    <Form name="basic" layout="vertical" onFinish={handleOnSubmit}>
      <Flex vertical>
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input username!",
            },
          ]}
          style={{ marginBottom: 8 }}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input email!",
            },
          ]}
          style={{ marginBottom: 8 }}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Amount"
          name="amount"
          rules={[
            {
              required: true,
              message: "Please input your amount to trasfer!",
            },
          ]}
        >
          <InputNumber />
        </Form.Item>
      </Flex>

      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form>
  );
}

export default DepositForm;
