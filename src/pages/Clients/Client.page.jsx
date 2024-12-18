import React, { useState } from "react";
import PageWrapper from "../../layout/PageWrapper/PageWrapper.component";
import PageHeader from "../../layout/PageHeader/PageHeader.component";
import { Button, Table } from "antd";
import CreateClientModal from "./CreateClientModal/CreateClientModal.component";

function ClientPage(props) {
  // Destructure of the props
  const { clients, onDelete, onAdd } = props;

  // Modal state, defaults to false
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Negating the previous value
  const toggleModal = () => setIsModalOpen((previous) => !previous);

  const handleAddClient = (record) => {
    // Copy the record from the form, then add the id.
    const newClient = { ...record, id: clients.length + 1 };

    // Pass in the newRecord to the onAdd props.
    onAdd(newClient);
  };

  // record is used to be able to access record.id
  const handleDelete = (clientId) => {
    onDelete(clientId);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "user_name",
      key: "user_name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Balance",
      dataIndex: "balance",
      key: "balance",
    },
    {
      title: "Delete",
      dataIndex: "delete",
      key: "delete",
      // record is a variable to access the properties of your dataSource (clients)
      render: (_, record) => (
        <Button onClick={() => handleDelete(record.id)}>Delete</Button>
      ),
    },
  ];

  return (
    <PageWrapper>
      <PageHeader
        title="Clients"
        subtitle={`${clients.length} Active Clients`}
        action={<Button onClick={toggleModal}>Create Client</Button>}
      />
      <Table columns={columns} dataSource={clients} />
      <CreateClientModal
        isModalOpen={isModalOpen}
        toggleModal={toggleModal}
        handleAddClient={(values) => handleAddClient(values)}
      />
    </PageWrapper>
  );
}

export default ClientPage;
