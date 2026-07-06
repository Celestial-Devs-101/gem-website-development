function Badge({ children }) {
  return (
    <span
      className="
        inline-flex
        rounded-full
        bg-amber-500/10
        border
        border-amber-500/30
        px-4
        py-2
        text-sm
        font-semibold
        text-amber-400
      "
    >
      {children}
    </span>
  );
}

export default Badge;