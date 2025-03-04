import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const MyStyledBox = styled(Box)(({ theme }) => ({
  padding: "60px 0",
}));

const PromoBox = styled(Box)(({ theme }) => ({
  position: "relative",
  padding: "20px",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: "450px",
}));

const Promotions = () => {
  return (
    <MyStyledBox>
      <div className="row-inner">
        <article className="article-grid">
          <PromoBox
            sx={{
              backgroundImage: "url(/assets/images/grid-image-1.webp)",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                bottom: "30px",
                left: "0",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                padding: "20px 30px",
                color: "common.black",
                backgroundColor: "yellowBrand.main",
                fontSize: "2rem",
                minWidth: "350px",
              }}
            >
              <Typography variant="h4" sx={{ fontWeight: "900" }}>
                First Time Buyer
              </Typography>
              <Typography
                variant="h2"
                sx={{ fontWeight: "700", fontSize: "4.5rem" }}
              >
                $5 OFF
              </Typography>
              <Box>qwdqwd</Box>
            </Box>
          </PromoBox>
          <PromoBox
            sx={{
              backgroundImage: "url(/assets/images/grid-image-2.webp)",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                bottom: "30px",
                left: "0",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                padding: "20px 30px",
                color: "common.black",
                backgroundColor: "yellowBrand.main",
                fontSize: "2rem",
                minWidth: "350px",
              }}
            >
              <Typography variant="h4" sx={{ fontWeight: "900" }}>
                First Time Buyer
              </Typography>
              <Typography
                variant="h2"
                sx={{ fontWeight: "700", fontSize: "4.5rem" }}
              >
                $5 OFF
              </Typography>
              <Box>qwdqwd</Box>
            </Box>
          </PromoBox>
          <PromoBox
            sx={{
              backgroundImage: "url(/assets/images/grid-image-3.webp)",
            }}
          >
            asdasdas
          </PromoBox>
        </article>
      </div>
    </MyStyledBox>
  );
};
export default Promotions;
