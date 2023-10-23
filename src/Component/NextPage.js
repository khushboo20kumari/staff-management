import { useState } from "react";
import Login from "./Login";
import RegisterForm from "./RegisterForm";
// import Staff from "./Staff";
// import Admin from "./Admin";
function NextPage(){
    
    // const [data,setData]=useState(false)
    
    // const HanlderNextPage=()=>{
    //     setData(true)
    // }

    function getData(password){
        console.log(password,"pass")
        
    }
    
    function signupData(signup){
        console.log(signup)
        
    }

    return(
        <>
        <RegisterForm signupData={signupData}></RegisterForm>
        <Login getData={getData}/>
        {/* <Staff/> */}
        {/* <Admin/> */}
         {/* <button onClick={HanlderNextPage}>Next page</button>
         {data && <RegisterForm/>} */}
        </>
    )
}
export default NextPage;