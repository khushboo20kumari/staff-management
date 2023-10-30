
import * as React from 'react';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import Select from "@mui/material";
// import MenuItem from "@mui/material";
import {Select,MenuItem} from '@mui/material';
import { TextField, Box } from "@mui/material";
function Login() {
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
                            label="Name" ></TextField><br></br>

                        <Select value="" displayEmpty style={{width:"65%"}}>
                            <MenuItem value="">About</MenuItem>
                            <MenuItem value={1}>BLogs</MenuItem>
                            <MenuItem value={2}>Contect</MenuItem>
                        </Select><br></br>


                        <Button style={{marginTop:"20px"}} variant="contained">Login</Button><br></br>

                        <Typography>Do you have an account ?</Typography><Button style={{marginTop:"20px"}} >Sign in </Button><br></br>

                    </Box>

                </Card>

            </center>

        </>
    )
}
export default Login;
