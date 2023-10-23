import { Button, TextField, Typography } from "@mui/material";
import { useState } from "react";

function Login(props){

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const HandlePassword = (e) => {
        setPassword(e.target.value)

    }

    const HandleName = (e) => {
        setName(e.target.value)
    }

    const HandlerClick = () => {

        const login = { name, password }
        setName('')
        setPassword('')

        fetch("http://localhost:3004/password", {

            method: "POST",
            headers: {

                "content-type": "application/json"
            },
            body: JSON.stringify(login)

        })
        props.getData(login)
        console.log(login,"login")
    }
    



    return (
        <>

            <Typography>Login Page</Typography>

            <TextField onChange={HandleName} value={name}></TextField><br></br>

            <TextField onChange={HandlePassword} value={password}></TextField><br></br>

            <Button variant="contained" onClick={HandlerClick}>Login</Button><br></br>

            

        </>
    )
}
export default Login;


//    props.getData(dataArr)