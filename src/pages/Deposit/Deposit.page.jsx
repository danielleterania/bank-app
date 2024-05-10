import React from "react";
import PageWrapper from "../../layout/PageWrapper/PageWrapper.component";
import PageHeader from "../../layout/PageHeader/PageHeader.component";
import DepositForm from "./DepositForm/DepositForm.component";
import { notification } from "antd";

function DepositPage(props) {
  const { clients } = props;

  // notification api from antd: https://ant.design/components/notification
  // contextHolder is used in the return statement.
  const [api, contextHolder] = notification.useNotification();

  const getAccount = (values) => {
    const { username, email } = values;

    // .find checks if the inputted username and email is in the clients list
    const account = clients.find(
      (client) => client.user_name === username && client.email === email
    );

    // if no account matches, display error notification then return.
    if (!account) {
      openNotificationWithIcon("error");
      return;
    }

    // if an account is found, display success notification.
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

  // const openNotificationWithIcon = (type) => {
  //   api[type]({
  //     message: 'Notification Title',
  //     description:
  //       'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
  //   });
  // };

  return (
    <PageWrapper>
      {contextHolder}
      <PageHeader title="Deposit" />
      <DepositForm onSubmit={getAccount} />
    </PageWrapper>
  );
}

export default DepositPage;
