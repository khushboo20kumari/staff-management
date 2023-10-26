
import { useState } from "react";
import * as React from 'react';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useEffect } from "react";
import { TextField, Box } from "@mui/material";
function Login() {

    const [name, setName] = useState('')

    const [signupPassword, setSignupPassword] = useState(null)
    const [password, setPassword] = useState('')

    const [data, setData] = useState([])

    const fetchDataSignupPassword = () => {
        fetch("http://localhost:3000/Employee").then((res) => {
            return res.json()
        }).then((res) => {
            setSignupPassword(res)
        })
    }

    useEffect(() => {
        fetchDataSignupPassword()
    })

    const HandlePassword = (e) => {
        setPassword(e.target.value)

    }

    const HandleName = (e) => {
        setName(e.target.value)
    }

    const HandlerClick = () => {
        setPassword('')
        setName('')

        setData([...data, { password }])
    }
    const sin=data.map(item=>item.password)
    for (var i in sin){
        var a=sin[i]
         
    }
    // console.log(a,"aaaaa")

    const signup = signupPassword.map(item => item.password);
    
    console.log(signup)
    // console.log(signup,"sssss")
    // var p = signup.includes(a)
    // console.log(p,"aaaaaa")


    
    
    return (
        <>

            <center>

                <Card sx={{ maxWidth: 345, height: "400px", marginTop: "200px" }}>
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 2, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >


                        <Typography variant="h5" style={{ fontSize: "20px" }}>Login Page</Typography>

                        <TextField id="outlined-error"
                            label="Name" onChange={HandleName} value={name}></TextField><br></br>

                        <TextField id="outlined-error"
                            label="Password" onChange={HandlePassword} value={password}></TextField><br></br>

                        <Button variant="contained" onClick={HandlerClick}>Login</Button>

                    </Box>

                </Card>

            </center>

        </>
    )
}
export default Login;
