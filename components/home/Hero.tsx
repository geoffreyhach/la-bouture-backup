import React, { useLayoutEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import Header from "../Header";

import { Stack } from "@mui/system";
import Booking from "../Menu/Booking";
import { Block } from "@mui/icons-material";

function Hero() {
    gsap.registerPlugin(ScrollTrigger);
    const ref = useRef(null);

    useLayoutEffect(() => {
        gsap.to(ref.current, {
            scrollTrigger: {
                trigger: ref.current,
                start: 100,
                scrub: true,
            },
            y: 100,
        });
    }, []);
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
                ref={ref}
                alignItems="center"
                sx={{ position: "relative", inset: "0", margin: "auto" }}
                gap="3rem"
            >
                <Stack alignItems="center">
                    <Typography variant="h2">GOOD FOOD</Typography>
                    <Typography variant="outlinedh2">GOOD PEOPLE</Typography>
                </Stack>
                <Box sx={{ display: { xs: "block", md: "none" } }}>
                    <Booking />
                </Box>
            </Stack>
        </Stack>
    );
}

export default Hero;
