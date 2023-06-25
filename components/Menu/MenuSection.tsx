import React, { useEffect, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

interface MenuSectionProps {
  reversed?: Boolean;
  title: String;
  text: String;
  image: string;
}

import { endpoint } from "@/config/httpConfig";

function MenuSection({ reversed, title, text, image }: MenuSectionProps) {
  gsap.registerPlugin(ScrollTrigger);
  const imgRef = useRef(null);

  const getImgXValue = () => {
    if (reversed) return -50;
    else return 50;
  };

  useEffect(() => {
    gsap.from(imgRef.current, {
      scrollTrigger: {
        trigger: imgRef.current,
        start: "top bottom",
        end: "bottom center",
        scrub: true,
      },
      x: getImgXValue(),
    });
    // eslint-disable-next-line
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
        <Typography variant="h3">{title}</Typography>
        <Typography
          variant="subtitle1"
          sx={{ textAlign: { xs: "center", md: "left" } }}
        >
          {text}
        </Typography>
      </Stack>

      <img ref={imgRef} width={400} src={`${endpoint}${image}`} alt="food" />
    </Stack>
  );
}

export default MenuSection;
