import React from 'react';
import { formatToBRLCurrency } from '../../helpers/formatToBRLCurrency';
import { ButtonsWrapper, CardButton, ClientBox, InfoWrapper } from './styles';
import editIcon from '../../assets/edit-icon.svg';
import deleteIcon from '../../assets/delete-icon.svg';

interface ClientData {
  clientData: {
    numeroCliente: number;
    nomeCliente: string;
    usinas: PowerPlant[];
  };
}

interface PowerPlant {
  usinaId: number;
  percentualDeParticipacao: number;
}

interface CalculatedData {
  financialData: {
    potencyByHour: number;
    totalRevenue: number;
  };
}

interface EditClient {
  editClient: (data: any) => void;
}

interface DeleteClient {
  deleteClient: (data: any) => void;
}

const ClientCard: React.FC<
  ClientData & CalculatedData & EditClient & DeleteClient
> = ({ clientData, financialData, editClient, deleteClient }) => {
  const percentage = clientData.usinas[0].percentualDeParticipacao;
  const financialReturn = formatToBRLCurrency(
    (percentage / 100) * financialData.totalRevenue
  );
  return (
    <ClientBox>
      <ButtonsWrapper>
        <CardButton
          onClick={() => {
            editClient(clientData);
          }}
        >
          <img src={editIcon} alt="edit" />
        </CardButton>
        <CardButton
          onClick={() => {
            deleteClient(clientData);
          }}
        >
          <img src={deleteIcon} alt="delete" />
        </CardButton>
      </ButtonsWrapper>
      <InfoWrapper>
        <h3>Nome: {clientData.nomeCliente}</h3>
        <span>Número do cliente: {clientData.numeroCliente}</span>
      </InfoWrapper>

      <InfoWrapper>
        <strong>Usinas</strong>
        <span>Id da usina: {clientData.usinas[0].usinaId}</span>
        <span>Percentual de participação: {percentage}%</span>
        <span>Retorno financeiro estimado: {financialReturn}</span>
      </InfoWrapper>
    </ClientBox>
  );
};

export default ClientCard;
