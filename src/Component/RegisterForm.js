import { Button, CardContent, Grid, TextField, Typography, Card, Radio, Box } from '@mui/material';
import { useState } from 'react';

function RegisterForm() {

    const [firstName, setFirstName] = useState('')

    const [lastName, setLastName] = useState('')

    const [password, setPassword] = useState('')

    const [gender, setGender] = useState('')

    const [destination, setDestination] = useState('')

    const [date, setDate] = useState('')

    const [mobail, setMobail] = useState('')

    const [attendance, setAttendance] = useState('')

    const [male, setMale] = useState('')

    const [female, setFemale] = useState('')

    const [other, setOther] = useState('')



    const HandlerFirstName = (e) => {
        setFirstName(e.target.value)
    }

    const HandlerLastName = (e) => {
        setLastName(e.target.value)

    }

    const HandelerDesignation = (e) => {
        setDestination(e.target.value)
    }

    const HandelrDate = (e) => {
        setDate(e.target.value)

    }



    const handlerMobail = (e) => {
        setMobail(e.target.value)
    }

    const HandlerPassword = (e) => {
        setPassword(e.target.value)
    }

    const HandlerAttendance = (e) => {
        setAttendance(e.target.value)
    }

    const HandlerGender = (e) => {

        setFemale(e.target.value)
        setMale(e.target.value)
        setOther(e.target.value)

    }

    const HandlerSaveButton = (e) => {

        e.preventDefault()
        setFemale('')
        setMale('')
        setOther('')
        setLastName('')
        setFirstName('')
        setAttendance('')
        setDate('')
        setDestination('')
        setGender('')
        setMobail('')
        setPassword('')

        const genderData = male || female || other

        const data = { firstName, lastName, gender, attendance, date, password, genderData }

        fetch("http://localhost:3004/Employee", {
            method: "POST",
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then((res) => {
            alert("succefully save data in json")
        })
    
    }

    return (
        <>





            <Card container
                justifyContent="center" style={{ backgroundColor: "#2A3132" }}>

                <CardContent>

                    <Grid

                        align="center"
                        container
                        direction="column"
                        justify="center"
                        spacing={0}
                        style={{ width: "100%" }}

                    >

                        <Grid item style={{ display: "flex" }}>
                            <Box style={{ background: "white", width: "50%" }}

                                component="form"
                                sx={{
                                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                                }}
                                noValidate
                                autoComplete="off"
                            >


                                <Typography>Register Form</Typography><br></br>

                                <TextField id="outlined-basic" variant="outlined" label="First Name" onChange={HandlerFirstName} value={firstName}></TextField><br></br>

                                <TextField id="outlined-basic" label="Last Name" onChange={HandlerLastName} value={lastName}></TextField><br></br>

                                <TextField id="outlined-basic" label="Mobail" onChange={handlerMobail} value={mobail}></TextField><br></br>

                                <TextField id="outlined-basic" label="designation" onChange={HandelerDesignation} value={destination}></TextField><br></br>


                                <TextField id="outlined-basic" label="Date" onChange={HandelrDate} value={date}></TextField><br></br>
                                <TextField id="outlined-basic" onChange={HandlerPassword} value={password}></TextField><br></br>

                                {/* <TextField variant='standard' lebel="Password" onChange={HandlerPassword} value={password}></TextField><br></br> */}

                                <TextField id="outlined-basic" label="Outlined" variant="outlined" label="Attendance" onChange={HandlerAttendance} value={attendance}></TextField><br></br>
                                <lebel>Male</lebel>
                                <Radio onChange={HandlerGender} value={male}></Radio><br></br>
                                <label >female</label>
                                <Radio onChange={HandlerGender} value={female}></Radio><br></br>
                                <label>other</label>
                                <Radio onChange={HandlerGender} value={other}></Radio><br></br>

                                <Button variant='contained' onClick={HandlerSaveButton}>Add</Button><br></br>


                            </Box>
                            <Box style={{ background: "black", width: "50%" }}>
                                <Card>
                                    <img style={{ width: "100%", height: "700px" }} src="https://media.istockphoto.com/id/1320882544/photo/glowing-light-bulb-and-book-or-text-book-with-futuristic-icon-self-learning-or-education.jpg?s=2048x2048&w=is&k=20&c=KXVhc7o1iQ_NgS-JgNwcj0Nj2IBuLeACZUabEgHwkvI="></img>
                                </Card>
                            </Box>
                        </Grid>

                    </Grid>

                </CardContent>
            </Card>


        </>
    )
}

export default RegisterForm;

