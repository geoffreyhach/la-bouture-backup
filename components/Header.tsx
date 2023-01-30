import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import Link from "@mui/material/Link";
import React from "react";

const menuLinkStyle = {
    fontFamily: "arial",
    fontWeight: 700,
    color: "secondary.main",
    textDecoration: "none",
    fontSize: { xs: "1rem", md: "1.5rem" },
    textTransform: "uppercase",
    "&:hover": {
        textDecoration: "underline",
    },
};

function Header() {
    return (
        <Stack
            direction="row"
            alignItems="center"
            justifyContent={{ xs: "center", md: "space-between" }}
            sx={{ width: "100vw", paddingInline: "1rem" }}
        >
            <Stack
                direction="row"
                gap={2}
                sx={{ display: { xs: "none", md: "flex" } }}
            >
                <Link href="/" sx={menuLinkStyle}>
                    Home
                </Link>
                <Link href="#carte" sx={menuLinkStyle}>
                    Carte
                </Link>
                <Link href="/" sx={menuLinkStyle}>
                    Événements
                </Link>
                <Link href="/" sx={menuLinkStyle}>
                    Resa
                </Link>
            </Stack>
            <Typography
                variant="h1"
                color="secondary"
                textAlign="center"
                noWrap
            >
                LA BOUTURE
            </Typography>
            <Link
                href="/"
                sx={{ ...menuLinkStyle, display: { xs: "none", md: "flex" } }}
            >
                Contact
            </Link>
        </Stack>
    );
}

export default Header;
