import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import "./SignUp.css";

const SignUp = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNum: "",
    password: ""
  });
  const inputChange = event => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };
  const signUp = () => {
    // validate al data
    // call back-end wa adelo al user value
  };
  return (
    <Container component="main" maxWidth="xs">
      {/* <CssBaseline /> */}
      <div className="SignUp-Form">
        {/* <h1>Online Shop</h1> */}
        <img
          src="https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/06/shopping-online.jpg"
          alt="cart"
          width="250"
          max-height="50"
        ></img>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={"form"} style={{ marginTop: 24 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                name="firstName"
                label="First Name"
                variant="outlined"
                fullWidth
                onChange={inputChange}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                name="lastName"
                label="Last Name"
                variant="outlined"
                fullWidth
                onChange={inputChange}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                name="email"
                id="outlined-basic"
                label="Email"
                variant="outlined"
                fullWidth
                onChange={inputChange}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                name="password"
                id="outlined-basic"
                label="Password"
                variant="outlined"
                fullWidth
                onChange={inputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="phoneNum"
                id="outlined-basic"
                label="Phone Number"
                variant="outlined"
                fullWidth
                onChange={inputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                className="submitBTN"
                variant="contained"
                color="primary"
                fullWidth
                onClick={signUp}
              >
                Sign Up
              </Button>
            </Grid>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="" variant="body2">
                  Already a Customer? Sign In.
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};
export default SignUp;
