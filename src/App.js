// import NextPage from "./Component/NextPage";
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Component } from "react";
import Login from "./Component/Login";
import RegisterForm from "./Component/RegisterForm";
import Navbar from "./Navbar";
import Home from "./Component/Home"
// import CamparePassword from "./Component/ComparePassword";
function App() {

  // const getLogin=(loginPassword)=>{
  //   console.log(loginPassword,"loginPassword")


  // }

  // const getSignup=(signupPassword)=>{
  //       console.log(signupPassword,"signupPassword")
  // }
  
  // console.log(loginPassword,"looo")

  return (

    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar/>}>
            <Route path="home" element={<Home />} />
            <Route path="signup"  element={<RegisterForm/>}/>
            <Route path="login" element={<Login/>} />
         
          </Route>
        </Routes>
      </BrowserRouter>
     {/* <CamparePassword/> */}

      {/* <NextPage/> */}
    </div>
  )
}
export default App;