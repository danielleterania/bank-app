import "./App.css";
import { useState } from "react";
import data from "./assets/Name-List.json";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ClientPage from "./pages/Clients/Client.page";
import DepositPage from "./pages/Deposit/Deposit.page";
import WithdrawPage from "./pages/Withdraw/Withdraw.page";
import SendMoneyPage from "./pages/SendMoney/SendMoney.page";
import { Layout } from "antd";
import Sidebar from "./layout/Sidebar/Sidebar.component";
import GetBalancePage from "./pages/GetBalance/GetBalance.page";
import BudgetAppPage from "./pages/BudgetApp/BudgetApp.page";

function App() {
  const [clients, setClients] = useState(data);

  const handleNewClient = (newClient) => {
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

  return (
    <Layout style={{ height: "100vh" }}>
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route
            index
            element={
              <ClientPage
                clients={clients}
                onDelete={handleDeleteClient}
                onAdd={handleNewClient}
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
            element={<WithdrawPage clients={clients} />}
          />
          <Route
            path="/send-money"
            ndex
            element={<SendMoneyPage clients={clients} />}
          />
          <Route
            path="/get-balance"
            element={<GetBalancePage clients={clients} />}
          />
          <Route
            path="/budget-app"
            element={<BudgetAppPage clients={clients} />}
          />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
