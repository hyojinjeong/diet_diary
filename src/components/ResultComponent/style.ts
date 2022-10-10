import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 45vh;
  transition: margin-left 0.5s;
  border-radius: 10px;
  box-shadow: 3px 3px 7px;
  margin-bottom: 3rem;
`;

export const ContentGrid = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: 1fr;
  align-content: space-around;
  justify-content: center;
  padding: 1rem;
  row-gap: 0.5rem;
`;

export const ContentTitle = styled.div`
  width: 100%;
  font-weight: bold;
  font-size: 1.2rem;
`;

export const DietItem = styled.div`
  width: 30%;
  height: calc(100% - 1rem);
  background-color: red;
  border-radius: 10px;
  margin-top: 0.5rem;
`;
