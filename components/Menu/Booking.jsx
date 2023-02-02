import React, { useState } from "react";
import {
    Box,
    Button,
    Modal,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import dayjs, { Dayjs } from "dayjs";

import EastIcon from "@mui/icons-material/East";

import axios from "axios";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import moment from "moment";
import fr from "date-fns/locale/fr";
registerLocale("fr", fr);

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

const closedHours = [
    setHours(setMinutes(new Date(), 0), 0),
    setHours(setMinutes(new Date(), 30), 0),
    setHours(setMinutes(new Date(), 0), 1),
    setHours(setMinutes(new Date(), 30), 1),
    setHours(setMinutes(new Date(), 0), 2),
    setHours(setMinutes(new Date(), 30), 2),
    setHours(setMinutes(new Date(), 0), 3),
    setHours(setMinutes(new Date(), 30), 3),
    setHours(setMinutes(new Date(), 0), 4),
    setHours(setMinutes(new Date(), 30), 4),
    setHours(setMinutes(new Date(), 0), 5),
    setHours(setMinutes(new Date(), 30), 5),
    setHours(setMinutes(new Date(), 0), 6),
    setHours(setMinutes(new Date(), 30), 6),
    setHours(setMinutes(new Date(), 0), 7),
    setHours(setMinutes(new Date(), 30), 7),
    setHours(setMinutes(new Date(), 0), 8),
    setHours(setMinutes(new Date(), 30), 8),
    setHours(setMinutes(new Date(), 0), 9),
    setHours(setMinutes(new Date(), 30), 9),
    setHours(setMinutes(new Date(), 0), 10),
    setHours(setMinutes(new Date(), 30), 10),
    setHours(setMinutes(new Date(), 0), 11),
    setHours(setMinutes(new Date(), 30), 11),

    setHours(setMinutes(new Date(), 30), 21),
    setHours(setMinutes(new Date(), 0), 22),
    setHours(setMinutes(new Date(), 30), 22),
    setHours(setMinutes(new Date(), 0), 23),
    setHours(setMinutes(new Date(), 30), 23),
];

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
    const [date, setDate] = useState(setHours(setMinutes(new Date(), 0), 12));
    console.log(dayjs(date));

    const handleChange = (e) => {
        const { name, value } = e.target;
        setResa({ ...resa, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newResa = { ...resa, date: date };
        console.log(newResa);
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
                        <DatePicker
                            wrapperClassName="datePicker"
                            selected={date}
                            onChange={(date) => setDate(date)}
                            showTime={{ user12hours: false }}
                            showTimeSelect
                            locale="fr"
                            dateFormat="d MMMM yyyy, HH:mm"
                            excludeTimes={closedHours}
                            minDate={moment().toDate()}
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            color="success"
                            // disabled={send}
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
