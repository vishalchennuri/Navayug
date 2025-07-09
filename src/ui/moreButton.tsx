import { ArrowRight } from "lucide-react";

const ArrowButton = ({
  label = "CLICK ME",
  onClick = () => {},
  bgColor = "bg-orange-500",
  hoverBgColor = "bg-orange-600",
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow duration-200 group ${className}`}
    >
      <span className="text-black font-medium text-sm tracking-wide">
        {label}
      </span>
      <div
        className={`flex items-center justify-center w-8 h-8 ${bgColor} rounded-full group-hover:${hoverBgColor} transition-colors duration-200`}
      >
        <ArrowRight className="w-4 h-4 text-white" />
      </div>
    </button>
  );
};

export default ArrowButton;
