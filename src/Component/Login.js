import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';

import { Avatar, Typography, TextField, Box, Container, AppBar, Toolbar } from "@mui/material";
import { useNavigate, Outlet } from "react-router-dom";

import { Select, MenuItem } from '@mui/material';

function Login() {

    const [data, setData] = useState([])


    const [item, setItem] = useState("")

    const [filterItem, setFilterItem] = useState([])

    const neviget = useNavigate()



    const fetchData = () => {

        fetch("http://localhost:3000/Employee").then((res) => {
            return res.json()

        }).then((res) => {
            setData(res)

        })
    }

    useEffect(() => {

        fetchData()

    }, [])
    const onChangeHandler = (e) => {
        setItem(e.target.value)
    }

    const HandleClick = () => {
        const filterData = data.filter((user) => {
            return user.designation.toLowerCase() === item.toLowerCase();
        });
        console.log(filterData, "data")

        setFilterItem(filterData);

        if (filterItem.length > 0) {

            let destination = filterItem[0].designation;

            if (destination.toLowerCase() === "staff") {
                neviget("/staff");
            }
            else if (destination.toLowerCase()==="admin"){
                neviget("/admin")
            }
            else{
                neviget("/supervisor")
            }


        }

    }
    const HandleSignin=()=>{
        neviget("/signin")
    }
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
                <Card sx={{ maxWidth: 340, marginTop: "100px", background: "#18224B", color: "white", height: "450px", borderRadius: "20px" }} className='signup'>
                    <Avatar style={{ marginTop: "20px" }} src="/broken-image.jpg" />
                    <Typography style={{ marginTop: "10px" }}>Login Form</Typography>
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <div>
                            <TextField
                                label="Standard warning"
                                variant="standard"
                                color="secondary"
                                focused
                            />
                            <TextField

                                label="LastName"
                                variant="standard"
                                color="secondary"
                                focused
                            />
                        </div>

                        <Select value={item} onChange={onChangeHandler} displayEmpty style={{ width: "75%", marginTop: "20px" }} color="secondary"

                            focused>



                            <MenuItem value="Staff">Staff</MenuItem>
                            <MenuItem value="admin">Admin Page</MenuItem>
                            <MenuItem value="Supervisor">Supervisor Page</MenuItem>
                            <MenuItem value=""> </MenuItem>

                        </Select><br></br>


                        <Button style={{ width: "70%", borderRadius: "20px", marginTop: "30px" }} variant='contained' onClick={HandleClick}>Save</Button><br></br>

                        <Button style={{ marginTop: "20px" }} onClick={HandleSignin}>Sign in</Button><br></br>

                    </Box>
                </Card>
            </center >
            <Outlet />



        </>
    )
}
export default Login;

