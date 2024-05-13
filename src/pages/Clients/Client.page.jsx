import React, { useState } from "react";
import PageWrapper from "../../layout/PageWrapper/PageWrapper.component";
import PageHeader from "../../layout/PageHeader/PageHeader.component";
import { Button, Table } from "antd";
import CreateClientModal from "./CreateClientModal/CreateClientModal.component";

function ClientPage(props) {
  //destructure
  const { clients, onDelete, onAdd } = props;

  //close
  const [isModalOpen, setIsModalOpen] = useState(false);

  // negating the previous value
  const toggleModal = () => setIsModalOpen((previous) => !previous);

  const handleAddClient = (record) => {
    // copy the record from the form, then add the id.
    const newRecord = { ...record, id: clients.length + 1 };

    // pass in the newRecord to the onAdd props.
    onAdd(newRecord);
  };

  const handleDelete = (record) => {
    console.log("Record: ", record);
    onDelete(record.id);
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
      render: (_, record) => (
        <Button onClick={() => handleDelete(record)}>Delete</Button>
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
        handleAddClient={handleAddClient}
      />
    </PageWrapper>
  );
}

export default ClientPage;