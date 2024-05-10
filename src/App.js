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
    setClients((previousClients) => [...previousClients, newClient]);
  };

  const handleDeleteClient = (clientId) => {
    setClients((previousClients) =>
      previousClients.filter((user) => user.id !== clientId)
    );
  };

  return (
    <Layout style={{ height: "100vh" }}>
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route index element={<ClientPage clients={clients} />} />
          <Route path="/deposit" element={<DepositPage clients={clients} />} />
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
