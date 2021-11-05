import styled, { keyframes } from 'styled-components';

const FadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const ModalBackground = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.9);

  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${FadeIn} 0.5s ease;
`;

export const CreateClientContainer = styled.div`
  width: 43rem;
  height: 35rem;
  padding: 3.3rem 9rem;

  background: linear-gradient(to bottom, #09ba88 10%, #00a2a2 100%);
  box-shadow: 1px 3px 4px 3px rgba(0, 0, 0, 0.25);
  border-radius: 23px;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 650px) {
    width: 90%;
    height: 70%;
    padding: 0 2rem;
  }

  @media (max-width: 340px) {
    width: 80%;
  }

  input {
    margin-top: 1rem;
    border: none;
    border-radius: 5px;
    height: 2.5rem;
    outline: none;
    padding: 0 0.5rem;

    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      margin: 0;
    }
  }

  label {
    display: block;
    font-size: 0.9rem;
    margin-bottom: 2rem;
  }

  form {
    width: 100%;
  }

  span {
    display: block;
    margin-bottom: 1rem;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 340px) {
    justify-content: flex-start;
    flex-direction: column;
  }
`;

export const NameInput = styled.input`
  display: block;
  width: 80%;
`;

export const NumberInput = styled.input`
  display: block;
  width: 5rem;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CloseButton = styled.div`
  width: 50px;
  height: 50px;
  padding: 5px;
  font-weight: 700;
  color: #fff;
  background-color: transparent;
  font-size: 20px;
  border: none;
  cursor: pointer;
  border: solid 4px #fff;
  border-radius: 50%;
  position: absolute;
  top: 12%;
  right: 25%;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 650px) {
    top: 1rem;
    right: 3rem;
  }

  :hover {
    filter: brightness(70%);
  }
`;

export const CreateButton = styled.button`
  padding: 0.7rem 2rem;
  border-radius: 23px;
  text-transform: uppercase;
  background-color: #fff;
  border: 2px solid #fff;
  transition: all 0.2s;

  :hover {
    background-color: #00a2a2;
    color: #fff;
  }

  :active {
    transform: translateY(2px);
  }
`;
