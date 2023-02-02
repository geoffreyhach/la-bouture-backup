import React from "react";
import { Stack, Typography } from "@mui/material";
import Marquee from "react-fast-marquee";

const data = ["Moxka", "Origin", "Paradise", "URSCOP"];

function Partners() {
    return (
        <Stack
            id="partners"
            direction="column"
            alignItems="center"
            justifyContent="start"
            gap="1rem"
            sx={{
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
        </Stack>
    );
}

export default Partners;
