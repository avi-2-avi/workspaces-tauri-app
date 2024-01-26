import { Button, Container, Divider, Grid } from "@mui/material";
import "./LoginPage.css";

export const LoginPage = () => {
  return (
    <>
      <Container maxWidth="md">
        <Grid container spacing={8}>
          <Grid item xs={12} sm={5}>
            <form>
              <h3>Sign in as user</h3>
              <div>
                <label>Username</label>
                <input />
              </div>
              <div>
                <label>Password</label>
                <input />
              </div>
              <Button
                sx={{ textTransform: "none" }}
                disableRipple={true}
                variant="contained"
                fullWidth={true}
              >
                Sign In
              </Button>
            </form>
          </Grid>
          <Grid item xs={12} sm={7}>
            <img src="https://burst.shopifycdn.com/photos/person-using-laptop_925x.jpg" />
          </Grid>
        </Grid>
        <Divider></Divider>
        <small>© 2024, Smart Gente.</small>
      </Container>
    </>
  );
};
