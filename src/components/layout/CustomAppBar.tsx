import { AppBar, Toolbar, Typography } from "@mui/material";
//import AppBarBackButton from "./app-bar-back-button";

const CustomAppBar = () => {
    return <AppBar position="static">
        <Toolbar>
            {/* <AppBarBackButton /> */}
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Job Application Tracker
            </Typography>
        </Toolbar>
    </AppBar>
}

export default CustomAppBar;