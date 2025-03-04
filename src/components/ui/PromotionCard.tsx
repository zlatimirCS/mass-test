import { Box, Typography } from "@mui/material";
import Image from "next/image";
import StyledButton from "@/components/mui/StyledButton";

const PromotionCard = ({ data }: any) => {
  return (
    <Box>
      <Box
        sx={{
          width: "100%",
          aspectRatio: "1.9/1",
          position: "relative",
        }}
      >
        <Image
          src={data?.image}
          fill
          alt={data?.title}
          style={{
            borderTopLeftRadius: "5px",
            borderTopRightRadius: "5px",
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          alignItems: "center",
          padding: "20px",
          backgroundColor: "grey.200",
        }}
      >
        <Typography variant="h5" sx={{ fontSize: "1.8rem", fontWeight: 600 }}>
          {data?.title}
        </Typography>
        <StyledButton text="Browse tires" />
        <Typography variant="body2">{data?.promoPeriod}</Typography>
      </Box>
    </Box>
  );
};
export default PromotionCard;
