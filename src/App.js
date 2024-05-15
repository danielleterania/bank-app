import "./App.css";
import { useState } from "react";
import data from "./assets/Name-List.json";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ClientPage from "./pages/Clients/Client.page";
import DepositPage from "./pages/Deposit/Deposit.page";
import WithdrawPage from "./pages/Withdraw/Withdraw.page";
import SendMoneyPage from "./pages/SendMoney/SendMoney.page";
import { Layout, notification } from "antd";
import Sidebar from "./layout/Sidebar/Sidebar.component";
import GetBalancePage from "./pages/GetBalance/GetBalance.page";
import BudgetAppPage from "./pages/BudgetApp/BudgetApp.page";

function App() {
  const [clients, setClients] = useState(data);

  // notification api from antd: https://ant.design/components/notification
  // contextHolder is used in the return statement.
  const [api, contextHolder] = notification.useNotification();

  const openNotificationWithIcon = (type) => {
    api[type]({
      message: "Error",
      description: "Client already exists!",
    });
  };

  const handleNewClient = (newClient) => {
    // use .some to check if client.user_name is already added. (returns a boolean: true / false)
    const isUserExisting = clients.some((client) => {
      return client.user_name === newClient.user_name;
    });

    // if isUserExisting is true, return; do not proceed to the next line
    if (isUserExisting === true) {
      openNotificationWithIcon("error");
      return;
    }

    // use .some to check if client.email is already added. (returns a boolean: true / false)
    const isEmailExisting = clients.some((client) => {
      return client.email === newClient.email;
    });

    // if isEmailExisting is true, return; do not proceed to the next line
    if (isEmailExisting === true) {
      openNotificationWithIcon("error");
      return;
    }

    // copy the clients array, then add the newClient from the onAdd ClientPage component
    const newClients = [...clients, newClient];

    // update the clients state
    setClients(newClients);
  };

  const handleDeleteClient = (clientId) => {
    // copy the clients array, used filter to get the clients that does not match the clientId from the onDelete ClientPage component
    const newClients = clients.filter((client) => client.id !== clientId);

    // update the client state
    setClients(newClients);
  };

  const handleDeposit = (user) => {
    // copy the clients array,
    const updatedClients = [...clients];

    // find the index user from the cloned clients array.
    const userIndex = updatedClients.findIndex(
      (client) => client.user_name === user.username
    );

    // using the index update the balance of the user (balance + user.amount from the form)
    updatedClients[userIndex].balance += user.amount;

    // update the client state.
    setClients(updatedClients);
  };

  const handleWithdraw = (user) => {
    // copy the clients array,
    const updatedClients = [...clients];

    // find the index user from the cloned clients array.
    const userIndex = updatedClients.findIndex(
      (client) => client.user_name === user.username
    );

    // using the index update the balance of the user (balance + user.amount from the form)
    updatedClients[userIndex].balance -= user.amount;

    // update the client state.
    setClients(updatedClients);
  };

  const handleAddExpense = (expense) => {
    const updatedClients = [...clients];
    const userIndex = updatedClients.findIndex((client) => client.user_name === expense.client);
    updatedClients[userIndex].balance -= parseFloat(expense.amount);
    setClients(updatedClients);
  };

  return (
    <Layout style={{ height: "100vh" }}>
      {contextHolder}
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route
            index
            element={
              <ClientPage
                clients={clients}
                onDelete={(clientId) => handleDeleteClient(clientId)}
                onAdd={(newClient) => handleNewClient(newClient)}
              />
            }
          />
          <Route
            path="/deposit"
            element={
              <DepositPage clients={clients} onDeposit={handleDeposit} />
            }
          />
          <Route
            path="/withdraw"
            element={
              <WithdrawPage
                clients={clients}
                onWithdraw={(user) => handleWithdraw(user)}
              />
            }
          />
          <Route
            path="/send-money"
            element={<SendMoneyPage clients={clients} setClients={setClients} />}
          />
          <Route
            path="/get-balance"
            element={<GetBalancePage clients={clients} />}
          />
          <Route
            path="/budget-app"
            element={<BudgetAppPage clients={clients} onAddExpense={handleAddExpense} />}
          />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
