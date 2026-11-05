import "./globals.css";
import { AppProvider } from "../context/AppContext";
import Navbar from "../components/Navbar";
export const metadata = { title: "CampusFind", description: "Campus Lost and Found" };
export default function RootLayout({ children }) {
  return <html lang="en"><body><AppProvider><Navbar/><main className="container">{children}</main></AppProvider></body></html>;
}
