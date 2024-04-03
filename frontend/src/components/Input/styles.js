import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  border: none;
  border-radius: 1rem;
  display: flex;
  align-items: center;

  > label {
    svg {
      margin-left: 1.6rem;
      font-size: 2.4rem;
      cursor: pointer;
    }
 }

  > input {
    width: 100%;
    height: 5.6rem;
    padding: 1.7rem 1.6rem 1.8rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    border: none;
    
    &:placeholder{
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
`;