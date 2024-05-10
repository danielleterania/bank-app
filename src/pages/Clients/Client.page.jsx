import React, { useState } from "react";
import PageWrapper from "../../layout/PageWrapper/PageWrapper.component";
import PageHeader from "../../layout/PageHeader/PageHeader.component";
import { Button } from "antd";
import CreateClientModal from "./CreateClientModal/CreateClientModal.component";

function ClientPage(props) {
  //destructure
  const { clients } = props;

  //close
  const [isModalOpen, setIsModalOpen] = useState(false);

  // negating the previous value
  const toggleModal = () => setIsModalOpen((previous) => !previous);

  return (
    <PageWrapper>
      <PageHeader
        title="Clients"
        subtitle={`${clients.length} Active Clients`}
        action={<Button onClick={toggleModal}>Create Client</Button>}
      />
      <CreateClientModal isModalOpen={isModalOpen} toggleModal={toggleModal} />
    </PageWrapper>
  );
}

export default ClientPage;
