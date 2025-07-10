import { Outlet } from "react-router-dom";
import { Navbar } from "./navbar";
import Footer from "./footer";
import Faq from "./faq";
import Testimonials from "./testimonials";
import ContactForm from "./contact";
import DottedLine from "../ui/dottedline";

import FadeInWhenVisible from "../utils/FadeInWhenVisible"; // ✅ Add this import

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
