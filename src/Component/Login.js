import { Button, TextField, Typography } from "@mui/material";

function Login(){
    return(
        <>

        <Typography>Login Page</Typography>

        <TextField onChange={HandlePassword}></TextField>

        <TextField onChange={HandleName}></TextField>

        <Button onClick={HandlerClick}>Login</Button>
        
        </>
    )
}
export default Login;