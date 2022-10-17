import dbConnect from "../../../lib/connectMongo"
import goalModel from "../../../models/goalModel"


const handler = async (req, res) => {
    const { method } = req

    console.log("vibingg...")
    await dbConnect()
    console.log('connected to db!')
    if (method === "GET") {
        try {
            const orders = await goalModel.find()
            res.status(200).json(orders)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    if (method === "POST") {
        try {
            const order = await goalModel.create(req.body)
            res.status(201).json(order)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

export default handler