import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function ConnectButton({ label = "LET'S CONNECT", to = "/" }) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(to)}
      className="relative flex items-center flex-nowrap justify-between px-4 py-2 bg-gray-100 rounded-full shadow-sm hover:shadow-md transition-all duration-200 min-w-0 max-w-full overflow-hidden group cursor-pointer hover:scale-105 transform"
    >
      {/* Fill animation background - faster and irregular shape */}
      <div className="absolute inset-0 bg-orange-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-200 ease-out" 
           style={{
             clipPath: 'polygon(0% 0%, 85% 0%, 100% 35%, 90% 65%, 95% 100%, 0% 100%)',
             borderRadius: '9999px'
           }}></div>
      
      {/* Content */}
      <span className="relative z-10 text-sm sm:text-base font-semibold text-black group-hover:text-white transition-all duration-200 truncate group-hover:scale-110 transform origin-left">
        {label}
      </span>

      <span className="relative z-10 ml-3 flex items-center justify-center w-8 h-8 rounded-full bg-orange-500 group-hover:bg-white text-white group-hover:text-orange-500 shadow-md flex-shrink-0 transition-all duration-200 group-hover:scale-110 transform">
        <ArrowRight className="w-4 h-4 group-hover:transform group-hover:translate-x-0.5 transition-transform duration-200" />
      </span>
    </button>
  );
}