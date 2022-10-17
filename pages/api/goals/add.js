import dbConnect from "../../../lib/connectMongo";
import Goal from "../../../models/goalModel";

export default async function addTest(req, res) {
    try {
      console.log('CONNECTING TO MONGO');
      await dbConnect()
      console.log('CONNECTED TO MONGO');
  
      console.log('CREATING DOCUMENT');
      const test = await Goal.create(req.body);
      console.log('CREATED DOCUMENT');
  
      res.json({ test });
    } catch (error) {
      console.log(error);
      res.json({ error });
    }
  }