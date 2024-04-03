import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 11.6rem auto;
  grid-template-areas: 
  "header" 
  "content";

  > main {
    grid-area: content;
    padding: 4rem 10.6rem 0 12.3rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  > button {
    display: flex;
    align-items: center;
    gap: .8rem;
    color: ${({ theme }) => theme.COLORS.PINK};
    border: none;
    background: none;
    width: fit-content;
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

`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 4rem;

  .inverted-colors {
    background: ${({ theme }) => theme.COLORS.GRAY_700};
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;