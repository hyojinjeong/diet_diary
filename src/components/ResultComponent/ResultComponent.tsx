import { ContentGrid, Wrapper, ContentTitle, DietItem } from "./style";
import { Box } from "@mui/material";

const ResultComponent = () => {
  return (
    <Box sx={{ width: { xs: "90vw", sm: "90vw", md: "33vw" } }}>
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
              <DietItem />
              <DietItem />
              <DietItem />
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
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <DietItem />
              <DietItem />
              <DietItem />
            </Box>
          </Box>
          <Box>
            <ContentTitle>
              <span>🏃🏻‍♂️ 신체</span>
            </ContentTitle>
            <Box
              sx={{
                width: "100%",
                height: "calc(100% - 1.2rem)",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <DietItem />
              <DietItem />
              <DietItem />
            </Box>
          </Box>
        </ContentGrid>
      </Wrapper>
    </Box>
  );
};

export default ResultComponent;
