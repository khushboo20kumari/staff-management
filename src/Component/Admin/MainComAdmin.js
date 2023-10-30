import { Button } from "@mui/material";

import { useState } from "react";

import AddUser from "./AddUser"
import Table from "./Table"
// import Table from "./Table";

function MainComAdmin() {

    const [showData,setShowData]=useState(false)


    const HandleAddUser = () => {

        setShowData(true)

    }


    return (
        <>
            {showData ? <AddUser/> : false}

            <Button variant="contained" onClick={HandleAddUser}>AddUser</Button>
            <Table/>

            {/* <Table/> */}
            
        </>
    )
}

export default MainComAdmin;