import { useState } from 'react'
import {Box, TextField, Button, styled} from '@mui/material'

const Component = styled(Box)`
width: 500px;
margin: auto;
box-shadow: 5px 2px 5px 2px;
`
const Image = styled('img')({
    width: 400,
    margin: 'auto',
    display: 'flex',
    padding: '50px 0 0'

})
const Wrapper = styled(Box)`
    padding: 25px 35px 20px;
    display: flex;
    flex-direction: column;
    &>div,&> button{
        margin-top: 15px;
        border-radius: 5px;
    }
    &>a{
        margin-top: 10px
    }
`
const signupInitialVal = {
    name: '',
    email: '',
    pincode: '',
    password: ''
}
const Login = () => {
    const imgURL = 'https://hips.hearstapps.com/hmg-prod/images/index-1666029047.jpg?crop=0.502xw:1.00xh;0.249xw,0&resize=640:*';
    const [account, toggleAccount] = useState('login');
    const [signup, setSignup] = useState(signupInitialVal);

    const toggleSignup = () =>{
        account === 'login' ? toggleAccount('signup'): toggleAccount('login');
    }
    const onInputChange = (e) => {
        setSignup({...signup, [e.target.name]:e.target.value});
    }
    return(
        <Component>
            <Box>
            <Image src = {imgURL} alt = "login"/>
            {
                account === 'login' ?
            <Wrapper>
            <TextField id="Email Id" label="Email Id" variant="outlined" />
            <TextField id="Password" label="Password" variant="outlined" />
            <Button variant='contained'>Login</Button>
            <Button onClick={() => toggleSignup()}  variant="outlined" href="#outlined-buttons">
            Create New Account
            </Button>
            </Wrapper>
           :
            <Wrapper>
            <TextField onChange = {() => onInputChange()} name = 'name' label="Name" variant="outlined" />
            <TextField onChange = {() => onInputChange()} name = 'email'  label="Email Id" variant="outlined" />
            <TextField onChange = {() => onInputChange()} name = 'pincode'  label="Pin Code" variant="outlined" />
            <TextField onChange = {() => onInputChange()} name = 'password'  label="Password" variant="outlined" />
            <TextField id="Re-enter Password" onChange = {() => onInputChange()}  name = 'password' label="Re-enter Password" variant="outlined" />
            <Button variant='contained'>Sign Up</Button>
            <Button onClick={() => toggleSignup()} variant="outlined" href="#outlined-buttons">
            Login to Existing Account
            </Button>
            </Wrapper>
            }
            </Box>
        </Component>
    )
}

export default Login;