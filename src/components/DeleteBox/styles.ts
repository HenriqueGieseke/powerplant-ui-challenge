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

export const DeleteBoxContainer = styled.div`
  background: linear-gradient(to bottom, #09ba88 10%, #00a2a2 100%);
  box-shadow: 1px 3px 4px 3px rgba(0, 0, 0, 0.25);
  border-radius: 23px;
  width: 24rem;
  height: 13rem;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  span {
    text-transform: uppercase;
    font-weight: 700;
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

export const DeleteButton = styled.button`
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
