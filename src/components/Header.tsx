import { Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";

// const MyStyledBox = styled(Box)(({ theme }) => ({
//   backgroundColor: theme.palette.common.black,
//   padding: "10px",
// }));

const Header = () => {
  return (
    <header className="header">
      {/*Topbar*/}
      <Box sx={{ backgroundColor: "common.black", padding: "10px" }}>
        <div className="row-inner">
          <div className="topbar">
            <Typography
              variant="body2"
              color="common.white"
              sx={{ fontSize: "1rem" }}
            >
              Call Us: <a href="tel:866-440-0177">866-440-0177</a>
            </Typography>
            <div className="topbar__middle">
              <Typography
                variant="body2"
                color="common.white"
                sx={{
                  fontSize: "1rem",
                  paddingRight: "20px",
                  borderRight: "1px solid #fff",
                }}
              >
                Shipping is free for all orders!
              </Typography>
              <Typography
                variant="body2"
                color="common.white"
                sx={{
                  fontSize: "1rem",
                  paddingLeft: "20px",
                }}
              >
                90 Days Money Back Guarantee!
              </Typography>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Image
                src="/assets/icons/icon-track.svg"
                alt="track-icon"
                width={25}
                height={25}
              />
              <Typography
                variant="body2"
                color="yellowBrand"
                sx={{
                  fontSize: "1rem",
                }}
              >
                Track My Order
              </Typography>
            </div>
          </div>
        </div>
      </Box>
      {/*Topbar*/}
      {/*Navbar*/}
      <Box sx={{ backgroundColor: "common.white", padding: "30px" }}>
        <div className="row-inner">
          <div className="navbar">
            <Image
              src="/assets/priorityTire.webp"
              alt="logo"
              width={200}
              height={30}
              style={{
                cursor: "pointer",
                objectFit: "contain",
                objectPosition: "left center",
              }}
            />
            <div>Input type search</div>
            <div style={{ display: "flex", gap: "10px" }}>
              <Image
                src="/assets/icons/icon-account.svg"
                alt="user account"
                width={40}
                height={40}
                style={{
                  cursor: "pointer",
                  objectFit: "contain",
                  objectPosition: "center",
                }}
              />
              <Image
                src="/assets/icons/icon-cart.svg"
                alt="user account"
                width={40}
                height={40}
                style={{
                  cursor: "pointer",
                  objectFit: "contain",
                  objectPosition: "center",
                }}
              />
            </div>
          </div>
        </div>
      </Box>
      {/*Navbar*/}
      {/*Menu*/}
      <Box
        sx={{
          backgroundColor: "common.white",
          padding: "10px",
          borderTop: "1px solid red",
          borderBottom: "1px solid red",
        }}
      >
        <div className="row-inner">MENU BAR</div>
      </Box>
      {/*Menu*/}
    </header>
  );
};
export default Header;
