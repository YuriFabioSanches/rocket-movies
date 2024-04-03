import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width:100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0,0,0,0.5);
`;

export const Content = styled.div`
  min-width: 50rem;
  position: relative;
  background: ${({ theme }) => theme.COLORS.WHITE};
  padding: 2.4rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  > p {
    margin-top: 1.6rem;
  } 
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  > h1 {
    letter-spacing: .1rem;
  }
`;

export const CancelBtn = styled.button`
  position: absolute;
  right: 8px;
  top: -3px;
  color: red;
  font-size: 4rem;
  border: none;
  background: transparent;
`;

export const InputWrapper = styled.div`
  margin-top: 1.6rem;
  display: flex;
  gap: .8rem;
`;