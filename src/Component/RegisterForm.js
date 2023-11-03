import { Button, TextField, Typography, Card, Box, Avatar } from '@mui/material';
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

    const [mobailnumErro, setMobailnumErro] = useState(false)
    const [errorMessage, setErrorMessage] = useState("");

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

        if (mobail.length > 10) {
            setMobailnumErro(true)
            alert("Phone Number should be 10 digit")

        }
        else {
            setMobailnumErro(false)
        }

    }

    const HandlerPassword = (e) => {
        setPassword(e.target.value)
        var lowerCase = /[a-z]/g;
        var upperCase = /[A-Z]/g;
        var numbers = /[0-9]/g;
        
        if (!password.match(lowerCase)){
            setErrorMessage("Password should contains lowercase letters!")
        }
        else if (!password.match(upperCase)){
            setErrorMessage("Password should contain uppercase letters!")
        }
        else if (!password.match(numbers)){
            setErrorMessage("Password should contains numbers also!")
        }else if (password<10){
            setMobailnumErro("Password length should be more than 10.")
        }else{
            setMobailnumErro("Password is strong!")
        }
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

        const data = { firstName, lastName, gender, attendance, date, password, genderData, mobail }

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
                                label="FirstName"
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

                                label="attendance"
                                variant="standard"
                                color="secondary"
                                focused
                                onChange={HandlerAttendance} value={attendance}
                            />

                        </div>
                        <div>
                            <TextField

                                label="Mobail"
                                variant="standard"
                                color="secondary"
                                focused
                                onChange={handlerMobail} value={mobail}
                            />
                            <TextField
                                label="destination"
                                variant="standard"
                                color="secondary"
                                focused
                                onChange={HandelerDesignation} value={destination}
                            />

                        </div>
                        <div>

                            <TextField
                                label="Date"
                                variant="standard"
                                color="secondary"
                                focused
                                onChange={HandelrDate} value={date}
                            />

                            <TextField



                                label="Password"
                                variant="standard"
                                color="secondary"
                                focused
                                onChange={HandlerPassword} value={password}
                            />
                            <p style = {{ color: "red" }}>{errorMessage}</p>

                        </div>
                        <Button style={{ width: "70%", borderRadius: "20px", marginTop: "30px" }} variant='contained' onClick={HandlerSaveButton}>Save</Button>
                    </Box>
                </Card>
            </center >


        </>
    )
}

export default RegisterForm;

