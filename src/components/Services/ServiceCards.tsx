interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  points: string[];
  image: string;
}

export default function ServiceCard({
  id,
  title,
  description,
  points,
  image,
}: ServiceCardProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch py-10 border-b border-gray-200 last:border-none">
      
      <div className="text-[var(--color-soft-gray)] font-text text-3xl  h-full flex items-start pt-1">
        {id}
      </div>

      {/* Middle: Content */}
      <div className="flex flex-col ">
        <div>
          <h2 className="text-base md:text-2xl  font-text text-[var(--color-dark)] ">
            {title}
          </h2>
          <p className="mt-1.5 text-lg sm:text-md text-[var(--color-soft-gray)] mt-2 mb-6  leading-snug font-text max-w-xl">
            {description}
          </p>
        </div>

<ul className="list-disc pl-5  text-md font-text tracking-tight font-lg leading-relaxed marker:text-[var(--color-primary)] text-[var(--color-soft-gray)]">
  {points.map((point, index) => (
    <li key={index}>{point}</li>
  ))}
</ul>

      </div>

      {/* Right: Image */}
      <div className="flex justify-center md:justify-end items-start h-full">
        <img
          src={image}
          alt={title}
          className="w-full max-w-[250px] h-full object-contain"
        />
      </div>
    </div>
  );
}
