import { useState } from "react";
import DottedLine from "../ui/dottedline";
import VerticalDottedLine from "../ui/verticaldotted";
import { ArrowRight } from "lucide-react";

interface FormData {
  fullName: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const whatsappNumber = "+919398494080"; // Your WhatsApp number
    const message = `Hello, I'm ${formData.fullName}.\nEmail: ${formData.email}\n\nMy Requirement: ${formData.message}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Open WhatsApp in a new tab/window
    window.open(whatsappUrl, "_blank");

    // Simulate submission delay if needed, though for WhatsApp redirect it's not strictly necessary for the user experience
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Form data prepared for WhatsApp:", formData);
    setIsSubmitting(false);
    setFormData({ fullName: "", email: "", message: "" }); // Clear the form after preparing the message
  };

  return (
    <section className="bg-white border-[--color-soft-gray] px-2 md:px-10 lg:px-16 py-10 w-full">
      <DottedLine className="mt-0 mb-6" />

      <div className="flex flex-col lg:flex-row min-h-[70vh]">
        <div className="hidden md:flex lg:w-1/2 items-center justify-center p-6">
          <img
            src="/contact.png"
            alt="Contact"
            className="w-full h-auto object-contain"
          />
        </div>

        <div className="hidden lg:flex justify-center">
          <VerticalDottedLine className="mx-6 h-[80%]" />
        </div>

        <div className="lg:w-1/2 flex items-center justify-center ">
          <div className="w-full max-w-lg">
            <div className="mb-8">
              <h1 className="text-2xl lg:text-3xl font-text  text-[--color-dark] mb-4 tracking-tight font-display">
                CONTACT US
              </h1>
              <p className="mt-2 text-base font-text lg:text-xl font-medium text-[var(--color-soft-gray)] tracking-tight leading-relaxed font-medium">
                Questions, bulk orders, or just want to chat tools? We're listening.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label htmlFor="fullName" className="block text-base text-[--color-dark] mb-3 uppercase tracking-wide font-text">
                  FULL NAME
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  required
                  className="w-full px-0 py-4 text-lg border-0 border-b-2 border-gray-300 bg-transparent text-[--color-dark] placeholder-gray-400 focus:border-gray-500 focus:outline-none font-text"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-base text-[--color-dark] mb-3 uppercase tracking-wide font-text">
                  EMAIL
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your Gmail"
                  required
                  className="w-full px-0 py-4 text-lg border-0 border-b-2 border-gray-300 bg-transparent text-[--color-dark] placeholder-gray-400 focus:border-gray-500 focus:outline-none font-text"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-base text-[--color-dark] mb-3 uppercase tracking-wide font-text">
                  TELL US ABOUT YOUR PROJECTS
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Write your message"
                  rows={3}
                  required
                  className="w-full px-0 py-4 text-lg border-0 border-b-2 border-gray-300 bg-transparent text-[--color-dark] placeholder-gray-400 focus:border-gray-500 focus:outline-none resize-none font-text"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`relative flex items-center flex-nowrap justify-between px-4 py-2 bg-gray-100 rounded-full shadow-sm hover:shadow-md transition-all duration-200 min-w-0 max-w-full overflow-hidden group cursor-pointer hover:scale-105 transform ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                  {/* Fill animation background - faster and irregular shape */}
                  <div className="absolute inset-0 bg-orange-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-200 ease-out"
                       style={{
                         clipPath: 'polygon(0% 0%, 85% 0%, 100% 35%, 90% 65%, 95% 100%, 0% 100%)',
                         borderRadius: '9999px'
                       }}></div>

                  {/* Content */}
                  <span className="relative z-10 text-sm sm:text-base font-semibold text-black group-hover:text-white transition-all duration-200 truncate group-hover:scale-110 transform origin-left">
                    {isSubmitting ? "PREPARING WHATSAPP..." : "SEND MESSAGE"}
                  </span>

                  <span className="relative z-10 ml-3 flex items-center justify-center w-8 h-8 rounded-full bg-orange-500 group-hover:bg-white text-white group-hover:text-orange-500 shadow-md flex-shrink-0 transition-all duration-200 group-hover:scale-110 transform">
                    <ArrowRight className="w-4 h-4 group-hover:transform group-hover:translate-x-0.5 transition-transform duration-200" />
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <DottedLine className="mt-6 " />
    </section>
  );
}