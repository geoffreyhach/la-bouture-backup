import mongoose from "mongoose";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
const url = String(process.env.NEXT_PUBLIC_MONGO_ADDRESS);

const connectDB =
    (handler: NextApiHandler) =>
    async (req: NextApiRequest, res: NextApiResponse) => {
        if (mongoose.connections[0].readyState) {
            // Use current db connection
            return handler(req, res);
        }
        // Use new db connection
        await mongoose.connect(url);
        return handler(req, res);
    };

export default connectDB;
