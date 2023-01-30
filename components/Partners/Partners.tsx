import React from "react";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import Image from "next/image";

const data = ["Moxka", "Origin", "Paradise", "URSCOP", "HEURA", "MES COUILLES"];

function Partners() {
    return (
        <Stack
            id="partners"
            direction="column"
            alignItems="center"
            justifyContent="start"
            gap="7rem"
            sx={{
                // minHeight: "100vh",
                padding: "1rem",
                paddingBlock: "10rem",
                backgroundColor: "success.main",
            }}
        >
            <Typography variant="outlinedh2">Nos partenaires</Typography>
            <Stack direction="row" gap="1rem">
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
