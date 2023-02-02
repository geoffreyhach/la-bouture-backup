import React, { useLayoutEffect, useRef } from "react";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import Marquee from "react-fast-marquee";
import EastIcon from "@mui/icons-material/East";
import Image from "next/image";
import gsap from "gsap";

const data = ["Moxka", "Origin", "Paradise", "URSCOP"];

function Partners() {
    const carouselRef = useRef();
    console.log(carouselRef.current);

    // useLayoutEffect(() => {
    //     gsap.to(carouselRef.current, { rotation: "+=360" });
    // });
    return (
        <Stack
            id="partners"
            direction="column"
            alignItems="center"
            justifyContent="start"
            gap="1rem"
            sx={{
                // minHeight: "100vh",
                padding: "1rem",
                paddingBlock: "10rem",
                backgroundColor: "success.main",
            }}
        >
            <Typography variant="outlinedh2">Nos partenaires</Typography>
            <Marquee gradientColor={[70, 91, 60]}>
                {data.map((d) => {
                    return (
                        <Typography
                            key={data.indexOf(d)}
                            variant="h2"
                            sx={{ marginInline: "1rem" }}
                        >
                            {d}
                        </Typography>
                    );
                })}
            </Marquee>
            {/* <Stack ref={carouselRef} gap="1rem">
                {data.map((d) => {
                    return (
                        <Typography key={data.indexOf(d)} variant="h2">
                            {d}
                        </Typography>
                    );
                })}
            </Stack> */}
        </Stack>
    );
}

export default Partners;
