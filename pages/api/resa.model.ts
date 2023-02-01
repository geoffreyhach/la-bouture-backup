import mongoose from "mongoose";

const resaSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true,
    },
    client: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    number: {
        type: Number,
        required: true,
        default: 1,
    },
});

// mongoose.models = {};

export const Resa = mongoose.models.Resa || mongoose.model("Resa", resaSchema);
