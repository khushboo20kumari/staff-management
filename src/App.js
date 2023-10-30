import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Component/Login";
import RegisterForm from "./Component/RegisterForm";
// import  from "./Navbar";
import Home from "./Component/Home"
function App() {

  return (

    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}>
            <Route path="home" element={<Home />} />
            <Route path="signup"  element={<RegisterForm/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App;