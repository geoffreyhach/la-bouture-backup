import connectDB from "../db";
import { Resa } from "../resa.model";
import { NextApiRequest, NextApiResponse } from "next";

export async function getData() {
    const data = await Resa.find();
    const jsonData = await JSON.stringify(data);
    return jsonData;
}

async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "GET") {
        const result = await getData();
        const jsonResult = await JSON.parse(result);
        res.status(200).json(jsonResult);
    }

    if (req.method === "POST") {
        const { date, client, number, phone } = req.body;

        const resa = new Resa({
            date,
            client,
            number,
            phone,
        });
        const newResa = await resa.save();
        res.status(200).json(newResa);
    }
}

export default connectDB(handler);
