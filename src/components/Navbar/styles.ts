import styled from 'styled-components';

export const Nav = styled.nav`
  width: 100vw;
  height: 5rem;
  padding: 0 4rem;
  background-color: #fff;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 720px) {
    padding: 0 2rem;
    font-size: 0.9rem;
  }

  img {
    height: 3.2rem;

    @media (max-width: 370px) {
      height: 2rem;
    }
  }

  div {
    display: flex;
    gap: 2rem;

    a {
      text-transform: uppercase;
      opacity: 0.5;
      transition: opacity 0.2s;

      :hover {
        opacity: 1;
      }
    }
  }
`;
