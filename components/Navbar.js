import { AppBar, Button, Grid, Toolbar, Typography } from "@mui/material";
import { FiLogIn } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav>
      <AppBar position="sticky">
        <Toolbar>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Typography variant="h5" component="h1" sx={{ flexGrow: 1 }}>
                LOGO
              </Typography>
            </Grid>
            <Grid
              item
              xs={8}
              container
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
            >
              <Button color="secondary" variant="contained">
                Login &nbsp;
                <FiLogIn />
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </nav>
  );
};

export default Navbar;
