import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles(theme => ({

  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  toolbar: {
    flexWrap: "wrap"
  },
  toolbarTitle: {
    flexGrow: 1
  },
  link: {
    margin: theme.spacing(1, 1.5)
  }
}));

const NavBar = () => {

  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <Typography
            variant="h5"
            color="inherit"
            noWrap
            className={classes.toolbarTitle}
          >
            Online Shop
          </Typography>
          <nav>
            <Link 
              variant="button"
              color="textPrimary"
              href="#"
              className={classes.link}
              style={{fontSize: 18}}
            >
              Home
            </Link>
            <Link
              variant="button"
              color="textPrimary"
              href="#"
              className={classes.link}
              style={{fontSize: 18}}

            >
              Products
            </Link>
            <Link
              variant="button"
              color="textPrimary"
              href="#"
              className={classes.link}
              style={{fontSize: 18}}

            >
              My Orders
            </Link>
          </nav>
          <Button
            href="#"
            color="primary"
            variant="outlined"
            className={classes.link}
            style={{fontSize: 16}}

          >
            Sign Out
          </Button>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default NavBar
