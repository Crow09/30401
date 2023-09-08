import client from "@/util/database";
import ListItem from "./listitem";

export default async function List() {
  const db = await client.db("lol");
  const list = await db.collection("pro").find().toArray();
  return (
    <div>
      <h2>List</h2>
      <ListItem list={list}/>
    </div>
  )
}