import React from "react";
import PageWrapper from "../../layout/PageWrapper/PageWrapper.component";
import PageHeader from "../../layout/PageHeader/PageHeader.component";
import SendMoneyForm from "./SendMoneyForm/SendMoneyForm.component";
import { notification } from "antd";

function SendMoneyPage(props) {
  const { clients } = props;

  const [api, contextHolder] = notification.useNotification();

  const getAccount = (value) => {
    const { username, email, amount } = value;

    const account = clients.find(
      (client) => client.user_name === username && client.email === email
    );

    if (!account) {
      openNotificationWithIcon("error");
      return;
    }
    if (amount > account.balance) {
      openNotificationWithIcon("error");
      return;
    }

    openNotificationWithIcon("success");
  };

  const openNotificationWithIcon = (type) => {
    const message = {
      error: {
        title: "Error!",
        description: "Error Message",
      },
      success: {
        title: "Success!",
        description: "Success Message",
      },
    };
    api[type]({
      message: message[type].title,
      description: message[type].description,
    });
  };

  return (
    <PageWrapper>
      {contextHolder}
      <PageHeader
        title="Send Money"
        subtitle="Send money to another account."
      />
      <SendMoneyForm onSubmit={getAccount} />
    </PageWrapper>
  );
}

export default SendMoneyPage;
