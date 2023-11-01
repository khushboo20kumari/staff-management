import { Button } from "@mui/material";
// import DeleteMethod from "./DeleteMethod";
import { useState } from "react";

import AddUser from "./AddUser"
import TableData from "./TableData"
// import Table from "./Table";

function MainComAdmin() {

    const [showData, setShowData] = useState(false)


    const HandleAddUser = () => {

        setShowData(true)

    }


    return (
        <>
            {showData ? <AddUser /> : false}
            <center>
                <Button variant="contained"  style={{marginTop:"30px"}} onClick={HandleAddUser}>AddUser</Button>
            </center>
            <TableData />
            {/* <DeleteMethod/> */}

            {/* <Table/> */}

        </>
    )
}

export default MainComAdmin;