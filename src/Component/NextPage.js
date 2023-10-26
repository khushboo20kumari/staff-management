// import { useState } from "react";

// import Login from "./Login";
// import RegisterForm from "./RegisterForm";

// import Staff from "./Staff";
// import { useState } from "react";
// import MainComAdmin from "./Admin/MainComAdmin"
// import Admin from "./Admin";
// import Admin from "./Admin/AddUser";
// import { Button } from "@mui/material";

function NextPage() {
    // const [showData,setShowData]=useState(false)


    // function getData(password) {
    //     console.log(password, "pass")
    // }

    // function signupData(signup) {
    //     console.log(signup, "sigunup")

    // }
  


    return (
        <>
            {/* <RegisterForm signupData={signupData}></RegisterForm> */}
            <Login getData={getData} />



            {/* <Staff/> */}
            {/* <MainComAdmin/> */}
        
            {/* <button onClick={HanlderNextPage}>Next page</button>
         {data && <RegisterForm/>} */}
        </>
    )
}
export default NextPage;