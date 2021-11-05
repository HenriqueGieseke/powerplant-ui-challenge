import React, { useState } from 'react';
import ClientCard from '../../components/ClientCard';
import { Button, ClientsContainer, Main } from './styles';
import { data } from './data';
import { data as energyData } from '../Powerplant/data';
import { financialReturn } from '../../helpers/financialReturn';
import CreateClient from '../../components/CreateClient';
import EditClient from '../../components/EditClient';
import DeleteBox from '../../components/DeleteBox';

interface ClientData {
  nomeCliente: string;
  numeroCliente: number;
  usinas: PowerPlant[];
}

interface PowerPlant {
  usinaId: number;
  percentualDeParticipacao: number;
}

const Clients: React.FC = () => {
  const [clientsData, setClientData] = useState(data);
  const [selectedClient, setSelectedClient] = useState({});
  const [powerPlantData] = useState(energyData);
  const [calculatedData] = useState(financialReturn(powerPlantData));

  const [createModalVisibility, setCreateModalVisibility] = useState(false);
  const [editModalVisibility, setEditModalVisibility] = useState(false);
  const [deleteModalVisibility, setDeleteModalVisibility] = useState(false);

  const handleSubmitClient = (newClient: ClientData) => {
    setClientData([...clientsData, newClient]);
  };

  const handleClickEdit = (client: ClientData) => {
    setSelectedClient(client);
    setEditModalVisibility(true);
  };

  const handleEditClient = (clientData: ClientData) => {
    setClientData(
      clientsData.map((obj) =>
        obj.numeroCliente === clientData.numeroCliente ? { ...clientData } : obj
      )
    );
  };

  const handleClickDelete = (client: ClientData) => {
    setSelectedClient(client);
    setDeleteModalVisibility(true);
  };

  const handleDeleteClient = (object: ClientData) => {
    const index = clientsData.indexOf(object);
    if (index > -1) {
      clientsData.splice(index, 1);
      setClientData(clientsData);
    }
  };

  const handleOpenDeleteClient = () => {
    setDeleteModalVisibility(!deleteModalVisibility);
  };

  const handleOpenCreateClient = () => {
    setCreateModalVisibility(!createModalVisibility);
  };

  const handleOpenEditClient = () => {
    setEditModalVisibility(!editModalVisibility);
  };

  return (
    <Main>
      <Button
        onClick={() => {
          handleOpenCreateClient();
        }}
      >
        Novo Cliente
      </Button>
      <ClientsContainer>
        {clientsData.map((item) => {
          return (
            <ClientCard
              key={item.numeroCliente}
              clientData={item}
              financialData={calculatedData}
              editClient={handleClickEdit}
              deleteClient={handleClickDelete}
            />
          );
        })}
      </ClientsContainer>
      {createModalVisibility && (
        <CreateClient
          closeModal={handleOpenCreateClient}
          createFunction={handleSubmitClient}
        />
      )}
      {editModalVisibility && (
        <EditClient
          closeModal={handleOpenEditClient}
          createFunction={handleEditClient}
          clientData={selectedClient}
        />
      )}
      {deleteModalVisibility && (
        <DeleteBox
          closeModal={handleOpenDeleteClient}
          handleDelete={handleDeleteClient}
          clientData={selectedClient}
        />
      )}
    </Main>
  );
};

export default Clients;
