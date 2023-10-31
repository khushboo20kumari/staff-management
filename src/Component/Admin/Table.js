import { Button, Card, TextField,Typography,Box} from "@mui/material";
import { useEffect, useState } from "react";

function Table() {
    const [data, setData] = useState([])

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
    const onUpdate = () => {

    }


    return (


        <>


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

                        <TextField></TextField><br></br>
                        <TextField></TextField><br></br>
                        <TextField></TextField><br></br>
                        <TextField></TextField><br></br>
                        <TextField></TextField><br></br>
                        <Button>Update</Button><br></br>



                    </Box>

                </Card>

            </center >


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
                            <Button variant="contained" onClick={onUpdate}>Update</Button>
                            <Button variant="contained" onClick={() => onDelete(item.id)}>Delete</Button>
                        </td>

                    </tr>

                ))}
            </table>

        </>
    )
}
export default Table;

