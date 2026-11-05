"use client";
import Link from "next/link";
import {useApp} from "../context/AppContext";
import ItemCard from "../components/ItemCard";
export default function Home(){const {reports}=useApp();return <><section className="hero"><p className="eyebrow">CAMPUS LOST & FOUND</p><h1>Lost something on campus? Let's help you find it.</h1><p className="muted">CampusFind helps students report lost belongings and share items they have found around campus.</p><Link className="btn" href="/report">Report an item</Link><Link className="btn secondary" href="/lost">Browse lost items</Link></section><h2>Recent reports</h2><div className="grid">{reports.slice(0,3).map(item=><ItemCard key={item.id} item={item}/>)}</div><div className="footer">CampusFind · Student-built campus lost and found MVP</div></>}
