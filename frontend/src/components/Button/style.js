import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 5.6rem;
  background: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.GRAY_700};
  border: none;
  border-radius: 1rem;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 2.1rem;
`;