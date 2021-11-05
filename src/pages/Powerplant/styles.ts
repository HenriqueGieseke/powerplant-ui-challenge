import styled, { keyframes } from 'styled-components';

const FadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const Main = styled.main`
  max-width: 1120px;
  height: calc(100vh - 5rem);
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${FadeIn} 0.5s ease;

  @media (max-width: 1050px) {
    flex-direction: column;
  }
`;

export const InputContainer = styled.div`
  width: 30%;
  gap: 3rem;

  display: flex;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 1050px) {
    width: 90%;
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 2rem;

    label {
      color: #fff;
      font-size: 1rem;
      text-transform: uppercase;
      margin-bottom: 1rem;
    }

    input {
      margin-left: 0.5rem;
    }
  }

  label {
    color: #fff;
    font-size: 1.3rem;
    text-transform: uppercase;
  }

  input {
    margin-right: 1rem;
  }
`;
