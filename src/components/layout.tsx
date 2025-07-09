
import { Outlet } from "react-router-dom";
import { Navbar } from "./navbar";
import Footer from "./footer";
import Faq from "./faq";
import Testimonials from "./testimonials";
import ContactForm from "./contact";
import DottedLine from "../ui/dottedline";

export default function Layout() {
  return (
    <>
      <Navbar />
      
      <main className="min-h-screen ">
        <Outlet />
        <DottedLine className="my-4" />

        <Testimonials />
        <DottedLine className="my-4" />
        <Faq />

        <ContactForm />
      </main>

      <Footer />
    </>
  );
}
