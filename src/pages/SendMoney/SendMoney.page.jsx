import React, { useState } from "react";
import PageWrapper from "../../layout/PageWrapper/PageWrapper.component";
import PageHeader from "../../layout/PageHeader/PageHeader.component";
import SendMoneyForm from "./SendMoneyForm/SendMoneyForm.component";
import { notification, Table } from "antd";

function SendMoneyPage(props) {
  const { clients, setClients } = props;

  const [api, contextHolder] = notification.useNotification();
  const [transactionHistory, setTransactionHistory] = useState([]);

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

    // Add the transaction to the history
    const transaction = {
      date: new Date().toLocaleString(),
      sender: sender,
      receiver: receiver,
      amount: amount,
    };

    setTransactionHistory([...transactionHistory, transaction]);

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

  const columns = [
    {
      title: "Transaction Date and Time",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Sender Name",
      dataIndex: "sender",
      key: "sender",
    },
    {
      title: "Receiver Name",
      dataIndex: "receiver",
      key: "receiver",
    },
    {
      title: "Transfer Amount",
      dataIndex: "amount",
      key: "amount",
    },
  ];

  return (
    <PageWrapper>
      {contextHolder}
      <PageHeader
        title="Send Money"
        subtitle="Send money to another account using user names."
      />
      <SendMoneyForm onSubmit={getAccount} />

      <div style={{ marginTop: "20px" }}>
        <h3>Transaction History</h3>
        <Table dataSource={transactionHistory} columns={columns} />
      </div>
      
    </PageWrapper>
  );
}

export default SendMoneyPage;