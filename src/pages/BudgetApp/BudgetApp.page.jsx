import React, { useState, useEffect } from "react";
import { Button, Dropdown, Menu, Modal, Table, Form, Input } from "antd";

function BudgetAppPage({ clients, onAddExpense }) {
  const [selectedClient, setSelectedClient] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expenses, setExpenses] = useState([]);
  const [expenseName, setExpenseName] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");
  const [currentBalance, setCurrentBalance] = useState(0);
  const [totalExpenses, setTotalExpenses] = useState(0);

  useEffect(() => {
    if (selectedClient) {
      setCurrentBalance(selectedClient.balance);
    }
  }, [selectedClient]);

  useEffect(() => {
    let total = 0;
    expenses.forEach((expense) => {
      total += parseFloat(expense.amount);
    });
    setTotalExpenses(total);
  }, [expenses]);

  const handleClientSelect = (client) => {
    setSelectedClient(client);
    setExpenses([]);
  };

  const handleAddExpense = () => {
    const newExpense = {
      client: selectedClient.user_name,
      name: expenseName,
      amount: expenseAmount,
    };
    setExpenses([...expenses, newExpense]);
    onAddExpense(newExpense);
    setExpenseName("");
    setExpenseAmount("");
    setIsModalOpen(false);
  };

  const handleDeleteExpense = (index) => {
    const updatedExpenses = [...expenses];
    updatedExpenses.splice(index, 1);
    setExpenses(updatedExpenses);
  };

  const columns = [
    {
      title: "Expense Name",
      dataIndex: "name",
      key: "name",
      align: "center",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      align: "center",
    },
    {
      title: "Actions",
      key: "actions",
      align: "center",
      render: (_, record, index) => (
        <Button onClick={() => handleDeleteExpense(index)}>Delete</Button>
      ),
    },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px", padding: "20px", width: "100vw" }}>
      <div style={{ backgroundColor: "#081734", color: "#FFFFFF" ,padding: "20px", borderRadius: "10px", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)", textAlign: "center" }}>
        <p style={{ marginBottom: "10px", fontWeight: "bold" }}>Current Balance: {currentBalance}</p>
        <p style={{ marginBottom: "10px", fontWeight: "bold" }}>Total Expenses: {totalExpenses}</p>
        <p style={{ marginBottom: "10px", fontWeight: "bold" }}>Updated Balance: {currentBalance - totalExpenses}</p>
      </div>
      <div style={{ backgroundColor: "#ffffff", padding: "20px", borderRadius: "10px", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", textAlign: "center" }}>
        <Dropdown
          overlay={
            <Menu>
              {clients.map((client) => (
                <Menu.Item
                  key={client.id}
                  onClick={() => handleClientSelect(client)}
                >
                  {client.user_name}
                </Menu.Item>
              ))}
            </Menu>
          }
        >
          <Button>Select Client</Button>
        </Dropdown>
        {selectedClient && (
          <>
            <h2 style={{ marginBottom: "10px" }}>{selectedClient.user_name}'s Expenses</h2>
            <Table columns={columns} dataSource={expenses} pagination={false} />
            <Button onClick={() => setIsModalOpen(true)}>Add Expense</Button>
          </>
        )}
        <Modal
          title="Add Expense"
          visible={isModalOpen}
          onCancel={() => setIsModalOpen(false)}
          footer={[
            <Button key="cancel" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>,
            <Button key="submit" type="primary" onClick={handleAddExpense}>
              Add Expense
            </Button>,
          ]}
        >
          <Form layout="vertical">
            <Form.Item label="Expense Name">
              <Input
                value={expenseName}
                onChange={(e) => setExpenseName(e.target.value)}
              />
            </Form.Item>
            <Form.Item label="Amount">
              <Input
                value={expenseAmount}
                onChange={(e) => setExpenseAmount(e.target.value)}
              />
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </div>
  );
}

export default BudgetAppPage;