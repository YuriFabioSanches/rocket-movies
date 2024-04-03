import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: auto;
  min-width: 50px;

  background: ${({ theme, $isnew }) => $isnew === "true" ? "transparent" : theme.COLORS.BACKGROUND_900};
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  border: ${({ theme, $isnew }) => $isnew === "true" ? `.2rem dashed ${theme.COLORS.GRAY_300}` : "none"};
  border-radius: 1rem;
  padding-right: 1.6rem;

  > input {
    height: 5.6rem;
    padding: 1.2rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    border: none;
    &:placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }

  > button {
    border: none;
    background: none;

    svg {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.COLORS.PINK} 
    }
  }
`;