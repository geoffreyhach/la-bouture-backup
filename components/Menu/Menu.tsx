import React from "react";
import useSWR from "swr";
import { Button, Divider, Stack } from "@mui/material";

import drink from "../../public/drinks.png";
import food from "../../public/food.png";
import MenuSection from "./MenuSection";
import Booking from "./Booking";
import Link from "next/link";
import { endpoint } from "@/config/httpConfig";

function Menu() {
  const { data: posts, isLoading } = useSWR(`${endpoint}/api/posts?populate=*`);

  return (
    <Stack
      id="menu"
      direction="column"
      alignItems="center"
      justifyContent="center"
      gap="7rem"
      sx={{
        padding: "1rem",
        paddingBlock: "10rem",
        backgroundColor: "success.main",
      }}
    >
      {!isLoading &&
        posts.data.map((post: any) => {
          return (
            <MenuSection
              key={post.id}
              title={post.attributes.Titre}
              text={post.attributes.body}
              image={post.attributes.picture.data.attributes.formats.medium.url}
              reversed={post.id % 2 === 0}
            />
          );
        })}

      <Stack direction="row" gap="1rem">
        <Link href="https://bonjourmenu.fr/view/demo">
          <Button variant="contained" color="secondary">
            Voir le menu
          </Button>
        </Link>
      </Stack>
    </Stack>
  );
}

export default Menu;
