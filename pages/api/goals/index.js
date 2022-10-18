import dbConnect from "../../../lib/connectMongo";
import Goal from "../../../models/goalModel";

// Gets all the goals related to the user
export default async function handler(req, res) {
    const { method } = req
    if (method == "GET") {
        try {
            await dbConnect()
            const grabbedResponse = await Goal.find()
            res.status(200).json({ grabbedResponse })
        } catch (error) {
            console.log(error)
            res.json({ error })
        }
    }
}