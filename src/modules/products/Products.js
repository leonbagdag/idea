import React , {useState,useEffect}from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel'
import Navigatorbar from '../navigatorBar/Navigatorbar';

const Products=()=>
{
    return (
        <div>
        <Navigatorbar/>
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
        </div>

    );
}

export default Products ;