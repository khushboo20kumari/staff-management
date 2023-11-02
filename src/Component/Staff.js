// import { Button } from "@mui/base";
import { TextField, Card, Box, Typography, Avatar, Button } from "@mui/material";
import { useState } from "react";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


function Staff() {
    const [name, setName] = useState('')
    const [date, setDate] = useState('')
    const [attendance, setAttendance] = useState('')
    // const [item, setItem] = useState([])

    const HandelName = (e) => {
        setName(e.target.value)

    }

    const onChangeName = (e) => {
        setName(e.target.value)
    }


    const OnChangeDate = (e) => {
        setDate(e.target.value)
    }

    const onChangeAttendenc = (e) => {
        setAttendance(e.target.value)
    }



    const HandleClick = () => {
        setAttendance("")
        setDate("")
        setName("")
        const data = { name, date, attendance }

        fetch("http://localhost:3000/Attendance", {
            method: "POST",
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then((res) => {
            alert("succefully save data in json")
        })

        console.log(data, "dataaaa")
    }


    return (
        <>
            <center>
                <Card sx={{ maxWidth: 340, marginTop: "100px", background: "#18224B", color: "white", height: "400px", borderRadius: "20px" }} className='signup'>
                    <Avatar style={{ marginTop: "20px" }} src="/broken-image.jpg" />
                    <Typography style={{ marginTop: "10px" }}>Staff Page</Typography>
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

                                onChange={onChangeName}

                            />
                            <TextField

                                label="LastName"
                                variant="standard"
                                color="secondary"
                                focused
                                onClick={OnChangeDate}

                            />

                        </div>
                        <LocalizationProvider dateAdapter={AdapterDayjs} onChange={onChangeAttendenc}>
                            <DatePicker />
                        </LocalizationProvider>



                        <Button style={{ width: "70%", borderRadius: "20px", marginTop: "30px" }} variant='contained' onClick={HandleClick}>Save</Button><br></br>


                    </Box>
                </Card>

            </center >
        </>
    )
}
export default Staff;
