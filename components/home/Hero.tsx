import React, { useLayoutEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import Header from "../Header";
import Booking from "../Menu/Booking";
import Image from "next/image";

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
                position: "relative",
                height: "100vh",
                backgroundColor: "primary.main",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <Image
                src="/home.webp"
                alt="background"
                fill
                style={{ objectFit: "cover" }}
            />
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
