import { Outlet } from "react-router-dom";
import { Navbar } from "./navbar";
import Footer from "./footer";

export default function Layout() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}
