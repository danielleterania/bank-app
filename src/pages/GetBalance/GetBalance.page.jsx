import React, { useState } from "react";
import PageWrapper from "../../layout/PageWrapper/PageWrapper.component";
import PageHeader from "../../layout/PageHeader/PageHeader.component";
import GetBalanceForm from "./GetBalanceForm/GetBalanceForm.component";
import Title from "antd/es/typography/Title";
import { Modal, notification } from "antd";
import Paragraph from "antd/es/typography/Paragraph";

function GetBalancePage(props) {
  const { clients } = props;

  // notification api from antd: https://ant.design/components/notification
  // contextHolder is used in the return statement.
  const [api, contextHolder] = notification.useNotification();

  const [account, setAccount] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen((previous) => !previous);

  const getBalance = (values) => {
    // deconstruct the values of the GetBalanceForm
    const { username } = values;

    const currentAccount = clients.find((client) => {
      return client.user_name === username;
    });

    // if no account matches, display error notification then return.
    if (!currentAccount) {
      openNotificationWithIcon("error");
      return;
    }

    // if an account is found, update the account state.
    setAccount(currentAccount);
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
          {/* if account has value, display the user_name & email. -- is not part of the syntax and just a separator */}
          {account?.user_name} -- ({account?.email})
        </Paragraph>
        <Title>${account?.balance}</Title>
      </Modal>
    </PageWrapper>
  );
}

export default GetBalancePage;
