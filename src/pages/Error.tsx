import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function ErrorPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => navigate("/"), 5000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-6 py-20">
      <div className="max-w-xl text-center">
        <h1 className="text-[6rem] font-display font-bold text-orange-500 leading-none">404</h1>
        <h2 className="text-2xl md:text-3xl font-display font-semibold text-[var(--color-dark)] mt-4">
          Page Not Found
        </h2>
        <p className="text-base md:text-lg mt-4 text-[var(--color-soft-gray)] font-text">
          Sorry, the page you're looking for doesn't exist. You will be redirected to the homepage shortly.
        </p>

        <button
          onClick={() => navigate("/")}
          className="mt-8 relative flex items-center justify-between px-6 py-3 bg-gray-100 rounded-full shadow-sm hover:shadow-md transition-all duration-200 group cursor-pointer hover:scale-105 transform"
        >
          {/* Animated Background */}
          <div
            className="absolute inset-0 bg-orange-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-200 ease-out"
            style={{
              clipPath: "polygon(0% 0%, 85% 0%, 100% 35%, 90% 65%, 95% 100%, 0% 100%)",
              borderRadius: "9999px",
            }}
          ></div>

          {/* Button Label */}
          <span className="relative z-10 text-sm sm:text-base font-semibold text-black group-hover:text-white transition-all duration-200 group-hover:scale-110 transform origin-left">
            GO TO HOMEPAGE
          </span>

          {/* Icon */}
          <span className="relative z-10 ml-3 flex items-center justify-center w-8 h-8 rounded-full bg-orange-500 group-hover:bg-white text-white group-hover:text-orange-500 shadow-md transition-all duration-200 group-hover:scale-110 transform">
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
          </span>
        </button>
      </div>
    </section>
  );
}
