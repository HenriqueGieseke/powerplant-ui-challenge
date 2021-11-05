import React from 'react';
import { BackButton, SuccessBoxContainer } from './styles';

interface SuccessBoxProps {
  boxType: String;
  handleBack: () => void;
}

const SuccessBox: React.FC<SuccessBoxProps> = ({ boxType, handleBack }) => {
  let boxTitle = '';

  if (boxType === 'created') {
    boxTitle = 'Cliente Criado';
  } else if (boxType === 'deleted') {
    boxTitle = 'Cliente Deletado';
  } else if (boxType === 'edited') {
    boxTitle = 'Cliente Editado';
  }

  return (
    <SuccessBoxContainer
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <span>{boxTitle}</span>
      <div>
        <BackButton
          onClick={() => {
            handleBack();
          }}
        >
          Voltar
        </BackButton>
      </div>
    </SuccessBoxContainer>
  );
};

export default SuccessBox;
