import React, { ReactElement, useEffect, useLayoutEffect, useRef } from "react";
import useSWR from "swr";
import { Box, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import Header from "../Header";
import Booking from "../Menu/Booking";
import { endpoint } from "@/config/httpConfig";

function Hero(): ReactElement {
  const { data, isLoading } = useSWR(`${endpoint}/api/hero-picture?populate=*`);
  const { data: title } = useSWR(`${endpoint}/api/hero-title?populate=*`);

  useEffect(() => {
    // console.log(data?.data.attributes?.["HeroPicture"].data?.attributes?.url);
    // console.log(
    //   `${endpoint}${data?.data.attributes?.["HeroPicture"].data?.attributes?.url}`
    // );
  }, [data]);
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);

  useLayoutEffect(() => {
    gsap.to(ref.current, {
      scrollTrigger: {
        trigger: ref.current,
        start: "bottom center",
        scrub: true,
      },
      y: 180,
    });
  }, []);

  return (
    <Stack
      justifyContent="flex-start"
      alignItems="center"
      sx={{
        position: "relative",
        height: "100vh",
        backgroundColor: "secondary.main",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(${endpoint}${data?.data.attributes?.["HeroPicture"].data?.attributes?.url})`,
      }}
    >
      <Header />

      <Stack
        ref={ref}
        alignItems="center"
        sx={{
          position: "relative",
          inset: "0",
          margin: "auto",
        }}
        gap="3rem"
      >
        <Stack alignItems="center">
          {title && (
            <>
              <Typography variant="h2">
                {title.data.attributes.line1}
              </Typography>
              <Typography variant="outlinedh2">
                {title.data.attributes.line2}
              </Typography>
            </>
          )}
        </Stack>
        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <Booking />
        </Box>
      </Stack>
    </Stack>
  );
}

export default Hero;
