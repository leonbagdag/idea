import React , {useState,useEffect}from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel'
import Navigatorbar from '../navigatorBar/Navigatorbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const Products=()=>
{
    return (
        <div>
        <Navigatorbar />
        <FormLabel component="Filter">Filter</FormLabel>
        <RadioGroup aria-label="Filter" name="Filter">
          <FormControlLabel value="electornics" control={<Radio />} label="Electornics" />
          <FormControlLabel value="fashion" control={<Radio />} label="Fashion" />
          <FormControlLabel value="mobile" control={<Radio />} label="Mobile and Tablets" />
          <FormControlLabel value="appliancics" control={<Radio />} label="Appliancics" />
          <FormControlLabel
            value="disabled"
            disabled
            control={<Radio />}
            label="(Disabled option)"
          />
        </RadioGroup>
        <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography component="div" style={{ backgroundColor: '#000000', height: '80vh' , width:'50vw' }} />

      </Container>
    </React.Fragment>

  
        </div>

    );
}

export default Products ;