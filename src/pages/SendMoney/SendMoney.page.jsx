import React from "react";
import PageWrapper from "../../layout/PageWrapper/PageWrapper.component";
import PageHeader from "../../layout/PageHeader/PageHeader.component";
import SendMoneyForm from "./SendMoneyForm/SendMoneyForm.component";
import { notification } from "antd";

function SendMoneyPage(props) {
  const { clients, setClients } = props;

  const [api, contextHolder] = notification.useNotification();

  const getAccount = (values) => {
    const { sender, receiver, transferAmount } = values;
    const amount = parseFloat(transferAmount); // Convert to a number

    const senderAccount = clients.find((client) => client.user_name === sender);
    const receiverAccount = clients.find((client) => client.user_name === receiver);

    if (!senderAccount || !receiverAccount) {
      openNotificationWithIcon("error", "One or both users do not exist!");
      return;
    }

    if (amount <= 0) {
      openNotificationWithIcon("error", "Invalid transfer amount!");
      return;
    }

    if (senderAccount.balance < amount) {
      openNotificationWithIcon("error", "Sender does not have enough balance!");
      return;
    }

    // Perform the money transfer operation here
    const updatedClients = clients.map((client) => {
      if (client.user_name === sender) {
        return { ...client, balance: client.balance - amount };
      }
      if (client.user_name === receiver) {
        return { ...client, balance: client.balance + amount };
      }
      return client;
    });

    setClients(updatedClients);

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