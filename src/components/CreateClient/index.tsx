import React, { useState } from 'react';
import SuccessBox from '../SuccessBox';
import {
  ButtonWrapper,
  CloseButton,
  CreateButton,
  CreateClientContainer,
  InputWrapper,
  ModalBackground,
  NameInput,
  NumberInput,
} from './styles';

type closeModal = () => void;
type createFunction = (createFunction: any) => void;

interface ClientData {
  numeroCliente: number;
  nomeCliente: string;
  usinas: PowerPlant[];
}

interface Empty {}

interface PowerPlant {
  usinaId: number;
  percentualDeParticipacao: number;
}

interface CreateClientProps {
  closeModal: closeModal;
  createFunction: createFunction;
  clientData?: ClientData | Empty;
}

const CreateClient: React.FC<CreateClientProps> = ({
  closeModal,
  createFunction,
  clientData,
}) => {
  const [nameInput, setNameInput] = useState('');
  const [clientNumberInput, setClientNumberInput] = useState('');
  const [powerPlantIdInput, setPowerPlantInput] = useState('');
  const [percentageInput, setPercentageInput] = useState('');

  const [mainBoxVisibility, setMainBoxVisibility] = useState(true);
  const [successBoxVisibility, setSuccessBoxVisibility] = useState(false);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const clientData = {
      nomeCliente: nameInput,
      numeroCliente: Number(clientNumberInput),
      usinas: [
        {
          usinaId: Number(powerPlantIdInput),
          percentualDeParticipacao: Number(percentageInput),
        },
      ],
    };

    createFunction(clientData);
    setMainBoxVisibility(false);
    setSuccessBoxVisibility(true);
  };

  return (
    <ModalBackground
      onClick={(e) => {
        closeModal();
      }}
    >
      {mainBoxVisibility && (
        <CreateClientContainer
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <CloseButton
            onClick={() => {
              closeModal();
            }}
          >
            x
          </CloseButton>
          <form onSubmit={handleSubmit}>
            <label htmlFor="nameInput">
              Nome
              <NameInput
                id="nameInput"
                type="text"
                required
                onChange={(e) => {
                  setNameInput(e.target.value);
                }}
              />
            </label>

            <label htmlFor="clientNumber">
              Número do Cliente
              <NumberInput
                id="clientNumber"
                type="number"
                required
                onChange={(e) => {
                  setClientNumberInput(e.target.value);
                }}
              />
            </label>

            <span>Usina:</span>
            <InputWrapper>
              <label htmlFor="powerPlantId">
                Id da usina
                <NumberInput
                  id="powerPlantId"
                  type="number"
                  required
                  onChange={(e) => {
                    setPowerPlantInput(e.target.value);
                  }}
                />
              </label>
              <label htmlFor="participationPercentage">
                Percentual de Participação
                <NumberInput
                  id="participationPercentage"
                  type="number"
                  required
                  onChange={(e) => {
                    setPercentageInput(e.target.value);
                  }}
                />
              </label>
            </InputWrapper>
            <ButtonWrapper>
              <CreateButton type="submit">Criar</CreateButton>
            </ButtonWrapper>
          </form>
        </CreateClientContainer>
      )}
      {successBoxVisibility && (
        <SuccessBox boxType="created" handleBack={closeModal} />
      )}
    </ModalBackground>
  );
};

export default CreateClient;
