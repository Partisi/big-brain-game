import dbConnect from "../../../lib/connectMongo";
import Goal from "../../../models/goalModel";

// Deletes or Updates a goal based on respones
export default async function handler(req, res) {
    const { method, query: { id }, cookies } = req

    const authToken = cookies.token

    if (method == "PUT") { // update
        try {
            await dbConnect()
            const updatedResponse = await Goal.find()
            res.status(200).json({ updatedResponse })
        } catch (error) {
            console.log(error)
            res.json({ error })
        }
    }
    if (method == "DELETE") { // delete
        try {
            await dbConnect()
            const deleteResponse = await Goal.findByIdAndDelete(id);
            res.status(200).json({ deleteResponse })
        } catch (error) {
            console.log(error)
            res.json({ error })
        }
    }
}