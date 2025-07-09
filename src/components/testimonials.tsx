

import testimonialsData from "../data/testimonial.json"
import SectionHeader from "../ui/sectionHeader"

interface Testimonial {
  id: string
  name: string
  title: string
  avatar: string
  content: string
}

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className="flex-shrink-0 w-72 sm:w-80 bg-gray-50 p-6 mx-2 hover:bg-gray-100 transition-colors duration-300 rounded-md">
      <div className="flex justify-start mb-4">
        <img
          src={testimonial.avatar || "/placeholder.svg"}
          alt={testimonial.name}
          className="w-16 h-16 rounded-full object-cover border-2 border-gray-200"
        />
      </div>

      <div className="flex justify-start mb-4">
        <svg
          className="w-8 h-8"
          fill="currentColor"
          viewBox="0 0 24 24"
          style={{ color: "var(--color-secondary)" }}
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
        </svg>
      </div>

      <p className="text-sm font-medium leading-relaxed mb-6 text-start font-text text-[var(--color-dark)]">
        {testimonial.content}
      </p>

      <div className="flex items-center gap-3">
        <div className="w-[2px] h-10 bg-[var(--color-primary)]" />
        <div>
          <h4 className="text-base font-display font-semibold text-[var(--color-dark)]">
            {testimonial.name}
          </h4>
          <p className="text-sm font-text text-[var(--color-soft-gray)]">{testimonial.title}</p>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const testimonials: Testimonial[] = testimonialsData.testimonials
  const duplicatedTestimonials = [...testimonials, ...testimonials]

  return (
    <section className="px-6 md:px-10 lg:px-16 py-20 w-full max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-10">
        <div className="flex-1">
          <SectionHeader title="TESTIMONIALS" />
          <h2 className="text-xl lg:text-3xl font-display font-text text-[var(--color-dark)] mt-2 leading-tight tracking-tight">
            Trusted By Brands That Demand Results
          </h2>
          <p className="mt-2 text-base lg:text-xl font-text text-[var(--color-soft-gray)] tracking-tight leading-snug font-medium">
            Don't Just Take Our Word For It—Here's What Our Clients Say
          </p>
        </div>
      </div>

      <div className="relative overflow-x-auto scrollbar-hide">
        <div className="flex animate-scroll-testimonials">
          {duplicatedTestimonials.map((testimonial, index) => (
            <TestimonialCard key={`${testimonial.id}-${index}`} testimonial={testimonial} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll-testimonials {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll-testimonials {
          animation: scroll-testimonials 30s linear infinite;
        }
        .animate-scroll-testimonials:hover {
          animation-play-state: paused;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  )
}
