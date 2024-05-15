import React from "react";
import PageWrapper from "../../layout/PageWrapper/PageWrapper.component";
import PageHeader from "../../layout/PageHeader/PageHeader.component";
import WithdrawForm from "./WithdrawForm/WithdrawForm.component";
import { notification } from "antd";

function WithdrawPage(props) {
  const { clients, onWithdraw } = props;

  // notification api from antd: https://ant.design/components/notification
  // contextHolder is used in the return statement.
  const [api, contextHolder] = notification.useNotification();

  const getAccount = (values) => {
    // deconstruct the values from the DepositForm
    const { username, email, amount } = values;

    // .find checks if the inputted username and email is in the clients list
    const account = clients.find((client) => {
      return client.user_name === username && client.email === email;
    });

    // if no account matches, display error notification then return.
    if (!account) {
      openNotificationWithIcon("error", "User not Found!");
      return;
    }

    if (amount > account.balance) {
      openNotificationWithIcon("error", "Insufficient Balance!");
      return;
    }

    onWithdraw(values);

    // if an account is found, display success notification.
    openNotificationWithIcon("success", "Withdrawal Successful!");
  };

  const openNotificationWithIcon = (type, message) => {
    api[type]({
      message: type,
      description: message,
    });
  };

  return (
    <PageWrapper>
      {contextHolder}
      <PageHeader title="Withdraw" />
      <WithdrawForm onSubmit={getAccount} />
    </PageWrapper>
  );
}

export default WithdrawPage;
