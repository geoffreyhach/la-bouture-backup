import connectDb from "../db";
import { Resa } from "../models";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "GET") {
        const resa = await Resa.find();
        try {
            res.status(200).json(resa);
        } catch {
            res.status(500).send("error");
        }
    }

    if (req.method === "POST") {
        const { date, client, number } = req.body;

        const resa = new Resa({
            date,
            client,
            number,
        });
        res.status(200).json(resa);
    }
}

export default connectDb(handler);
