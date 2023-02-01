import React, { useLayoutEffect, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

interface MenuSectionProps {
    reversed?: Boolean;
    title: String;
    text: String;
    image: StaticImageData;
}

function MenuSection({ reversed, title, text, image }: MenuSectionProps) {
    gsap.registerPlugin(ScrollTrigger);
    const imgRef = useRef(null);

    const getImgXValue = () => {
        if (reversed) return -50;
        else return 50;
    };

    useLayoutEffect(() => {
        gsap.from(imgRef.current, {
            scrollTrigger: {
                trigger: imgRef.current,
                start: "top bottom",
                end: "top center",
                scrub: true,
            },
            x: getImgXValue(),
        });
    }, [reversed]);

    return (
        <Stack
            direction={
                reversed
                    ? { sm: "column", md: "row-reverse" }
                    : { sm: "column", md: "row" }
            }
            alignItems="center"
            justifyContent="center"
            gap={10}
            sx={{
                maxWidth: "1200px",
            }}
        >
            <Stack alignItems={{ sm: "center", md: "flex-start" }}>
                <Typography variant="subtitle1">{title}</Typography>
                <Typography
                    variant="h3"
                    sx={{ textAlign: { xs: "center", md: "left" } }}
                >
                    {text}
                </Typography>
            </Stack>

            <Image ref={imgRef} width={400} src={image} alt="food" />
        </Stack>
    );
}

export default MenuSection;
