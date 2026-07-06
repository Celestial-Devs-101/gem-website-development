function Section({
  children,
  className = "",
  dark = false,
}) {
  return (
    <section
      className={`
        py-28
        ${dark ? "bg-slate-950 text-white" : "bg-white"}
        ${className}
      `}
    >
      {children}
    </section>
  );
}

export default Section;