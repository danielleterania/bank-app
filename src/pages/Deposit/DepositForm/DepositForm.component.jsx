import { Button, Flex, Form, Input, InputNumber } from "antd";
import React from "react";

function DepositForm(props) {
  const { onSubmit } = props;

  // Function to handle key down event
  const handleKeyDown = (event) => {
    if (event.key === "e") {
      event.preventDefault(); // Prevent typing "e" into the input box
    }
  };

  return (
    <Form
      name="basic"
      layout="vertical"
      onFinish={(values) => onSubmit(values)}
    >
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
              type: "number",
              min: 0,
              message: "Please input a positive amount!",
            },
          ]}
        >
          {/* Add onKeyDown event handler to prevent typing "e" */}
          <InputNumber onKeyDown={handleKeyDown} />
        </Form.Item>
      </Flex>

      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form>
  );
}

export default DepositForm;
