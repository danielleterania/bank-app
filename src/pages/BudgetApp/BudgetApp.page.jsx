import React, { useState } from "react";
import { Button, Dropdown, Menu, Modal, Table, Form, Input } from "antd";

function BudgetAppPage({ clients, onAddExpense }) {
  const [selectedClient, setSelectedClient] = useState(null); //Tracks the currently selected client
  const [isModalOpen, setIsModalOpen] = useState(false); //Controls the visibility of the modal used to add new expenses
  const [expenses, setExpenses] = useState([]); //Stores the list of expenses for the selected client
  const [expenseName, setExpenseName] = useState(""); //Track the input values for new expenses
  const [expenseAmount, setExpenseAmount] = useState(""); //Track the input values for new expenses.

  // function in selecting the client from the dropdown
  const handleClientSelect = (client) => {
    setSelectedClient(client);
    setExpenses([]);
  };

  //function to add an expense and amount from the name of the client currently selected
  const handleAddExpense = () => {
    const newExpense = {
      client: selectedClient.user_name,
      name: expenseName,
      amount: expenseAmount,
    };
    setExpenses([...expenses, newExpense]); //This updates the expenses state by adding the new expense to the existing list of expenses 
    onAddExpense(newExpense); // notify the parent component about the addition of a new expense.
    setExpenseName("");
    setExpenseAmount("");
    setIsModalOpen(false); //for adding new expense and will close after adding an expense
  };

  const handleDeleteExpense = (index) => {
    const updatedExpenses = [...expenses]; //removes the element from the updatedExpenses array
    updatedExpenses.splice(index, 1);
    setExpenses(updatedExpenses);
  };

  //TABLE COMPONENT
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