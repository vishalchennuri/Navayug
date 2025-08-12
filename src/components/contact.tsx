import { useState, useEffect } from "react";
import { useForm, ValidationError } from '@formspree/react';
import toast, { Toaster } from 'react-hot-toast';
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
  
  // Formspree hook
  const [state, handleFormspreeSubmit] = useForm("xyzpoedy");

  // Handle success/error states with useEffect
  useEffect(() => {
    if (state.succeeded) {
      // Show success toast
      toast.success('Message sent successfully! We\'ll get back to you soon.', {
        duration: 4000,
        position: 'top-center',
        style: {
          background: '#10B981',
          color: '#fff',
          padding: '16px',
          borderRadius: '8px',
          fontSize: '14px',
          fontWeight: '500'
        },
        iconTheme: {
          primary: '#fff',
          secondary: '#10B981',
        },
      });
      
      // Clear the form
      setFormData({ fullName: "", email: "", message: "" });
    }
  }, [state.succeeded]);

  useEffect(() => {
    // Check if there are errors and not currently submitting
    if (state.errors && Object.keys(state.errors).length > 0 && !state.submitting) {
      // Show error toast if there are submission errors
      toast.error('Failed to send message. Please try again.', {
        duration: 4000,
        position: 'top-center',
        style: {
          background: '#EF4444',
          color: '#fff',
          padding: '16px',
          borderRadius: '8px',
          fontSize: '14px',
          fontWeight: '500'
        },
        iconTheme: {
          primary: '#fff',
          secondary: '#EF4444',
        },
      });
    }
  }, [state.errors, state.submitting]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Create FormData from the form element
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Call the Formspree handler with the form data
    handleFormspreeSubmit(formData);
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
                <ValidationError 
                  prefix="Full Name" 
                  field="fullName"
                  errors={state.errors}
                  className="text-red-500 text-sm mt-1"
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
                <ValidationError 
                  prefix="Email" 
                  field="email"
                  errors={state.errors}
                  className="text-red-500 text-sm mt-1"
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
                <ValidationError 
                  prefix="Message" 
                  field="message"
                  errors={state.errors}
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={state.submitting}
                  className={`relative flex items-center flex-nowrap justify-between px-4 py-2 bg-gray-100 rounded-full shadow-sm hover:shadow-md transition-all duration-200 min-w-0 max-w-full overflow-hidden group cursor-pointer hover:scale-105 transform ${state.submitting ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                  {/* Fill animation background - faster and irregular shape */}
                  <div className="absolute inset-0 bg-orange-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-200 ease-out"
                       style={{
                         clipPath: 'polygon(0% 0%, 85% 0%, 100% 35%, 90% 65%, 95% 100%, 0% 100%)',
                         borderRadius: '9999px'
                       }}></div>

                  {/* Content */}
                  <span className="relative z-10 text-sm sm:text-base font-semibold text-black group-hover:text-white transition-all duration-200 truncate group-hover:scale-110 transform origin-left">
                    {state.submitting ? "SENDING..." : "SEND MESSAGE"}
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
      
      {/* Toast Container */}
      <Toaster />
    </section>
  );
}