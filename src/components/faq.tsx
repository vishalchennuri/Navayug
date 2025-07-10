import { useState } from "react"
import { Plus } from "lucide-react"
import SectionHeader from "../ui/sectionHeader"
import faqDataRaw from "../data/faqs.json"

interface FAQItem {
  id: string
  question: string
  answer: string
}

const faqData: FAQItem[] = faqDataRaw as FAQItem[]

const FAQItemComponent = ({
  item,
  isOpen,
  onToggle,
}: {
  item: FAQItem
  isOpen: boolean
  onToggle: () => void
}) => {
  return (
    <div
      className="border-b py-6 w-full transition-all duration-300"
      style={{ borderBottomColor: "var(--color-soft-gray)" }}
    >
      <div className="w-full max-w-4xl">
        <button
          onClick={onToggle}
          className="flex items-center w-full text-left hover:text-[var(--color-primary)] transition-colors duration-200"
          aria-expanded={isOpen}
        >
          <div className="flex-shrink-0 mr-4">
            {isOpen ? (
              <div className="w-6 h-1 bg-[var(--color-primary)] transition-all duration-200"></div>
            ) : (
              <Plus className="w-6 h-6 text-[var(--color-primary)] transition-all duration-200" />
            )}
          </div>
          <h3 className="text-xl lg:text-2xl font-display font-text text-[var(--color-dark)] leading-tight">
            {item.question}
          </h3>
        </button>

        {/* Answer with animation */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ml-10 pl-4 border-l-2 border-gray-200 ${
            isOpen ? "max-h-96 opacity-100 mt-6" : "max-h-0 opacity-0 mt-0"
          }`}
        >
          <p className="text-base lg:text-lg font-text text-[var(--color-soft-gray)] leading-relaxed font-medium">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  )
}


export default function Faq() {
  const [openItemId, setOpenItemId] = useState<string | null>("1")

  const toggleItem = (id: string) => {
    // If clicking the currently open item, close it. Otherwise, open the clicked item.
    setOpenItemId(openItemId === id ? null : id)
  }

  return (
    <section className="px-6 md:px-10 lg:px-16 py-20 w-full max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-10">
        <div className="text-left">
          <SectionHeader title="FAQ" />
          <h2 className="text-xl lg:text-3xl font-display font-text text-[var(--color-dark)] mt-2 leading-tight tracking-tight">
            Clarity Before Commitment
          </h2>
          <p className="mt-2 text-base lg:text-xl font-text text-[var(--color-soft-gray)] tracking-tighter leading-tight font-medium">
            Answers To Common Questions About Our Process And Partnerships
          </p>
        </div>
     
      </div>

      <div className="flex flex-col justify-start items-start w-full ">
        {faqData.map((item: FAQItem) => (
          <FAQItemComponent
            key={item.id}
            item={item}
            isOpen={openItemId === item.id}
            onToggle={() => toggleItem(item.id)}
          />
        ))}
      </div>
    </section>
  )
}