import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;
  width: 100%;
  height: 11.6rem;
  display: flex;
  align-items: center;
  gap: 6.4rem;
  padding: 2.4rem 12.3rem;

  border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};

  > h1 {
    font-weight: 700;
    font-size: 2.4rem,;
    line-height: 3.2rem;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: .8rem;
  white-space: nowrap;

  .profile-text {
    display: flex;
    flex-direction: column;
    align-items: end;

    strong {
      font-weight: 700;
      font-size: 1.4rem;
      line-height: 1.8rem;  
      color: ${({ theme }) => theme.COLORS.WHITE};
    }

    button {
      border: none;
      background: none;
      
      span {
        font-weight: 400;
        font-size: 1.4rem;
        line-height: 1.8rem;
            
        color: ${({ theme }) => theme.COLORS.GRAY_300};
      }
    }
  }

  > a {
    img {
      width: 6.4rem;
      height: 6.4rem;
      border-radius: 50%;
    }
  }
`;