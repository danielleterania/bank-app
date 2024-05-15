import { Button, Flex, Form, Input, InputNumber, Modal } from "antd";
import React from "react";

function CreateClientModal(props) {
  const { isModalOpen, toggleModal, handleAddClient } = props;

  return (
    <Modal
      title="Create New Client"
      centered
      open={isModalOpen}
      onCancel={toggleModal}
      // footer is set to null to remove the ok/cancel button of the modal
      footer={null}
    >
      {/* parent */}
      <Form
        style={{ padding: "12px 0" }}
        onFinish={(values) => handleAddClient(values)}
      >
        <Flex vertical>
          <Form.Item
            label="Username"
            name="user_name"
            rules={[
              {
                required: true,
                message: "Please input your username!",
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
                type: "email",
                message: "Please input your email!",
              },
            ]}
            style={{ marginBottom: 8 }}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Balance"
            name="balance"
            rules={[
              {
                required: true,
                message: "Please input a number!",
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
    </Modal>
  );
}

export default CreateClientModal;
