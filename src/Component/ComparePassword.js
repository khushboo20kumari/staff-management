import { useEffect, useState } from "react";

function CamparePassword(){

    const [loginPassword,setLoginPassword]=useState(null)

    const [signupPassword,setSignupPassword]=useState(null)

    const fetchDataLoginPassword=()=>{
        fetch("http://localhost:3000/password").then((res)=>{
            return res.json()
        }).then((res)=>{
            setLoginPassword(res)
        })
    }
    
    useEffect(()=>{
        fetchDataLoginPassword()
    },[])

    const fetchDataSignupPassword=()=>{
        fetch("http://localhost:3000/Employee").then((res)=>{
            return res.json()
        }).then((res)=>{
            setSignupPassword(res)
        })
    }

    useEffect(()=>{
        fetchDataSignupPassword()
    })
    
    // console.log(loginPassword,"khushboo")
    // console.log(signupPassword,"vidhi")

    // console.log(loginPssassword,"khushboo")
    // console.log(signupPassword,"vidhi")

    
    // const signup=loginPassword.map(item => item.name);
    // console.log(signup,"signup") 

    return(
        <>

        </>
    )
}
export default CamparePassword;