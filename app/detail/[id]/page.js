import client from "@/util/database";
import { ObjectId } from "mongodb";
import Link from "next/link";

export default async function Detail(props) {
  const db = await client.db("lol");
  const result = await db.collection("pro").findOne({_id : new ObjectId(props.params.id)});
  return (
    <div className="detail">
      <div className="detail-item">Name : {result.name}</div>
      <div className="detail-item">Line : {result.line}</div>
      <div className="detail-item">Team : {result.team}</div>
      <Link href={`/edit/${result._id}`}><button>Edit</button></Link>
      <Link href={`/api/remove`}><button>Edit</button></Link>
    </div>
  )
}