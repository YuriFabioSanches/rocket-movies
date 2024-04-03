import styled from "styled-components";

export const Container = styled.span`
  padding: .8rem 1.6rem;
  border-radius: .8rem;
  background: ${({ theme, $isnothome }) => $isnothome === "true" ? theme.COLORS.GRAY_700 : theme.COLORS.BACKGROUND_900};

  font-style: normal;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.4rem;

  color: ${({ theme }) => theme.COLORS.WHITE_100};
`;