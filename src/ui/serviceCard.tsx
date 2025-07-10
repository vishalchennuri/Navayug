type ServiceCardProps = {
  id: string;
  title: string;
  description: string;
  image: string;
};

export default function ServiceCard({ id, title, description, image }: ServiceCardProps) {
  return (
    <div className="bg-[#f6f6f6] px-6 pt-6 md:px-8 md:pt-8  hover:shadow-lg transition-all duration-300 group cursor-pointer h-[400px] flex flex-col justify-between items-center text-center">
      
     <div className="text-sm text-[#6E6E73] font-text font-medium  md:mb-2">
        {id}
      </div>
      <div className="flex-1 flex flex-col items-center justify-center text-center px-2">
        <h3 className="text-3xl  lg:text-3xl font-text font-medium text-[var(--color-dark)] leading-snug mb-2">
          {title}
        </h3>
        <p className="text-[var(--color-soft-gray)] font-text text-lg  lg:text-lg leading-snug tracking-tight">
          {description}
        </p>
      </div>

      <div className="w-full flex justify-center">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-[70%] md:w-[65%] lg:w-[60%] object-contain drop-shadow-lg transition-transform duration-300 group-hover:scale-105"
        />
      </div>
    </div>
  );
}
