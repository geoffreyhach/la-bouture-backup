import React from "react";
import useSWR from "swr";
import { Stack, Typography } from "@mui/material";
import Marquee from "react-fast-marquee";
import { endpoint } from "@/config/httpConfig";

function Partners() {
  const { data: partners, isLoading } = useSWR(
    `${endpoint}/api/partners?populate=*`
  );

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
        {!isLoading &&
          partners.data.map((partner: any) => {
            return (
              <Typography
                key={partner.id}
                variant="h2"
                sx={{ marginInline: "1rem" }}
              >
                {partner.attributes.Nom}
              </Typography>
            );
          })}
      </Marquee>
    </Stack>
  );
}

export default Partners;
