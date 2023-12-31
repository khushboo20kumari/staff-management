import { Card, TextField, CardContent, Grid, Button } from "@mui/material";
import { useEffect, useState } from "react";

import TableData from "./TableData";

function Supervisor() {

    const [search, setSearch] = useState("")

    const [userData, setUserData] = useState([])

    const [data,setData]=useState([])

    const HandlenChange = (e) => {
        setSearch(e.target.value)
    }

    const fetchBar = () => {
        fetch("http://localhost:3000/Employee").then((res) => {
            return res.json()
        }).then((res) => {
            setUserData(res)
        })
    }

    useEffect(() => {
        fetchBar()
    }, [])


    // const filteritem = userData.filter(item => {

    //     const data=item.degignation === item.degignation.toLowerCase() === search.toLowerCase();
    //     setData(data)
    // })

    const handleSearch = () => {

        const filteredData = userData.filter(item => item.attendance.toLowerCase() === search.toLowerCase());
        setData(filteredData)
        // console.log(filteredData, "filteredData");
    }

    console.log(data,"ssss")

    // console.log(data,"data")
// 

    return (
        <>
            <Card container justifyContent="center" style={{ backgroundColor: "#337CCF", height: "80px" }}>
                <CardContent>
                    <Grid
                        align="center"
                        container
                        direction="column"
                        justify="center"
                        spacing={0}
                    >
                        <Grid item>

                            
                             <TextField
                                label="Standard warning"
                                variant="standard"
                                color="success"
                                focused
                                onChange={HandlenChange}
                                value={search}
                                // onChange={HandlerFirstName} value={firstName}
                            />

                            <Button
                                
                                onClick={handleSearch}
                                variant="contained"

                                style={{ fontSize: "16px", marginLeft: "5px", height: "50px" }}

                                color="primary"


                            >
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>Search

                            </Button>


                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
            <TableData userData={data}/>

        </>
    )
}
export default Supervisor;