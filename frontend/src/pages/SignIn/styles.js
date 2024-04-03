import styled from "styled-components";
import backgroundImg from "../../assets/background.png"

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding: 0 16rem 0 13.2rem;

  > h1 {
    font-size: 4.8rem;
    line-height: 6.3rem;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > p {
    font-size: 1.4rem;
    line-height: 1.8rem;
    color: ${({ theme }) => theme.COLORS.OFF_WHITE};
  }

  > h2 {
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 3.2rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
    margin: 4.8rem 0;
  }

  .link {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 4.2rem;
    a {
      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }

  .button-wrapper {
    width: 100%;
    margin-top: 2.4rem;
  }
`;

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: .8rem;
`;

export const BackgroundImg = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`;