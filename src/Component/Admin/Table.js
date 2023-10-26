// import { TableBody, TableCell, TableContainer, TableHead, TableRow ,Typography,Card,CardContent,Grid} from "@mui/material";
// import { useState } from "react";

// function Table() {
//     const [data, setData] = useState(null)

//     fetch(" http://localhost:3000/Employee").then((res) => {
//         return res.json()

//     }).then((res) => {
//         setData(res)


//     })

//     console.log(data, "kkkkkk")
//     return (


//         <>
//         <p>I am khushboo kuamrii </p>
//             <Card container
//                 justifyContent="center">
//                 <CardContent>
//                     <Grid
//                         align="center"
//                         container
//                         direction="column"
//                         justify="center"
//                         spacing={0}

//                     >


//                         <Grid item>

//                             <TableContainer>
//                                 <Table>
//                                     <TableHead>
//                                         <TableRow>
//                                             <TableCell><Typography variant="h5">FIrstName</Typography></TableCell>
//                                             <TableCell><Typography variant="h5">LastName</Typography></TableCell>
//                                             <TableCell><Typography variant="h5">Mobile</Typography></TableCell>
//                                             <TableCell><Typography variant="h5">attendance</Typography></TableCell>
//                                             <TableCell><Typography variant="h5">Gender</Typography></TableCell>
//                                             <TableCell><Typography variant="h5">designation</Typography></TableCell>
//                                             <TableCell><Typography variant="h5">date</Typography></TableCell>
//                                         </TableRow>
//                                     </TableHead>

//                                     <TableBody>



//                                         {data.map((item) => (

//                                             <TableRow key={item} style={{ fontSize: "20px" }}>

//                                                 <TableCell> {item.FirstName}</TableCell>
//                                                 <TableCell>{item.LastName}</TableCell>
//                                                 <TableCell>{item.Mobile}</TableCell>
//                                                 <TableCell>{item.attendance}</TableCell>
//                                                 <TableCell>{item.Gender}</TableCell>
//                                                 <TableCell>{item.designation}</TableCell>
//                                                 <TableCell>{item.date}</TableCell>

//                                             </TableRow>

//                                         ))}



//                                     </TableBody>
//                                 </Table>
//                             </TableContainer>

//                         </Grid>

//                     </Grid>

//                 </CardContent>
//             </Card>



//         </>
//     )
// }
// export default Table;


// import { TableBody, TableCell, TableContainer, TableHead, TableRow ,Typography,Card,CardContent,Grid} from "@mui/material";
// import { TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
// import { TableCell, TableContainer, TableHead } from "@mui/material";
import { Button } from "@mui/material";
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


    console.log(data, "kkkkkk")


    return (


        <>

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
                        <Button variant="contained">Update</Button>
                        <Button variant="contained">Delete</Button>
                        </td>

                    </tr>

                ))}
            </table>

        </>
    )
}
export default Table;


// "firstName": "khushboo",
// "lastName": "kumari",
// "gender": "Male",
// "attendance": "",
// "date": "10-10-2023",
// "password": "",
// "id": 2