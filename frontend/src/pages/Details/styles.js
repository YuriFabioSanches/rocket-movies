import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;

  grid-template-rows: 11.6rem auto;
  grid-template-areas: 
  "header" 
  "content";

  > main {
    grid-area: content;
  }
`;

export const Content = styled.div`
  max-width: 113.7rem;
  max-height: 65rem;
  margin: 4rem auto;
  display: flex;
  flex-direction: column;
  padding-right: 2.4rem;
  
  overflow-y: auto;
  scrollbar-color: ${({ theme }) => theme.COLORS.PINK} transparent;
  scrollbar-width: thin;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: .8rem;

  button {
    color: ${({ theme }) => theme.COLORS.PINK};
    margin-bottom: 2.4rem;
    border: none;
    background: none;
    width: fit-content;
  }

  .right {
    display: flex;
    align-items: center;
    gap: 2rem;

    button {
      font-size: 2.4rem;
    }
  }
`;

export const Title = styled.div`
  display: flex;
  gap: 1.8rem;
  align-items: center;
  margin-bottom: 2.4rem;

  > h1 {
    font-weight: 500;
    font-size: 3.6rem;
    line-height: 4.7rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`;

export const Stars = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  > svg {
    font-size: 2rem;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  .fill {
    fill: ${({ theme }) => theme.COLORS.PINK};
  }
`;

export const CreatedBox = styled.div`
  display: flex;
  align-items: center;
  gap: .8rem;
  margin-bottom: 4rem;
  > img {
    width: 1.6rem;
    height: 1.6rem;
    border-radius: 50%;
  }

  > svg {
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;

export const Tags = styled.div`
  display: flex;
  gap: .8rem;
  margin-bottom: 4rem;
`;

export const Description = styled.div`
  text-align: justify;
`;