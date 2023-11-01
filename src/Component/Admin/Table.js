// import { Button, Card, TextField, Typography, Box } from "@mui/material";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
function Table() {
    const [data, setData] = useState([])
    // const [firstName, setFirstName] = useState("")

    // const [lastName, setLastName] = useState("")
    // const [gender, setGender] = useState("")

    // const [attendance, setAttendance] = useState("")
    // const [date, setDate] = useState("")
    // const [password, setPassword] = useState("")




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



    const onDelete = (id) => {
        fetch(`http://localhost:3000/Employee/${id}`, {
            method: "DELETE",
        }).then((res) => {
            res.json().then((res) => {
                console.log(res)
                fetchData()
            })
        })

    }

    // const HandleFirstName = (e) => {
    //     setFirstName(e.target.value)
    // }

    // const HandlelastName = (e) => {
    //     setLastName(e.target.value)

    // }

    // const Handleattendance = (e) => {
    //     setAttendance(e.target.value)

    // }

    // const Handlegender = (e) => {
    //     setGender(e.target.value)

    // }

    // const Handledate = (e) => {
    //     setDate(e.target.value)
    // }

    // const onUpdate = (id) => {
    //     let item=id[id-1]
    //     setFirstName(item.firstName)
    //     setAttendance(item.attendance)
    //     setDate(item.date)
    //     setGender(item.gender)
    //     setLastName(item.lastName)


        

    // }

    

    // const HandleUpdateUserItem = () => {

    //     const userItem = { firstName, lastName, gender, attendance, date}

    //     fetch(`http://localhost:3000/Employee/${id}`, {
    //         method: "PUT",
    //         headers: {
    //             "Accept": 'application/json',
    //             'content-Type':'application/json'
    //         },
    //         body: JSON.stringify(userItem)


    //     }).then((res)=>{
    //         res.json((res)=>{
    //             fetchData()
    //             alert("PUt method is seccfuly working ")
    //         })
           
    //     })



    // }


    return (


        <>

{/* 
            <center>

                <Card sx={{ maxWidth: 345, height: "400px", marginTop: "100px" }}>
                    <Typography style={{ marginTop: "40px" }}>Update</Typography>
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 2, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >

                        <TextField onChange={HandleFirstName}></TextField><br></br>
                        <TextField onChange={HandlelastName}></TextField><br></br>
                        <TextField onChange={Handlegender}></TextField><br></br>
                        <TextField onChange={Handleattendance}></TextField><br></br>
                        <TextField onChange={Handledate}></TextField>
                        <Button onClick={HandleUpdateUserItem}>Update</Button><br></br>



                    </Box>

                </Card>

            </center > */}


            <table border="1" className="table">

                <tr>

                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>gender</th>
                    <th>attendance</th>
                    <th>date</th>

                </tr>

                {data.map((item) => (

                    <tr>

                        <td>{item.firstName}</td>
                        <td>{item.lastName}</td>
                        <td>{item.gender}</td>
                        <td>{item.attendance}</td>
                        <td>{item.date}</td>
                        <td>
                            {/* <Button variant="contained" onClick={()=>onUpdate(item.id)}>Update</Button> */}
                            <Button variant="contained" onClick={()=> onDelete(item.id)}>Delete</Button>
                        </td>

                    </tr>

                ))}
            </table>

        </>
    )
}
export default Table;

