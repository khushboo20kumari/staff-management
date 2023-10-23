import { AppBar, Toolbar, Typography,Container, Button } from "@mui/material";
import NextPage from "./Component/NextPage";
function Navbar() {
    return (
        <>
            <AppBar>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <NextPage/>
                          {/* <Typography> </Typography> */}
                    </Toolbar>
                </Container>

            </AppBar>
        </>
    )
}
export default Navbar;