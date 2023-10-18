import { useState } from "react";
import RegisterForm from "./RegisterForm";
function NextPage(){
    const [data,setData]=useState(false)
    const HanlderNextPage=()=>{
        setData(true)
    }
    

    return(
        <>
         <button onClick={HanlderNextPage}>Next page</button>
         {data && <RegisterForm/>}
        </>
    )
}
export default NextPage;