import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles(theme => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

const Checkout = () =>
{
    const classes = useStyles();
    const [visa,setVisa] = useState({
        cardNumber: '',
        month:'',
        year:'',
        cvv:''
    })
    const [selectedValue,setSelectedValue] = useState('Visa');
    
    const handleRadioChange = (event) =>{
        setSelectedValue(event.target.value);
    }
    const visaChange = (event) =>{
        
        setVisa({...visa, [event.target.name]:event.target.value})

    }
    const VisaFields = () => {

        return(
            <div>
                <TextField name="cardNumber" id="outlined-basic" label="Card Number" variant="outlined" onChange={visaChange}/>
    
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Month</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={visa.month}
          name="month"
          onChange={visaChange}
        >
          <MenuItem value={'Januray'}>Januray</MenuItem>
          <MenuItem value={'Febraury'}>Febraury</MenuItem>
          <MenuItem value={'March'}>March</MenuItem>
          <MenuItem value={'April'}>April</MenuItem>
          <MenuItem value={'May'}>May</MenuItem>
          <MenuItem value={'June'}>June</MenuItem>
          <MenuItem value={'July'}>July</MenuItem>
          <MenuItem value={'August'}>August</MenuItem>
          <MenuItem value={'September'}>September</MenuItem>
          <MenuItem value={'October'}>October</MenuItem>
          <MenuItem value={'November'}>November</MenuItem>
          <MenuItem value={'December'}>December</MenuItem>
        
        </Select>
      </FormControl>  
      
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Year</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={visa.year}
          name="year"
          onChange={visaChange}
        >
          <MenuItem value={2020}>2020</MenuItem>
          <MenuItem value={2021}>2021</MenuItem>
          <MenuItem value={2022}>2022</MenuItem>
          <MenuItem value={2023}>2023</MenuItem>
          <MenuItem value={2024}>2024</MenuItem>
          <MenuItem value={2025}>2025</MenuItem>
          <MenuItem value={2026}>2026</MenuItem>
          <MenuItem value={2027}>2027</MenuItem>
        </Select>
      </FormControl>
                <TextField name="cvv" id="outlined-basic" label="cvv" variant="outlined" onChange={visaChange}/>
            </div>
        )
    }
    const submitTransaction = () =>{
        if(selectedValue === 'Cash'){
            console.log("Thanks For Trusting Us")
        }
        else if(selectedValue === 'Visa'){
            //validate visa input
        
            //process payment
        }
        else{
            //call paypal service
        }
    }
    return (
        <div>
            <h1>Checkout</h1>
            
            <h3>Please Select Your Payment Method</h3>
                <div>
                        <img src="https://i0.wp.com/lovemyhair.shop/wp-content/uploads/2019/07/visa-logo.png?ssl=1" alt="Visa" height="42" width="42"/>
                        <Radio
                            checked={selectedValue === 'Visa'}
                            onChange={handleRadioChange}
                            value="Visa"
                            color="primary"
                            name="radio-button-demo"
                            inputProps={{ 'aria-label': 'A' }}
                        />
                        <img src="https://img.favpng.com/17/19/17/computer-icons-paypal-logo-png-favpng-kcc9dGJJEC42WNE8bP5VBEDDa.jpg" alt="PayPal" height="42" width="42"/>
                        
                        <Radio
                            checked={selectedValue === 'PayPal'}
                            onChange={handleRadioChange}
                            value="PayPal"
                            color="primary"
                            name="radio-button-demo"
                            inputProps={{ 'aria-label': 'B' }}
                        />
                        <img src="https://img.favpng.com/16/23/14/logo-money-png-favpng-WpK8j8ryKb8greFrrbueFqnV4.jpg" alt="Cash" height="42" width="42"/>
                        
                        <Radio
                            checked={selectedValue === 'Cash'}
                            onChange={handleRadioChange}
                            value="Cash"
                            color="primary"
                            name="radio-button-demo"
                            inputProps={{ 'aria-label': 'D' }}
                        />
                        {
                            selectedValue === 'Visa' ? VisaFields() : null
                        }
                </div>
                <Button variant="contained" color="primary" onClick={submitTransaction}>Done</Button>
        </div>
    )
}

export default Checkout;