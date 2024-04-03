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
  display: flex;
  flex-direction: column;
  gap: 4rem;
  width: 124.8rem;
  position: relative;
  background: ${({ theme }) => theme.COLORS.GRAY_700};
  padding: 2.4rem;
  border-radius: 1rem;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > button {
    display: flex;
    align-items: center;
    gap: .8rem;
    color: ${({ theme }) => theme.COLORS.PINK};
    border: none;
    background: none;
    width: fit-content;
    font-size: 3rem;
  }
  
  > h1 {
    font-weight: 500;
    font-size: 3.6rem;
    line-height: 4.7rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  gap: 4rem;
`;

export const NoteItensWrapper = styled.div`
  > h2 {
    font-weight: 400;
    font-size: 2rem;
    line-height: 2.6rem;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    margin-bottom: 2.4rem;
  }
`;

export const NoteItens = styled.div`
  padding: 1.6rem;
  background: ${({ theme }) => theme.COLORS.BLACK};
  border-radius: .8rem;
  display: flex;
  flex-wrap: wrap;
  gap: 2.4rem;
  overflow-y: auto;
  max-height: 25.2rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 4rem;
`;