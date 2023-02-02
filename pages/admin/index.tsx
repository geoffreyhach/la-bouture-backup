import React, { useState } from "react";
import { GetServerSideProps } from "next";

import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Box } from "@mui/system";
import { Stack, Typography } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import dayjs from "dayjs";

// db logic
import mongoose from "mongoose";
import { Types } from "mongoose";
const url = String(process.env.NEXT_PUBLIC_MONGO_ADDRESS);
import { Resa } from "../api/resa.model";
const connectToDb = async () => {
    await mongoose.connect(url);
};

const todaysColumns: GridColDef[] = [
    {
        field: "date",
        headerName: "Heure",
        width: 100,
        valueFormatter: (params) => dayjs(params.value).format("HH:mm"),
    },
    {
        field: "client",
        headerName: "Client",
        width: 150,
    },
    {
        field: "number",
        headerName: "Nb de personnes",
        width: 70,
    },
    {
        field: "phone",
        headerName: "Téléphone",
        type: "number",
        width: 250,
    },
];

const columns: GridColDef[] = [
    {
        field: "date",
        headerName: "Date",
        width: 250,
        valueFormatter: (params) =>
            dayjs(params.value).format("DD/MM/YYYY - HH:mm"),
    },
    {
        field: "client",
        headerName: "Client",
        width: 150,
    },
    {
        field: "number",
        headerName: "Nb de personnes",
        width: 70,
    },
    {
        field: "phone",
        headerName: "Téléphone",
        type: "number",
        width: 250,
    },
];

interface Reservation {
    _id: Types.ObjectId;
    client: String;
    phone: Number;
    number: Number;
    date: Date;
}

interface DashboardProps {
    resa: Reservation[];
}

function Dashboard({ resa }: DashboardProps) {
    const [today, setToday] = useState(dayjs);

    return (
        <Stack
            gap="3rem"
            sx={{
                minHeight: "40vh",
                width: "100%",
                backgroundColor: "aliceblue",
                padding: "2rem",
            }}
        >
            <Box
                sx={{
                    height: "40vh",
                    width: "100%",
                    backgroundColor: "aliceblue",
                    padding: "2rem",
                }}
            >
                <Typography variant="h3">Réservations du jour</Typography>
                <DataGrid
                    rows={resa.filter((r) =>
                        dayjs(r.date).isSame(today, "day")
                    )}
                    getRowId={(resa: Reservation) => uuidv4()}
                    columns={todaysColumns}
                    pageSize={10}
                    rowsPerPageOptions={[10]}
                    experimentalFeatures={{ newEditingApi: true }}
                    initialState={{
                        sorting: {
                            sortModel: [{ field: "date", sort: "asc" }],
                        },
                    }}
                />
            </Box>
            <Box
                sx={{
                    height: "40vh",
                    width: "100%",
                    backgroundColor: "aliceblue",
                    padding: "2rem",
                }}
            >
                <Typography variant="h3" color="primary">
                    Réservations futures
                </Typography>
                <DataGrid
                    rows={resa.filter((r) =>
                        dayjs(r.date).isAfter(today, "day")
                    )}
                    getRowId={(resa: Reservation) => uuidv4()}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    experimentalFeatures={{ newEditingApi: true }}
                    initialState={{
                        sorting: {
                            sortModel: [{ field: "date", sort: "asc" }],
                        },
                    }}
                />
            </Box>
            <Box
                sx={{
                    height: "40vh",
                    width: "100%",
                    backgroundColor: "aliceblue",
                    padding: "2rem",
                }}
            >
                <Typography variant="h3" color="grey">
                    Réservations passées
                </Typography>
                <DataGrid
                    rows={resa.filter((r) =>
                        dayjs(r.date).isBefore(today, "day")
                    )}
                    getRowId={(resa: Reservation) => uuidv4()}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    experimentalFeatures={{ newEditingApi: true }}
                    initialState={{
                        sorting: {
                            sortModel: [{ field: "date", sort: "desc" }],
                        },
                    }}
                />
            </Box>
        </Stack>
    );
}

export const getServerSideProps: GetServerSideProps = async () => {
    await connectToDb();
    const data = await Resa.find();
    const jsonRsa = await JSON.stringify(data);
    const resa = await JSON.parse(jsonRsa);

    return {
        props: {
            resa,
        },
    };
};

export default Dashboard;
