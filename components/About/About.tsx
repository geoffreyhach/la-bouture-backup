import React, { useLayoutEffect, useRef } from "react";
import { Stack, Typography } from "@mui/material";

function About() {
    return (
        <Stack
            id="about"
            alignItems="center"
            justifyContent="center"
            sx={{
                height: "100vh",
                padding: "1rem",
                backgroundColor: "primary.main",
            }}
        >
            <Stack
                alignItems="center"
                justifyContent="center"
                sx={{
                    maxWidth: "1200px",
                }}
            >
                <Typography variant="subtitle1">Qui sommes nous?</Typography>
                <Typography variant="h2">LA BOUTURE</Typography>
                <Typography variant="outlinedh2">EST UNE CANTINE</Typography>
                <Typography variant="h2">VEGETALE, SOCIALE</Typography>
                <Typography variant="outlinedh2">& SOLIDAIRE</Typography>
                <Typography variant="subtitle1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                    dolorum qui explicabo excepturi ipsum quas maiores culpa
                    animi esse architecto!
                </Typography>
            </Stack>
        </Stack>
    );
}

export default About;
