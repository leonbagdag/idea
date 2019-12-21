
import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

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
      <div className="SignUp-Form" style={{marginTop:0}}>

        <img
          src="https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/06/shopping-online.jpg"
          alt="cart"
          width="400"
          max-height="70"
        ></img>

          <Card
        sm={12}
        style={{
          marginTop: 0,
          padding: 30,
          maxWidth: 345
        }}
      >
       
        <CardContent
          style={{
            padding: 10
          }}
        >

        <Typography component="h1" variant="h4">
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
        </CardContent>
        </Card>

      </div>
    </Container>
  );
};
export default SignUp;
