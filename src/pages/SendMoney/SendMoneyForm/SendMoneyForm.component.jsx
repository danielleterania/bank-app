import { Button, Flex, Form, Input, InputNumber} from "antd";
import React from "react";

function SendMoneyForm(props) {
  const { onSubmit } = props;

  const handleOnSubmit = (values) => onSubmit(values);

  return (
    <Form name="basic" layout="vertical" onFinish={handleOnSubmit}>
      <Flex vertical>
        <Form.Item
          label="Sender (Username)"
          name="sender"
          rules={[
            {
              required: true,
              message: "Please input sender's username!",
            },
          ]}
          style={{ marginBottom: 8 }}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Receiver (Username)"
          name="receiver"
          rules={[
            {
              required: true,
              message: "Please input receiver's username!",
            },
          ]}
          style={{ marginBottom: 8 }}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Transfer Amount"
          name="transferAmount"
          rules={[
            {
              required: true,
              message: "Please input the transfer amount!",
            },
          ]}
        >
          <InputNumber min={0} style={{ width: '100%' }} />
        </Form.Item>
      </Flex>

      <Button type="primary" htmlType="submit">
        Send Money
      </Button>
    </Form>
  );
}

export default SendMoneyForm;