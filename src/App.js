import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Component/Login";
import RegisterForm from "./Component/RegisterForm";
// import  from "./Navbar";
import Supervisor from "./Component/SupervisorTracker/Supervisor";
import Staff from "./Component/Staff";
import MainComAdmin from "./Component/Admin/MainComAdmin";
function App() {

  return (

    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}>
            <Route path="staff" element={<Staff/>} />   
            <Route path="admin" element={<MainComAdmin/>}/>
            <Route path="signin"  element={<RegisterForm/>}/>
            <Route path="supervisor" element={<Supervisor/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App;

