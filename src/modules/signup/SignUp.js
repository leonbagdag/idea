import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import "./SignUp.css";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: 200
    }
  }
}));

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
    <Grid container direction="row" justify="center" alignItems="center">
      >
      <div className="SignUp-Form">
        <h1>Online Shop</h1>
        {/* <img src="https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/06/shopping-online.jpg" alt="cart" max-width="300px" max-height="300px"></img> */}
        <h3>Sign Up</h3>
        <Grid className="grid" item xs={6} sm={3}>
          <TextField
            name="firstName"
            label="First Name"
            variant="outlined"
            onChange={inputChange}
          />
        </Grid>

        <Grid className="grid" item xs={6} sm={3}>
          <TextField
            name="lastName"
            label="Last Name"
            variant="outlined"
            onChange={inputChange}
          />
        </Grid>

        <Grid className="grid" item xs={6}>
          <TextField
            className="TFW"
            name="email"
            id="outlined-basic"
            label="Email"
            variant="outlined"
            onChange={inputChange}
          />
        </Grid>

        <Grid className="grid" item xs={6}>
          <TextField
            className="TFW"
            name="password"
            id="outlined-basic"
            label="Password"
            variant="outlined"
            onChange={inputChange}
          />
        </Grid>
        <Grid className="grid" item xs={6}>
          <TextField
            className="TFW"
            name="phoneNum"
            id="outlined-basic"
            label="Phone Number"
            variant="outlined"
            onChange={inputChange}
          />
        </Grid>
        <Grid className="grid" item xs={6}>
          <Button variant="contained" color="primary" onClick={signUp}>
            Sign Up
          </Button>
        </Grid>

        <a href="">Already a Customer? Sign In.</a>
      </div>
    </Grid>
  );
};
export default SignUp;
