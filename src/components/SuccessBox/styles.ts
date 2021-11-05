import styled, { keyframes } from 'styled-components';

const FadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const SuccessBoxContainer = styled.div`
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
    animation: ${FadeIn} 0.5s ease;
  }
`;

export const BackButton = styled.button`
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
