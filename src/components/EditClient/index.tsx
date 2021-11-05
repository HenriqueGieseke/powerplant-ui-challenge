import React, { useState } from 'react';
import SuccessBox from '../SuccessBox';
import {
  ButtonWrapper,
  CloseButton,
  EditButton,
  CreateClientContainer,
  InputWrapper,
  ModalBackground,
  NameInput,
  NumberInput,
} from './styles';

type closeModal = () => void;
type createFunction = (createFunction: any) => void;

interface CreateClientProps {
  closeModal: closeModal;
  createFunction: createFunction;
  clientData: any;
}

const EditClient: React.FC<CreateClientProps> = ({
  closeModal,
  createFunction,
  clientData,
}) => {
  const [nameInput, setNameInput] = useState(clientData.nomeCliente);

  const [powerPlantIdInput, setPowerPlantInput] = useState(
    clientData.usinas[0].usinaId
  );
  const [percentageInput, setPercentageInput] = useState(
    clientData.usinas[0].percentualDeParticipacao
  );

  const [mainBoxVisibility, setMainBoxVisibility] = useState(true);
  const [successBoxVisibility, setSuccessBoxVisibility] = useState(false);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const newClientData = {
      nomeCliente: nameInput,
      numeroCliente: clientData.numeroCliente,
      usinas: [
        {
          usinaId: Number(powerPlantIdInput),
          percentualDeParticipacao: Number(percentageInput),
        },
      ],
    };

    createFunction(newClientData);
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
                value={nameInput}
                type="text"
                required
                onChange={(e) => {
                  setNameInput(e.target.value);
                }}
              />
            </label>

            <span>Usina:</span>
            <InputWrapper>
              <label htmlFor="powerPlantId">
                Id da usina
                <NumberInput
                  id="powerPlantId"
                  value={powerPlantIdInput}
                  type="number"
                  required
                  onChange={(e) => {
                    console.log(powerPlantIdInput);
                    setPowerPlantInput(e.target.value);
                  }}
                />
              </label>
              <label htmlFor="participationPercentage">
                Percentual de Participação
                <NumberInput
                  id="participationPercentage"
                  value={percentageInput}
                  type="number"
                  required
                  onChange={(e) => {
                    setPercentageInput(e.target.value);
                  }}
                />
              </label>
            </InputWrapper>
            <ButtonWrapper>
              <EditButton type="submit">Editar</EditButton>
            </ButtonWrapper>
          </form>
        </CreateClientContainer>
      )}
      {successBoxVisibility && (
        <SuccessBox boxType="edited" handleBack={closeModal} />
      )}
    </ModalBackground>
  );
};

export default EditClient;
