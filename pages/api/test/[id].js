import dbConnect from "../../../lib/connectMongo"
import goalModel from "../../../models/goalModel"

export default async function handler(req, res) {
    const { method, query: { id } } = req

    console.log("trying to connect to db!")

    // connect to db
    await dbConnect()

    if (method === "GET") { // getting a specific goal info
        try {
            const goal = await goalModel.findById(id)
            res.status(200).json(goal)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    if (method === "PUT") { // adding a new goal to db
        try {
            const goal = await goalModel.create(req.body)
            res.status(201).json(goal)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    if (method === "DELETE") { // deleting a goal from db
        try {
            const goal = await goalModel.create(req.body)
            res.status(201).json(goal)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}
