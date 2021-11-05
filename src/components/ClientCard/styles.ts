import styled, { keyframes } from 'styled-components';

const FadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const ClientBox = styled.div`
  width: 100%;
  border-radius: 23px;
  box-shadow: 1px 3px 4px 3px rgba(0, 0, 0, 0.25);
  padding: 3rem 2rem;
  background: linear-gradient(to bottom, #09ba88 5%, #00a2a2 100%);
  color: #fff;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: all 0.4s;
  animation: ${FadeIn} 0.5s ease;

  @media (max-width: 370px) {
    width: 70%;
    padding: 2rem 1rem;
    place-self: center;
  }

  :hover {
    transform: translateY(-5px);
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  overflow: hidden;

  h3 {
    font-weight: 700;
  }

  strong {
    font-weight: 600;
  }

  span {
    font-size: 0.9rem;
  }
`;

export const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  img {
    height: 23px;

    @media (max-width: 370px) {
      height: 20px;
    }
  }
`;

export const CardButton = styled.button`
  width: 23px;
  height: 23px;
  border: none;
  outline: none;
  background-color: transparent;
  padding: 0;
  margin: 0;
  margin-right: 1rem;
  transition: all 0.3s;

  :hover {
    transform: translateY(-2px);
  }

  :active {
    transform: translateY(1px);
  }
`;
