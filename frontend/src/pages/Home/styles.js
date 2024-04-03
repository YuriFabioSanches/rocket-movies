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
    overflow-y: auto;
    scrollbar-color: ${({ theme }) => theme.COLORS.PINK} transparent;
    scrollbar-width: thin;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding: 5rem 10.6rem 6rem 12.3rem ;



  > header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      font-weight: 400;
      font-size: 3.2rem;
      line-height: 4.2rem;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }

    a {
      display: flex;
      align-items: center;
      gap: .8rem;
      height: 4.8rem;
      padding: .8rem 3.2rem;
      border-radius: .8rem;
      background: ${({ theme }) => theme.COLORS.PINK};
      color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    }
  }
`;

export const NoteList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;
