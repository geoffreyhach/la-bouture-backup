import React from "react";
import useSWR from "swr";
import { Stack, Typography } from "@mui/material";
import { endpoint } from "@/config/httpConfig";

function About() {
  const { data } = useSWR(`${endpoint}/api/whoarewe?populate=*`);

  return (
    <Stack
      id="about"
      alignItems="center"
      justifyContent="center"
      sx={{
        minHeight: "100vh",
        padding: "1rem",
        backgroundColor: "primary.main",
      }}
    >
      {data && (
        <Stack
          alignItems="center"
          justifyContent="center"
          sx={{
            maxWidth: "1200px",
          }}
        >
          <Typography variant="subtitle1">
            {data.data.attributes.title}
          </Typography>
          {data.data.attributes.line1 && (
            <Typography variant="h2">{data.data.attributes.line1}</Typography>
          )}
          {data.data.attributes.line2 && (
            <Typography variant="outlinedh2">
              {data.data.attributes.line2}
            </Typography>
          )}
          {data.data.attributes.line3 && (
            <Typography variant="h2">{data.data.attributes.line3}</Typography>
          )}
          {data.data.attributes.line4 && (
            <Typography variant="outlinedh2">
              {data.data.attributes.line4}
            </Typography>
          )}

          <Typography variant="subtitle1">
            {data.data.attributes.body}
          </Typography>
        </Stack>
      )}
    </Stack>
  );
}

export default About;
