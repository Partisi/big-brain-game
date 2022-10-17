import Goal from "../../../models/goalModel";
import connectMongo from "../../../lib/connectMongo";

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function addTest(req, res) {
  try {
    console.log("CONNECTING TO MONGO");
    await connectMongo();
    console.log("CONNECTED TO MONGO");

    console.log("CREATING DOCUMENT");
    const goal = await Goal.create(req.body);
    console.log("CREATED DOCUMENT");

    res.json({ goal });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}
