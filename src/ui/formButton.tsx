import { ArrowRight } from "lucide-react"

export default function FormButton({
  text = "SEND MESSAGE",
  isSubmitting = false,
}: {
  text?: string
  isSubmitting?: boolean
}) {
  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className="inline-flex items-center px-5 py-2.5 bg-[--color-primary] hover:bg-[--color-secondary] text-white text-sm font-medium rounded-full transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed font-text"
    >
      <span className="mr-2">{isSubmitting ? "SENDING..." : text}</span>
      <ArrowRight className="w-4 h-4" />
    </button>
  )
}
