// import { Button, Card, TextField, Typography, Box } from "@mui/material";
import { useEffect, useState } from "react";
import { Button, TableCell, TableBody, TableRow, Grid, Table, TableHead, Card, CardContent } from "@mui/material";
function TableData() {
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


            <Card container justifyContent="center">

                <CardContent>

                    <Grid
                        align="center"
                        container
                        direction="column"
                        justify="center"
                        spacing={0}
                    >

                        <Grid>
                            <CardContent>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell style={{ textAlign: "center" ,fontSize:"15px"}}>Firstname</TableCell>
                                            <TableCell style={{ textAlign: "center" ,fontSize:"15px"}}>LastName</TableCell>
                                            <TableCell style={{ textAlign: "center" ,fontSize:"15px"}}>Attendance</TableCell>
                                            <TableCell style={{ textAlign: "center" ,fontSize:"15px"}}>gender</TableCell>
                                            <TableCell style={{ textAlign: "center" ,fontSize:"15px"}}>date</TableCell>

                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {data.map((item) => (

                                            <TableRow>
                                                <TableCell style={{ textAlign: "center" }}>{item.firstName}</TableCell>
                                                <TableCell style={{ textAlign: "center" }}>{item.lastName}</TableCell>
                                                <TableCell style={{ textAlign: "center" }}>{item.attendance}</TableCell>
                                                <TableCell style={{ textAlign: "center" }}>{item.gender}</TableCell>
                                                <TableCell style={{ textAlign: "center" }}>{item.date}</TableCell>
                                                <Button variant="contained" onClick={() => onDelete(item.id)}>Delete</Button>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </CardContent>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>

        </>
    )
}
export default TableData;

