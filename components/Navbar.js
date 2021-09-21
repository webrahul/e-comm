import Link from "next/link";
import { useState } from "react";
import {
  AppBar,
  Button,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Box,
  // IconButton,
  Avatar,
  Badge,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { FiPlusCircle } from "react-icons/fi";

const StyledGrid = styled(Grid)`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  align-items: center;
`;
const StyledList = styled(List)`
  display: flex;
  justify-content: flex-end;
  margin-left: 15px !important;
  li {
    padding-inline: 10px;
  }
`;
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      // animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      boxSizing: "border-box",
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));
const Navbar = () => {
  const [Links, setLinks] = useState([1, 2, 3, 4, 5, 6]);
  return (
    <nav>
      <AppBar position="sticky">
        <Toolbar>
          <StyledGrid container spacing={2}>
            <Box
              component="div"
              style={{ display: "flex", alignItems: "center" }}
              sx={{ flexGrow: 1 }}
            >
              <Link href="/" underline="none" passHref>
                <Typography variant="h5" component="a">
                  LOGO
                </Typography>
              </Link>
              <StyledList style={{ marginLeft: "20px" }}>
                {Links.map((li, idx) => (
                  <ListItem disablePadding key={idx}>
                    <Link href="/" underline="none" passHref>
                      <Typography variant="span" component="a">
                        About
                      </Typography>
                    </Link>
                  </ListItem>
                ))}
              </StyledList>
            </Box>
            <StyledList>
              <ListItem disablePadding>
                <ListItemButton disableRipple>
                  <StyledBadge
                    overlap="circular"
                    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                    variant="dot"
                    // sx={{
                    //   boxShadow: 3,
                    // }}
                  >
                    <Avatar>H</Avatar>
                  </StyledBadge>
                  <ListItemText
                    primary="My Account"
                    style={{ marginInline: "10px", whiteSpace: "nowrap" }}
                  />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <Button
                  color="secondary"
                  variant="contained"
                  style={{ borderRadius: "30px" }}
                >
                  Add Listing <FiPlusCircle style={{ marginLeft: "5px" }} />
                </Button>
              </ListItem>
            </StyledList>
          </StyledGrid>
        </Toolbar>
      </AppBar>
    </nav>
  );
};

export default Navbar;
