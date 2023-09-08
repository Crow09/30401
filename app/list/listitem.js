'use client'
import Link from "next/link";

export default function ListItem(props) {
  console.log(props.list);
  return (
    <div className="list">
      {
        props.list.map(e => <div className="list-item" key={e._id}>
          <Link href={`/detail/${e._id}`}>{e.name}</Link>
          <span><Link href={`/edit/${e._id}`}>🔨</Link></span>
          <span style={{cursor:"pointer"}}
                onClick={(event) => {
                  fetch("/api/remove",
                  {
                    method : "DELETE",
                    body : JSON.stringify({"_id" : e._id}),
                  }).
                  then(res => res.json()).
                  then(json => {
                    if (json.msg === "success") {
                      event.target.parentNode.style.opacity = 0;
                      setTimeout(() => {event.target.parentNode.style.display = "none"}, 1000);
                    }
                  })
          }}> ❌ </span>
        </div>)
      }
    </div>
  )
}