import {
  ContentGrid,
  Wrapper,
  ContentTitle,
  GaugeBarWrapper,
  GaugeBar,
} from "./style";
import { Box } from "@mui/material";
import DietItem from "../DietItem/DietItem";
interface Props {
  type: string;
}

const ResultComponent = () => {
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
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <DietItem type={"morning"} />
              <DietItem type={"lunch"} />
              <DietItem type={"dinner"} />
            </Box>
          </Box>
          <Box>
            <ContentTitle>
              <span>💧 물</span>
            </ContentTitle>
            <Box
              sx={{
                width: "100%",
                height: "calc(100% - 1.7rem)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "1rem",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  fontWeight: "bold",
                  justifyContent: "space-between",
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
            </ContentTitle>
            <Box
              sx={{
                width: "100%",
                height: "calc(100% - 1.7rem)",
                padding: "1rem",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  fontWeight: "bold",
                  justifyContent: "space-between",
                }}
              >
                <div>목표량 : 1000mL</div>
                <div>섭취량 : 500mL</div>
              </Box>
            </Box>
          </Box>
        </ContentGrid>
      </Wrapper>
    </Box>
  );
};

export default ResultComponent;
