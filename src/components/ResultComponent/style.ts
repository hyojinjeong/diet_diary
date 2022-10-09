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
  row-gap: 1rem;
`;

export const ContentTitle = styled.div`
  width: 100%;
  font-size: 1.7rem;
  font-weight: bold;
`;

export const DietItem = styled.div`
  width: 30%;
  height: calc(100% - 1rem);
  background-color: red;
  margin: 0 1rem;
  border-radius: 10px;
`;
