"use client";
import Link from "next/link";
import {useApp} from "../context/AppContext";
export default function Navbar(){const {user,logout}=useApp();return <header className="navbar"><Link className="brand" href="/">CampusFind</Link><nav className="navlinks"><Link href="/">Home</Link><Link href="/lost">Lost items</Link><Link href="/found">Found items</Link><Link href="/report">Report</Link>{user?<><span>{user.name}</span><a href="#" onClick={e=>{e.preventDefault();logout();}}>Logout</a></>:<Link href="/login">Login</Link>}</nav></header>}
