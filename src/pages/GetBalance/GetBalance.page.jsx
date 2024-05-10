import React, { useState } from "react";
import PageWrapper from "../../layout/PageWrapper/PageWrapper.component";
import PageHeader from "../../layout/PageHeader/PageHeader.component";
import GetBalanceForm from "./GetBalanceForm/GetBalanceForm.component";
import Title from "antd/es/typography/Title";
import { Modal, notification } from "antd";
import Paragraph from "antd/es/typography/Paragraph";

function GetBalancePage(props) {
  const { clients } = props;
  const [api, contextHolder] = notification.useNotification();

  const [account, setAccount] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen((previous) => !previous);

  const getBalance = (values) => {
    // deconstruct username from values of the GetBalanceForm
    const { username } = values;
    const account = clients.find((client) => client.user_name === username);

    // if no account matches, display error notification then return.
    if (!account) {
      openNotificationWithIcon("error");
      return;
    }

    // if an account is found, update the account state.
    setAccount(account);
    // hide the modal.
    toggleModal();
  };

  // ant.design/components/notification

  const openNotificationWithIcon = (type) => {
    api[type]({
      message: "Error!",
      description: "Account name not found. Please check your input.",
    });
  };

  return (
    <PageWrapper>
      {contextHolder}
      <PageHeader title="Get Balance" />

      {/* gets the values from the form, passed into the getBalance function */}
      <GetBalanceForm onSubmit={(values) => getBalance(values)} />

      <Modal
        title="Remaining Balance:"
        open={isModalOpen}
        onCancel={toggleModal}
        footer={null}
      >
        <Paragraph>
          {/* if account has value, display the user_name & email */}
          {account?.user_name} -- ({account?.email})
        </Paragraph>
        <Title>${account?.balance}</Title>
      </Modal>
    </PageWrapper>
  );
}

export default GetBalancePage;
