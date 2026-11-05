"use client";
import {useApp} from "../../context/AppContext";import ItemCard from "../../components/ItemCard";
export default function Found(){const {reports}=useApp();const list=reports.filter(x=>x.type==="Found");return <><h1>Found items</h1><p className="muted">Items found around the campus.</p><div className="grid">{list.length?list.map(i=><ItemCard key={i.id} item={i}/>):<div className="empty">No found items reported yet.</div>}</div></>}
