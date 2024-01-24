import { Button, Container, FormControl, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate("/");
  };

  return (
    <>
      <Container>
        <form>
          <FormControl>
            <TextField id="outlined-basic" label="Email" variant="outlined" />
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
            />
            <Button variant="contained" onClick={handleSignIn}>
              Sign in
            </Button>
          </FormControl>
        </form>
      </Container>
    </>
  );
};
