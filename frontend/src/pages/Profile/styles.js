import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;

  > header {
    height: 14.4rem;
    width: 100%;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    display: flex;
    align-items: center;
    padding-left: 14.4rem;
    
    a {
      display: flex;
      align-items: center;
      gap: .8rem;
      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }
`;

export const Form = styled.form`
  max-width: 34rem;
  margin: auto;

  > button {
    margin-top: 2.4rem;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: .8rem;

  > div:nth-child(3) {
    margin-top: 1.6rem;
  }
`;

export const Avatar = styled.div`
  position: relative;
  margin: -9.4rem auto 6.4rem;
  width: 18.6rem;
  height: 18.6rem;

  > img {
    width: 18.6rem;
    height: 18.6rem;
    border-radius: 50%;
  }

  > label {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: .7rem;
    bottom: .7rem;

    background: ${({ theme }) => theme.COLORS.PINK};
    width: 4.6rem;
    height: 4.6rem;
    border-radius: 100%;
    cursor: pointer;
    transition: all .3s ease;

    input {
      display: none;
    }

    svg {
      color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    }
  }

  > label:hover {
    filter: brightness(0.8);
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: .8rem;
  margin-top: 2.4rem;

  .inverted-colors {
    background: ${({ theme }) => theme.COLORS.GRAY_700};
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;
