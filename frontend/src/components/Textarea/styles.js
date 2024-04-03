import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 25.4rem;
  padding: 1.9rem 1.6rem;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  color: ${({ theme }) => theme.COLORS.WHITE};

  resize: none;
  border: none;
  border-radius: 1rem;

  &:placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }
`;