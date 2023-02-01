import React from "react";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import Image from "next/image";

import drink from "../../public/drinks.png";
import food from "../../public/food.png";
import MenuSection from "./MenuSection";

function Menu() {
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
            <MenuSection
                title="Dans votre assiette"
                text="Buffets et brunchs végétaux à volonté"
                image={food}
            />
            <MenuSection
                title="Dans vos verres"
                text="Aperitivo, cocktails et mocktails d'exception"
                image={drink}
                reversed
            />

            <Stack direction="row" gap="1rem">
                <Button variant="contained" color="secondary">
                    Voir le menu
                </Button>
                <Divider
                    orientation="vertical"
                    flexItem
                    sx={{ backgroundColor: "secondary.main", width: "3px" }}
                />
                <Button variant="contained" color="secondary">
                    <Stack id="resa" direction="row" gap="1rem">
                        Réserver une table
                        <EastIcon />
                    </Stack>
                </Button>
            </Stack>
        </Stack>
    );
}

export default Menu;
