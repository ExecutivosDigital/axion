import { styled } from "styled-components";

interface ContainerProps {
  type: boolean;
}

export const Container = styled.div`
  display: flex;
  background-color: #111;
`;

export const Content = styled.div`
  background-color: ${({ theme }) => theme.color.gray_10};
  width: calc(100% - 17rem);
  margin: 0.37rem 0 1rem 0.4rem;
  border-radius: 25px 0 0 25px;
  padding: 1.2rem;
`;

export const Header = styled.header`
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
`;

export const Main = styled.main`
  margin: 2%;
  /* background-color: white; */
  border-radius: 10px;
  /* padding: 2.25rem; */

  header {
    display: flex;
    justify-content: space-between;
    color: ${({ theme }) => theme.color.gray_100};

    h2 {
      font-size: 1.6rem;
      font-weight: 600;
    }

    button {
      background-color: ${({ theme }) => theme.color.brand_blue};
      color: white;
      border: 0;
      border-radius: 6px;
      padding: 0.75rem 3rem;
      transition: 0.3s;

      &:hover {
        background-color: ${({ theme }) => theme.color.brand_blue_hover};
      }
    }
  }
`;

export const LikesAndComentsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 0.6rem;
  flex-wrap: wrap;
`;

export const ChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1.25rem;
  width: 33rem;
  background-color: #fff;
  border-radius: 10px;
  border: 0.3px solid #c3c3c3;
  /* min-height: 400px; */
`;

export const Tip = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  p {
    font-size: 0.75rem;
    margin: 0;
    padding: 0;
  }
`;
