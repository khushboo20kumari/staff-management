import { Button, TextField, Typography, Card,Box, Avatar } from '@mui/material';
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

        fetch("http://localhost:3000/Employee", {
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


            <center>
                {/* <Card sx={{ maxWidth: 345, marginTop: "100px" }}>
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 2, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >

                        <Avatar style={{marginTop:"20px"}} src="/broken-image.jpg" />

                        <Typography>Register Form</Typography><br></br>

                        <TextField id="outlined-basic" variant="outlined" label="First Name" onChange={HandlerFirstName} value={firstName}></TextField><br></br>

                        <TextField id="outlined-basic" label="Last Name" onChange={HandlerLastName} value={lastName}></TextField><br></br>

                        <TextField id="outlined-basic" label="Mobail" onChange={handlerMobail} value={mobail}></TextField><br></br>

                        <TextField id="outlined-basic" label="designation" onChange={HandelerDesignation} value={destination}></TextField><br></br>


                        <TextField id="outlined-basic" label="Date" onChange={HandelrDate} value={date}></TextField><br></br>
                        <TextField id="outlined-basic" onChange={HandlerPassword} value={password}></TextField><br></br>


                        <TextField id="outlined-basic" variant="outlined" label="Attendance" onChange={HandlerAttendance} value={attendance}></TextField><br></br>
                        <lebel>Male</lebel>
                        <Radio onChange={HandlerGender} value={male}></Radio><br></br>
                        <label >female</label>
                        <Radio onChange={HandlerGender} value={female}></Radio><br></br>
                        <label>other</label>
                        <Radio onChange={HandlerGender} value={other}></Radio><br></br>

                        <Button variant='contained' onClick={HandlerSaveButton}>Add</Button><br></br>





                    </Box>

                </Card>
 */}


                <Card sx={{ maxWidth: 600, marginTop: "100px", background: "#18224B", color: "white" }} className='signup'>
                    <Avatar style={{ marginTop: "20px" }} src="/broken-image.jpg" />
                    <Typography style={{ marginTop: "10px" }}>Register Form</Typography>
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
                                onChange={HandlerFirstName} value={firstName}
                            />
                            <TextField

                                label="LastName"
                                variant="standard"
                                color="secondary"
                                focused
                                onChange={HandlerLastName} value={lastName}
                            />

                        </div>
                        <div>
                            <TextField

                                label="LastName"
                                variant="standard"
                                color="secondary"
                                focused
                                onChange={HandlerAttendance} value={attendance}
                            />

                        </div>
                        <div>
                            <TextField

                                label="LastName"
                                variant="standard"
                                color="secondary"
                                focused
                                onChange={handlerMobail} value={mobail}
                            />
                            <TextField
                                label="LastName"
                                variant="standard"
                                color="secondary"
                                focused
                                onChange={HandelerDesignation} value={destination}
                            />
                        </div>
                        <div>

                            <TextField
                                label="LastName"
                                variant="standard"
                                color="secondary"
                                focused
                                onChange={HandelrDate} value={date}
                            />

                            <TextField



                                label="LastName"
                                variant="standard"
                                color="secondary"
                                focused
                                onChange={HandlerPassword} value={password}
                            />

                        </div>
                        <Button style={{ width: "70%", borderRadius: "20px", marginTop: "30px" }} variant='contained' onClick={HandlerSaveButton}>Save</Button>
                    </Box>
                </Card>
            </center >


        </>
    )
}

export default RegisterForm;

