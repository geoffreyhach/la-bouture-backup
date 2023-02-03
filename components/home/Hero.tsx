import React, { ReactElement, useLayoutEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import Header from "../Header";
import Booking from "../Menu/Booking";
import Image from "next/image";

function Hero(): ReactElement {
    gsap.registerPlugin(ScrollTrigger);
    const ref = useRef(null);

    useLayoutEffect(() => {
        gsap.to(ref.current, {
            scrollTrigger: {
                trigger: ref.current,
                start: "bottom center",
                scrub: true,
            },
            y: 180,
        });
    }, []);

    return (
        <Stack
            justifyContent="flex-start"
            alignItems="center"
            sx={{
                position: "relative",
                height: "100vh",
                backgroundColor: "secondary.main",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <Header />

            <Image
                src="/home.webp"
                alt="background"
                fill
                priority
                style={{ objectFit: "cover", zIndex: "0" }}
            />
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
