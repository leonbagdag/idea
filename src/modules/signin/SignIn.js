import React , {useState}from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: 200,
      },
    },
  }));
  
const SignIn = () =>{

    const [user,setUser] = useState({
        email: '',
        password: ''
      });
    const inputChange = (event) =>{
      setUser({...user,[event.target.name]: event.target.value });
    }
    const signIn = () =>{
      // validate al data
      
      // call back-end wa adelo al user value 
      
    }
      return(
       <div>
       <h1>Online Shop</h1>
        <img src="https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/06/shopping-online.jpg" alt="cart"></img>
        <h3>Sign in</h3>
        <TextField name="email" id="outlined-basic" label="Outlined" variant="outlined" onChange={inputChange}/>
        <TextField name="password" id="outlined-basic" label="Outlined" variant="outlined" onChange={inputChange}/>
        <Button variant="contained" color="primary" onClick={signIn}>
      Primary
    </Button>
    <a href="">New Customer? Sign up!</a>
       </div>
      );
}

export default SignIn;