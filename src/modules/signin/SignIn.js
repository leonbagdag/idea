import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
/*import "./SignUp.css";*/

const SignIn = () => {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });
  const inputChange = event => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };
  const signIn = () => {
    // validate al data
    // call back-end wa adelo al user value
  };
  return (
    <Container component="main" maxWidth="xs">
      {/* <CssBaseline /> */}
      <div className="SignIn-Form">
        {/* <h1>Online Shop</h1> */}
        <img
          src="https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/06/shopping-online.jpg"
          alt="cart"
          width="400"
          max-height="70"
        ></img>
        <Typography component="h1" variant="h4">
          Sign in
        </Typography>
        <form className={"form"} style={{ marginTop: 24 }}>
          <Grid container spacing={2}>

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
              <Button
                className="submitBTN"
                variant="contained"
                color="primary"
                fullWidth
                onClick={signIn}
              >
                Sign In
              </Button>
            </Grid>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="" variant="body2">
                  New Customer? Sign Up.
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};
export default SignIn;