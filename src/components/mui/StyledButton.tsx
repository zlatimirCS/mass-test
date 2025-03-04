import Button from "@mui/material/Button";

export default function StyledButton({ text }: any) {
  return (
    <Button
      variant="contained"
      sx={(theme) => ({
        backgroundColor: theme.palette.yellowBrand.main,
        borderRadius: "80px",
        fontSize: "1.5rem",
        // lineHeight: "1",
        // padding: "0 20px",
        fontWeight: "900",
        transition: "all 0.3s",
        "&:hover": {
          backgroundOpacity: 0.5,
        },
      })}
    >
      {text}
    </Button>
  );
}
