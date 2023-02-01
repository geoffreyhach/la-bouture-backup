import React, { useLayoutEffect, useRef } from "react";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import Image from "next/image";
import gsap from "gsap";

const data = ["Moxka", "Origin", "Paradise", "URSCOP", "HEURA"];

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
            <Stack ref={carouselRef} gap="1rem">
                {data.map((d) => {
                    return (
                        <Typography key={data.indexOf(d)} variant="h2">
                            {d}
                        </Typography>
                    );
                })}
            </Stack>
        </Stack>
    );
}

export default Partners;