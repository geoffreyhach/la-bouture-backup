import { Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import Image, { StaticImageData } from "next/image";
import React from "react";

import food from "../../public/food.png";

interface MenuSectionProps {
    reversed?: Boolean;
    title: String;
    text: String;
    image: StaticImageData;
}

function MenuSection({ reversed, title, text, image }: MenuSectionProps) {
    return (
        <Stack
            direction={reversed ? "row-reverse" : "row"}
            alignItems="center"
            justifyContent="center"
            gap={10}
            sx={{
                maxWidth: "1200px",
            }}
        >
            <Stack alignItems="flex-start">
                <Typography variant="subtitle1">{title}</Typography>
                <Typography variant="h3">{text}</Typography>
            </Stack>

            <Box
                sx={{
                    position: "relative",
                    height: "300px",
                    width: "800px",
                    backgroundColor: "red",
                    border: "8px solid",
                    borderColor: "secondary.main",
                }}
            >
                <Image src={image} alt="food" fill objectFit={"cover"} />
            </Box>
        </Stack>
    );
}

export default MenuSection;
