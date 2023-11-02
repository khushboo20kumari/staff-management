import "./App.css"
import Login from "./Component/Login";
import RegisterForm from "./Component/RegisterForm";
import Supervisor from "./Component/SupervisorTracker/Supervisor";
import Staff from "./Component/Staff";
import MainComAdmin from "./Component/Admin/MainComAdmin";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 

function App() {

  return (

    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />}>
            <Route path="/staff" element={<Staff />} />
            <Route path="/admin" element={<MainComAdmin />} />
            <Route path="/signin" element={<RegisterForm />} />
            <Route path="/supervisor" element={<Supervisor />} />

          </Route>
        </Routes>
      </Router>





    </div>
  )
}
export default App;
