import { Button, Flex, Form, Input, Modal } from "antd";
import React from "react";

function CreateClientModal({ isModalOpen, toggleModal }) {
  // const { isModalOpen, toggleModal } = props;

  console.log("IS MODAL OPEN: ", isModalOpen);

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
        onFinish={(values) => console.log(values)}
      >
        <Flex vertical>
          {/*  */}
          <Form.Item
            label="Username"
            name="username"
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
                message: "Please input your password!",
              },
            ]}
          >
            <Input />
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
