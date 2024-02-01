import { useMemo } from "react";
import { useFormik } from "formik";
import { Button, Container, Divider, Grid } from "@mui/material";
import "./LoginPage.css";
import * as yup from "yup";
import { startLoginWithEmailPassword } from "../../store/auth";
import { useAppDispatch } from "../../hooks";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

export const LoginPage = () => {
  const { status } = useSelector((state: RootState) => state.auth);
  const isAuthenticating = useMemo(() => status === "checking", [status]);

  const dispatch = useAppDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const { email, password } = values;
      dispatch(startLoginWithEmailPassword({ email, password }));
    },
  });

  return (
    <>
      <Container maxWidth="md" style={{ height: "100vh" }}>
        <Grid container spacing={8}>
          <Grid item xs={12} sm={5}>
            <form onSubmit={formik.handleSubmit}>
              <h3>Sign in as user</h3>
              <div>
                <label>Email</label>
                <input
                  id="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email ? (
                  <small>{formik.errors.email}</small>
                ) : null}
              </div>
              <div>
                <label>Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.password && formik.errors.password ? (
                  <small>{formik.errors.password}</small>
                ) : null}
              </div>
              <Button
                type="submit"
                sx={{ textTransform: "none" }}
                disableRipple={true}
                variant="contained"
                fullWidth={true}
                disabled={isAuthenticating}
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
