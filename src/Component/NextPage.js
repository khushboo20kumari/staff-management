import { useState } from "react";
import RegisterForm from "./RegisterForm";
import Staff from "./Staff";
import Admin from "./Admin";
function NextPage(){
    // const [data,setData]=useState(false)
    
    // const HanlderNextPage=()=>{
    //     setData(true)
    // }
    

    return(
        <>
        <RegisterForm></RegisterForm>
        <Staff/>
        <Admin/>
         {/* <button onClick={HanlderNextPage}>Next page</button>
         {data && <RegisterForm/>} */}
        </>
    )
}
export default NextPage;