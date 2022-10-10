import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  border-radius: 10px;
  box-shadow: 3px 3px 7px;
  margin-bottom: 3rem;
  height: 55vh;
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
  border-radius: 10px;
  margin-top: 0.5rem;
  border: 1px solid #463e8f;
`;

export const GaugeBarWrapper = styled.div`
  position: relative;
  width: 80%;
  height: 20%;
  border-radius: 10px;
  border: solid 1px black;
`;

export const GaugeBar = styled.div`
  position: absolute;
  width: 50%;
  height: 100%;
  border-radius: 10px;
  background-color: #7d9bfb96;
  padding-left: calc(80% * 0.5);
`;
