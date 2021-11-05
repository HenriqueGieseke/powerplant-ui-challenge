import styled, { keyframes } from 'styled-components';

const FadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const Main = styled.main`
  max-width: 1120px;
  min-height: calc(100vh - 5rem);
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  animation: ${FadeIn} 0.5s ease;
`;

export const Button = styled.button`
  margin: 3rem 0;
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

export const ClientsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, 350px);
  gap: 2rem;
  justify-content: center;
  align-content: center;
  padding-bottom: 2rem;
`;
