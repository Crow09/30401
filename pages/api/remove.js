import client from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  if (req.method !== "DELETE")
    return res.status(400).json("딜리트만 돼");
  const id = JSON.parse(req.body)._id;
  console.log(id);
  const db = await client.db("lol");
  const result = await db.collection("pro").deleteOne({_id : new ObjectId(id)});
  console.log(result);
  if (result.deletedCount > 0)
    return res.status(200).json({"msg": "success"});
  else
    return res.status(500).json({"msg": "fail"});
}