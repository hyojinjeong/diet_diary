import {
  ContentGrid,
  Wrapper,
  ContentTitle,
  GaugeBarWrapper,
  GaugeBar,
} from "./style";
import { Box } from "@mui/material";
import DietItem from "../DietItem/DietItem";
import MenuButton from "../MenuButton/MenuButton";

interface Diets {
  breakfast?: DietsContent;
  lunch?: DietsContent;
  dinner?: DietsContent;
}
interface DietsContent {
  title?: string;
  time?: string;
  memo?: string;
  score?: number;
  photo?: string;
}

interface Props {
  diets: Diets;
}

const ResultComponent = ({ diets }: Props) => {
  console.log("diets", diets);
  return (
    <Box
      sx={{
        width: { xs: "90vw", sm: "90vw", md: "33vw" },
      }}
    >
      <Wrapper>
        <ContentGrid>
          <Box
            sx={{
              width: "100%",
              height: "100%",
            }}
          >
            <ContentTitle>
              <span>🥗 식단</span>
            </ContentTitle>
            <Box
              sx={{
                width: "100%",
                height: "calc(100% - 1.7rem)",
                display: "flex",
                alignItems: "center",
              }}
            >
              {diets ? (
                <>
                  {diets?.breakfast && <DietItem type={"morning"} />}
                  {diets?.lunch && <DietItem type={"lunch"} />}
                  {diets?.dinner && <DietItem type={"dinner"} />}
                </>
              ) : (
                "결과가 없습니다."
              )}
            </Box>
          </Box>
          <Box>
            <ContentTitle>
              <span>💧 물</span>
              <MenuButton />
            </ContentTitle>
            <Box
              sx={{
                width: "100%",
                height: "calc(100% - 1.7rem)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "0 1rem 1rem 1rem",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  fontWeight: "bold",
                  justifyContent: "space-around",
                }}
              >
                <div>목표량 : 1000mL</div>
                <div>섭취량 : 500mL</div>
                <GaugeBarWrapper>
                  <GaugeBar />
                </GaugeBarWrapper>
              </Box>
            </Box>
          </Box>
          <Box>
            <ContentTitle>
              <span>🏃🏻‍♂️ 신체</span>
              <MenuButton />
            </ContentTitle>
            <Box
              sx={{
                width: "100%",
                height: "calc(100% - 1.7rem)",
                padding: "0 1rem 1rem 1rem",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  fontWeight: "bold",
                  justifyContent: "space-around",
                }}
              >
                <div>체중 : 47kg</div>
                <div>골격근량 : 20kg</div>
                <div>체지방량 : 5kg</div>
              </Box>
            </Box>
          </Box>
        </ContentGrid>
      </Wrapper>
    </Box>
  );
};

export default ResultComponent;
