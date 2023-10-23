import { useState } from "react";

function Redio(){

    const [data,setData]=useState([])

    const [male,setMale]=useState('')
    const [female,setFemale]=useState('')

    const HandleChange=(e)=>{
        setMale(e.target.value)
        setFemale(e.target.value)
    }

    const HandlerSave=()=>{
        setData([...data,male || female])
        setFemale('')
        male('')
    }

    
    return (
        <>
            <form action="/action_page.php">

                <p>Please select your Gender</p>

                <input onChange={HandleChange} value={male} type="radio" />
                <label for="Male">Male</label><br></br>

                <input onChange={HandleChange} type="radio" value={female} />
                <label for="female">Female</label>
                
                <button onClick={HandlerSave}>save</button>
            </form>

        </>
    )
}
export default Redio;