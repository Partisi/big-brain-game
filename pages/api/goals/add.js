import dbConnect from "../../../lib/connectMongo";
import Goal from "../../../models/goalModel";

export default async function handler(req, res) {
    const { method } = req
    if (method == "PUT") {
        try {
            await dbConnect()
            const addedResponse = await Goal.create(req.body)
            res.status(200).json({ addedResponse })

        } catch (error) {
            console.log(error)
            res.json({ error })
        }
    }
}