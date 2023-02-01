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
        <>
            <Typography
                variant="h1"
                color="secondary"
                textAlign="center"
                noWrap
                sx={{
                    position: "absolute",
                    top: "0",
                    margin: "auto",
                }}
            >
                la bouture
            </Typography>
            <Stack
                direction="row"
                alignItems="center"
                justifyContent={{ xs: "center", md: "space-between" }}
                sx={{ width: "100vw", padding: "2rem 1rem" }}
            >
                <Stack
                    direction="row"
                    gap={2}
                    sx={{ display: { xs: "none", md: "flex" } }}
                >
                    <Link href="#about" sx={menuLinkStyle}>
                        QUI
                    </Link>
                    <Link href="#menu" sx={menuLinkStyle}>
                        QUOI
                    </Link>
                    <Link href="#map" sx={menuLinkStyle}>
                        OÙ
                    </Link>
                    <Link href="#resa" sx={menuLinkStyle}>
                        COMMENT
                    </Link>
                </Stack>

                <Link
                    href="/"
                    sx={{
                        ...menuLinkStyle,
                        display: { xs: "none", md: "flex" },
                    }}
                >
                    Contact
                </Link>
            </Stack>
        </>
    );
}

export default Header;
