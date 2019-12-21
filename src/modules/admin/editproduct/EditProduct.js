
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";

import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

const EditProduct = () => {
  const classes = useStyles();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 50
      }}
    >
      <grid sm={12}>
        <Typography component="h1" variant="h4">
          Edit Product
        </Typography>
      </grid>
      <Card
        className={classes.card}
        sm={12}
        style={{
          marginTop: 30,
          padding: 30
        }}
      >
        <CardContent
          style={{
            padding: 10
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="name"
                id="outlined-basic"
                label="Name"
                variant="outlined"
                fullWidth
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                name="price"
                id="outlined-basic"
                label="Price"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="description"
                id="outlined-basic"
                label="Description"
                variant="outlined"
                multiline
                rows="4"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="imgURL"
                id="outlined-basic"
                label="Image URL"
                variant="outlined"
                fullWidth
              />
            </Grid>

            <FormControl
              variant="outlined"
              className={classes.formControl}
              fullWidth
            >
              <InputLabel
                // ref={inputLabel}
                id="demo-simple-select-outlined-label"
              >
                Category
              </InputLabel>
              <Select
                fullWidth
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <Grid item xs={6}>
              <Button
                className="addBTN"
                variant="contained"
                color="primary"
                fullWidth
              >
                Edit
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                className="addBTN"
                variant="contained"
                color="secondary"
                fullWidth
              >
                Delete
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

export default EditProduct;