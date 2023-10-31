// import {Card,TableCell,TableBody,TableRow,TableContainer,CardContent,TableHead,Grid} from "@mui/material";
import { Card, CardContent, Grid, Table, TableRow, TableCell, TableHead, TableBody } from "@mui/material"
function TableData({ userData }) {

    console.log(userData, "data")

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
                                            <TableCell style={{textAlign:"center"}}>name</TableCell>
                                            <TableCell style={{textAlign:"center"}}>age</TableCell>
                                            <TableCell style={{textAlign:"center"}}>email</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {userData.map((item) => (
                                            <TableRow>
                                                <TableCell style={{textAlign:"center"}}>{item.id}</TableCell>
                                                <TableCell style={{textAlign:"center"}}>{item.lastName}</TableCell>
                                                <TableCell style={{textAlign:"center"}}>{item.gender}</TableCell>
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