import { Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const MyStyledBox = styled(Box)(({ theme }) => ({
  backgroundImage: "url('/assets/images/tire-deals.webp')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  padding: "60px 0",
  minHeight: "450px",
  textAlign: "center",
}));

const HomepageHero = () => {
  return (
    <MyStyledBox>
      <div className="row-inner">
        <Typography
          variant="h1"
          color="common.white"
          sx={{
            fontWeight: "700",
            textShadow: "3px 3px 3px rgba(0, 0, 0, 0.5)",
          }}
        >
          New Tires For Sale Online
        </Typography>
      </div>
    </MyStyledBox>
  );
};
export default HomepageHero;
