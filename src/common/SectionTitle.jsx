function SectionTitle({ subtitle, title, description }) {
  return (
    <div className="max-w-3xl">

      <p className="uppercase tracking-[6px] text-amber-500 font-semibold mb-3">
        {subtitle}
      </p>

      <h2 className="text-4xl lg:text-5xl font-black text-slate-900">
        {title}
      </h2>

      <p className="mt-6 text-slate-600 leading-8 text-lg">
        {description}
      </p>

    </div>
  );
}

export default SectionTitle;