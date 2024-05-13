import React, { useState } from "react";
import { Button, Dropdown, Menu, Modal, Table, Form, Input } from "antd";

function BudgetAppPage({ clients }) {
  const [selectedClient, setSelectedClient] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expenses, setExpenses] = useState([]);
  const [expenseName, setExpenseName] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");

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
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record, index) => (
        <Button onClick={() => handleDeleteExpense(index)}>Delete</Button>
      ),
    },
  ];

  return (
    <>
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
          <h2>{selectedClient.user_name}'s Expenses</h2>
          <Table columns={columns} dataSource={expenses} />
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
    </>
  );
}

export default BudgetAppPage;