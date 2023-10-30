
import * as React from 'react';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import { AppBar, Container, Toolbar, Avatar, Typography ,TextField,Box} from "@mui/material";
import { Outlet, Link } from "react-router-dom";
// import Select from "@mui/material";
// import MenuItem from "@mui/material";
import { Select, MenuItem } from '@mui/material';
// import { TextField, Box, Avatar } from "@mui/material";
function Login() {
    return (
        <>
            <Container>
                <AppBar>
                    <Toolbar>
                        <Typography style={{ flexGrow: "1" }}>Degital Staff Manegment Sytem</Typography>
                        <Avatar alt="Cindy Baker" src="https://media.istockphoto.com/id/1320882544/photo/glowing-light-bulb-and-book-or-text-book-with-futuristic-icon-self-learning-or-education.jpg?s=2048x2048&w=is&k=20&c=KXVhc7o1iQ_NgS-JgNwcj0Nj2IBuLeACZUabEgHwkvI=" />
                    </Toolbar>
                </AppBar >
            </Container>

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

                        <Avatar style={{ marginTop: "20px" }} src="/broken-image.jpg" />

                        <Typography variant="h5" style={{ fontSize: "20px", marginTop: "10px" }}>Login Account</Typography>

                        <TextField id="outlined-error"
                            label="Name" ></TextField><br></br>

                        <Select value="" displayEmpty style={{ width: "65%" }}>
                            <MenuItem value=""></MenuItem>
                            <MenuItem value={1}>Staff Page</MenuItem>
                            <MenuItem value={2}>Admin Page</MenuItem>
                            <MenuItem value={3}>Supervisor Page</MenuItem>
                        </Select><br></br>


                        <Button style={{ marginTop: "20px", width: "60%", borderRadius: "30px" }} variant="contained">Save</Button><br></br>

                        <Button style={{ marginTop: "20px" }}>Sign in </Button><br></br>


                    </Box>

                </Card>

            </center>
            <Outlet/>

        </>
    )
}
export default Login;
