import { Wrapper, Title } from "./style";

interface Props {
  type: string;
}
const DietItem = ({ type }: Props) => {
  return (
    <Wrapper>
      <Title>
        {type === "morning" ? "아침" : type === "lunch" ? "점심" : "저녁"}
      </Title>
    </Wrapper>
  );
};

export default DietItem;
