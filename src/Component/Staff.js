import { Button } from "@mui/base";
import { TextField, Card, Box, Typography } from "@mui/material";
import { useState } from "react";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


function Staff() {
    const [name, setName] = useState('')
    const [date, setDate] = useState('')
    const [attendance, setAttendance] = useState('')

    const HandelName = (e) => {
        setName(e.target.value)

    }

    
    const HanldeAttendance = (e) => {
        setAttendance(e.target.value)
    }

    const HanldeSave = (e) => {
        e.preventDefault()
        fetch(" http://localhost:3004/Attendance", {
            method: "POST",
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify({ name, date, attendance })
        }).then((res) => {
            alert("succefully save data in json")
        })

    }


    return (
        <>
            <center>

                <Card sx={{ maxWidth: 345, height: "400px", marginTop: "100px" }}>
                    <Typography style={{marginTop:"40px"}}>Staff Page</Typography>
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 2, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >

                        <TextField label="name" onClick={HandelName}></TextField><br></br>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker />
                        </LocalizationProvider>

                        <TextField label="Attendance" onClick={HanldeAttendance}></TextField><br></br>
                        <Button onClick={HanldeSave} variant="contained">Save</Button><br></br>
                        


                    </Box>

                </Card>

            </center >
        </>
    )
}
export default Staff;
