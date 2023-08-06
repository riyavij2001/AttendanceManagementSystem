import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
// import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        backgroundColor: "#331D2C",
                    }}
                >
                    <Typography variant="h6" color="#EFE1D1" component="div">
                        Roster Pi
                    </Typography>
                    <Typography variant="h8" color="#EFE1D1" component="div">
                        Contact Us
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
