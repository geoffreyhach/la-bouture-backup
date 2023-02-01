import { Button, Stack, Typography } from "@mui/material";
import React, { useLayoutEffect, useRef, useState } from "react";
import Map, { Marker } from "react-map-gl";
import PlaceIcon from "@mui/icons-material/Place";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
console.log(token);

function Address() {
    gsap.registerPlugin(ScrollTrigger);
    const mapRef = useRef<mapboxgl.Map>(null);
    const [viewState, setViewState] = useState({
        longitude: 7.761929,
        latitude: 48.574077,
        zoom: 3,
    });

    const flyToLaBouture = () => {
        mapRef.current!.flyTo({
            center: [7.761883366966186, 48.574178472071985],
            zoom: 16,
            duration: 6000,
            essential: true,
        });
        // console.log(mapRef.current);
    };

    useLayoutEffect(() => {
        ScrollTrigger.create({ trigger: "#mapbox", onEnter: flyToLaBouture });
    }, []);

    return (
        <Stack
            id="map"
            alignItems="center"
            gap="1rem"
            sx={{ backgroundColor: "secondary.main", padding: "2rem" }}
        >
            <Map
                {...viewState}
                ref={mapRef}
                id="mapbox"
                initialViewState={viewState}
                mapboxAccessToken={token}
                onMove={(evt) => setViewState(evt.viewState)}
                pitch={60}
                style={{
                    width: 600,
                    height: 400,
                    margin: "auto",
                    border: "8px solid #465B3C",
                }}
                mapStyle="mapbox://styles/geoffreyhach/cldljop1u001d01ogcbyqr3eg"
            >
                <Marker
                    longitude={7.761883366966186}
                    latitude={48.574178472071985}
                >
                    <PlaceIcon fontSize="large" color="primary" />
                </Marker>
            </Map>
            <Stack alignItems="center" sx={{ opacity: ".5" }}>
                <Typography>Nous trouver :</Typography>
                <Typography sx={{ fontStyle: "italic" }}>
                    {`11 Presqu'île André-Malraux, 67100 Strasbourg`}
                </Typography>
                <Typography sx={{ fontStyle: "italic" }}>
                    Arrêt de tram : Winston Churchill
                </Typography>
                <Typography sx={{ fontStyle: "italic" }}>
                    Arrêt de bus : Sécurité Sociale
                </Typography>
            </Stack>
        </Stack>
    );
}

export default Address;
