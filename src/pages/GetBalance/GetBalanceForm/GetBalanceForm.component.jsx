import { Button, Flex, Form, Input } from "antd";
import React from "react";

function GetBalanceForm(props) {
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
              message: "Please input Username!",
            },
          ]}
          style={{ marginBottom: 8 }}
        >
          <Input />
        </Form.Item>
      </Flex>

      <Button type="primary" htmlType="submit">
        Get Balance
      </Button>
    </Form>
  );
}

export default GetBalanceForm;