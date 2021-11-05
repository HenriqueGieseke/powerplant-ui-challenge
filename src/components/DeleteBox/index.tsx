import React, { useState } from 'react';
import SuccessBox from '../SuccessBox';
import {
  ButtonWrapper,
  DeleteBoxContainer,
  DeleteButton,
  ModalBackground,
} from './styles';

interface CloseModal {
  closeModal: () => void;
}

interface HandleDelete {
  handleDelete: (object: any) => void;
}

interface ClientData {
  clientData: any;
}

const DeleteBox: React.FC<CloseModal & HandleDelete & ClientData> = ({
  closeModal,
  handleDelete,
  clientData,
}) => {
  const [mainBoxVisibility, setMainBoxVisibility] = useState(true);
  const [successBoxVisibility, setSuccessBoxVisibility] = useState(false);

  return (
    <ModalBackground
      onClick={() => {
        closeModal();
      }}
    >
      {mainBoxVisibility && (
        <DeleteBoxContainer
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <span>Deletar Cliente?</span>
          <ButtonWrapper>
            <DeleteButton
              onClick={() => {
                handleDelete(clientData);
                setMainBoxVisibility(false);
                setSuccessBoxVisibility(true);
              }}
            >
              Sim
            </DeleteButton>
            <DeleteButton
              onClick={() => {
                closeModal();
              }}
            >
              Não
            </DeleteButton>
          </ButtonWrapper>
        </DeleteBoxContainer>
      )}
      {successBoxVisibility && (
        <SuccessBox boxType="deleted" handleBack={closeModal} />
      )}
    </ModalBackground>
  );
};

export default DeleteBox;
