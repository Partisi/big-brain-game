import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    customer: {
        type: String,
        required: true,
        maxLength: 60,
    },
    address: {
        type: String,
        required: true,
        maxLength: 200,
    },
    total: {
        type: Number,
        required: true,
    },
    status: {
        type: Number, // 0,1,2,3
        default: 0,
    },
    method: { // payment
        type: Number,
        required: true,
    },
},
    { timestamps: true }
)

// If Order does not exist in db, create it, else use existed version
export default mongoose.models.Order ||
    mongoose.model('Order', OrderSchema)