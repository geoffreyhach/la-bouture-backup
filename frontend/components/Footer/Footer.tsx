import React from "react";
import { Box, Divider, Stack, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import MailIcon from "@mui/icons-material/Mail";
import Link from "next/link";

const iconStyle = {
    "&:hover": {
        color: "success.main",
        transform: "scale(1.4)",
        transition: "transform 300ms",
    },
};

function Footer() {
    return (
        <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{
                minHeight: "2rem",
                minWidth: "100vw",
                backgroundColor: "primary.main",
                padding: ".5rem 1rem",
            }}
        >
            <Stack direction="row" alignItems="center" gap="1rem">
                <Typography variant="body1" color="secondary">
                    la bouture - 2023
                </Typography>
                <Typography variant="body1" color="secondary">
                    Mentions légales
                </Typography>
            </Stack>
            <Stack direction="row" gap=".5rem">
                <Link href="https://www.instagram.com/labouture.strasbourg/">
                    <InstagramIcon color="secondary" sx={iconStyle} />
                </Link>
                <Link href="https://www.facebook.com/labouture.strasbourg">
                    <FacebookIcon color="secondary" sx={iconStyle} />
                </Link>
                <Link href="mailto:labouture@gmail.com">
                    <MailIcon color="secondary" sx={iconStyle} />
                </Link>
            </Stack>
        </Stack>
    );
}

export default Footer;
