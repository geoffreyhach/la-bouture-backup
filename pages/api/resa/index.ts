import connectDB from "../db";
import { Resa } from "../resa.model";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "GET") {
        console.log("uihsdfjbgnfg");

        const result = await Resa.find();
        res.status(200).json(result);
    }

    if (req.method === "POST") {
        console.log(Resa);
        const { date, client, number, phone } = req.body;
        console.log(req.body);

        const resa = new Resa({
            date,
            client,
            number,
            phone,
        });
        console.log(resa);
        const newResa = await resa.save();
        res.status(200).json(newResa);
    }
}

export default connectDB(handler);
