import React from "react";
import { Box, Typography } from "@mui/material";

import Header from "../Header";
import { homedir } from "os";
import { Stack } from "@mui/system";

function Hero() {
    return (
        <Stack
            justifyContent="flex-start"
            alignItems="center"
            sx={{
                position: "unset",
                height: "100vh",
                // padding: "1rem",
                backgroundColor: "primary.main",
                backgroundImage: 'url("./home.jpg")',
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <Header />
            <Stack
                alignItems="center"
                sx={{ position: "relative", inset: "0", margin: "auto" }}
            >
                <Typography variant="h2">GOOD FOOD</Typography>
                <Typography variant="outlinedh2">GOOD PEOPLE</Typography>
            </Stack>
        </Stack>
    );
}

export default Hero;
