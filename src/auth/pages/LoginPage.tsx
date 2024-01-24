import { Button, Container, FormControl, TextField } from "@mui/material";

export const LoginPage = () => {
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
            <Button>Sign in</Button>
          </FormControl>
        </form>
      </Container>
    </>
  );
};
