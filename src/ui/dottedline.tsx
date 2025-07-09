
export default function DottedLine({ className = "" }) {
  return (
   <div
      className={`w-full h-[2px] bg-[length:30px_1px] bg-repeat-x bg-[linear-gradient(to_right,_#d1d5db_20px,_transparent_20px)] ${className}`}
    />
  );
}
