import React from "react";
import PageWrapper from "../../layout/PageWrapper/PageWrapper.component";
import PageHeader from "../../layout/PageHeader/PageHeader.component";
import SendMoneyForm from "./SendMoneyForm/SendMoneyForm.component";
import { notification } from "antd";

function SendMoneyPage(props) {
  const { clients } = props;

  const [api, contextHolder] = notification.useNotification();

  const getAccount = (values) => {
    const { sender, receiver, transferAmount } = values;

    const senderAccount = clients.find((client) => client.user_name === sender);
    const receiverAccount = clients.find((client) => client.user_name === receiver);

    if (!senderAccount || !receiverAccount) {
      openNotificationWithIcon("error", "One or both users do not exist!");
      return;
    }
    
    if (transferAmount <= 0) {
      openNotificationWithIcon("error", "Invalid transfer amount!");
      return;
    }

    if (senderAccount.balance < transferAmount) {
      openNotificationWithIcon("error", "Sender does not have enough balance!");
      return;
    }

    // Perform the money transfer operation here
    
    openNotificationWithIcon("success", "Money transferred successfully!");
  };

  const openNotificationWithIcon = (type, message) => {
    const notificationType = {
      error: api.error,
      success: api.success,
    };

    notificationType[type]({
      message: type.charAt(0).toUpperCase() + type.slice(1),
      description: message,
    });
  };

  return (
    <PageWrapper>
      {contextHolder}
      <PageHeader
        title="Send Money"
        subtitle="Send money to another account using user names."
      />
      <SendMoneyForm onSubmit={getAccount} />
    </PageWrapper>
  );
}

export default SendMoneyPage;
