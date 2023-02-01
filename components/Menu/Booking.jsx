import React, { useState } from "react";
import {
    Box,
    Button,
    Modal,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import { MobileDateTimePicker } from "@mui/x-date-pickers/MobileDateTimePicker";
import dayjs, { Dayjs } from "dayjs";

import EastIcon from "@mui/icons-material/East";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import axios from "axios";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "secondary.main",
    border: "8px solid",
    borderColor: "success.main",
    boxShadow: 24,
    p: 4,
};

function Booking() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [send, setSend] = useState(true);
    const [resa, setResa] = useState({
        client: "",
        number: "",
        phone: "",
        date: "",
    });
    const [date, setDate] = React.useState(dayjs());

    const handleChange = (e) => {
        const { name, value } = e.target;
        setResa({ ...resa, [name]: value });
        console.log(resa);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newResa = { ...resa, date: date };
        await axios.post("/api/resa", newResa);
    };
    return (
        <>
            <Button variant="contained" color="secondary" onClick={handleOpen}>
                <Stack id="resa" direction="row" gap="1rem">
                    Réserver une table
                    <EastIcon />
                </Stack>
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <form
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "1rem",
                        }}
                        onSubmit={handleSubmit}
                    >
                        <TextField
                            label="Votre nom"
                            variant="outlined"
                            name="client"
                            value={resa.client}
                            onChange={handleChange}
                            required
                        />
                        <TextField
                            type="number"
                            label="Nombre de personnes"
                            variant="outlined"
                            value={resa.number}
                            onChange={handleChange}
                            name="number"
                            required
                        />
                        <TextField
                            type="number"
                            label="Numéro de téléphone"
                            variant="outlined"
                            value={resa.phone}
                            onChange={handleChange}
                            name="phone"
                            required
                        />
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DateTimePicker
                                renderInput={(props) => (
                                    <TextField {...props} />
                                )}
                                label="Date"
                                ampm={false}
                                inputFormat="DD-MM-YYYY - hh:mm"
                                value={date}
                                onChange={(newValue) => {
                                    setDate(dayjs(newValue));
                                }}
                                minDate={dayjs()}
                            />
                        </LocalizationProvider>
                        <Button
                            type="submit"
                            variant="contained"
                            color="success"
                            disabled={send}
                        >
                            <Typography color="secondary">
                                Reservez votre table
                            </Typography>
                        </Button>
                    </form>
                </Box>
            </Modal>
        </>
    );
}

export default Booking;
