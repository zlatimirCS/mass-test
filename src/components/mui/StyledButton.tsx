import Button from "@mui/material/Button";

export default function StyledButton() {
  return (
    <Button
      variant="contained"
      disabled
      sx={(theme) => ({
        "&.Mui-disabled": {
          color: "green",
        },
      })}
    >
      H1 button
    </Button>
  );
}
