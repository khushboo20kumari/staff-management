import { AppBar, Button, Container, Toolbar, Avatar, Typography } from "@mui/material";
import { Outlet, Link } from "react-router-dom";
// import NextPage from "./Component/NextPage";
function Navbar() {
    return (
        <>
            <Container>
                <AppBar>
                    <Toolbar>
                        <Typography style={{ flexGrow: "1" }}>Degital Staff Manegment Sytem</Typography>

                        <Button variant="contained">  <Link to="/signup">sighun</Link></Button>
                        <Button variant="contained"><Link to="/login">login</Link></Button>
                        <Avatar alt="Cindy Baker" src="https://media.istockphoto.com/id/1320882544/photo/glowing-light-bulb-and-book-or-text-book-with-futuristic-icon-self-learning-or-education.jpg?s=2048x2048&w=is&k=20&c=KXVhc7o1iQ_NgS-JgNwcj0Nj2IBuLeACZUabEgHwkvI=" />
                    </Toolbar>
                </AppBar >
            </Container>
            <Outlet />

        </>
    )
}
export default Navbar;