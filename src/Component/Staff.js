import { Button } from "@mui/base";
import { TextField } from "@mui/material";
import { useState } from "react";

function Staff(){
    const [name,setName]=useState('')
    const [date,setDate]=useState('')
    const [attendance,setAttendance]=useState('')

    const HandelName=(e)=>{
        setName(e.target.value)

    }

    const HandleDate=(e)=>{
        setDate(e.target.value)

    }

    const HanldeAttendance=(e)=>{
        setAttendance(e.target.value)
    }

    const HanldeSave=(e)=>{
        e.preventDefault()
        fetch(" http://localhost:3004/Attendance", {
            method: "POST",
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify({name,date,attendance})
        }).then((res) => {
            alert("succefully save data in json")
        })

    }


    return(
        <>
        <TextField onClick={HandelName}></TextField><br></br>
        <TextField onClick={HandleDate}></TextField><br></br>

        <TextField onClick={HanldeAttendance}></TextField><br></br>
        <Button onClick={HanldeSave}>Save</Button><br></br>
        </>
    )
}
export default Staff;
