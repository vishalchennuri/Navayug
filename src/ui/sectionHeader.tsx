
const SectionHeader = ({ title = "Section Title", circleColor = "#6e6e6e" }) => {
  return (
    <div className="flex items-center gap-3">
      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: circleColor }} />
      <h2 className="text-xl font-text text-[var(--color-gray)]">
        {title}
      </h2>
    </div>
  );
};

export default SectionHeader;
