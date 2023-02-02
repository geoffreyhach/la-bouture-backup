import React, { useEffect, useState } from "react";
import axios from "axios";
import {
    Box,
    Button,
    Modal,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import EastIcon from "@mui/icons-material/East";

//phone library
import { MuiTelInput } from "mui-tel-input";

//date library
import "react-datepicker/dist/react-datepicker.css";
import dayjs, { Dayjs } from "dayjs";
import DatePicker from "react-datepicker";
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
    const [isValid, setIsValid] = useState(false);
    const [send, setSend] = useState(false);
    const [resa, setResa] = useState({
        client: "",
        number: "",
        phone: "",
        date: "",
    });
    const [date, setDate] = useState(setHours(setMinutes(new Date(), 0), 12));
    const [phone, setPhone] = useState("");

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setResa({ ...resa, [name]: value });
    };

    const handlePhoneChange = (newPhone) => {
        setPhone(newPhone);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newResa = { ...resa, date: date, phone: phone };
        console.log(newResa);
        await axios.post("/api/resa", newResa);
        setSend(true);
    };

    //Check if every fields are filled
    useEffect(() => {
        const validate = () => {
            return (
                resa.client.length > 1 &&
                resa.number.length > 0 &&
                phone.length > 1
            );
        };
        const isValid = validate();
        setIsValid(isValid);
    }, [phone, resa.client, resa.number]);

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
                        <MuiTelInput
                            value={phone}
                            onChange={handlePhoneChange}
                            name="phone"
                            defaultCountry="FR"
                            preferredCountries={["FR", "BE", "DE", "GB"]}
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
                        {send ? (
                            <Typography textAlign="center">{`Réservation validée pour le ${dayjs(
                                date
                            ).format("D/MM/YYYY à HH:mm")}`}</Typography>
                        ) : (
                            <Button
                                type="submit"
                                variant="contained"
                                color="success"
                                disabled={!isValid}
                            >
                                <Typography color="secondary">
                                    Reservez votre table
                                </Typography>
                            </Button>
                        )}
                    </form>
                </Box>
            </Modal>
        </>
    );
}

export default Booking;
