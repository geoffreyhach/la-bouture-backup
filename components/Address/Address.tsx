import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import React, { useLayoutEffect, useRef, useState } from "react";
import Map, { Marker } from "react-map-gl";
import PlaceIcon from "@mui/icons-material/Place";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import TramIcon from "@mui/icons-material/Tram";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";

const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

function Address() {
    gsap.registerPlugin(ScrollTrigger);
    const mapRef = useRef<any>(null);
    const [viewState, setViewState] = useState({
        longitude: 7.761929,
        latitude: 48.574077,
        zoom: 3,
    });

    const flyToLaBouture = () => {
        if (mapRef.current !== null) {
            const map = mapRef.current;
            map.flyTo({
                center: [7.761883366966186, 48.574178472071985],
                zoom: 15,
                duration: 6000,
                essential: true,
            });
        }

        // console.log(mapRef.current);
    };

    useLayoutEffect(() => {
        if (mapRef !== null)
            ScrollTrigger.create({
                trigger: "#mapbox",
                onEnter: flyToLaBouture,
            });
    }, [mapRef]);

    return (
        <>
            <span
                className="anchor"
                id="map"
                style={{
                    position: "absolute",
                    transform: "translateY(-25vh)",
                }}
            ></span>
            <Stack
                alignItems="center"
                gap="1rem"
                sx={{ backgroundColor: "secondary.main", padding: "2rem" }}
            >
                <Typography
                    variant="h2"
                    noWrap
                    sx={{
                        WebkitTextStroke: {
                            xs: "3px #465B3C",
                            md: "5px #465B3C",
                        },
                    }}
                >
                    NOUS TROUVER
                </Typography>
                <Map
                    {...viewState}
                    ref={mapRef}
                    id="mapbox"
                    initialViewState={viewState}
                    mapboxAccessToken={token}
                    onMove={(evt) => setViewState(evt.viewState)}
                    interactive={false}
                    pitch={45}
                    style={{
                        width: 600,
                        height: 400,
                        maxWidth: "80vw",
                        margin: "auto",
                        border: "8px solid #465B3C",
                    }}
                    mapStyle="mapbox://styles/geoffreyhach/cldljop1u001d01ogcbyqr3eg"
                >
                    <Marker
                        longitude={7.761913925995719}
                        latitude={48.57434706975106}
                    >
                        <PlaceIcon fontSize="large" color="primary" />
                    </Marker>
                </Map>
                <Stack
                    alignItems="flex-start"
                    gap=".5rem"
                    divider={<Divider orientation="horizontal" flexItem />}
                    sx={{ opacity: ".5" }}
                >
                    <Stack direction="row" alignItems="center" gap=".5rem">
                        <PlaceIcon />
                        <Stack justifyContent="flex-start">
                            <Typography variant="body1">
                                {`11 Presqu'île André-Malraux`}
                            </Typography>
                            <Typography variant="body1">
                                67100 Strasbourg
                            </Typography>
                        </Stack>
                    </Stack>
                    <Stack direction="row" alignItems="center" gap=".5rem">
                        <TramIcon />
                        <Typography variant="body1" display="inline">
                            Winston Churchill (ligne C/E)
                        </Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center" gap=".5rem">
                        <DirectionsBusIcon />
                        <Typography variant="body1" display="inline">
                            Sécurité Sociale (L1)
                        </Typography>
                    </Stack>
                </Stack>
            </Stack>
        </>
    );
}

export default Address;
