
export default function VerticalDottedLine({ className = "" }) {
  return (
    <div
      className={`w-[2px] h-full bg-[length:1px_30px] bg-repeat-y bg-[linear-gradient(to_bottom,_#d1d5db_20px,_transparent_20px)] ${className}`}
    />
  )
}
